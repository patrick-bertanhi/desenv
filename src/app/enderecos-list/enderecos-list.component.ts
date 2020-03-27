import { BehaviorService } from './../behavior.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enderecos-list',
  templateUrl: './enderecos-list.component.html',
  styleUrls: ['./enderecos-list.component.css']
})
export class EnderecosListComponent implements OnInit {


  perfilBtn = {
    home: true,
    historico: false,
    busca: true
  };
  enderecosStore;
  isDelete = false;
  constructor(private behaviorService: BehaviorService) { }

  ngOnInit() {
    this.buscarEnderecos();
  }

   async buscarEnderecos() {
    await this.behaviorService.data.subscribe(enderecoStore => {
      if (enderecoStore) {
      this.enderecosStore = enderecoStore;
      }
      });
  }

}
