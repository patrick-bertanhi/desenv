import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {
  perfilBtn = {
    home: true,
    historico: true,
    busca: true
  };

  constructor() { }

  ngOnInit() {

  }
}
