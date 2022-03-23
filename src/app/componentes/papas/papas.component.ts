import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { interval } from 'rxjs';
import { modeloPapa } from 'src/app/modeloPapa';
import { RestServiceService } from 'src/app/rest-service.service';
import Swal from 'sweetalert';
@Component({
  selector: 'app-papas',
  templateUrl: './papas.component.html',
  styleUrls: ['./papas.component.css']
})
export class PapasComponent implements OnInit {

  papa:modeloPapa={
    "nom_papa":''
  }
  papas:modeloPapa[]|undefined
  FormularioRegistro= new FormGroup({
    Nombre_Papa: new  FormControl(null,[Validators.required])
  })

  constructor(private papaservice:RestServiceService) {
    const contador=interval(3000)
    contador.subscribe(()=>{
      this.papaservice.mostrarPapa().subscribe((data:any)=>{
        this.papas=data
      })
    })

   }
   showModal(){
    if(this.FormularioRegistro.valid){
      Swal({
        title: "Papa Registrada",
        icon: "success",
      });
    }
    else{
     Swal({
       title:'Ocurrio un Error al ingresar la Papa',
       icon:"warning"
     })
    }


  }
  crearPapa(){
    this.papaservice.crearPapa(this.papa).subscribe((data:any)=>{
      this.papa=data
    })
  }

  ngOnInit(): void {
  }

}
