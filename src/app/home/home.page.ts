import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardSubtitle, IonCardTitle, IonCardContent, IonCardHeader, IonButton } from '@ionic/angular/standalone';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonCard, IonHeader, IonToolbar, IonTitle, IonContent, RouterLinkWithHref],
})
export class HomePage {
  constructor() {}
}
