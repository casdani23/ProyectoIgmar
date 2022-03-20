import { Component } from '@angular/core';
import {  RestServiceService} from '../../rest-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert';
import { usuario } from 'src/app/Usuario';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent  {


  constructor(private restservice:RestServiceService) {




  }
 }
