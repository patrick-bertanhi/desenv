import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { BehaviorService } from '../behavior.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router,  private behaviorService: BehaviorService) { }
  private isAuthenticated = false;

   canActivate() {
    if (sessionStorage.getItem('userData')) {
      return true;
    }
    console.log('Faça o login para acessar o projeto');
    alert('Faça o login para acessar o projeto');
    this.router.navigate(['login']);
    return false;
  }
}
