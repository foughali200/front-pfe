import { Injectable } from '@angular/core';
import {  HttpEvent,HttpHandler,HttpRequest,HttpInterceptor, HTTP_INTERCEPTORS} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class TokenInterceptor implements HttpInterceptor{
  constructor(){}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
      return next.handle(request);}}
      export const TokenInterceptorProvoider ={
        provide:HTTP_INTERCEPTORS,
        useClass:TokenInterceptor,
        multi:true
      }
