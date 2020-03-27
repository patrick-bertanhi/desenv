import { BuscaEnderecosComponent } from './busca-enderecos/busca-enderecos.component';
import { EnderecosListComponent } from './enderecos-list/enderecos-list.component';
import { AdicionarComponent } from './desafio-agular/adicionar/adicionar.component';
import { DesafioAgularComponent } from './desafio-agular/desafio-agular.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDosComponent } from './to-dos/to-dos.component';

const routes: Routes = [
    { path: '',
      component: ToDosComponent
},
{
  path:'home',
  component: ToDosComponent
},
{
    path:'desafio-angular',
    component: DesafioAgularComponent
},
{
    path:'adicionar',
    component: AdicionarComponent
},
{
  path:'enderecos',
  component: EnderecosListComponent
},
{
  path:'busca-enderecos',
  component: BuscaEnderecosComponent
}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
