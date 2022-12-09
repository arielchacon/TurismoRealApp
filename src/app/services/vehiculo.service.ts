import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehiculo, VehiculoResponse } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(private http: HttpClient) { }

  crearVehiculo(vehiculo: Vehiculo){

    return new Promise(resolve => {

      this.http.post(`http://localhost:8888/vehiculo/crear`, vehiculo)
      .subscribe(async resp => {

        if(resp['ok']){
          resolve(true);
        }else{
          resolve(false);
        }
      })

    });

  }

  actualizarVehiculo(vehiculo: VehiculoResponse){

    return new Promise(resolve => {

      this.http.put(`http://localhost:8888/vehiculo/actualizar`, vehiculo)
      .subscribe(async resp => {

        if(resp['ok']){
          resolve(true);
        }else{
          resolve(false);
        }
      })

    });

  }

  buscarVehiculo(patente: string){

    return this.http.get<VehiculoResponse>(`http://localhost:8888/vehiculo/buscar/${ patente }`);

  }

  borrarVehiculo(idVehiculo: number){

    return new Promise(resolve => {

      this.http.delete(`http://localhost:8888/vehiculo/borrar/${ idVehiculo }`)
      .subscribe(async resp => {

        if(resp['ok']){
          resolve(true);
        }else{
          resolve(false);
        }
      })

    });

  }

  listarVehiculos(){

    return this.http.get<VehiculoResponse[]>(`http://localhost:8888/vehiculo/listar`)

  }

}
