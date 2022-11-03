import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  registroCliente( cliente: Cliente){

    return new Promise( resolve => {

      this.http.post(`localhost:8888/cliente/registrar`, cliente)
          .subscribe(resp => {
            resolve(true);
          })
    });

  }
}
