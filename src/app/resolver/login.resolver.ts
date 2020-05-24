import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { BehaviorService } from '../shared/service/behavior.service';

@Injectable()
export class LoginResolver implements Resolve<boolean> {
  constructor(private router: Router,  private behaviorService: BehaviorService) {}

  resolve(): any {
      if (sessionStorage.getItem('userData')) {
        return true;
      } else {
        return this.router.navigate(['../login']);
      }
  }
}
