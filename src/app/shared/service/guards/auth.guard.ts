import { MatSnackBar } from '@angular/material';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HttpRequest } from '@angular/common/http';

const isRequestInterceptable = (request: HttpRequest<any>): boolean => {
  console.log(request.url);
  return (request.url !== '');
};

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private snackBar: MatSnackBar) { }

   canActivate(): boolean {
    if (sessionStorage.getItem('userData') && sessionStorage.getItem('isLoggedIn') ) {
      return true;
    }
    console.log(this.router.url);
    const msg = 'Sessão expirada, faça login novamente';
    const fechar = 'x';
    this.snackBar.open(msg, fechar);
    this.router.navigate(['/login']);
    return false;
  }
}
