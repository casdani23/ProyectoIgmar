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
    state: RouterStateSnapshot
    ): 
    Observable<boolean |
     UrlTree> | 
     Promise<boolean |
      UrlTree> | 
      boolean | UrlTree {
        if(!this.authService.traerusuario()){
          return this.router.navigate(['/inicio']).then(()=>false);
        }
     
        this.authService.traerusuario().subscribe((data:any)=>{
          return true
        }, error=>{
          return false
        })


  }
  
 
 
 }

 
