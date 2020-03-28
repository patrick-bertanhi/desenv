import { ConsultaService } from './../service/consulta.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorService } from '../behavior.service';

import * as moment from 'moment';

@Component({
  selector: 'app-busca-enderecos',
  templateUrl: './busca-enderecos.component.html',
  styleUrls: ['./busca-enderecos.component.css']
})
export class BuscaEnderecosComponent implements OnInit {

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
    private http: HttpClient,
    private consultaService: ConsultaService,
    private behaviorService: BehaviorService
    ) { }

  ngOnInit() {
  }



async  onFilterCep() {
    if (this.cepInformado !== '' && this.cepInformado !== undefined) {
      this.cepInformado = this.cepInformado.replace(/\D/g, '');

      // Expressão regular para validar o CEP.
      const validacep = /^[0-9]{8}$/;

      // Valida o formato do CEP.
      if (validacep.test(this.cepInformado)) {
       await this.consultaService.getCep(this.cepInformado).subscribe(item => {
           if (item && item !== undefined) {
            item = {...item, data: this.getDateNow()};
            this.enderecos.push(item);
            this.behaviorService.updatedDataSelection(this.enderecos);

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
