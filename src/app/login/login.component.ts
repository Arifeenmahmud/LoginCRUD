// src/app/login/login.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    if (this.email === 'user@example.com' && this.password === 'password') {
      this.authService.login(this.email, this.password).subscribe((loggedIn: boolean) => {
        if (loggedIn) {
          this.router.navigate(['/dashboard']);
        }
      });
    }
  }
}
