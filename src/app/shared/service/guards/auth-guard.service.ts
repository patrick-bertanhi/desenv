import { MatSnackBar } from '@angular/material';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { BehaviorService } from '../behavior.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private snackBar: MatSnackBar) { }

   canActivate() {
    if (sessionStorage.getItem('userData') && sessionStorage.getItem('isLoggedIn')) {
      return true;
    }
    const msg = 'Sessão expirada, faça login novamente';
    const fechar = 'x';
    this.snackBar.open(msg, fechar);
    this.router.navigate(['login']);
    return false;
  }
}
