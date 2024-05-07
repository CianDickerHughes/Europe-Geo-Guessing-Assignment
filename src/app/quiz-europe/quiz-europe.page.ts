import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonCardContent, IonCard, IonCardTitle } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-quiz-europe',
  templateUrl: './quiz-europe.page.html',
  styleUrls: ['./quiz-europe.page.scss'],
  standalone: true,
  imports: [IonCardTitle, IonCard, IonCardContent, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class QuizEuropePage implements OnInit {
  gamePlayed: number = 0;
  gameWon: number = 0;
  gameLost: number = 0;

  constructor(private router: Router, private storage:Storage) { }

  ngOnInit() {
  }

  startGame() {
    this.router.navigate(['/quiz'])
  }

  async ionViewWillEnter() {
    await this.storage.create();
    this.gamePlayed = await this.storage.get('GamePlayed');
    this.gameWon = await this.storage.get('GameWon');

    this.gameLost = this.gamePlayed - this.gameWon;
  }

}
