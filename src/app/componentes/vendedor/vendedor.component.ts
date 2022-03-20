import { Component, OnInit } from '@angular/core';
import { Guis } from 'src/app/guiso';
import { RestServiceService } from 'src/app/rest-service.service';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css']
})
export class VendedorComponent implements OnInit {

  guisos:Guis[]|undefined;
  guisos1:Guis={
    "id_guiso":'',
    "guiso":'',
    "disponible":''
  }
  constructor(private restservice:RestServiceService) {
    this.restservice.obtenerGuiso().subscribe((data:any)=>{
     this.guisos=data
    })
   }

  ngOnInit(): void {
  }
  modificarGuiso(){
    console.log(this.guisos)
    this.restservice.modificarGuiso(this.guisos1.disponible).subscribe((modi:any)=>{
      this.guisos1=modi
    })
  }

}
