import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { categoria } from '../../categoriamodel';
import { RestServiceService } from '../../rest-service.service';
import Swal from 'sweetalert';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {

  categorias:categoria={
    "id":'',
    "nom_categoria":''
  }

  constructor(private restservice:RestServiceService) {

   }

   resultado!:string;

   FormularioRegistro = new FormGroup({
    Nombre_Categoria:new FormControl(null,[Validators.required]),

  });

  crearCategoria(){
    console.log(this.categorias.nom_categoria)
    this.restservice.crearCategoria(this.categorias).subscribe((categ:any) =>{

      this.categorias=categ;

    });
  }

  showModal(){
    if(this.FormularioRegistro.valid){
      Swal({
        title: "Categoria Registrada",
        icon: "success",
      });
    }
    else{
     Swal({
       title:'Ocurrio un Error al ingresar una Categoria',
       icon:"warning"
     })
    }
    
  
  }
  


}
