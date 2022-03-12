import { Component} from '@angular/core';
import {RestServiceService} from '../../rest-service.service';
import {categoria} from '../../categoriamodel';

@Component({
  selector: 'app-mostrar-c',
  templateUrl: './mostrar-c.component.html',
  styleUrls: ['./mostrar-c.component.css'],
  
})





export class MostrarCComponent{
  categorias:categoria[]|undefined;

  constructor(private restservice:RestServiceService) {
    this.restservice.obtenerCategorias().subscribe((data:any)=>{
          this.categorias=data;
    });
   }



  

}
