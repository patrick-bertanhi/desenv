import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorService } from '../behavior.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user;
  password;

  logins;
  constructor(private route: Router, private behaviorService: BehaviorService) { }

  async validacaoLogin(user, password) {
    await this.loginsService();
    this.user = user.trim().toUpperCase();
    this.password = atob(password).trim().toUpperCase();
    this.logins = this.logins.filter(elem => {
      return elem.password === this.password && elem.user === this.user;
      });
    if (this.logins.length > 0) {
      this.behaviorService.validaLogin(true);
      this.route.navigate(['home']);
    } else {
      this.loginInvalido();
      this.behaviorService.validaLogin(false);

    }
  }

  loginsService() {
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
