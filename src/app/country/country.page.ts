import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonListHeader, IonItem, IonLabel } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.page.html',
  styleUrls: ['./country.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonListHeader, IonList, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CountryPage implements OnInit {
  factCountry: any = {};
  
  constructor(private router:ActivatedRoute) { }

  // get json data from facts-europer.page.ts
  ngOnInit() {
    const countryParam = this.router.snapshot.paramMap.get('item');
    if (countryParam) {
      this.factCountry = JSON.parse(countryParam);
    } else {
      console.error('No country data received');
    }
  }
}
