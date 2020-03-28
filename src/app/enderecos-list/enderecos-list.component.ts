import { BehaviorService } from './../behavior.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-enderecos-list',
  templateUrl: './enderecos-list.component.html',
  styleUrls: ['./enderecos-list.component.css']
})
export class EnderecosListComponent implements OnInit, OnDestroy {

  behaviorSubjectSubscription: Subscription;


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

  ngOnDestroy() {
    if (this.behaviorService) {
      this.behaviorSubjectSubscription.unsubscribe();

    }
  }

   async buscarEnderecos() {
     this.behaviorSubjectSubscription = await this.behaviorService.data.subscribe(enderecoStore => {
      if (enderecoStore) {
      this.enderecosStore = enderecoStore;
      }
      });
  }

}
