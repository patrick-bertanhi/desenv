import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  perfilBtn = {
    home: true,
    historico: true,
    busca: true
  };

  constructor() { }

  ngOnInit() {

  }
}