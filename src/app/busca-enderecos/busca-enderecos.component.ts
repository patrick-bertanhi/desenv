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
  enderecosStore = null;

  perfilBtn = {
    home: true,
    historico: true,
    busca: false
  };
  cepInformado: string;
  enderecos: Array<any> = [];
  isDelete = true;
  data;
  constructor(
    private consultaService: ConsultaService,
    private behaviorService: BehaviorService
    ) { }

  ngOnInit() {
    this.buscarEnderecos();
  }
  ngOnDestroy() {
    if (this.behaviorService) {
      this.behaviorSubjectSubscription.unsubscribe();
    }
  }

    buscarEnderecos() {
     this.behaviorSubjectSubscription =  this.behaviorService.data.subscribe(enderecoStore => {
      if (enderecoStore) {
        this.enderecosStore = enderecoStore;
      }
      });
    }



  onFilterCep() {
    if (this.cepInformado !== '' && this.cepInformado !== undefined) {
      this.cepInformado = this.cepInformado.replace(/\D/g, '');

      // Expressão regular para validar o CEP.
      const validacep = /^[0-9]{8}$/;

      // Valida o formato do CEP.
      if (validacep.test(this.cepInformado)) {
        this.consultaService.getCep(this.cepInformado).subscribe(item => {
           if (item && item !== undefined) {
            item = {...item, data: this.getDateNow()};
            this.enderecos.push(item);
            if (this.enderecosStore) {
              const dadosConcat = [...this.enderecos, ...this.enderecosStore];
              this.behaviorService.updatedDataSelection(dadosConcat);
            } else {
              this.behaviorService.updatedDataSelection(this.enderecos);
            }

           } else {
             return alert('CEP invalido');
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
      this.behaviorService.updatedDataSelection(this.enderecos);

    }

    delete(index) {
      this.enderecos.splice(index, 1);
      this.behaviorService.updatedDataSelection(this.enderecos);
    }

    getDateNow() {
      return moment(new Date()).format('DD/MM/YYYY HH:mm:ss');
    }

}
