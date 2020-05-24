import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { BehaviorService } from '../behavior.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router,  private behaviorService: BehaviorService) { }

   canActivate() {
    if (sessionStorage.getItem('userData') && sessionStorage.getItem('isLoggedIn')) {
      return true;
    }
    alert('Sessão expirada, faça login novamente');
    this.router.navigate(['login']);
    return false;
  }
}
