import { Token } from '@angular/compiler';
import { prepareSyntheticListenerFunctionName } from '@angular/compiler/src/render3/util';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RestServiceService} from 'src/app/rest-service.service'


@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {


  constructor(private authService:RestServiceService,private router:Router){}


  redirect(flags:boolean):any{
    if (!flags) {
      this.router.navigate(['/login'])

    }
 }
 canActivate(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot):  boolean {
   if(localStorage.getItem('token')){
     return true
   }
   else{
     this.router.navigate(['login'])
     return false
   }
  }



 }


