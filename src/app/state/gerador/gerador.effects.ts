import { ConsultaService } from './../../shared/service/consulta.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import * as actions from './gerador.actions';

@Injectable()
export class GeradorEffects {
  constructor(private actions$: Actions, private consultaService: ConsultaService) {}

  @Effect()
  gerarCpf$ = this.actions$.pipe(
    ofType<actions.GerarCpf>(actions.GeradorActionsTypes.GERAR_CPF),
    switchMap(action =>
      this.consultaService.getNewCpf().pipe(
        map(response => {
          return new actions.GerarCpfSucesso({
            cpfGerado: response
          });
        }),
        catchError(() => EMPTY)
      )
    )
  );


@Effect()
gerarCnpj$ = this.actions$.pipe(
  ofType<actions.GerarCnpj>(actions.GeradorActionsTypes.GERAR_CNPJ),
  switchMap(action =>
    this.consultaService.getNewCnpj().pipe(
      map(response => {
        return new actions.GerarCnpjSucesso({
          cnpjGerado: response
        });
      }),
      catchError(() => EMPTY)
    )
  )
);

@Effect()
gerarCns$ = this.actions$.pipe(
  ofType<actions.GerarCns>(actions.GeradorActionsTypes.GERAR_CNS),
  switchMap(action =>
    this.consultaService.getNewCns().pipe(
      map(response => {
        return new actions.GerarCnsSucesso({
          cnsGerado: response
        });
      }),
      catchError(() => EMPTY)
    )
  )
);


}
