import { Component} from '@angular/core';
import {RestServiceService} from '../../rest-service.service';
import {categoria} from '../../categoriamodel';
import {trigger,state,style,animate,transition,keyframes} from '@angular/animations';

@Component({
  selector: 'app-mostrar-c',
  templateUrl: './mostrar-c.component.html',
  styleUrls: ['./mostrar-c.component.css'],
  animations:[
    trigger("arribaAbajo",[
      state("void",style({
        trasform:"translateY(-100%)",
        opacity:0
      })), 
      transition(":enter",[
        animate(80,style({
          trasform:"translteY(0)",
          opacity:1
        }))
      ])
    ]),
    trigger("AbajoArriba", [
      state("void", style({
        transform: "translateY(+100%)",
        opacity: 0
      })),
      transition(":enter", [
        animate(80, style({
          transform:"translateY(0)",
          opacity:1
        }))
      ])
    ]),
    trigger("IzquierdaDerecha", [
      state("void", style({
        transform: "translateX(-100%)",
        opacity: 0
      })),
      transition(":enter", [
        animate(800, style({
          transform:"translateX(0)",
          opacity:1
        }))
      ])
    ]),
    trigger("DerechaIzquierda", [
      state("void", style({
        transform: "translateX(+100%)",
        opacity: 0
      })),
      transition(":enter", [
        animate(800, style({
          transform:"translateX(0)",
          opacity:1
           }))
         ])
      ]),
 
  ],
})





export class MostrarCComponent{
  categorias:categoria[]|undefined;

  constructor(private restservice:RestServiceService) {
    this.restservice.obtenerCategorias().subscribe((data:any)=>{
          this.categorias=data;
    });
   }



  

}
