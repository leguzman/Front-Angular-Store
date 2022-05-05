import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-denim',
  templateUrl: './denim.component.html',
  styleUrls: ['./denim.component.css']
})
export class DenimComponent implements OnInit {

  ropa: any=[];

  constructor(private productosService: ProductosService) {
    this.productosService.getDenim().subscribe(res=>{
      this.ropa= res;
    });
   }

  ngOnInit(): void {
  }

}
