import { Component } from '@angular/core';
import { RestServiceService} from '../../rest-service.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private restservice:RestServiceService){
          
       } 
       evento(){
        this.restservice.obtenerDatos2().subscribe(restservice =>{
          console.log(restservice)
        }); 
       
        
         return this.restservice.obtenerDatos2();
      }
      

}
