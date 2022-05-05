import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-ropa',
  templateUrl: './ropa.component.html',
  styleUrls: ['./ropa.component.css']
})
export class RopaComponent implements OnInit {
  ropa: any=[];

  constructor(private productosService: ProductosService) {
    this.productosService.getRopa().subscribe(res=>{
      this.ropa= res;
    });
   }

  ngOnInit(): void {
  }

}
