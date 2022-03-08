import { Component, OnInit } from '@angular/core';
import {  RestServiceService} from '../../rest-service.service';
import {Post} from '../../Post'

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  
    posts:Post[]|undefined;
   
  constructor(private restservice:RestServiceService) {
    {
      this.restservice.obtenercategoria().subscribe((rest:any) => {
  
        this.posts=rest;
      }); 
   }

   
   
    
  }

  ngOnInit(): void {
  }


}
