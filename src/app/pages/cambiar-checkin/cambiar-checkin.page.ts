import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { CheckInResponse } from 'src/app/interfaces/interfaces';
import { ReservaService } from 'src/app/services/reserva.service';
import { ActualizarCheckIn } from '../../interfaces/interfaces';

@Component({
  selector: 'app-cambiar-checkin',
  templateUrl: './cambiar-checkin.page.html',
  styleUrls: ['./cambiar-checkin.page.scss'],
})
export class CambiarCheckinPage implements OnInit {

  checkIn: CheckInResponse = {
    
    idCheckIn: 0,
    fecha:"1900-01-01",
    abono: 0,
    runFuncionario: "",
    idReserva: 0

  }

  actualizar: ActualizarCheckIn = {

    idCheckin: 0,
    fecha:"1900-01-01",
    abono: 0,
    runFuncionario: "",
    idReserva: 0

  }

  constructor(public reservaService: ReservaService, private navCtrl: NavController) { }

  ngOnInit() {
  }

  buscarCheckIn(fBuscar: NgForm){

    this.reservaService.buscarCheckIn(this.checkIn.idReserva).subscribe(data => {

      this.checkIn = data;

    });

  }

  actualizarCheckIn(fActualizar: NgForm){
    
    this.actualizar.idCheckin = this.checkIn.idCheckIn;
    this.actualizar.fecha = this.checkIn.fecha;
    this.actualizar.abono = this.checkIn.abono;
    this.actualizar.runFuncionario = this.checkIn.runFuncionario;
    this.actualizar.idReserva = this.checkIn.idReserva;

    const valido = this.reservaService.actualizarCheckIn(this.actualizar);

    if(valido){

      this.navCtrl.navigateRoot('ver-checkin', {animated: true});
    }

  }

}
