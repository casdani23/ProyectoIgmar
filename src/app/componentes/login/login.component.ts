import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestServiceService} from '../../rest-service.service';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { modeloregistro } from 'src/app/modeloregistro';
import { Data} from 'src/app/modelodata'
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

 
      login:modeloregistro={
        "email":'',
        "password":'',
        "rol":''
      }

     
  
  FormularioRegistro= new FormGroup({

    Usuario: new FormControl(null,[Validators.required,Validators.email]),
    contra: new FormControl(null,[Validators.required]),
  })

  constructor(private restservice:RestServiceService,private router:Router)
  {

    
  }

 ngOnInit():void{
   this.checkLocalstorage()
 }

 checkLocalstorage(){
   if(localStorage.getItem('Token')){
     this.router.navigate(['/inicio'])
   }
 }
 
  iniciar(){
    this.restservice.iniciar_sesion(this.login).subscribe((data:Data)=>{
      //this.logi
      
      

        localStorage.setItem("token",data.token)
      


    })
      
    this.router.navigate(['/inicio'])
    

  }
  
}
  

