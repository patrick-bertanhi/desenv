
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { MatSnackBar } from '@angular/material';
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
  userLogged: boolean;
  faUser = faUser;

  private subscription = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private store$: Store<AppState>,
    private snackBar: MatSnackBar
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

  private subscribeToLogin(): void {
    this.subscription.add(
      this.store$.pipe(select(fromLogin.selectors.selectUserLoggedIn)).subscribe(state => {
        this.userLogged = state ? state : false;
      })
    );
  }

  private createLoginForm(): void {
    this.formLogin = this.formBuilder.group({
      user: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  onLoggedin(): void {
    if (!this.emptyError())  return;

    this.login();
    this.clearInputs();
  }

  private clearInputs(): void {
    this.formLogin.patchValue({
      user: '',
      password: ''
    });
  }

  private login(): void {
    const user = this.formLogin.value;
    this.store$.dispatch(new fromLogin.actions.Login({ username: user.user, password: btoa(user.password) }));
  }

  private emptyError(): boolean {
    const user = this.formLogin.value;

    if (user.user && user.password) {
      return true;
    }

    if ((!user.user || user.user === '') && (!user.password || user.password === '')) {
      this.snackBar.open('Insira o usuario(a) e a senha');
    }

    if (!user.user || user.user === '') {
      this.snackBar.open('Insira o Usuario(a)');
    }

    if (!user.password || user.password === '') {
      this.snackBar.open('Insira a senha');
    }

    return false;
  }

}
