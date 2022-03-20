import { Component, OnInit } from '@angular/core';
import { bebida } from '../../Bebida';
import { RestServiceService } from '../../rest-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent implements OnInit {

  FormularioRegistro= new FormGroup({

    Bebida: new FormControl(null,[Validators.required]),


  })

  showModal(){
    if(this.FormularioRegistro.valid){
      Swal({
        title: "Bebida Registrada",
        icon: "success",
      });
    }
    else{
     Swal({
       title:'Ocurrio un Error al ingresar la Bebida',
       icon:"warning"
     })
    }


  }
  refrescos:bebida[]|undefined;
  refresco:bebida={
    "id_bebida":'',
    "bebida":''
  }

  constructor(private restservice:RestServiceService) {
    this.restservice.obtenerBebidas().subscribe((bebida:any)=>{
      this.refrescos=bebida
    })


  }
  crearBebida(){
    this.restservice.crearBebida(this.refresco).subscribe((beb:any)=>{
      this.refresco=beb
    })
  }


  ngOnInit(): void {
  }

}
