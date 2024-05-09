import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonBackButton, IonButtons, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonSearchbar, IonFooter } from '@ionic/angular/standalone';
import { EuropeGeoGuessingService } from '../services/europe-geo-guessing.service';
import { RouterLinkWithHref } from '@angular/router';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-facts-europe',
  templateUrl: './facts-europe.page.html',
  styleUrls: ['./facts-europe.page.scss'],
  standalone: true,
  imports: [IonFooter, IonSearchbar, IonCardTitle, IonCardHeader, IonCard, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonBackButton, IonCardSubtitle, IonCardContent, RouterLinkWithHref]
})
export class FactsEuropePage implements OnInit {
  europeGeo: any = [];
  filteredCountries: any = [];
  searchPlaceholder: string = "Search European Country";

  constructor(private geoServiec: EuropeGeoGuessingService, private router: Router, private navCtrl: NavController) { }

  // send json data and user to country.page
  openConutry(country: any) {
    this.router.navigate(['/country', { item: JSON.stringify(country) }])
  }

  // get json data from europe-geo-guessing.service
  ngOnInit(): void {
    this.geoServiec.getEuropeGeoData().subscribe({
      next: (data) => {
        this.europeGeo = data.Europe;
        this.filteredCountries = this.europeGeo;
      },
      error: (error) => {
        console.error('Error fetching European geo data:', error);
      }
    });
  }

  // change text for placeholder name on ion-searchbar
  changePlaceholder() {
    this.searchPlaceholder;
  }

  // search Countries from json data
  searchCountries(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    if (searchTerm.trim() !== '') {
      this.filteredCountries = this.europeGeo.filter((country: any) => {
        return country.Name.toLowerCase().includes(searchTerm);
      });
    } else {
      this.filteredCountries = this.europeGeo; // show all countries when search term is empty
    }
  }

  // get borwser web page to wikipedia
  async getBrowser() {
    await Browser.open({ url: 'https://simple.wikipedia.org/wiki/List_of_European_countries' });
  }

}
