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

  constructor(
    private consultaService: ConsultaService
  ) { }

  ngOnInit() {
  }

  validar() {

  }

}
