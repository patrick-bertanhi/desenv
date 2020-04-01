import { LoginService } from './../service/login.service';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {


  user: string;
  password: string;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  onLoggedin() {
    if (this.emptyError()) {
      this.password = btoa(this.password);
      this.loginService.validacaoLogin(this.user, this.password);
      this.clearInputs();
    }
  }

  clearInputs() {
    this.user = null;
    this.password = null;
  }

  emptyError() {
    if ((!this.user || this.user === '') && (!this.password || this.password === '')) {
      alert('Insira o usuario(a) e a senha');
      return false;
     }

    if (!this.user || this.user === '') {
      alert('Insira o Usuario(a)');
      return false;
    }

    if (!this.password || this.password === '') {
      alert('Insira a senha');
      return false;
    }
    return true;
  }

}
