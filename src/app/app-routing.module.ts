import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/service/guards/auth.guard';

const routes: Routes = [
{ path: '', redirectTo: 'login', pathMatch: 'full' },
{
  path: 'features',
  loadChildren: './features/features.module#FeaturesModule',
  canActivate: [AuthGuard]
},
{
  path: 'login',
  loadChildren: './login/login.module#LoginModule'
},
{
  path: 'not-found',
  loadChildren: './not-found/not-found.module#NotFoundModule',
  canActivate: [AuthGuard]
},
{ path: '**', redirectTo: 'not-found' }
];

@NgModule({
    // imports: [RouterModule.forRoot(routes)],
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule { }
