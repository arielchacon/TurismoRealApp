import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Comuna, Provincia, Region } from 'src/app/interfaces/interfaces';
import { DireccionService } from 'src/app/services/direccion.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Funcionario } from '../../interfaces/interfaces';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro-funcionario',
  templateUrl: './registro-funcionario.page.html',
  styleUrls: ['./registro-funcionario.page.scss'],
})
export class RegistroFuncionarioPage implements OnInit {

  regiones: Observable<Region[]>;
  region: any;
  provincias: Observable<Provincia[]>;
  provincia: any;
  comunas: Observable<Comuna[]>;
  comuna: any;
  funcionario: Funcionario = {

    run: '',
    nombre: '',
    appaterno: '',
    apmaterno: '',
    genero: '',
    direccion: '',
    fechaNacimiento: "1900-01-01",
    telefono: '',
    correo: '',
    cargo: '',
    estado: '',
    idComuna: 0,
    idRol: 0,
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

   async registrarFuncionario(fRegistro: NgForm){

    this.funcionario.idComuna=this.comuna;

    this.usuarioService.registroFuncionario(this.funcionario);

   }
 

}
