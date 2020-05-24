import { LoginService } from '../shared/service/login.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { routerTransition } from '../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from '../state';

import * as fromLogin from '../state/login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit, OnDestroy {
  formLogin: FormGroup;

  private subscription = new Subscription();

  userLogged: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private store$: Store<AppState>
    ) { }

  ngOnInit() {
    this.createLoginForm();
    this.createSubscriptions();

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private createSubscriptions(): void {
    this.subscribeToLogin();
  }

  subscribeToLogin() {
    this.subscription.add(
      this.store$.pipe(select(fromLogin.selectors.selectUserLog)).subscribe(state => {
        this.userLogged = state ? state : false;
      })
    );
  }

  createLoginForm(): void {
    this.formLogin = this.formBuilder.group({
      user: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  onLoggedin() {
    if (this.emptyError()) {
      this.dispatchLogin();
      this.clearInputs();
    }
  }

  clearInputs() {
    this.formLogin.patchValue({
      user: '',
      password: ''
    });
  }

  dispatchLogin() {
    const user = this.formLogin.value;
    this.store$.dispatch(new fromLogin.actions.Login({ username: user.user,
    password: btoa(user.password) }));
  }

  emptyError() {
    const user = this.formLogin.value;
    if ((!user.user || user.user === '') && (!user.password || user.password === '')) {
      alert('Insira o usuario(a) e a senha');
      return false;
     }

    if (!user.user || user.user === '') {
      alert('Insira o Usuario(a)');
      return false;
    }

    if (!user.password || user.password === '') {
      alert('Insira a senha');
      return false;
    }
    return true;
  }

}
