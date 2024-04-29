import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonBackButton, IonButtons, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
import { EuropeGeoGuessingService } from '../services/europe-geo-guessing.service';

@Component({
  selector: 'app-facts-europe',
  templateUrl: './facts-europe.page.html',
  styleUrls: ['./facts-europe.page.scss'],
  standalone: true,
  imports: [IonCardTitle, IonCardHeader, IonCard, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonBackButton, IonCardSubtitle, IonCardContent]
})
export class FactsEuropePage implements OnInit {
  europeGeo:any = [];
  constructor(private geoServiec:EuropeGeoGuessingService) { }

  ngOnInit(): void {
    this.geoServiec.GetEuropeGeoGuessing().subscribe(
      (data)=>{
        this.europeGeo = data.Europe;
      }
    );
}

}
