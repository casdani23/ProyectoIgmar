import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestServiceService} from '../../rest-service.service';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { modeloregistro } from 'src/app/modeloregistro';
import { Data, Datos} from 'src/app/modelodata'




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
 
  iniciar(){
    this.restservice.iniciar_sesion(this.login).subscribe((data:Data)=>{
      //this.login
      
      localStorage.setItem('Usuario', JSON.stringify({


        
         "Token":data.token,
        
      
      }));
    })
    this.router.navigate(['/inicio'])

  }
}
  

