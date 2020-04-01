import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../shared/service/consulta.service';

@Component({
  selector: 'app-validador',
  templateUrl: './validador.component.html',
  styleUrls: ['./validador.component.css']
})
export class ValidadorComponent implements OnInit {

  loading = false;

  perfilBtn = {
    home: true,
    historico: true,
    busca: true,
    gerador: true,
    validador: false
  };

  cpf: string;
  cns: string;
  cnpj: string;


  msgCpf: any;
  msgCns: any;
  msgCnpj: any;

  constructor(
    private consultaService: ConsultaService
  ) { }

  ngOnInit() {
  }


   validarCpf() {
    if (this.cpf) {
      this.validaCpf();
    }
  }

  validarCnpj() {
    if (this.cnpj) {
      this.validaCnpj();
    }
  }

  validarCns() {
    if (this.cns) {
      this.validaCns();
    }
  }

   validaCpf() {
    this.loading = true;
    this.consultaService.validaCpf(this.cpf).subscribe(item => {
      this.validaRetornoApi(item);
    });
  }

   validaCnpj() {
    this.loading = true;
    this.consultaService.validaCnpj(this.cnpj).subscribe(item => {
      this.validaRetornoApi(item);
    });
  }

   validaCns() {
    this.loading = true;
    this.consultaService.validaCns(this.cns).subscribe(item => {
      this.validaRetornoApi(item);
    });
  }

  validaRetornoApi(retorno) {
    if (retorno.status === '0') {
      this.loading = false;
      alert(retorno.data.message);
      return;
    } else {
      this.loading = false;
      alert(retorno.data.message);
      return;
    }
  }

}
