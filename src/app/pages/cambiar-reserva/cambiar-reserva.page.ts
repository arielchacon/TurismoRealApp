import { Component, Input, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { DireccionService } from 'src/app/services/direccion.service';
import { EdificioService } from 'src/app/services/edificio.service';
import { ReservaService } from 'src/app/services/reserva.service';
import { ActualizarReserva, Comuna, DepartamentoResponse, EdificioResponse, Provincia, Region, ReservaResponse } from '../../interfaces/interfaces';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cambiar-reserva',
  templateUrl: './cambiar-reserva.page.html',
  styleUrls: ['./cambiar-reserva.page.scss'],
})
export class CambiarReservaPage implements OnInit {

  idReserva: number;
  reserva: ReservaResponse = {

    runCliente:"",
    idReserva: 0,
    cantDepartamento: 1,
    fechaReserva: "1900-01-01",
    monto: 0,
    estado: ''

  }
  actualizar: ActualizarReserva = {

    idReserva:0,
    cantDeptos:0,
    fechaReserva:"1900-01-01",
    monto:0,
    estado:''

  };

  constructor(public reservaService: ReservaService,
    private alertController: AlertController,
    private navCtrl: NavController) { }

  ngOnInit() {

  }

  actualizarReserva(fActualizar: NgForm){

    this.actualizar.idReserva = this.reserva.idReserva;
    this.actualizar.cantDeptos = this.reserva.cantDepartamento;
    this.actualizar.fechaReserva = this.reserva.fechaReserva;
    this.actualizar.monto = this.reserva.monto;
    this.actualizar.estado = this.reserva.estado;

    const valido = this.reservaService.actualizarReserva(this.actualizar);
    
    if( valido ){

      this.navCtrl.navigateRoot('ver-reservas', {animated: true});

    }

  }

  buscarReserva(fBuscar: NgForm){

    this.reservaService.buscarReservaId(this.reserva.idReserva).subscribe(data =>{

      this.reserva = data;

    })

  }

}
