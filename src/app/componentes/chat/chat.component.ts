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

    Mensaje: new FormControl(null,[Validators.required]),


  })

  comentarios:comentario={
    "comentarios":''
  }
  peticiones:comentario={
    "comentarios":''
  }


  constructor(private mongoservice:RestServiceService) {
    const contador=interval(10000)
    this.mongoservice.mostrarComentario().subscribe((com:any)=>{
      this.peticiones=com
      console.log(this.peticiones)
    })
   }
   mandarMensaje(){
     this.mongoservice.realizarComentario(this.comentarios).subscribe((comen:any)=>{
        this.comentarios=comen
        console.log(this.comentarios)
     })
   }

  ngOnInit(): void {

  }

}
