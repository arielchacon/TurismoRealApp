import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Region, Provincia, Comuna, EdificioResponse } from 'src/app/interfaces/interfaces';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { DireccionService } from 'src/app/services/direccion.service';
import { EdificioService } from 'src/app/services/edificio.service';
import { ReservaService } from 'src/app/services/reserva.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NgForm } from '@angular/forms';
import { Departamento } from '../../interfaces/interfaces';

@Component({
  selector: 'app-registro-departamento',
  templateUrl: './registro-departamento.page.html',
  styleUrls: ['./registro-departamento.page.scss'],
})
export class RegistroDepartamentoPage implements OnInit {

  regiones: Observable<Region[]>;
  region: any;
  provincias: Observable<Provincia[]>;
  provincia: any;
  comunas: Observable<Comuna[]>;
  comuna: any;
  edificios: Observable<EdificioResponse[]>
  edificio: any;
  departamento: Departamento = {

    numDepto: 0,
    numHabitaciones: 0,
    numBanios: 0,
    estado: '',
    valor: 0,
    dividendo: 0,
    contribucion: 0,
    disponibilidad: '',
    idEdificio: 0,
    runFuncionario: ''

  }
  run: string;

  constructor(public direccionService: DireccionService,
    public edificioService: EdificioService,
    public departamentoService: DepartamentoService,
    public reservaService: ReservaService,
    private usuarioService: UsuarioService,
    private navCtrl: NavController) { }

  ngOnInit() {

    this.regiones = this.direccionService.obtenerRegion();
    this.run = this.usuarioService.obtenerRut();

  }

  setValueProvincia() {

    this.provincias = this.direccionService.obtenerProvincia(this.region);

  }

  setValueComuna() {

    this.comunas = this.direccionService.obtenerComuna(this.provincia);

  }

  setValueEdificio() {

    this.edificios = this.edificioService.listarEdificios(this.comuna);

  }
  
  agregarDepartamento(fRegistro: NgForm){

    this.departamento.idEdificio = this.edificio;
    this.departamento.runFuncionario = this.run;
    
    const valido = this.departamentoService.guardarDepartamento(this.departamento);

    if(valido){

      this.navCtrl.navigateRoot("inicio");

    }


  }

}
