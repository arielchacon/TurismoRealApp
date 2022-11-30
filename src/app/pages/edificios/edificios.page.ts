import { Component, OnInit } from '@angular/core';
import { Comuna, Edificio, Provincia, Region } from 'src/app/interfaces/interfaces';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { DireccionService } from 'src/app/services/direccion.service';

@Component({
  selector: 'app-edificios',
  templateUrl: './edificios.page.html',
  styleUrls: ['./edificios.page.scss'],
})
export class EdificiosPage implements OnInit {

  regiones: Observable<Region[]>;
  region: any;
  provincias: Observable<Provincia[]>;
  provincia: any;
  comunas: Observable<Comuna[]>;
  comuna: any;
  edificio: Edificio = {

    direccion : '',
    estado : '',
    idComuna : 0,
    nombre : ''

  }

  constructor(public direccionService: DireccionService) {

    this.regiones=this.direccionService.obtenerRegion();

  }

   setValueProvincia() {

    this.provincias=this.direccionService.obtenerProvincia(this.region);
 
   }
 
   setValueComuna(){
 
     this.comunas=this.direccionService.obtenerComuna(this.provincia);
 
   }
 

  ngOnInit() {
  }

  async registrarEdificio ( fRegistro: NgForm){}

}
