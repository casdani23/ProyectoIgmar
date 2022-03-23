import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { interval } from 'rxjs';
import { modeloDulce } from 'src/app/modeloDulce';
import { RestServiceService } from 'src/app/rest-service.service';
import Swal from 'sweetalert';


@Component({
  selector: 'app-dulces',
  templateUrl: './dulces.component.html',
  styleUrls: ['./dulces.component.css']
})
export class DulcesComponent implements OnInit {

  constructor(private dulcesservice:RestServiceService) {
    const contador=interval(3000)
    contador.subscribe(()=>{
      this.dulcesservice.mostrarDulce().subscribe((data:any)=>{
        this.dulces=data
      })
    })


   }
  dulces:modeloDulce[]|undefined
  dulce:modeloDulce={
    "nom_dulce":''
  }

  ngOnInit(): void {
  }

  FormularioRegistro= new FormGroup({
    Nombre_Dulce: new  FormControl(null,[Validators.required])

  })

  showModal(){
    if(this.FormularioRegistro.valid){
      Swal({
        title: "Dulce Registrado",
        icon: "success",
      });
    }
    else{
     Swal({
       title:'Ocurrio un Error al ingresar el Dulce',
       icon:"warning"
     })
    }


  }

  crearDulce(){
    this.dulcesservice.crearDulce(this.dulce).subscribe((data:any)=>{
      this.dulce=data
    })
  }

}
