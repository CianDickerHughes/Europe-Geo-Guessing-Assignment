import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, 
  IonButton, IonBackButton, IonButtons, IonCard, 
  IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
import { EuropeGeoGuessingService } from '../services/europe-geo-guessing.service';
import { Country } from '../models/europe-data.model';

@Component({
  selector: 'app-facts-europe',
  templateUrl: './facts-europe.page.html',
  styleUrls: ['./facts-europe.page.scss'],
  standalone: true,
  imports: [IonCardTitle, IonCardHeader, IonCard, IonButtons, 
    IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, 
    FormsModule, IonButton, IonBackButton, IonCardSubtitle, 
    IonCardContent]
})
export class FactsEuropePage implements OnInit {
  europeGeo: any[] = [];
  
  constructor(private geoServiec:EuropeGeoGuessingService) { }

  ngOnInit(): void {
    this.geoServiec.getEuropeGeoData().subscribe({
      next: (data) => {
        this.europeGeo = data.Europe;
      },
      error: (error) => {
        console.error('Error fetching European geo data:', error);
      }
    });

}

}
