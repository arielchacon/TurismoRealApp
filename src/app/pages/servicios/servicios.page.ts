import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/interfaces/interfaces';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage implements OnInit {

  servicio: Servicio = {

    descripcion : '',
    estado: '',
    monto: 0

  }

  constructor() { }

  ngOnInit() {
  }

  async registrarServicio( fRegistro: NgForm) {}

}
