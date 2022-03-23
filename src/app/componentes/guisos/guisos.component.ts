import { Component, OnInit } from '@angular/core';
import { RestServiceService} from '../../rest-service.service';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { guiso } from 'src/app/modeloGuiso';
import Swal from 'sweetalert';
import { Guis } from 'src/app/guiso';
import { interval } from 'rxjs';
@Component({
  selector: 'app-guisos',
  templateUrl: './guisos.component.html',
  styleUrls: ['./guisos.component.css']
})
export class GuisosComponent implements OnInit {

  guisos:Guis={
    "guiso":''
  }
  sabores:guiso[]|undefined;



  FormularioRegistro= new FormGroup({
    Nombre_Guiso: new FormControl(null,[Validators.required]),
  })

  constructor(private restService:RestServiceService) {
    const contador=interval(3000)
    contador.subscribe(()=>{
      this.restService.obtenerGuiso().subscribe((guis:any)=>{
        this.sabores=guis
      })
    })

  }
   showModal(){
    if(this.FormularioRegistro.valid){
      Swal({
        title: "Guiso Registrado",
        icon: "success",
      });
    }
    else{
     Swal({
       title:'Ocurrio un Error al ingresar el guiso',
       icon:"warning"
     })
    }


  }
  crearGuiso(){
    this.restService.crearGuiso(this.guisos).subscribe((gu:any)=>{
      this.guisos=gu
      this.guisos.guiso=""
    })
  }

  ngOnInit(): void {
  }






}
