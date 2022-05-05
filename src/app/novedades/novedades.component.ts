import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.css']
})
export class NovedadesComponent implements OnInit {

  ropa: any=[];

  constructor(private productosService: ProductosService) {
    this.productosService.getNovedades().subscribe(res=>{
      this.ropa= res;
    });
   }

  ngOnInit(): void {
  }

}
