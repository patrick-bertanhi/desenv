import { EnderecosListComponent } from './enderecos-list/enderecos-list.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginResolver } from '../resolver/login.resolver';

const routes: Routes = [
{ path: '', redirectTo: 'enderecos', pathMatch: 'full' },
  {
    path: 'enderecos',
    component: EnderecosListComponent,
    resolve: { aut: LoginResolver }

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
