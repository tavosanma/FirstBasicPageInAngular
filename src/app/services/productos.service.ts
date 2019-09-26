import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];

  constructor( private http: HttpClient) {

    this.cargarProducto();
   }

   private cargarProducto() {

      this.http.get('https://firstappangular-76775.firebaseio.com/productos_idx.json')
      .subscribe( (resp: Producto[]) => {

        this.productos = resp;

        setTimeout(() => {
          this.cargando = false;
        }, 1300);
      });
   }
}
