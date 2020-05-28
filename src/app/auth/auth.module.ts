// import { Injectable, NgModule } from '@angular/core';
// import { Observable } from 'rxjs';
// import {
//  HttpEvent,
//  HttpInterceptor,
//  HttpHandler,
//  HttpRequest,
// } from '@angular/common/http';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';

// @Injectable()

// // export class HttpsRequestInterceptor implements HttpInterceptor {
// //  intercept(
// //   req: HttpRequest<any>,
// //   next: HttpHandler,
// //  ): Observable<HttpEvent<any>> {
// //   const dupReq = req.clone({
// //    headers: req.headers.set('key', 'DCtbqRXC8L'),
// //  });
// //   return next.handle(dupReq);
// //  }
// // }

// @NgModule({
// providers: [
//  {
//   provide: HTTP_INTERCEPTORS,
//   useClass: HttpsRequestInterceptor,
//   multi: true,
//  },
// ],
// })
// export class AuthModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { httpInterceptorProviders } from './interceptors';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [httpInterceptorProviders]
})
export class AuthModule {}

