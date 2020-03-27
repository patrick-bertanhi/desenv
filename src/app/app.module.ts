import { BehaviorService } from './behavior.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ToDosComponent } from './to-dos/to-dos.component';
import { HeaderComponent } from './to-dos/Components/header/header.component';
import { InComponent } from './to-dos/Components/in/in.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './to-dos/Components/list/list.component';
import { DesafioAgularComponent } from './desafio-agular/desafio-agular.component';
import { AdicionarComponent } from './desafio-agular/adicionar/adicionar.component';
import { ListDesafioService } from './desafio-agular/services/desafio.service';
import { MenuComponent } from './desafio-agular/components/menu/menu.component';
import { MenulistaComponent } from './desafio-agular/components/menulista/menulista.component';
import { EnderecosListComponent } from './enderecos-list/enderecos-list.component';
import { BuscaEnderecosComponent } from './busca-enderecos/busca-enderecos.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './components/table/table.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    ToDosComponent,
    HeaderComponent,
    InComponent,
    ListComponent,
    DesafioAgularComponent,
    AdicionarComponent,
    MenuComponent,
    MenulistaComponent,
    EnderecosListComponent,
    BuscaEnderecosComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot()

  ],
  exports: [
    MenuComponent,
    HeaderComponent,
    EnderecosListComponent,
    BuscaEnderecosComponent,
    TableComponent,
    NgxMaskModule
  ],
  providers: [ListDesafioService,
    BehaviorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
