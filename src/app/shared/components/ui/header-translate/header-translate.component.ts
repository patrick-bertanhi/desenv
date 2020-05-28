import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../../state';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/shared/service/login.service';

import * as fromLogin from '../../../../state/login';

@Component({
  selector: 'app-header-translate',
  templateUrl: './header-translate.component.html',
  styleUrls: ['./header-translate.component.css']
})
export class HeaderTranslateComponent implements OnInit {

  private subscription = new Subscription();
  public user: string;

  constructor(
    private translate: TranslateService,
    private store$: Store<AppState>,
    ) { }

  ngOnInit() {
    this.subscribeToLogin();
  }

  subscribeToLogin() {
    this.subscription.add(
      this.store$.pipe(select(fromLogin.selectors.selectUser)).subscribe(state => {
        if (state === undefined || state === '' || !state) {
          return this.user = 'User';
        }
        this.user = state;
      })
    );
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  onLogout() {
    this.dispatchLogout();
  }

  dispatchLogout() {
    this.store$.dispatch(new fromLogin.actions.Logout());
  }
}
