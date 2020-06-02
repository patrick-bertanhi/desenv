import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class LoginResolver implements Resolve<boolean> {
  constructor(private router: Router,  private snackBar: MatSnackBar) {}

  resolve(): any {
      if (sessionStorage.getItem('userData')) {
        return true;
      } else {
        const msg = 'Sessão expirada, faça login novamente';
        const fechar = 'x';
        this.snackBar.open(msg, fechar);
        return this.router.navigate(['login']);
      }
  }
}
