import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorService } from './behavior.service';
import { Observable, of, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user;
  password;

  logins;
  constructor(private route: Router, private behaviorService: BehaviorService) { }

   validacaoLogin(user, password) {
    this.usersService();
    this.user = user.trim().toUpperCase();
    this.password = atob(password).trim().toUpperCase();
    this.logins = this.logins.filter(elem => {
      return elem.password === this.password && elem.user === this.user;
      });
    if (this.logins.length > 0) {
      this.setUser({name: this.logins[0].user, isLogged: true});
      return of(true);
    } else {
      this.loginInvalido();
    }
  }

  setUser(userData): void {
    sessionStorage.setItem('userData', JSON.stringify(userData));
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
    alert('Login ou senha invalido(os)');
  }
}
