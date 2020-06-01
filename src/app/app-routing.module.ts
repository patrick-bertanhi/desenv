import { NotFoundComponent } from './not-found/not-found.component';
import { LoginResolver } from './resolver/login.resolver';
import { ValidadorComponent } from './validador/validador.component';
import { GeradorComponent } from './gerador/gerador.component';
import { BuscaEnderecosComponent } from './busca-enderecos/busca-enderecos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './shared/service/guards/auth-guard.service';

const routes: Routes = [
{ path: '', redirectTo: 'login', pathMatch: 'full' },
{
  path: 'login',
  loadChildren: './login/login.module#LoginModule'
},
{
  path: 'features',
  loadChildren: './features/features.module#FeaturesModule'
},
{
  path: 'home',
  component: HomeComponent,
  canActivate: [AuthGuardService]
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
