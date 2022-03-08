import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent  {
  title="Registo"
   
     

  resultado!:string;
  FormularioRegistro= new FormGroup({

    Usuario: new FormControl(null,[Validators.required  ]),
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
  
  onSubmit(){
    if(this.FormularioRegistro.valid){
      console.log(this.FormularioRegistro.value);

    }
    else{
      
    }
  }

}
