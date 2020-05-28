import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorService } from './behavior.service';
import { Observable, of, observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user;
  password;

  logins;
  constructor(private route: Router, private snackBar: MatSnackBar) { }

   validacaoLogin(user, password) {
    this.usersService();
    this.user = user.trim().toUpperCase();
    this.password = atob(password).trim().toUpperCase();
    this.logins = this.logins.filter(elem => {
      return elem.password === this.password && elem.user === this.user;
      });
    if (this.logins.length > 0) {
      this.setUser({user: this.logins[0].user}, true);
      return of(true);
    } else {
      this.loginInvalido();
      return of(false);
    }
  }


  usersService() {
    this.logins = [
      {
        user: 'ADMIN',
        password: 'ADMIN'
      },
      {
        user: 'MARLAK',
        password: '12345'
      }
    ];
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
