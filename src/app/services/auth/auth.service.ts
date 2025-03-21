import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router) { }

  login(credentials: any) {
    this.http.post('http://localhost:3000/login', credentials, {
      withCredentials: true
    }).subscribe(res => {
      this.router.navigate(['profile']);
      console.log('logged In successfully', res);
    });
  }

  logout() {
    this.http.get('http://localhost:3000/logout', {
      withCredentials: true,
      responseType: 'text'
    }).subscribe({
      next: (res) => {
        console.log('logged out successfully', res);
        this.router.navigate(['login']);
      },
      error: (err) => {
        console.error('Error during logout:', err);
      },
      complete: () => {
        console.log('Logout request completed');
      }
    });
  }

  isAuthenticated(): boolean {
    return !!this.cookieService.get('token');
  }
}
