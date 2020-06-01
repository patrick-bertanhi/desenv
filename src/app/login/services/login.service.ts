import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user;
  password;
  logins = [
    {
      user: 'ADMIN',
      password: 'ADMIN'
    },
    {
      user: 'MARLAK',
      password: '12345'
    }
  ];

  constructor(private route: Router, private snackBar: MatSnackBar) { }

  validacaoLogin(user, password): Observable<boolean> {
    this.user = user.trim().toUpperCase();
    this.password = atob(password).trim().toUpperCase();
    this.user = this.logins.find(account => account.password === this.password && account.user === this.user);

    if (this.user) {
      this.setUser({ user: this.user.user }, true);
      return of(true);
    }

    this.loginInvalido();
    return of(false);
  }

  loginInvalido() {
    const msg = 'Login ou senha invalido(os)';
    const fechar = 'x';
    this.snackBar.open(msg, fechar);
  }

  getUser() {
    const userData: any = sessionStorage.getItem('userData');
    if (userData) {
      const parsed: any = JSON.parse(userData);
      return {
        user: parsed.user
      };
    }
  }

  getUserName(): string {
    const userData = this.getUser();
    if (userData) { return userData.user; }
  }

  setUser(userData, isLogged): void {
    sessionStorage.setItem('userData', JSON.stringify(userData));
    sessionStorage.setItem('isLoggedIn', JSON.stringify(isLogged));
  }

  clearUser(): void {
    sessionStorage.removeItem('userData');
    sessionStorage.removeItem('isLoggedIn');
  }
}
