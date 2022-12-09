import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mantenimiento, ActualizarMantenimiento, MantenimientoResponse } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {

  constructor(private http: HttpClient) { }

  crearMantenimiento(mantenimiento: Mantenimiento){

    return new Promise(resolve => {

      this.http.post(`http://localhost:8888/mantenimientos/crear`, mantenimiento)
      .subscribe(async resp => {

        if(resp['ok']){
          resolve(true);
        }else{
          resolve(false);
        }
      })

    });

  }

  actualizarMantenimiento(mantenimiento: ActualizarMantenimiento){

    return new Promise(resolve => {

      this.http.put(`http://localhost:8888/mantenimientos/actualizar`, mantenimiento)
      .subscribe(async resp => {

        if(resp['ok']){
          resolve(true);
        }else{
          resolve(false);
        }
      })

    });

  }

  eliminarMantenimiento(idMantencion: number){

    return new Promise(resolve => {

      this.http.delete(`http://localhost:8888/mantenimientos/eliminar/${ idMantencion }`)
      .subscribe(async resp => {

        if(resp['ok']){
          resolve(true);
        }else{
          resolve(false);
        }
      })

    });

  }

  buscarMantenimiento(idMantencion: number){

    return new Promise(resolve => {

      this.http.get<MantenimientoResponse>(`http://localhost:8888/mantenimientos/buscar/${ idMantencion }`)
      .subscribe(async resp => {

        if(resp['ok']){
          resolve(true);
        }else{
          resolve(false);
        }
      })

    });

  }

  listarMantenimientos(){

    return new Promise(resolve => {

      this.http.get<MantenimientoResponse[]>(`http://localhost:8888/mantenimientos/listar`)
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
