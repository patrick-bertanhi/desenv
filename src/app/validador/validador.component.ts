import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../service/consulta.service';

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
      if (this.validaRetornoApi(item)) {
        this.loading = false;
        this.msgCpf = item;
      }
    });
  }

   validaCnpj() {
    this.loading = true;
    this.consultaService.validaCnpj(this.cnpj).subscribe(item => {
      if (this.validaRetornoApi(item)) {
        this.loading = false;
        this.msgCnpj = item;
      }
    });
  }

   validaCns() {
    this.loading = true;
    this.consultaService.validaCns(this.cns).subscribe(item => {
      if (this.validaRetornoApi(item)) {
        this.loading = false;
        this.msgCns = item;
      }
    });
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
