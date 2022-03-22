import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { interval, tap, throttleTime } from 'rxjs';
import { comentario } from './Comentario';







@Injectable()
export class RestServiceService{



  constructor(private httpcliente:HttpClient) {


    }



   obtenerDatos2(){
    return this.httpcliente.get('http://127.0.0.1:3333/consulta1')

   }
   crearProducto(objeto:any){
     return this.httpcliente.post('http://127.0.0.1:3333/crear',objeto)
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
    return this.httpcliente.post('http://127.0.0.1:3333/crearguiso',objetoGuiso)
  }
  obtenerGuiso(){
    return  this.httpcliente.get('http://127.0.0.1:3333/obtenerguiso')
  }
  modificarGuiso(id:any){
    return this.httpcliente.put('http://127.0.0.1:3333/modificarguiso',id)
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
   return this.httpcliente.post('http://127.0.0.1:3333/crearbebida',bebida)
  }
  obtenerBebidas(){
    return this.httpcliente.get('http://127.0.0.1:3333/obtenerbebida')
  }
  traerUsuario(){
    const token=localStorage.getItem("token")


    const tokenHeader=new HttpHeaders({
      'Authorization':'Bearer '+ token
    })


    return this.httpcliente.get('http://127.0.0.1:3333/token',{headers:tokenHeader})
  }
  realizarComentario(from:comentario){
    return this.httpcliente.post('http://127.0.0.1:3333/insertar',from)
  }
  mostrarComentario()
  {
      return this.httpcliente.get('http://127.0.0.1:3333/mostrar')
  }







}
