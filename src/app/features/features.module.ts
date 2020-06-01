import { BuscaEnderecosComponent } from './busca-enderecos/busca-enderecos.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './../shared/shared.module';
import { GeradorComponent } from './gerador/gerador.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { EnderecosListComponent } from './enderecos-list/enderecos-list.component';

@NgModule({
  declarations: [
    BuscaEnderecosComponent,
    EnderecosListComponent,
    GeradorComponent,
    HomeComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeaturesModule { }
