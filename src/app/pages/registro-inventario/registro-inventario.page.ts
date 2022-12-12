import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Inventario } from '../../interfaces/interfaces';
import { InventarioService } from '../../services/inventario.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro-inventario',
  templateUrl: './registro-inventario.page.html',
  styleUrls: ['./registro-inventario.page.scss'],
})
export class RegistroInventarioPage implements OnInit {

  inventario: Inventario = {
    observacion: '',
    fechaInventario: "1900-01-01",
    estado: '',
    idDepartamento: 0
  }

  constructor(private navCtrl: NavController, private inventarioService: InventarioService) { }

  ngOnInit() {
  }

  guardarInventario(fRegistro: NgForm){

    const valido = this.inventarioService.crearInventario(this.inventario);

    if(valido){

      this.navCtrl.navigateRoot("inicio");

    }

  }


}
