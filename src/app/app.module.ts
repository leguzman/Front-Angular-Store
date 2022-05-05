import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JeansComponent } from './jeans/jeans.component';
import { DenimComponent } from './denim/denim.component';
import { RopaComponent } from './ropa/ropa.component';
import { AccesoriosComponent } from './accesorios/accesorios.component';
import { BasicosComponent } from './basicos/basicos.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { RebajasComponent } from './rebajas/rebajas.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JeansHolgadosComponent } from './jeans-holgados/jeans-holgados.component';
@NgModule({
  declarations: [
    AppComponent,
    JeansComponent,
    DenimComponent,
    RopaComponent,
    AccesoriosComponent,
    BasicosComponent,
    NovedadesComponent,
    RebajasComponent,
    JeansHolgadosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
