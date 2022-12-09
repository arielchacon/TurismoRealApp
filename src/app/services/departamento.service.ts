import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Departamento, ActualizarDepartamento, DepartamentoResponse } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  constructor(private http: HttpClient) { }

  guardarDepartamento(departamento: Departamento){

    return new Promise(resolve => {

      this.http.post(`http://localhost:8888/departamento/guardar`, departamento)
      .subscribe(async resp => {

        if(resp['ok']){
          resolve(true);
        }else{
          resolve(false);
        }
      })

    });

  }

  actualizarDepartamento(idDepartamento: number, departamento: ActualizarDepartamento){

    return new Promise(resolve => {

      this.http.put(`http://localhost:8888/departamento/actualizar/${ idDepartamento }`, departamento)
      .subscribe(async resp => {

        if(resp['ok']){
          resolve(true);
        }else{
          resolve(false);
        }
      })

    });

  }

  borrarDepartamento(idDepartamento: number){

    return new Promise(resolve => {

      this.http.delete(`http://localhost:8888/departamento/borrar/${ idDepartamento }`)
      .subscribe(async resp => {

        if(resp['ok']){
          resolve(true);
        }else{
          resolve(false);
        }
      })

    });

  }

  listarDepartamento(idEdificio: number){

    return this.http.get<DepartamentoResponse[]>(`http://localhost:8888/departamento/listar-departamentos/${ idEdificio }`)

  }

}
