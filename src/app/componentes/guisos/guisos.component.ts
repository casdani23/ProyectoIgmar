import { Component, OnInit } from '@angular/core';
import { RestServiceService} from '../../rest-service.service';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { guiso } from 'src/app/modeloGuiso';
import Swal from 'sweetalert';
@Component({
  selector: 'app-guisos',
  templateUrl: './guisos.component.html',
  styleUrls: ['./guisos.component.css']
})
export class GuisosComponent implements OnInit {

  sabores:guiso[]|undefined;

  FormularioRegistro= new FormGroup({

    Nombre: new FormControl(null,[Validators.required,Validators.email]),
  })

  constructor(private restService:RestServiceService) {
     this.restService.obtenerGuiso().subscribe((gu:any)=>{
       this.sabores=gu
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

  ngOnInit(): void {
  }

  comida:guiso={

    "id_guiso":'',
    "guiso":''

  };
  insertarGuiso(){
    this.restService.crearGuiso(this.comida).subscribe((guis:any) =>{
      this.comida=guis;

    });
  }


}
