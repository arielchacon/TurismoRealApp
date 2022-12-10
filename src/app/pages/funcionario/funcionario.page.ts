import { Component, OnInit } from '@angular/core';
import { FuncionarioResponse } from 'src/app/interfaces/interfaces';
import { TokenService } from 'src/app/services/token.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActualizarFuncionario } from '../../interfaces/interfaces';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.page.html',
  styleUrls: ['./funcionario.page.scss'],
})
export class FuncionarioPage implements OnInit {

  funcionario: FuncionarioResponse = {

    run: '',
    nombre: '',
    apPaterno: '',
    apMaterno: '',
    genero:'',
    direccion:'',
    fechaNacimiento:"1900-01-01",
    telefono:'',
    correo:'',
    cargo:'',
    estado:'',
    nombreUsuario:'',
    idComuna:0

  }

  actualizar: ActualizarFuncionario = {

    nombre: '',
    appaterno: '',
    apmaterno: '',
    genero: '',
    direccion: '',
    fechaNacimiento: '',
    telefono: '',
    correo: '',
    cargo:'',
    estado:'',
    idComuna:0

  }

  constructor(private usuarioService: UsuarioService, private tokenService: TokenService) { }

  ngOnInit() {

    this.usuarioService.buscarFuncionario(this.tokenService.getUserName()).subscribe(data => {

      this.funcionario = data;

    })

  }

  actualizarFuncionario(fActualizar: NgForm){

    this.actualizar.nombre = this.funcionario.nombre;
    this.actualizar.appaterno = this.funcionario.apPaterno;
    this.actualizar.apmaterno = this.funcionario.apMaterno;
    this.actualizar.genero = this.funcionario.genero;
    this.actualizar.direccion = this.funcionario.direccion;
    this.actualizar.fechaNacimiento = this.funcionario.fechaNacimiento;
    this.actualizar.telefono = this.funcionario.telefono;
    this.actualizar.correo = this.funcionario.correo;
    this.actualizar.estado = this.funcionario.estado;
    this.actualizar.idComuna = this.funcionario.idComuna;

    const valido = this.usuarioService.actualizarFuncionario(this.funcionario.run, this.actualizar);

    if(valido){

      window.location.reload();
      
    }

  }

}
