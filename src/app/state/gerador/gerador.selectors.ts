import { createSelector } from '@ngrx/store';
import { AppState } from '..';

export const selectGerador = (state: AppState) => state.gerador;

export const selectCpf = createSelector(
    selectGerador,
    state => state.cpf
);

export const selectCnpj = createSelector(
  selectGerador,
  state => state.cnpj
);

export const selectCns = createSelector(
  selectGerador,
  state => state.cns
);
