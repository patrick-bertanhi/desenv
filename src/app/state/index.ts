
import { ActionReducerMap } from '@ngrx/store';

import * as login from './login';
import * as endereco from './endereco';
import * as gerador from './gerador';
import * as validador from './validador';



export interface AppState {
  login: login.reducer.LoginState;
  endereco: endereco.reducer.EnderecoState;
  gerador: gerador.reducer.GeradorState;
  validador: validador.reducer.ValidadorState;

}

export const reducers: ActionReducerMap<AppState> = {
  login: login.reducer.loginReducer,
  endereco: endereco.reducer.enderecoReducer,
  gerador: gerador.reducer.geradorReducer,
  validador: validador.reducer.validadorReducer
};

export const effects: Array<any> = [
  login.effects,
  endereco.effects,
  gerador.effects,
  validador.effects
];

export const initialState = {
  login: login.reducer.initialState,
  endereco: endereco.reducer.initialState,
  gerador: gerador.reducer.initialState,
  validador: validador.reducer.initialState
};
