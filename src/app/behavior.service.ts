import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class BehaviorService {

    private dataSource: BehaviorSubject<string | null> = new BehaviorSubject(null);

    data = this.dataSource.asObservable();

    constructor() { }

    updatedDataSelection(data: any) {
        this.dataSource.next(data);
    }

    obterDados() {
      return this.dataSource;
    }


}
