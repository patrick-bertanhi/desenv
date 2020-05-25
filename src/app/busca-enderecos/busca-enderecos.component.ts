import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppState } from '../state';
import { Store, select } from '@ngrx/store';

import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

import * as fromEndereco from '../state/endereco';

@Component({
  selector: 'app-busca-enderecos',
  templateUrl: './busca-enderecos.component.html',
  styleUrls: ['./busca-enderecos.component.css']
})
export class BuscaEnderecosComponent implements OnInit, OnDestroy {

  private subscription = new Subscription();


  formFilter: FormGroup;
  enderecosStore;
  loading = false;
  retornoApi: any;

  perfilBtn = {
    home: true,
    historico: true,
    busca: false,
    gerador: true,
    validador: true
  };
  enderecos;
  delete = true;
  constructor(
    private store$: Store<AppState>,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.createFormFilter();
    this.createSubscrition();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();

  }
// tslint:disable
  createSubscrition() {
    this.subscribeToLogin();
  }

  onFilterCep() {
    this.loading = true;
    if (this.notIsEmpty(this.formFilter.value.cep)) {
      if (this.validaFormatoCep(this.formFilter.value.cep)) {
        this.dispatchLogin();
        }
      } else {
      return alert('preencha o campo com o Cep para que passamos realizar a busca');
      }
  }

  subscribeToLogin() {
    this.subscription.add(
      this.store$.pipe(select(fromEndereco.selectors.selectEndereco)).subscribe(state => {
            this.enderecos = state['endereco'].map( item => {
              return {...item, data: this.getDateNow()};
            });
            this.loading = false;
      })
    );
  }

  dispatchLogin() {
    this.store$.dispatch(new fromEndereco.actions.ListarEndereco({cep: this.formFilter.value.cep}));
  }


  onClear() {
    this.enderecos = [];
    this.formFilter.setValue({cep: ''});

  }

  deleteItem(index) {
      this.enderecos.splice(index, 1);
  }

  getDateNow() {
    return moment(new Date()).format('DD/MM/YYYY HH:mm:ss');
  }

  notIsEmpty(value): boolean {
    if (value !== '' && value !== undefined) {
      return true;
    } else {
      return false;
    }
  }

  validaFormatoCep(value): boolean {
    const validacep = /^[0-9]{8}$/;
    return validacep.test(value);
  }


  validaRetornoApi(erro) {
    if (erro.status === '0') {
      this.loading = false;
      alert(erro.data.message);
      return false;
    }
    this.loading = false;
    return true;
  }

  createFormFilter(): void {
    this.formFilter = this.formBuilder.group({
      cep: ''
    });
  }

}
