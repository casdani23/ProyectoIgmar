import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { tap } from 'rxjs';






@Injectable()
export class RestServiceService {



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
  crear_guiso(objetoGuiso:any){
    return this.httpcliente.post('http://127.0.0.1:3333/crearguiso',objetoGuiso)
  }
  obtenerGuiso(){
    return  this.httpcliente.get('http://127.0.0.1:3333/obtenerguiso')
  }
  modificarGuiso(id:any){
    return this.httpcliente.put('http://127.0.0.1:3333/modificarguiso',id)
  }
  traerusuario(){
    return this.httpcliente.get<any>('http://127.0.0.1:3333/token')
  }
 





}
