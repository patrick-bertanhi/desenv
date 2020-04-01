import { ConsultaService } from '../shared/service/consulta.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorService } from '../shared/service/behavior.service';

import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-busca-enderecos',
  templateUrl: './busca-enderecos.component.html',
  styleUrls: ['./busca-enderecos.component.css']
})
export class BuscaEnderecosComponent implements OnInit, OnDestroy {

  behaviorSubjectSubscription: Subscription;
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
  enderecos: Array<any> = [];
  delete = true;
  constructor(
    private consultaService: ConsultaService,
    private behaviorService: BehaviorService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.createFormFilter();
    this.createSubscrition();
  }

  ngOnDestroy() {
    if (this.behaviorService) {
      this.behaviorSubjectSubscription.unsubscribe();
    }
  }

  createSubscrition() {
    this.buscarEnderecos();
  }


  buscarEnderecos() {
    this.behaviorSubjectSubscription =  this.behaviorService.data.subscribe(enderecoStore => {
    if (enderecoStore) {
      this.enderecosStore = enderecoStore;
    } else {
      this.enderecosStore = [];
    }
    });
  }



  onFilterCep() {
    this.loading = true;
    if (this.notIsEmpty(this.formFilter.value.cep)) {

      if (this.validaFormatoCep(this.formFilter.value.cep)) {
        this.consultaService.getCep(this.formFilter.value.cep).subscribe(item => {
           if (this.validaRetornoApi(item)) {
            this.retornoApi = item;
            this.retornoApi.data = {...this.retornoApi.data, data: this.getDateNow()};
            this.enderecosStore.push(this.retornoApi.data);
            this.enderecos.push(this.retornoApi.data);
            this.behaviorService.updatedDataSelection(this.enderecosStore);
           }
          });
        }
      } else {
      return alert('preencha o campo com o Cep para que passamos realizar a busca');
      }
  }


  onClear() {
    this.enderecos = [];
    this.formFilter.setValue({cep: ''});
    this.behaviorService.updatedDataSelection(this.enderecosStore);

  }

  deleteItem(index) {
      this.enderecosStore = this.enderecosStore.filter(item => {
      return item.data !== this.enderecos[index].data;
      });
      this.enderecos.splice(index, 1);
      this.behaviorService.updatedDataSelection(this.enderecosStore);
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
