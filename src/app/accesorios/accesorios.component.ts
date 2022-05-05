import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-accesorios',
  templateUrl: './accesorios.component.html',
  styleUrls: ['./accesorios.component.css']
})
export class AccesoriosComponent implements OnInit {

  ropa: any=[];

  constructor(private productosService: ProductosService) {
    this.productosService.getAccesorios().subscribe(res=>{
      this.ropa= res;
    });
   }

  ngOnInit(): void {
  }

}
