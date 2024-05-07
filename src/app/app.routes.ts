import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'facts-europe',
    loadComponent: () => import('./facts-europe/facts-europe.page').then( m => m.FactsEuropePage)
  },
  {
    path: 'country',
    loadComponent: () => import('./country/country.page').then( m => m.CountryPage)
  },
  {
    path: 'quiz-europe',
    loadComponent: () => import('./quiz-europe/quiz-europe.page').then( m => m.QuizEuropePage)
  },
  {
    path: 'quiz',
    loadComponent: () => import('./quiz/quiz.page').then( m => m.QuizPage)
  },
  {
    path: 'quiz-result',
    loadComponent: () => import('./quiz-result/quiz-result.page').then( m => m.QuizResultPage)
  },
];
