import { Injectable } from '@angular/core';
import { Cliente, JwtModel, LoginUsuario, Funcionario } from '../interfaces/interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

const URL = environment.url;
const cabecera = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = null;
  private usuario: JwtModel = {};

  constructor(private http: HttpClient) { }

  public login(usuario: LoginUsuario): Observable<JwtModel> {

    return this.http.post<JwtModel>(`${ URL }/usuario/login`, usuario, cabecera);

  }

  registroCliente( cliente: Cliente){

    return new Promise( resolve => {

      this.http.post(`${ URL }/usuario/registrar`, cliente)
          .subscribe(async resp => {
            if(resp['ok']){
              resolve(true);
            }else{
              resolve(false);
            }
          })
    });

  }

  registroFuncionario( funcionario: Funcionario){

    return new Promise( resolve => {

      this.http.post(`${ URL }/funcionario/registrar`, funcionario)
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
