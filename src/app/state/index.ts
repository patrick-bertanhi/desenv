import { ActionReducerMap } from '@ngrx/store';

import * as login from './login';


export interface AppState {
  login: login.reducer.LoginState;
}

export const reducers: ActionReducerMap<AppState> = {
  login: login.reducer.loginReducer
};

export const effects: Array<any> = [
  login.effects
];

export const initialState = {
  login: login.reducer.initialState
};
