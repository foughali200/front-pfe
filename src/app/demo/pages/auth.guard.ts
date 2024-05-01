import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate , GuardResult, MaybeAsync, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable} from 'rxjs';
import { TokenService } from 'src/app/service/token.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  constructor( private router: Router,
    private tokenService :TokenService
  ){}
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable <boolean| UrlTree> | Promise<boolean | UrlTree>| boolean |UrlTree{
      let test = this .tokenService.isLogged()
      console.log(test)
      if(test){
        return true
      }
      return this.router.navigate(['auth'])
}
}
