import { Component, OnInit } from '@angular/core';
import { guiso } from 'src/app/modeloGuiso';
import { RestServiceService } from 'src/app/rest-service.service';

@Component({
  selector: 'app-mostrar-g',
  templateUrl: './mostrar-g.component.html',
  styleUrls: ['./mostrar-g.component.css']
})
export class MostrarGComponent implements OnInit {
  guisos:guiso[]|undefined;

  constructor(private restService:RestServiceService) {
    this.restService.obtenerGuiso().subscribe((data:any)=>{
      this.guisos=data;
});
   }

  ngOnInit(): void {
  }

}
