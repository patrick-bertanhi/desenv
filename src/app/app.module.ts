import { ConsultaService } from './shared/service/consulta.service';
import { BehaviorService } from './shared/service/behavior.service';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
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
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TableComponent } from './shared/components/ui/table/table.component';
import { NgxMaskModule } from 'ngx-mask';
import { GeradorComponent } from './gerador/gerador.component';
import { ValidadorComponent } from './validador/validador.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './shared/service/login.service';
import { AuthGuardService } from './shared/service/guards/auth-guard.service';
import { StateModule } from './state/state.module';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { HeaderTranslateComponent } from './shared/components/ui/header-translate/header-translate.component';


registerLocaleData(ptBr);

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
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
    LoginComponent,
    HeaderTranslateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot(),
    StateModule,
    MatSliderModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    HttpClientModule,
    MatToolbarModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })

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
