import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  public isAuthenticated: boolean = false;

  login(username: string, password: string): boolean {
    if (username && password) {
      // Juste une simulation, NE PAS faire cela en production
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['/users/login']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
