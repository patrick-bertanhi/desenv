import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  perfilBtn = {
    home: false,
    historico: true,
    busca: true,
    gerador: true,
    validador: true
  };

  constructor() { }

  ngOnInit() {

  }
}
