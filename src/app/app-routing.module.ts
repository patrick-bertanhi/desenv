import { NotFoundComponent } from './not-found/not-found.component';
import { LoginResolver } from './resolver/login.resolver';
import { LoginComponent } from './login/login.component';
import { ValidadorComponent } from './validador/validador.component';
import { GeradorComponent } from './gerador/gerador.component';
import { BuscaEnderecosComponent } from './busca-enderecos/busca-enderecos.component';
import { EnderecosListComponent } from './enderecos-list/enderecos-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './shared/service/guards/auth-guard.service';

const routes: Routes = [
{ path: '',
  component: LoginComponent
},
{
  path: 'login',
  component: LoginComponent,
},
{
  path: 'home',
  component: HomeComponent,
  canActivate: [AuthGuardService]
},
{
  path: 'enderecos',
  component: EnderecosListComponent,
  resolve: { aut: LoginResolver }
},
{
  path: 'busca-enderecos',
  component: BuscaEnderecosComponent,
  resolve: { aut: LoginResolver }
},
{
  path: 'gerador',
  component: GeradorComponent,
  resolve: { aut: LoginResolver }
},
{
  path: 'validador',
  component: ValidadorComponent,
  resolve: { aut: LoginResolver }

},
{
  path: 'not-found',
  component: NotFoundComponent
},
{ path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [LoginResolver]
})
export class AppRoutingModule { }
