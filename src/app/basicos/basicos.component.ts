import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  ropa: any=[];

  constructor(private productosService: ProductosService) {
    this.productosService.getBasicos().subscribe(res=>{
      this.ropa= res;
    });
   }

  ngOnInit(): void {
  }

}
