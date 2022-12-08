import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Servicio, ServicioResponse } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }

  listarServicio(){

    return this.http.get<ServicioResponse[]>(`http://localhost:8888/servicios/listar`);

  }

  crearServicio(servicio: Servicio){

    return new Promise(resolve => {

      this.http.post(`http://localhost:8888/servicios/crear`, servicio)
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
