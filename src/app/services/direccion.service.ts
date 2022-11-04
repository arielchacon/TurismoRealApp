import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comuna, Provincia, Region } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DireccionService {

  constructor(private http: HttpClient) { }

  obtenerRegion(){

    return this.http.get<Region[]>(`http://localhost:8888/direccion/listar-region`);

  }

  obtenerProvincia(idRegion: number){

    return this.http.get<Provincia[]>(`http://localhost:8888/direccion/listar-provincia/`+idRegion);

  }

  obtenerComuna(idProvincia: number){

    return this.http.get<Comuna[]>(`http://localhost:8888/direccion/listar-comuna/`+idProvincia);

  }
}
