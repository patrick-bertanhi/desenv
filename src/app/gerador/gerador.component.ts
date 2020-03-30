import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../service/consulta.service';

@Component({
  selector: 'app-gerador',
  templateUrl: './gerador.component.html',
  styleUrls: ['./gerador.component.css']
})
export class GeradorComponent implements OnInit {

  loading = false;

  disabledCpf = true;
  disabledCnpj = true;
  disabledCns = true;

  inputCpf;
  inputCnpj;
  inputCns;

  perfilBtn = {
    home: true,
    historico: true,
    busca: true,
    gerador: false,
    validador: true
  };

  constructor(
    private consultaService: ConsultaService
  ) { }

  ngOnInit() {
  }

  onCreateCpf() {
    this.loading = true;
    this.consultaService.getNewCpf().subscribe(item => {
      if (item) {
        this.inputCpf = item;
        this.inputCpf = this.inputCpf.data.number_formatted;
        this.loading = false;
      }
    },
    erro => {
      this.validaRetornoApi(erro);
    }
    );

  }

  onCreateCnpj() {
    this.loading = true;
    this.consultaService.getNewCnpj().subscribe(item => {
      if (item) {
        this.inputCnpj = item;
        this.inputCnpj = this.inputCnpj.data.number_formatted;
        this.loading = false;
      }
    },
    erro => {
      this.validaRetornoApi(erro);
    }
    );

  }

  onCreateCns() {
    this.loading = true;
    this.consultaService.getNewCns().subscribe(item => {
      if (item) {
        this.inputCns = item;
        this.inputCns = this.inputCns.data.number_formatted;
        this.loading = false;
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
