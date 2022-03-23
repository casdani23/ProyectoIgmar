import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { interval, tap, throttleTime } from 'rxjs';
import { comentario } from './Comentario';







@Injectable()
export class RestServiceService{



  constructor(private httpcliente:HttpClient) {


    }



   obtenerDatos2(){
    const token=localStorage.getItem("token")


    const tokenHeader=new HttpHeaders({
      'Authorization':'Bearer '+ token
    })
    return this.httpcliente.get('http://127.0.0.1:3333/consulta1',{headers:tokenHeader})

   }
   crearProducto(objeto:any){
    const token=localStorage.getItem("token")


    const tokenHeader=new HttpHeaders({
      'Authorization':'Bearer '+ token
    })
     return this.httpcliente.post('http://127.0.0.1:3333/crear',objeto,{headers:tokenHeader})
   }


   crearCategoria(objetocategoria:any){
    return this.httpcliente.post('http://127.0.0.1:3333/crearcategoria',objetocategoria)
  }

  obtenerCategorias(){
    return this.httpcliente.get('http://127.0.0.1:3333/consultacategorias')
  }

  insertarcliente(cliente:any){

    return this.httpcliente.post('http://127.0.0.1:3333/register',cliente)
  }

  iniciar_sesion(login:any){
    return this.httpcliente.post('http://127.0.0.1:3333/login',login)
  }
  crearGuiso(objetoGuiso:any){
    const token=localStorage.getItem("token")


    const tokenHeader=new HttpHeaders({
      'Authorization':'Bearer '+ token
    })
    return this.httpcliente.post('http://127.0.0.1:3333/crearguiso',objetoGuiso,{headers:tokenHeader})
  }
  obtenerGuiso(){
    const token=localStorage.getItem("token")


    const tokenHeader=new HttpHeaders({
      'Authorization':'Bearer '+ token
    })
    return  this.httpcliente.get('http://127.0.0.1:3333/obtenerguiso',{headers:tokenHeader})
  }
  modificarGuiso(id:any){
    const token=localStorage.getItem("token")


    const tokenHeader=new HttpHeaders({
      'Authorization':'Bearer '+ token
    })
    return this.httpcliente.put('http://127.0.0.1:3333/modificarguiso',id,{headers:tokenHeader})
  }
  gettoken(){
   return localStorage.getItem('Token')
  }

  verificar(){
    /* const toke=this.gettoken()
    console.log(toke);
    const  h = 'Bearer'+ this.toke
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': h
    }) */
   return this.httpcliente.get<any>('http://127.0.0.1:3333/token')
  }
  crearBebida(bebida:any){
    const token=localStorage.getItem("token")


    const tokenHeader=new HttpHeaders({
      'Authorization':'Bearer '+ token
    })
   return this.httpcliente.post('http://127.0.0.1:3333/crearbebida',bebida,{headers:tokenHeader})
  }
  obtenerBebidas(){
    const token=localStorage.getItem("token")


    const tokenHeader=new HttpHeaders({
      'Authorization':'Bearer '+ token
    })
    return this.httpcliente.get('http://127.0.0.1:3333/obtenerbebida',{headers:tokenHeader})
  }
  traerUsuario(){
    const token=localStorage.getItem("token")


    const tokenHeader=new HttpHeaders({
      'Authorization':'Bearer '+ token
    })


    return this.httpcliente.get('http://127.0.0.1:3333/token',{headers:tokenHeader})
  }
  realizarComentario(from:comentario){
    const token=localStorage.getItem("token")


    const tokenHeader=new HttpHeaders({
      'Authorization':'Bearer '+ token
    })
    return this.httpcliente.post('http://127.0.0.1:3333/insertar',from,{headers:tokenHeader})
  }
  mostrarComentario()
  {
    const token=localStorage.getItem("token")


    const tokenHeader=new HttpHeaders({
      'Authorization':'Bearer '+ token
    })
      return this.httpcliente.get('http://127.0.0.1:3333/mostrar',{headers:tokenHeader})
  }

  crearDulce(obje:any){
    const token=localStorage.getItem("token")


    const tokenHeader=new HttpHeaders({
      'Authorization':'Bearer '+ token
    })
    return this.httpcliente.post('http://127.0.0.1:3333/creardulce',obje,{headers:tokenHeader})
  }
  mostrarDulce(){
    const token=localStorage.getItem("token")


    const tokenHeader=new HttpHeaders({
      'Authorization':'Bearer '+ token
    })
    return this.httpcliente.get('http://127.0.0.1:3333/obtenerdulce',{headers:tokenHeader})
  }
  crearPapa(papa:any){
    const token=localStorage.getItem("token")


    const tokenHeader=new HttpHeaders({
      'Authorization':'Bearer '+ token
    })
    return this.httpcliente.post('http://127.0.0.1:3333/crearpapa',papa,{headers:tokenHeader})
  }
  mostrarPapa(){
    const token=localStorage.getItem("token")


    const tokenHeader=new HttpHeaders({
      'Authorization':'Bearer '+ token
    })
    return this.httpcliente.get('http://127.0.0.1:3333/obtenerpapa',{headers:tokenHeader})
  }







}
