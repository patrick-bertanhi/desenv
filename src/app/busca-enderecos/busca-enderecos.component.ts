import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { BehaviorService } from '../behavior.service';

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
  firtEndofList;
  data;
  constructor(
    private http: HttpClient,
    private behaviorService: BehaviorService
    ) { }

  ngOnInit() {
  }



  onFilterCep() {
    if (this.cepInformado !== '' && this.cepInformado !== undefined) {
      this.cepInformado = this.cepInformado.replace(/\D/g, '');
      // Expressão regular para validar o CEP.
      const validacep = /^[0-9]{8}$/;

      // Valida o formato do CEP.
      if (validacep.test(this.cepInformado)) {
         this.http.get(`//viacep.com.br/ws/${this.cepInformado}/json`).subscribe(item => {
            if (item && item !== undefined) {
            this.data = moment(new Date()).format('DD/MM/YYYY HH:mm:ss');
            item = {...item, data: this.data};
            this.enderecos.push(item);
            this.firtEndofList = [item];
            this.behaviorService.updatedDataSelection(this.enderecos);
          }

         });
      } else {
        return alert('CEP invalido');
      }

  } else {
   return alert('preencha o campo com o Cep para que passamos realizar a busca');
  }

}
    onClear() {
      this.firtEndofList = [];
      this.behaviorService.updatedDataSelection(this.enderecos);

    }

    delete(index) {
      this.firtEndofList.splice(index, 1);
      this.behaviorService.updatedDataSelection(this.enderecos);
    }

}
