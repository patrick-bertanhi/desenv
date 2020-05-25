import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../state';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

import * as fromGerador from '../state/gerador';


@Component({
  selector: 'app-gerador',
  templateUrl: './gerador.component.html',
  styleUrls: ['./gerador.component.css']
})
export class GeradorComponent implements OnInit, OnDestroy {
// tslint:disable
  private subscription = new Subscription();

  formGerador: FormGroup;

  loading = false;

  perfilBtn = {
    home: true,
    historico: true,
    busca: true,
    gerador: false,
    validador: true
  };

  constructor(
    private formBuilder: FormBuilder,
    private store$: Store<AppState>
  ) { }

  ngOnInit() {
    this.createFormGerador();
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

  createFormGerador(): void {
    this.formGerador = this.formBuilder.group({
      cpf: [{value: null, disabled: true}],
      cnpj: [{value: null, disabled: true}],
      cns: [{value: null, disabled: true}]
    });
  }

  onCreateCpf() {
    this.loading = true;
    this.dispatchCpf();
  }

  onCreateCnpj() {
    this.loading = true;
    this.dispatchCnpj();
  }

  onCreateCns() {
    this.loading = true;
    this.dispatchCns();
  }

  subscribeToCpf() {
    this.subscription.add(
      this.store$.pipe(select(fromGerador.selectors.selectCpf)).subscribe(state => {
        this.formGerador.get('cpf').setValue(state['number_formatted']);
        this.loading = false;
      })
    );
  }

  subscribeToCnpj() {
    this.subscription.add(
      this.store$.pipe(select(fromGerador.selectors.selectCnpj)).subscribe(state => {
        this.formGerador.get('cnpj').setValue(state['number_formatted']);
        this.loading = false;
      })
    );
  }

  subscribeToCns() {
    this.subscription.add(
      this.store$.pipe(select(fromGerador.selectors.selectCns)).subscribe(state => {
        this.formGerador.get('cns').setValue(state['number_formatted']);
        this.loading = false;
      })
    );
  }

  dispatchCpf() {
    this.store$.dispatch(new fromGerador.actions.GerarCpf());
  }

  dispatchCnpj() {
    this.store$.dispatch(new fromGerador.actions.GerarCnpj());
  }

  dispatchCns() {
    this.store$.dispatch(new fromGerador.actions.GerarCns());
  }

}
