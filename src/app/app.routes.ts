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
];
