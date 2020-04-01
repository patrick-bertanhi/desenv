import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../shared/service/consulta.service';

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
      if (this.validaRetornoApi(item)) {
        this.inputCpf = item;
        this.inputCpf = this.inputCpf.data.number_formatted;
        this.loading = false;
      }
    });

  }

  onCreateCnpj() {
    this.loading = true;
    this.consultaService.getNewCnpj().subscribe(item => {
      if (this.validaRetornoApi(item)) {
        this.inputCnpj = item;
        this.inputCnpj = this.inputCnpj.data.number_formatted;
        this.loading = false;
      }
    });

  }

  onCreateCns() {
    this.loading = true;
    this.consultaService.getNewCns().subscribe(item => {
      if (this.validaRetornoApi(item)) {
        this.inputCns = item;
        this.inputCns = this.inputCns.data.number_formatted;
        this.loading = false;
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
