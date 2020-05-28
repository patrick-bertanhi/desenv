import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of, merge, Observable, EMPTY } from 'rxjs';
import { catchError, map, switchMap, delay, tap, mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router';

import * as actions from './login.actions';
import { LoginService } from 'src/app/shared/service/login.service';

@Injectable()
export class LoginEffects {
  constructor(
    private actions$: Actions,
    private loginService: LoginService,
    private route: Router
  ) {}

  @Effect()
  login = this.actions$.pipe(
    ofType<actions.Login>(actions.LoginActionsTypes.LOGIN),
    switchMap(action =>
      this.loginService.validacaoLogin(action.payload.username, action.payload.password).pipe(
        mergeMap(response => {
          if (response) {
            return [
              new actions.LoginSuccess({ user: action.payload.username}),
              new actions.RedirectPage()
            ];
          }
        }),
        catchError(() => EMPTY)
        )
    )
  );

  @Effect()
  logout = this.actions$.pipe(
    ofType<actions.Logout>(actions.LoginActionsTypes.LOGOUT),
    switchMap(() => {
      const userData = this.loginService.getUser();
      if (userData) {this.loginService.clearUser(); }
      return [
        new actions.LogoutSuccess(),
        new actions.RedirectLogout()
      ];
    })
  );



  @Effect({ dispatch: false })
  redirecionarPage = this.actions$.pipe(
    ofType<actions.RedirectPage>(actions.LoginActionsTypes.REDIRECT),
    tap(() => {
      this.route.navigate(['/home']);
    })
  );

  @Effect({ dispatch: false })
  redirecionarLogout = this.actions$.pipe(
    ofType<actions.RedirectLogout>(actions.LoginActionsTypes.REDIRECT_LOGOUT),
    tap(() => {
      this.route.navigate(['/login']);
    })
  );

}
