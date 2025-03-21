import { inject, Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  console.log('authguard calling');
  if (authService.isAuthenticated()) {
    console.log('authguard allowed');
    return true;
  } else {
    console.log('authguard denied');
    router.navigate(['/login']);
    return false;
  }
}
