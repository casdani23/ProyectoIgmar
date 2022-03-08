import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  constructor(private httpcliente:HttpClient) {

   }

  
   obtenerDatos2(){
    return this.httpcliente.get('http://127.0.0.1:3333/consulta1')

   }

 

   crearProducto(objeto:any){
     return this.httpcliente.post('http://127.0.0.1:3333/crear',objeto)
   }
}
