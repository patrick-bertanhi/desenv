import { ListDesafio } from './models/desafio.model';
import { ListDesafioService } from './services/desafio.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-desafio-agular',
  templateUrl: './desafio-agular.component.html',
  styleUrls: ['./desafio-agular.component.css']
})
export class DesafioAgularComponent implements OnInit {

  listdesafios: Array<any>;
  inputIdBuscar: any;
  constructor(private listar: ListDesafioService, private router: Router) { }

  ngOnInit() {
  }

  getListDesafio() {
  this.listdesafios = this.listar.getListDesafios(this.inputIdBuscar)
  }

  onClickAdicionar(){
    this.router.navigate(['/adicionar'])
  }
}
