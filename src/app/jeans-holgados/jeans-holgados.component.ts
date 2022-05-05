import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-jeans-holgados',
  templateUrl: './jeans-holgados.component.html',
  styleUrls: ['./jeans-holgados.component.css']
})
export class JeansHolgadosComponent implements OnInit {

  holgados: any=[];

  constructor(private productosService: ProductosService) {
    this.productosService.getJeansHolgados().subscribe(res=>{
      this.holgados= res;
    });
  }
  ngOnInit(): void {
  }

}
