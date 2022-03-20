
import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { RestServiceService } from 'src/app/rest-service.service';
import { usuario } from 'src/app/Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {



  usuarios:usuario[]|undefined;
  constructor(private restservice:RestServiceService,private route:Router) {
     this.restservice.traerUsuario().subscribe((usua:any)=>{
       this.usuarios=usua





     })
   }
   cerrarSesion(){
     localStorage.removeItem("token")
     this.route.navigate(["/login"])
   }

  ngOnInit(): void {
  }

}
