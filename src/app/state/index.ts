
import { ActionReducerMap } from '@ngrx/store';

import * as login from './login';
import * as endereco from './endereco';


export interface AppState {
  login: login.reducer.LoginState;
  endereco: endereco.reducer.EnderecoState;
}

export const reducers: ActionReducerMap<AppState> = {
  login: login.reducer.loginReducer,
  endereco: endereco.reducer.enderecoReducer,
};

export const effects: Array<any> = [
  login.effects,
  endereco.effects
];

export const initialState = {
  login: login.reducer.initialState,
  endereco: endereco.reducer.initialState
};
