import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonCard, IonGrid, IonRow, IonCol, IonCardContent } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.page.html',
  styleUrls: ['./quiz-result.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCol, IonRow, IonGrid, IonCard, IonButtons, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLinkWithHref]
})
export class QuizResultPage implements OnInit {
  correctCountries: any = {};
  userChoiceCountries: any = {};
  gamePlayed: number = 0;
  gameWon: number = 0;
  score: number = 0;

  constructor(private router: ActivatedRoute, private storage: Storage) { }

  // get data from quiz.page.ts
  ngOnInit() {
    const correctParam = this.router.snapshot.paramMap.get('CorrectCountries');
    if (correctParam) {
      this.correctCountries = correctParam.split(',');
      if (!Array.isArray(this.correctCountries)) {
        console.error('Correct countries data is not an array');
      }
    } else {
      console.error('No correct country data received');
    }

    // Retrieve user choice countries
    const userChoiceParam = this.router.snapshot.paramMap.get('UserChoiceCountries');
    if (userChoiceParam) {
      this.userChoiceCountries = userChoiceParam.split(',');
      if (!Array.isArray(this.userChoiceCountries)) {
        console.error('User choice countries data is not an array');
      }
    } else {
      console.error('No user choice country data received');
    }

    this.saveStatus();
  }

  // calculate the number of rows needed
  getRows() {
    const maxRowCount = Math.max(
      Math.ceil(this.correctCountries.length / 2),
      Math.ceil(this.userChoiceCountries.length / 2)
    );
    return Array.from({ length: maxRowCount }, (_, i) => i);
  }

  // Get the countries for the specified row and type
  getColumns(rowIndex: number, type: string) {
    const start = rowIndex * 2;
    let end;
    if (type === 'userChoice') {
      end = Math.min(start + 2, this.userChoiceCountries.length);
      return this.userChoiceCountries.slice(start, end);
    } else if (type === 'correct') {
      end = Math.min(start + 2, this.correctCountries.length);
      return this.correctCountries.slice(start, end);
    }
  }

  isCorrect(country1: string, country2: string) {
    return country1 === country2;
  }

  async ionViewWillEnter() {
    await this.storage.create();
    this.gamePlayed = await this.storage.get('GamePlayed');
    this.gameWon = await this.storage.get('GameWon');
  }

  // save game details
  async saveStatus() {
    if (this.score == 10) {
      this.gameWon++;
    }
    this.gamePlayed++;
    await this.storage.set('GamePlayed', this.gamePlayed)
      .then(
        () => {
        }
      ).catch(
        (error) => {
          console.log(error);
        }
      );

    await this.storage.set('GameWon', this.gameWon)
      .then(
        () => {
        }
      ).catch(
        (error) => {
          console.log(error);
        }
      );
  };

}
