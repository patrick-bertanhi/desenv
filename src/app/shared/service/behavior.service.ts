import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class BehaviorService {

    private dataSource: BehaviorSubject<string | null> = new BehaviorSubject(null);

    private validationSource: BehaviorSubject<boolean | true> = new BehaviorSubject(false);


    data = this.dataSource.asObservable();
    auth = this.validationSource.asObservable();

    constructor() { }

    updatedDataSelection(data: any) {
        this.dataSource.next(data);
    }

    obterDados() {
      return this.dataSource;
    }

    validaLogin(autLogin: any) {
      this.validationSource.next(autLogin);
    }

    obterRetorno() {
      return this.validationSource;
    }

}
