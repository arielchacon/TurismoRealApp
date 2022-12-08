import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActualizarReserva, Reserva, ReservaResponse, ReservaServicio, ReservaDepartamentoResponse, ReservaServicioResponse, CheckInResponse, CheckOutResponse, ActualizarCheckIn, ActualizarCheckOut } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(private http: HttpClient) { }

  crearReserva(reserva: Reserva){

    return new Promise(resolve => {

      this.http.post(`http://localhost:8888/reservas/crear`, reserva)
      .subscribe(async resp => {

        if(resp['ok']){
          resolve(true);
        }else{
          resolve(false);
        }
      })

    });

  }

  listarReservaCliente(runCliente: string){

    return this.http.get<ReservaResponse[]>(`http://localhost:8888/reservas/listar-cliente/${ runCliente }`);

  }

  listarReserva(){

    return this.http.get<ReservaResponse[]>(`http://localhost:8888/reservas/listar`);

  }

  crearReservaServicio(reservaServicio: ReservaServicio){

    return new Promise(resolve => {

      this.http.post(`http://localhost:8888/reservas/crear-servicio`, reservaServicio)
      .subscribe(async resp => {

        if(resp['ok']){
          resolve(true);
        }else{
          resolve(false);
        }
      })

    });

  }

  borrarReserva(idReserva: number){

    return new Promise(resolve => {

      this.http.delete(`http://localhost:8888/reservas/borrar/${ idReserva }`)
      .subscribe(async resp => {

        if(resp['ok']){
          resolve(true);
        }else{
          resolve(false);
        }
      })

    });

  }

  actualizarReserva(actualizarReserva: ActualizarReserva){

    return new Promise(resolve => {

      this.http.put(`http://localhost:8888/reservas/actualizar`, actualizarReserva)
      .subscribe(async resp => {

        if(resp['ok']){
          resolve(true);
        }else{
          resolve(false);
        }
      })

    });

  }

  buscarReservaId(idReserva: number){

    return this.http.get<ReservaResponse>(`http://localhost:8888/reservas/buscar-id/${ idReserva }`);

  }

  buscarReservaDepartamento(idReserva: number, idDepartamento: number){

    return this.http.get<ReservaDepartamentoResponse>(`http://localhost:8888/reservas/buscar-reserva-departamento/${ idReserva }/${ idDepartamento }`);

  }

  buscarReservaServicio(idReserva: number, idServicio: number){

    return this.http.get<ReservaServicioResponse>(`http://localhost:8888/reservas/buscar-reserva-servicio/${ idReserva }/${ idServicio }`);

  }

  buscarCheckIn(idReserva: number){

    return this.http.get<CheckInResponse>(`http://localhost:8888/reservas/buscar-check-in/${ idReserva }`);

  }

  buscarCheckOut(idReserva: number){

    return this.http.get<CheckOutResponse>(`http://localhost:8888/reservas/buscar-check-out/${ idReserva }`);

  }

  listarCheckIn(){

    return this.http.get<CheckInResponse[]>(`http://localhost:8888/reservas/listar-check-in`);

  }

  listarCheckOut(){

    return this.http.get<CheckOutResponse[]>(`http://localhost:8888/reservas/listar-check-out`);

  }

  actualizarCheckIn(actualizarCheckIn: ActualizarCheckIn){

    return new Promise(resolve => {

      this.http.put(`http://localhost:8888/reservas/actualizar-checkin`, actualizarCheckIn)
      .subscribe(async resp => {

        if(resp['ok']){
          resolve(true);
        }else{
          resolve(false);
        }
      })

    });

  }

  actualizarCheckOut(actualizarCheckout: ActualizarCheckOut){

    return new Promise(resolve => {

      this.http.put(`http://localhost:8888/reservas/actualizar-checkout`, actualizarCheckout)
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
