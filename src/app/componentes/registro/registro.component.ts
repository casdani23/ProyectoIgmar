import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert';
import { RestServiceService} from '../../rest-service.service';
import { Router } from '@angular/router';
import { modeloregistro } from 'src/app/modeloregistro';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent  {
  
  login:modeloregistro={
    "email":'',
    "password":'',
    "rol":'',
  }

  resultado!:string;
  FormularioRegistro= new FormGroup({

    Usuario: new FormControl(null,[Validators.required,Validators.email]),
    contra: new FormControl(null,[Validators.required]),
  })

  constructor(private restservice:RestServiceService,private router:Router)
  {
      
  }

  showModal(){
    if(this.FormularioRegistro.valid){
      Swal({
        title: "Buen Trabajo",
        text: "Registrado con Exito!",
        icon: "success",
      });
    }
    else{
     Swal({
       title:'Error',
       icon:"warning"
     })
    }
    
  
  }
  
 
  crearusuario(){
    this.restservice.insertarcliente(this.login).subscribe((data:any)=>{
      this.login=data;
    })
 }

}
