import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert';
import {  RestServiceService} from './rest-service.service'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent{
   
  title="Registo"
  posts=[] as any;
  constructor(private restservice:RestServiceService){

  }

  resultado!:string;
  FormularioRegistro= new FormGroup({
    nombre: new FormControl(null, [Validators.required]),
    Apellidop: new FormControl(null, [Validators.required]),
    ApellidoM: new FormControl(null,[Validators.required]),
    Usuario: new FormControl(null,[Validators.required]),
    contra: new FormControl(null,[Validators.required]),
  })






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

evento(){
  this.restservice.obtenerDatos2().subscribe((rest:any) =>{
    this.posts=rest;
  }); 
 
  
   return this.restservice.obtenerDatos2()
}


}

