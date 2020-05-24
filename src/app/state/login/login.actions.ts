import { Action } from '@ngrx/store';

export enum LoginActionsTypes {
  LOGIN = '[Login] Login',
  LOGIN_SUCCESS = '[Login] Login sucesso',

  REDIRECT = '[REDIRECT] Redirect Page'

}

export class Login implements Action {
  readonly type = LoginActionsTypes.LOGIN;
  constructor(public payload: { username: string; password: string }) {}
}

export class LoginSuccess implements Action {
  readonly type = LoginActionsTypes.LOGIN_SUCCESS;
  constructor(public payload: any) {}
}

export class RedirectPage implements Action {
  readonly type = LoginActionsTypes.REDIRECT;
  constructor() {}
}


export type LoginActions =
  | Login
  | LoginSuccess
  | RedirectPage;
