import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RestServiceService} from 'src/app/rest-service.service'
import { finalize} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {


  constructor(private authService:RestServiceService,private route:Router){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return false
  

  }
 
 
 }

 
