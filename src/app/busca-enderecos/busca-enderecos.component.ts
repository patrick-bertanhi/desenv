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
  loading = false;

  newCpf;
  newCnpj;
  newCns;
  newCidades;
  newEstados;
  newRegioes;

  perfilBtn = {
    home: true,
    historico: true,
    busca: false,
    gerador: true
  };
  cepInformado: string;
  enderecos: Array<any> = [];
  isDelete = true;
  data;
  dadosConcat;
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
    }
    });
  }



  onFilterCep() {
    this.loading = true;
    if (this.cepInformado !== '' && this.cepInformado !== undefined) {
      this.cepInformado = this.cepInformado.replace(/\D/g, '');

      // Expressão regular para validar o CEP.
      const validacep = /^[0-9]{8}$/;

      // Valida o formato do CEP.
      if (validacep.test(this.cepInformado)) {
        this.consultaService.getCep(this.cepInformado).subscribe(item => {
           if (item && item !== undefined) {
            this.loading = false;
            item = {...item, data: this.getDateNow()};
            if (this.enderecosStore) {
              this.enderecosStore.push(item);
              this.behaviorService.updatedDataSelection(this.enderecosStore);
              if (this.enderecos.length <= 1) { this.enderecos.push(item); }
              return;
            } else {
              this.enderecos.push(item);
              return this.behaviorService.updatedDataSelection(this.enderecos);
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
      this.enderecosStore = this.enderecosStore.filter(item => {
      return item.data !== this.enderecos[index].data;
      });
      this.enderecos.splice(index, 1);
      this.behaviorService.updatedDataSelection(this.enderecosStore);
  }

  getDateNow() {
    return moment(new Date()).format('DD/MM/YYYY HH:mm:ss');
  }

  chamadasApis() {
    this.consultaService.getNewCpf().subscribe(item => {
      if (item) {
        this.newCpf = item;
        console.log(this.newCpf.data.data);
      }
    },
    erro => {
      this.validaRetornoApi(erro);
    }
    );

    this.consultaService.getNewCnpj().subscribe(item => {
      if (item) {
        this.newCnpj = item;
        console.log(this.newCnpj.data);
      }
    },
    erro => {
      this.validaRetornoApi(erro);
    }
    );

    this.consultaService.getNewCns().subscribe(item => {
      if (item) {
        this.newCns = item;
        console.log(this.newCns.data);
      }
    },
    erro => {
      this.validaRetornoApi(erro);
    }
    );

    this.consultaService.listarCidadesBr().subscribe(item => {
      if (item) {
        this.newCidades = item;
        console.log(this.newCidades.data);
      }
    },
    erro => {
      this.validaRetornoApi(erro);
    }
    );

    this.consultaService.listarEstados().subscribe(item => {
      if (item) {
        this.newEstados = item;
        console.log(this.newEstados.data);
      }
    },
    erro => {
      this.validaRetornoApi(erro);
    }
    );

    this.consultaService.listarRegioes().subscribe(item => {
      if (item) {
        this.newRegioes = item;
        console.log(this.newRegioes.data);
      }
    },
    erro => {
      this.validaRetornoApi(erro);
    }
    );
  }

  validaRetornoApi(erro) {
    if (erro.error.status === '0') {
      return console.log(erro.error.data.message);
    }
    return;
  }

}
