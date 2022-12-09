import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inventario, ActualizarInventario, ObjetoInventario, InventarioObjetoResponse, InventarioResponse } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  constructor(private http: HttpClient) { }

  crearInventario(inventario: Inventario){

    return new Promise(resolve => {

      this.http.post(`http://localhost:8888/inventario/crear`, inventario)
      .subscribe(async resp => {

        if(resp['ok']){
          resolve(true);
        }else{
          resolve(false);
        }
      })

    });

  }

  actualizarInventario(inventario: ActualizarInventario){

    return new Promise(resolve => {

      this.http.put(`http://localhost:8888/inventario/actualizar`, inventario)
      .subscribe(async resp => {

        if(resp['ok']){
          resolve(true);
        }else{
          resolve(false);
        }
      })

    });

  }

  borrarInventario(idInventario: number){

    return new Promise(resolve => {

      this.http.delete(`http://localhost:8888/inventario/eliminar/${ idInventario }`)
      .subscribe(async resp => {

        if(resp['ok']){
          resolve(true);
        }else{
          resolve(false);
        }
      })

    });

  }

  buscarInventario(idInventario: number){

    return new Promise(resolve => {

      this.http.get<InventarioResponse>(`http://localhost:8888/inventario/buscar/${ idInventario }`)
      .subscribe(async resp => {

        if(resp['ok']){
          resolve(true);
        }else{
          resolve(false);
        }
      })

    });

  }

  agregarObjetoInventario(objetoInventario: ObjetoInventario){

    return new Promise(resolve => {

      this.http.post(`http://localhost:8888/inventario/agregar-objeto`,objetoInventario)
      .subscribe(async resp => {

        if(resp['ok']){
          resolve(true);
        }else{
          resolve(false);
        }
      })

    });

  }

  listarObjetoInventario(idInventario: number){

    return new Promise(resolve => {

      this.http.get<InventarioObjetoResponse[]>(`http://localhost:8888/inventario/inventario-objeto/${ idInventario }`)
      .subscribe(async resp => {

        if(resp['ok']){
          resolve(true);
        }else{
          resolve(false);
        }
      })

    });

  }

}

