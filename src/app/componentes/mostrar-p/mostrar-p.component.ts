import { Component, OnInit } from '@angular/core';
import { Postproducto } from 'src/app/PostProducto';
import {RestServiceService} from '../../rest-service.service';


@Component({
  selector: 'app-mostrar-p',
  templateUrl: './mostrar-p.component.html',
  styleUrls: ['./mostrar-p.component.css']
})
export class MostrarPComponent  {

  productos:Postproducto[]|undefined;

  constructor(private restservice:RestServiceService) {
    this.restservice.obtenerDatos2().subscribe((data:any)=>{
          this.productos=data;
    });
   }


}
