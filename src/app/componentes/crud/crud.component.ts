import { Component} from '@angular/core';
import {  RestServiceService} from '../../rest-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {Postproducto } from '../../PostProducto'

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {
  
  resultado!:string;
  FormularioRegistro= new FormGroup({

    Producto: new FormControl(null,[Validators.required]),
    Precio: new FormControl(null,[Validators.required]),
    Cantidad: new FormControl(null,[Validators.required]),
    Categoria: new FormControl(null,[Validators.required]),

  })

  
    productos:Postproducto={
     
      "nom_producto":'',
      "precio":'',
      "cantidad":'',
      "categoria":''
    };
   
  constructor(private restservice:RestServiceService) {
    {
     
   }

   

   
   
    
  }

  crear(){
    console.log(this.productos.nom_producto,this.productos.precio,this.productos.cantidad,this.productos.categoria)
    this.restservice.crearProducto(this.productos).subscribe((rest:any) =>{
      
      this.productos=rest;
      
    }); 
   
    
  
  }
  arrayIds:any=[]
  indice = 0
  guardarValor(id:any){
    this.arrayIds[0] = id
  }  
  onSubmit(){
    if(this.FormularioRegistro.valid){
      console.log(this.FormularioRegistro.value);
      console.log("hola")
    }
    else{
      
    }
  }

}



