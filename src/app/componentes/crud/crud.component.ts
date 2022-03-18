import { Component} from '@angular/core';
import {  RestServiceService} from '../../rest-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert';


import {Postproducto } from '../../PostProducto'
import { categoria } from 'src/app/categoriamodel';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {

  FormularioRegistro= new FormGroup({

    Producto: new FormControl(null,[Validators.required]),
    Precio: new FormControl(null,[Validators.required]),
    Cantidad: new FormControl(null,[Validators.required]),
    Categoria: new FormControl(null,[Validators.required]),

  })
  showModal(){
    if(this.FormularioRegistro.valid){
      Swal({
        title: "Producto Registrado",
        icon: "success",
      });
    }
    else{
     Swal({
       title:'Ocurrio un Error al ingresar un Producto',
       icon:"warning"
     })
    }


  }


    categorias:categoria[]|undefined;


    productos:Postproducto={

      "nom_producto":'',
      "precio":'',
      "cantidad":'',
      "categoria":''
    };

  constructor(private restservice:RestServiceService) {

    this.restservice.obtenerCategorias().subscribe((data:any)=>{
      this.categorias=data;
    })
  }

  crear(){
    console.log(this.productos.nom_producto,this.productos.precio,this.productos.cantidad,this.productos.categoria)
    this.restservice.crearProducto(this.productos).subscribe((rest:any) =>{

      this.productos=rest;

    });
  }
  gettoken(){
    return localStorage.getItem('token')
   }

   verificar(){
     const toke=this.gettoken()
     console.log(toke);
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



