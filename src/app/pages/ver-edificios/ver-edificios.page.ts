import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Comuna, EdificioResponse, Provincia, Region } from 'src/app/interfaces/interfaces';
import { EdificioService } from 'src/app/services/edificio.service';
import { NgForm } from '@angular/forms';
import { DireccionService } from 'src/app/services/direccion.service';

@Component({
  selector: 'app-ver-edificios',
  templateUrl: './ver-edificios.page.html',
  styleUrls: ['./ver-edificios.page.scss'],
})
export class VerEdificiosPage implements OnInit {
  regiones: Observable<Region[]>;
  region: any;
  provincias: Observable<Provincia[]>;
  provincia: any;
  comunas: Observable<Comuna[]>;
  comuna: any;

  edificios: Observable<EdificioResponse[]>

  constructor(public direccionService: DireccionService, private edificioService: EdificioService) { }

  ngOnInit() {

    this.edificios = this.edificioService.listar();
  }

  setValueProvincia() {

    this.provincias = this.direccionService.obtenerProvincia(this.region);

  }

  setValueComuna() {

    this.comunas = this.direccionService.obtenerComuna(this.provincia);

  }

  listarEdificios(fListar: NgForm){

    this.edificios = this.edificioService.listar();

  }


}
