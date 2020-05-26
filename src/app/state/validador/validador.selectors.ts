import { createSelector } from '@ngrx/store';
import { AppState } from '..';

export const selectValidador = (state: AppState) => state.validador;

export const selectValidaCpf = createSelector(
    selectValidador,
    state => state.cpf
);

export const selectValidaCnpj = createSelector(
  selectValidador,
  state => state.cnpj
);

export const selectValidaCns = createSelector(
  selectValidador,
  state => state.cns
);
