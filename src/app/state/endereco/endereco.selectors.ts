import { createSelector } from '@ngrx/store';
import { AppState } from '..';

export const selectEndereco = (state: AppState) => state.endereco;

export const selectEnderecoProp = createSelector(
    selectEndereco,
    state => state.endereco
);
