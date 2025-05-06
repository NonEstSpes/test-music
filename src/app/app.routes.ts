import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '0',
    pathMatch: 'full',
  },
  {
    path: ':numPages',
    loadComponent: () => import('./fan-club-tutorial/fan-club-tutorial.component').then(m => m.FanClubTutorialComponent),
  }
];
