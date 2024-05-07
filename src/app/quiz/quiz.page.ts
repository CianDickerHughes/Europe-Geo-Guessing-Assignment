import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButtons, IonBackButton, IonListHeader, IonItem, IonList, IonLabel, IonCardContent, IonRadio, IonButton, IonRadioGroup } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { EuropeGeoGuessingService } from '../services/europe-geo-guessing.service';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
  standalone: true,
  imports: [IonRadioGroup, IonButton, IonRadio, IonCardContent, IonLabel, IonList, IonItem, IonListHeader, IonBackButton, IonButtons, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class QuizPage implements OnInit {
  europeGeo: any = [];
  countryQuiz: any = [];
  countryUsed: any = [];
  countryQuizOptions: any = [];
  correctCountries: any = [];
  userChoiceCountries: any = [];
  correctCountry: any;
  choice: string = "";
  score: number = 0;
  gamesPlayed: number = 0;

  constructor(private geoServiec: EuropeGeoGuessingService, private router: Router) { }

  // get json data from europe-geo-guessing.service
  ngOnInit(): void {
    this.geoServiec.getEuropeGeoData().subscribe({
      next: (data) => {
        this.europeGeo = data.Europe;
        this.getACountry();
        this.getRandomCountryNames();
      },
      error: (error) => {
        console.error('Error fetching European geo data:', error);
      }
    });
  }

  // get a rondom country and check if that country has been used
  getACountry() {
    if (Array.isArray(this.europeGeo) && this.europeGeo.length > 0) {
      const availableCountries = this.europeGeo.filter(country => !this.countryUsed.includes(country));

      if (availableCountries.length > 0) {
        let randomCountry;
        do {
          const randomIndex = Math.floor(Math.random() * availableCountries.length);
          randomCountry = availableCountries[randomIndex];
        } while (this.countryQuiz.includes(randomCountry));

        this.countryQuiz = [randomCountry];
        this.countryUsed.push(randomCountry);
      }
      this.getRandomCountryNames();
    }
  }

  // get rondom countrys to a array for the countryQuizOptions
  getRandomCountryNames() {
    if (Array.isArray(this.europeGeo) && this.europeGeo.length > 0) {
      const availableCountries = this.europeGeo.filter(country => !this.countryUsed.includes(country.Name));

      const correctCountryIndex = availableCountries.findIndex(country => country.Name === this.countryQuiz[0].Name);
      if (correctCountryIndex !== -1) {
        availableCountries.splice(correctCountryIndex, 1);
      }

      const shuffledCountries = this.shuffle(availableCountries.map(country => country.Name));
      this.countryQuizOptions = shuffledCountries.slice(0, 3);
      this.countryQuizOptions.push(this.countryQuiz[0].Name);
      this.correctCountry = this.countryQuiz[0].Name;

      this.shuffle(this.countryQuizOptions);
    } else {
      this.countryQuizOptions = [];
    }
  }

  // shuffle an array (Fisher-Yates shuffle algorithm)
  shuffle(array: any[]): any[] {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  // submit the answer from the ion-radio
  submitQuiz() {
    if (this.choice === this.correctCountry) { // if answer is correct or wrong
      console.log("Correct answer!");
      this.score++;
    } else {
      console.log("Wrong answer!");
    }
    
    this.correctCountries.push(this.correctCountry);
    this.userChoiceCountries.push(this.choice);

    this.gamesPlayed++;
    if (this.gamesPlayed == 10) { // if 10 games played
      console.log("game over");
      console.log(this.score);
      this.router.navigate(['/quiz-result', { CorrectCountries:(this.correctCountries), UserChoiceCountries:(this.userChoiceCountries), Score:(this.score) }])

    }
    else{
      this.getACountry();
      console.log(this.gamesPlayed);
    }
    

  }

}
