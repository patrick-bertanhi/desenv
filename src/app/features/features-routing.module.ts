import { HomeComponent } from './home/home.component';
import { EnderecosListComponent } from './enderecos-list/enderecos-list.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginResolver } from '../resolver/login.resolver';
import { AuthGuardService } from '../shared/service/guards/auth-guard.service';

const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{
  path: 'home',
  component: HomeComponent,
  canActivate: [AuthGuardService]

},
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
