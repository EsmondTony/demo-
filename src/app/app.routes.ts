import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./components/login/login.component').then((comp) => comp.LoginComponent)
  },
  {
    path: '', loadComponent: () => import('./components/home/home.component').then((comp) => comp.HomeComponent), children: [
      {
        path: 'profile',
        loadComponent: () => import('./components/login/login.component').then((comp) => comp.LoginComponent)
      },
      {
        path: 'feed',
        loadComponent: () => import('./components/login/login.component').then((comp) => comp.LoginComponent)
      }
    ], canActivateChild: [AuthGuard]
  },
];
