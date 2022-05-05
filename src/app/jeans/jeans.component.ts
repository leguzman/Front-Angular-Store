import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-jeans',
  templateUrl: './jeans.component.html',
  styleUrls: ['./jeans.component.css']
})
export class JeansComponent implements OnInit {

  apretados: any=[];

  constructor(private productosService: ProductosService) {
    
    this.productosService.getJeansApretados().subscribe(res=>{
      this.apretados= res;
    });
   }

  ngOnInit(): void {
  }

}
