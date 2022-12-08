import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Comuna, DepartamentoResponse, EdificioResponse, Provincia, Region } from 'src/app/interfaces/interfaces';
import { DireccionService } from 'src/app/services/direccion.service';

@Component({
  selector: 'app-registro-reserva',
  templateUrl: './registro-reserva.page.html',
  styleUrls: ['./registro-reserva.page.scss'],
})
export class RegistroReservaPage implements OnInit {

  regiones: Observable<Region[]>;
  region: any;
  provincias: Observable<Provincia[]>;
  provincia: any;
  comunas: Observable<Comuna[]>;
  comuna: any;
  edificios: Observable<EdificioResponse[]>
  edificio: any;
  departamentos: Observable<DepartamentoResponse[]>
  departamento:any;

  constructor(public direccionService: DireccionService, private navCtrl: NavController) { }

  ngOnInit() {

    this.regiones=this.direccionService.obtenerRegion();

  }

}
