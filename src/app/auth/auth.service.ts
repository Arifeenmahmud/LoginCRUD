// src/app/auth/auth.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false; // Define isLoggedIn property

  constructor() { }

  login(email: string, password: string): Observable<boolean> {
    if (email === 'user@example.com' && password === 'password') {
      this.isLoggedIn = true; // Set isLoggedIn to true upon successful login
      return of(true);
    } else {
      return of(false);
    }
  }
}
