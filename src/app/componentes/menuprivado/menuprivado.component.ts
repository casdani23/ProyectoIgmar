import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menuprivado',
  templateUrl: './menuprivado.component.html',
  styleUrls: ['./menuprivado.component.css']
})
export class MenuprivadoComponent implements OnInit {

  constructor(private route:Router) { }

  deshabilitar(){
    const desha= localStorage.getItem("token")
    if(desha){
      return true
    }
    else
    {
      return false
    }
   }
   nomostrar(){
     const des=localStorage.getItem("email")
     if(des){
       return true
     }
     else{
       return false
     }
   }

    cerrarSesion(){
      localStorage.removeItem("token")
      localStorage.removeItem("email")
      this.route.navigate(["login"])
    }

  ngOnInit(): void {
  }
  traerUsuario(){
    return localStorage.getItem("email")

   }

}
