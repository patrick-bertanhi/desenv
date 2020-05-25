import { ConsultaService } from './../../shared/service/consulta.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import * as actions from './endereco.actions';

@Injectable()
export class EnderecoEffects {
  constructor(private actions$: Actions, private consultaService: ConsultaService) {}

  @Effect()
  listarEndereco$ = this.actions$.pipe(
    ofType<actions.ListarEndereco>(actions.EnderecoActionsTypes.LISTAR_ENDERECO),
    switchMap(action =>
      this.consultaService.getCep(action.payload.cep).pipe(
        map(response => {
          return new actions.ListarEnderecoSucesso({
            endereco: [response]
          });
        }),
        catchError(() => EMPTY)
      )
    )
  );
}
