import { Component, OnInit } from '@angular/core';
import { Mantenimiento } from 'src/app/interfaces/interfaces';
import { NgForm } from '@angular/forms';
import { MantenimientoService } from 'src/app/services/mantenimiento.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro-mantencion',
  templateUrl: './registro-mantencion.page.html',
  styleUrls: ['./registro-mantencion.page.scss'],
})
export class RegistroMantencionPage implements OnInit {

  mantencion: Mantenimiento = {
    descripcion: '',
    estado: '',
    fechaMantencion: "1900-01-01",
    costo: 0,
    idDepartamento: 0
  }

  constructor(private navCtrl: NavController, private mantenimientoService: MantenimientoService) { }

  ngOnInit() {
  }

  agregarMantenimiento(fRegistro: NgForm){

    const valido = this.mantenimientoService.crearMantenimiento(this.mantencion);

    if(valido){

      this.navCtrl.navigateRoot("inicio");

    }

  }


}
