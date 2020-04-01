import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { BehaviorService } from '../behavior.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router,  private behaviorService: BehaviorService) { }
  private isAuthenticated = false;

  async canActivate() {
    await this.behaviorService.auth.subscribe(aut => {
     this.isAuthenticated = aut;
    });
    if (this.isAuthenticated) {
      return true;
    }
    console.log('Faça o login para acessar o projeto');
    this.router.navigate(['login']);
    return false;
  }
}
