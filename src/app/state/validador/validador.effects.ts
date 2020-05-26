import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { ConsultaService } from 'src/app/shared/service/consulta.service';


import * as actions from './validador.actions';

@Injectable()
export class ValidadorEffects {
  constructor(private actions$: Actions, private consultaService: ConsultaService) {}

  @Effect()
  validaCpf$ = this.actions$.pipe(
    ofType<actions.ValidarCpf>(actions.ValidadorActionsTypes.VALIDAR_CPF),
    switchMap(action =>
      this.consultaService.validaCpf(action.payload.cpf).pipe(
        map(response => {
          return new actions.ValidarCpfSucesso({
            cpfValidado: response
          });
        }),
        catchError(() => EMPTY)
      )
    )
  );

  @Effect()
  validaCnpj$ = this.actions$.pipe(
    ofType<actions.ValidarCnpj>(actions.ValidadorActionsTypes.VALIDAR_CNPJ),
    switchMap(action =>
      this.consultaService.validaCnpj(action.payload.cnpj).pipe(
        map(response => {
          return new actions.ValidarCnpjSucesso({
            cnpjValidado: response
          });
        }),
        catchError(() => EMPTY)
      )
    )
  );

  @Effect()
  validaCns$ = this.actions$.pipe(
    ofType<actions.ValidarCns>(actions.ValidadorActionsTypes.VALIDAR_CNS),
    switchMap(action =>
      this.consultaService.validaCns(action.payload.cns).pipe(
        map(response => {
          return new actions.ValidarCnsSucesso({
            cnsValidado: response
          });
        }),
        catchError(() => EMPTY)
      )
    )
  );

  @Effect()
  limparRegistro$ = this.actions$.pipe(
    ofType<actions.LimparRegistros>(actions.ValidadorActionsTypes.LIMPAR_REGISTRO),
    mergeMap(action => {
      return [
        new actions.LimparRegistrosSucesso()];
    })
  );
}
