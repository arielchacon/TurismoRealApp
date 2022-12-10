import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ReservaService } from 'src/app/services/reserva.service';
import { ActualizarCheckOut, CheckOutResponse } from '../../interfaces/interfaces';

@Component({
  selector: 'app-cambiar-checkout',
  templateUrl: './cambiar-checkout.page.html',
  styleUrls: ['./cambiar-checkout.page.scss'],
})
export class CambiarCheckoutPage implements OnInit {

  checkout: CheckOutResponse = {
    
    idCheckOut: 0,
    fecha:"1900-01-01",
    multa: 0,
    runFuncionario: "",
    idReserva: 0

  }

  actualizar: ActualizarCheckOut = {

    idCheckout: 0,
    fecha:"1900-01-01",
    multa: 0,
    runFuncionario: "",
    idReserva: 0

  }

  constructor(public reservaService: ReservaService, private navCtrl: NavController) { }

  ngOnInit() {
  }

  buscarCheckout(fBuscar: NgForm){

    this.reservaService.buscarCheckOut(this.checkout.idReserva).subscribe(data => {

      this.checkout = data;

    });

  }

  actualizarCheckout(fActualizar: NgForm){
    
    this.actualizar.idCheckout = this.checkout.idCheckOut;
    this.actualizar.fecha = this.checkout.fecha;
    this.actualizar.multa = this.checkout.multa;
    this.actualizar.runFuncionario = this.checkout.runFuncionario;
    this.actualizar.idReserva = this.checkout.idReserva;

    const valido = this.reservaService.actualizarCheckOut(this.actualizar);

    if(valido){

      this.navCtrl.navigateRoot('ver-checkout', {animated: true});
    }

  }

}
