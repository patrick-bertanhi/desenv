import { BuscaEnderecosComponent } from './busca-enderecos/busca-enderecos.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './../shared/shared.module';
import { GeradorComponent } from './gerador/gerador.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { EnderecosListComponent } from './enderecos-list/enderecos-list.component';
import { ValidadorComponent } from './validador/validador.component';

@NgModule({
  declarations: [
    BuscaEnderecosComponent,
    EnderecosListComponent,
    ValidadorComponent,
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
