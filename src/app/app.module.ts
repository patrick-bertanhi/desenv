import { ConsultaService } from './shared/service/consulta.service';
import { BehaviorService } from './shared/service/behavior.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/components/ui/header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnderecosListComponent } from './enderecos-list/enderecos-list.component';
import { BuscaEnderecosComponent } from './busca-enderecos/busca-enderecos.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './shared/components/ui/table/table.component';
import { NgxMaskModule } from 'ngx-mask';
import { GeradorComponent } from './gerador/gerador.component';
import { ValidadorComponent } from './validador/validador.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './shared/service/login.service';
import { AuthGuardService } from './shared/service/guards/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    EnderecosListComponent,
    BuscaEnderecosComponent,
    TableComponent,
    GeradorComponent,
    ValidadorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxMaskModule.forRoot()

  ],
  exports: [
    HeaderComponent,
    EnderecosListComponent,
    BuscaEnderecosComponent,
    TableComponent,
    NgxMaskModule
  ],
  providers: [
  ConsultaService,
  BehaviorService,
  LoginService,
  AuthGuardService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
