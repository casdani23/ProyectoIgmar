import { Component, OnInit } from '@angular/core';
import { comentario } from 'src/app/Comentario';
import { RestServiceService } from 'src/app/rest-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { interval } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  FormularioRegistro= new FormGroup({

    Usuario:new FormControl(),
    Mensaje: new FormControl(null,[Validators.required]),


  })
  UsuarioLogeado=localStorage.getItem("email")

  comentarios:comentario={
    "usuario":this.traerUsuario(),
    "comentarios":''
  }

  peticiones:comentario[]|undefined;



  constructor(private mongoservice:RestServiceService) {

    this.mongoservice.mostrarComentario().subscribe((com:any)=>{
      /* const contador=interval(10000)
      contador.subscribe(()=>{ */
        this.peticiones=com
        console.log(this.peticiones)
        setTimeout(()=>{
          this.ScrollHastaelUltimoElementoObtenido()
        },30)
     /*  }) */

    })
   }
   mandarMensaje(){
     this.mongoservice.realizarComentario(this.comentarios).subscribe((comen:any)=>{
        this.comentarios=comen
        console.log(this.comentarios)
        this.comentarios.comentarios=""


     })

   }
   ScrollHastaelUltimoElementoObtenido(){
     let elements=document.getElementsByClassName('msj')
     let ultimo:any=elements[elements.length-1]
     let toppos=ultimo.offsetTop
     //@ts-ignore
     document.getElementById('contenedordeMensajes')?.scrollTop=toppos
   }

  ngOnInit(): void {

  }
  traerUsuario(){
    return localStorage.getItem('email')
  }

}
