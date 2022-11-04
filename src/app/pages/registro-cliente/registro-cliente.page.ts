import { Component, OnInit } from '@angular/core';
import { Provincia, Region, Comuna } from 'src/app/interfaces/interfaces';
import { DireccionService } from 'src/app/services/direccion.service';
import { Observable } from 'rxjs';
import { Cliente } from '../../interfaces/interfaces';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.page.html',
  styleUrls: ['./registro-cliente.page.scss'],
})
export class RegistroClientePage implements OnInit {

  regiones: Observable<Region[]>;
  region: any;
  provincias: Observable<Provincia[]>;
  provincia: any;
  comunas: Observable<Comuna[]>;
  comuna: any;
  cliente: Cliente = {
    run: '',
    nombre: '',
    apPaterno: '',
    apMaterno: '',
    genero: '',
    direccion: '',
    fechaNacimiento: "1900-01-01",
    telefono: '',
    correo: '',
    esFrecuente: false,
    idComuna: 0,
    nombreUsuario: '',
    password: ''
  };

  constructor(public direccionService: DireccionService, public usuarioService: UsuarioService) { }

  ngOnInit() {

    this.regiones=this.direccionService.obtenerRegion();
  }

  setValueProvincia() {

   this.provincias=this.direccionService.obtenerProvincia(this.region);

  }

  setValueComuna(){

    this.comunas=this.direccionService.obtenerComuna(this.provincia);

  }

  async registrarCliente(fRegistro: NgForm){

    this.cliente.idComuna=this.comuna;
    this.cliente.esFrecuente=false;

    this.usuarioService.registroCliente(this.cliente);

  }

}
