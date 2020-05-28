import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler): import ('rxjs').Observable<import ('@angular/common/http').HttpEvent<any>> {
      // const dupReq = req.clone({
      //   headers: req.headers.set('key', 'DCtbqRXC8L'),
      // });
      // return next.handle(dupReq);
      const reqOr = req.clone();
      return next.handle(reqOr);
  }

  constructor() {}
}
