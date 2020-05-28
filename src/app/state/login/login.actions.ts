import { Action } from '@ngrx/store';

export enum LoginActionsTypes {
  LOGIN = '[Login] Login',
  LOGIN_SUCCESS = '[Login] Login sucesso',

  LOGOUT = '[Login] Logout',
  LOGOUT_SUCCESS = '[Login] Logout success',

  REDIRECT = '[REDIRECT] Redirect Page',

  REDIRECT_LOGOUT = '[REDIRECT] Redirect Logout'


}

export class Login implements Action {
  readonly type = LoginActionsTypes.LOGIN;
  constructor(public payload: { username: string; password: string }) {}
}

export class LoginSuccess implements Action {
  readonly type = LoginActionsTypes.LOGIN_SUCCESS;
  constructor(public payload: any) {}
}

export class Logout implements Action {
  readonly type = LoginActionsTypes.LOGOUT;
  constructor() {}
}

export class LogoutSuccess implements Action {
  readonly type = LoginActionsTypes.LOGOUT_SUCCESS;
  constructor() {}
}

export class RedirectPage implements Action {
  readonly type = LoginActionsTypes.REDIRECT;
  constructor() {}
}

export class RedirectLogout implements Action {
  readonly type = LoginActionsTypes.REDIRECT_LOGOUT;
  constructor() {}
}


export type LoginActions =
  | Login
  | LoginSuccess
  | Logout
  | LogoutSuccess
  | RedirectPage
  | RedirectLogout;
