import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) {
  }

  create(Data): Observable<any> {
    return this.http.post<any>(environment.urlBack, Data);


  }
  getRopa(): Observable<any> {
    return this.http.get<any>(environment.urlBack + 'ropa');
  }
  getDenim(): Observable<any> {
    return this.http.get<any>(environment.urlBack + 'denim');
  }
  getJeansHolgados(): Observable<any> {
    return this.http.get<any>(environment.urlBack + 'jeans/holgados');
  }
  getJeansApretados(): Observable<any> {
    return this.http.get<any>(environment.urlBack + 'jeans/apretados');
  }

  getAccesorios(): Observable<any> {
    return this.http.get<any>(environment.urlBack + 'accesorios');
  }
  getBasicos(): Observable<any> {
    return this.http.get<any>(environment.urlBack + 'basic');
  }
  getNovedades(): Observable<any> {
    return this.http.get<any>(environment.urlBack + 'novedades');
  }

}
