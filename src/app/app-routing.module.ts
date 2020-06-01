import { NotFoundComponent } from './not-found/not-found.component';
import { LoginResolver } from './resolver/login.resolver';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
