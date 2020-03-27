import { ListDesafio } from './../models/desafio.model';
import { ListDesafioService } from './../services/desafio.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  desafioForm: FormGroup = new FormGroup({
    nome: new FormControl(''),
    dtnasc: new FormControl(''),
    sexo: new FormControl(''),

  })
  constructor(private listDesafioService: ListDesafioService) {

   }

  lista = ['Home', 'FAQ', 'Sobre'];


  ngOnInit() {
  }

  onSubmit(desafioForm: any){
    this.listDesafioService.addList(desafioForm.value);
    desafioForm.reset();
  }
}
