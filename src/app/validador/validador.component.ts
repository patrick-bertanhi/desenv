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


  msgCpf;
  msgCns;
  msgCnpj;

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
      if (item) {
        this.loading = false;
        this.msgCpf = item;
        if (this.msgCpf.status === '1') {
          this.exibirMsgValido(this.msgCpf.data.message);
        } else if (this.msgCpf.status === '0') {
          this.exibirMsgInvalido(this.msgCpf.data.message);
        }
      }
    },
    erro => {
      this.validaRetornoApi(erro);
    }
    );
  }

   validaCnpj() {
    this.loading = true;
    this.consultaService.validaCnpj(this.cnpj).subscribe(item => {
      if (item) {
        this.loading = false;
        this.msgCnpj = item;
        if (this.msgCnpj.status === '1') {
          this.exibirMsgValido(this.msgCnpj.data.message);
        } else if (this.msgCnpj.status === '0') {
          this.exibirMsgInvalido(this.msgCnpj.data.message);
        }
      }
    },
    erro => {
      this.validaRetornoApi(erro);
    }
    );
  }

   validaCns() {
    this.loading = true;
    this.consultaService.validaCns(this.cns).subscribe(item => {
      if (item) {
        this.loading = false;
        this.msgCns = item;
        if (this.msgCns.status === '1') {
          this.exibirMsgValido(this.msgCns.data.message);
        } else if (this.msgCns.status === '0') {
          this.exibirMsgInvalido(this.msgCns.data.message);
        }
      }
    },
    erro => {
      this.validaRetornoApi(erro);
    }
    );
  }

  exibirMsgValido(msgRetorno) {
    if (msgRetorno) {
      alert(msgRetorno);
    } else {
      return;
    }
  }

  exibirMsgInvalido(msgRetorno) {
    if (msgRetorno) {
      alert(msgRetorno);
    } else {
      return;
    }
  }

  validaRetornoApi(erro) {
    if (erro.error.status === '0') {
      return console.log(erro.error.data.message);
    }
    return;
  }

}
