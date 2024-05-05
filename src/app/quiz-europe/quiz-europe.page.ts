import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonCardContent, IonCard, IonCardTitle } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-europe',
  templateUrl: './quiz-europe.page.html',
  styleUrls: ['./quiz-europe.page.scss'],
  standalone: true,
  imports: [IonCardTitle, IonCard, IonCardContent, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class QuizEuropePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  startGame() {
    this.router.navigate(['/quiz'])
  }

}
