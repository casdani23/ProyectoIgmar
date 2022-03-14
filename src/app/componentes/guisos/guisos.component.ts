import { Component, OnInit } from '@angular/core';
import { RestServiceService} from '../../rest-service.service';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { guiso } from 'src/app/modeloGuiso';
@Component({
  selector: 'app-guisos',
  templateUrl: './guisos.component.html',
  styleUrls: ['./guisos.component.css']
})
export class GuisosComponent implements OnInit {


  FormularioRegistro= new FormGroup({

    nombre_guiso: new FormControl(null,[Validators.required,Validators.email]),
  })

  constructor(private restService:RestServiceService) {
   
   }

  ngOnInit(): void {
  }

  guisos:guiso={
     
    "id_guiso":'',
    "guiso":''
  
  };
  insertarGuis(){
    this.restService.crear_guiso(this.guisos).subscribe((guis:any) =>{

      this.guisos=guis;

    });
  }
  
}
