import { ConsultaService } from './../service/consulta.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorService } from '../behavior.service';

import * as moment from 'moment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-busca-enderecos',
  templateUrl: './busca-enderecos.component.html',
  styleUrls: ['./busca-enderecos.component.css']
})
export class BuscaEnderecosComponent implements OnInit, OnDestroy {

  behaviorSubjectSubscription: Subscription;
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
  cepInformado: string;
  enderecos: Array<any> = [];
  isDelete = true;
  constructor(
    private consultaService: ConsultaService,
    private behaviorService: BehaviorService
    ) { }

  ngOnInit() {
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
    if (this.notIsEmpty(this.cepInformado)) {
      this.cepInformado = this.cepInformado.replace(/\D/g, '');

      if (this.validaFormatoCep(this.cepInformado)) {
        this.consultaService.getCep(this.cepInformado).subscribe(item => {
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
    this.cepInformado = '';
    this.behaviorService.updatedDataSelection(this.enderecosStore);

  }

  delete(index) {
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

}
