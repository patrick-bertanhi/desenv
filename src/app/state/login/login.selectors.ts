
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const loginSelector = createFeatureSelector<any>('login');

export const selectUser = createSelector(
  loginSelector,
  state => state.user
);

export const selectUserLog = createSelector(
  loginSelector,
  state => state.isLoggedIn
);

