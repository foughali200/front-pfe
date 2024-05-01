import { Injectable } from '@angular/core';
import {  HttpEvent,HttpHandler,HttpRequest,HttpInterceptor, HTTP_INTERCEPTORS} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
@Injectable()
export class TokenInterceptor implements HttpInterceptor{
  constructor(private tokenService :TokenService){}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.tokenService.getToken()
    //si  token a inserer dans header
    if(token !==null){
      let clone = request.clone({
        headers:request.headers
        .set('Authorization',`Bearer ${token}`)
      })
      console.log(clone)
      return next.handle(clone)
    }
      return next.handle(request);}}



  
      
     /* const authToken = localStorage.getItem('token');

      // Clone the request and add the authorization header
      const authReq = request.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`
        }
      });
    
      // Pass the cloned request with the updated header to the next handler
      return next(authReq);*/
      export const TokenInterceptorProvider = {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true
      };