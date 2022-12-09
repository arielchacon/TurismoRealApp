import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Edificio, ActualizarEdificio, EdificioResponse } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class EdificioService {

  constructor(private http: HttpClient) { }

  crearEdificio(edificio: Edificio){

    return new Promise(resolve => {

      this.http.post(`http://localhost:8888/edificio/registrar`, edificio)
      .subscribe(async resp => {

        if(resp['ok']){
          resolve(true);
        }else{
          resolve(false);
        }
      })

    });

  }

  actualizarEdificio(idEdificio: number, edificio: ActualizarEdificio){

    return new Promise(resolve => {

      this.http.put(`http://localhost:8888/edificio/actualizar/${ idEdificio }`, edificio)
      .subscribe(async resp => {

        if(resp['ok']){
          resolve(true);
        }else{
          resolve(false);
        }
      })

    });

  }

  borrarEdificio(idEdificio: number){

    return new Promise(resolve => {

      this.http.delete(`http://localhost:8888/edificio/borrar/${ idEdificio }`)
      .subscribe(async resp => {

        if(resp['ok']){
          resolve(true);
        }else{
          resolve(false);
        }
      })

    });

  }

  listarEdificios(idComuna: number){

    return this.http.get<EdificioResponse[]>(`http://localhost:8888/edificio/listar-edificios/${ idComuna }`);

  }

}
