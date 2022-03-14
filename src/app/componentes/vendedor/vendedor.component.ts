import { Component, OnInit } from '@angular/core';
import { guiso } from 'src/app/guiso';
import { RestServiceService } from 'src/app/rest-service.service';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css']
})
export class VendedorComponent implements OnInit {

  guisos:guiso[]|undefined;
  guisos1:guiso={
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
