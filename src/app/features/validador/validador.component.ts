import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../state';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

import * as fromValidador from '../../state/validador';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-validador',
  templateUrl: './validador.component.html',
  styleUrls: ['./validador.component.css']
})
export class ValidadorComponent implements OnInit, OnDestroy {
  // tslint:disable
  private subscription = new Subscription();

  formValidador: FormGroup;

  loading = false;

  perfilBtn = {
    home: true,
    historico: true,
    busca: true,
    gerador: true,
    validador: false
  };

  constructor(
    private formBuilder: FormBuilder,
    private store$: Store<AppState>,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.createFormValidador();
    this.dispatchLimpandoCampos();
    this.createSubscrition();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  createSubscrition() {
    this.subscribeToCpf();
    this.subscribeToCnpj();
    this.subscribeToCns();
  }

  createFormValidador(): void {
    this.formValidador = this.formBuilder.group({
      cpf: [{value: null, disabled: false}],
      cnpj: [{value: null, disabled: false}],
      cns: [{value: null, disabled: false}]
    });
  }


   validarCpf() {
    if (this.formValidador.get('cpf').value) {
      this.dispatchValidaCpf();
    }
  }

  validarCnpj() {
    if (this.formValidador.get('cnpj').value) {
      this.dispatchValidaCnpj();
    }
  }

  validarCns() {
    if (this.formValidador.get('cns').value) {
      this.dispatchValidaCns();
    }
  }

  subscribeToCpf() {
    this.subscription.add(
      this.store$.pipe(select(fromValidador.selectors.selectValidaCpf)).subscribe(state => {
        this.loading = false;
        if (state && state.message) {
          this.validaRetornoApi(state);
        }
      })
    );
  }

  subscribeToCnpj() {
    this.subscription.add(
      this.store$.pipe(select(fromValidador.selectors.selectValidaCnpj)).subscribe(state => {
        this.loading = false;
        if (state && state.message) {
          this.validaRetornoApi(state);
        }
      })
    );
  }

  subscribeToCns() {
    this.subscription.add(
      this.store$.pipe(select(fromValidador.selectors.selectValidaCns)).subscribe(state => {
        this.loading = false;
        if (state && state.message) {
          this.validaRetornoApi(state);
        }
      })
    );
  }

  dispatchValidaCpf() {
    this.loading = true;
    this.store$.dispatch(new fromValidador.actions.ValidarCpf({cpf: this.formValidador.get('cpf').value}));
  }

  dispatchValidaCnpj() {
    this.loading = true;
    this.store$.dispatch(new fromValidador.actions.ValidarCnpj({cnpj: this.formValidador.get('cnpj').value}));
  }

  dispatchValidaCns() {
    this.loading = true;
    this.store$.dispatch(new fromValidador.actions.ValidarCns({cns: this.formValidador.get('cns').value}));
  }

  dispatchLimpandoCampos() {
    this.store$.dispatch(new fromValidador.actions.LimparRegistros());
  }

  validaRetornoApi(retorno) {
    if (retorno) {
      this.loading = false;
      this.snackBar.open(retorno.message, 'x');
    }
  }

}
