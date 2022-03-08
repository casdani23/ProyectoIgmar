import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Post} from './Post';

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  constructor(private httpcliente:HttpClient) {

   }

  
   obtenerDatos2(){
    return this.httpcliente.get<Post[]>('http://127.0.0.1:3333/consulta1')

   }

   obtenercategoria(){
     return this.httpcliente.get('http://127.0.0.1:3333/consultacategorias')
   }
}
