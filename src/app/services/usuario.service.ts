import { Injectable } from '@angular/core';
import { Cliente, JwtModel, LoginUsuario, Funcionario, InfoCliente, ClienteResponse, ActualizarCliente } from '../interfaces/interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

const URL = environment.url;
const cabecera = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
const USERNAME_KEY =  'AuthUserName';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = null;
  rut: string;
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

  actualizarCliente( runCliente: string, cliente: ActualizarCliente){

    return new Promise( resolve => {

      this.http.put(`${ URL }/usuario/actualizar/${ runCliente }`, cliente)
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

  guardarRut(rut: string){

    this.rut=rut;

  }

  obtenerRut(){

    return this.rut;

  }

  buscarInfoCliente(nombreUsuario: string): Observable<InfoCliente>{

    return this.http.get<InfoCliente>(`${ URL }/cliente/buscar-info/${ nombreUsuario }`);

  }

  buscarCliente(nombreUsuario: string): Observable<ClienteResponse>{

    return this.http.get<ClienteResponse>(`${ URL }/cliente/buscar/${ nombreUsuario }`);

  }
}
