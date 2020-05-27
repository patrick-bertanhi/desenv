import { BehaviorService } from '../shared/service/behavior.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-enderecos-list',
  templateUrl: './enderecos-list.component.html',
  styleUrls: ['./enderecos-list.component.css']
})
export class EnderecosListComponent implements OnInit, OnDestroy {
  opened = false;
  behaviorSubjectSubscription: Subscription;
  events: string[] = [];

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));


  perfilBtn = {
    home: true,
    historico: false,
    busca: true,
    gerador: true,
    validador: true
  };
  enderecos;
  delete = false;
  constructor(private behaviorService: BehaviorService) { }

  ngOnInit() {
    this.buscarEnderecos();
  }

  ngOnDestroy() {
    if (this.behaviorService) {
      this.behaviorSubjectSubscription.unsubscribe();

    }
  }

  onClickMenu() {
    this.opened = !this.opened;
  }

   async buscarEnderecos() {
     this.behaviorSubjectSubscription = await this.behaviorService.data.subscribe(enderecoStore => {
      if (enderecoStore) {
      this.enderecos = enderecoStore;
      }
      });
  }

}
