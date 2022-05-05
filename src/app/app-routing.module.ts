import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JeansComponent } from './jeans/jeans.component';
import { DenimComponent } from './denim/denim.component';
import { RopaComponent } from './ropa/ropa.component';
import { BasicosComponent } from './basicos/basicos.component';
import { RebajasComponent } from './rebajas/rebajas.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { AccesoriosComponent } from './accesorios/accesorios.component';
import { JeansHolgadosComponent } from './jeans-holgados/jeans-holgados.component';


const routes: Routes = [
  { path: '', component: RebajasComponent },
  { path: 'jeans', component: JeansComponent },
  { path: 'denim', component: DenimComponent },
  { path: 'basicos', component: BasicosComponent },
  { path: 'ropa', component: RopaComponent },
  { path: 'novedades', component: NovedadesComponent },
  { path: 'rebajas', component: RebajasComponent },
  { path: 'accesorios', component: AccesoriosComponent },
  { path: 'holgados', component: JeansHolgadosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
