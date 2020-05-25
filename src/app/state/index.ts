
import { ActionReducerMap } from '@ngrx/store';

import * as login from './login';
import * as endereco from './endereco';
import * as gerador from './gerador';



export interface AppState {
  login: login.reducer.LoginState;
  endereco: endereco.reducer.EnderecoState;
  gerador: gerador.reducer.GeradorState;

}

export const reducers: ActionReducerMap<AppState> = {
  login: login.reducer.loginReducer,
  endereco: endereco.reducer.enderecoReducer,
  gerador: gerador.reducer.geradorReducer
};

export const effects: Array<any> = [
  login.effects,
  endereco.effects,
  gerador.effects
];

export const initialState = {
  login: login.reducer.initialState,
  endereco: endereco.reducer.initialState,
  gerador: gerador.reducer.initialState
};
