import { Component, OnInit } from '@angular/core';
import { ClienteResponse } from 'src/app/interfaces/interfaces';
import { TokenService } from 'src/app/services/token.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NgForm } from '@angular/forms';
import { ActualizarCliente } from '../../interfaces/interfaces';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {

  cliente: ClienteResponse = {

    run: '',
    nombre: '',
    apPaterno: '',
    apMaterno: '',
    genero: '',
    direccion: '',
    fechaNacimiento: "1900-01-01",
    telefono:'',
    telefono2:'',
    correoElectronico:'',
    idComuna:0,
    nombreUsuario:''

  }

  actualizar: ActualizarCliente = {

    nombre: '',
    appaterno: '',
    apmaterno: '',
    genero: '',
    direccion: '',
    fechaNacimiento: "1900-01-01",
    telefono:'',
    telefono_2:'',
    correo:'',
    esFrecuente:false,
    idComuna:0

  }

  constructor(private usuarioService: UsuarioService, private tokenService: TokenService) { }

  ngOnInit() {

    this.usuarioService.buscarCliente(this.tokenService.getUserName()).subscribe(data => {

      this.cliente = data;

    })

  }

  actualizarCliente(fActualizar: NgForm){

    this.actualizar.nombre = this.cliente.nombre;
    this.actualizar.appaterno = this.cliente.apPaterno;
    this.actualizar.apmaterno = this.cliente.apMaterno;
    this.actualizar.genero = this.cliente.genero;
    this.actualizar.direccion = this.cliente.direccion;
    this.actualizar.fechaNacimiento = this.cliente.fechaNacimiento;
    this.actualizar.telefono = this.cliente.telefono;
    this.actualizar.telefono_2 = this.cliente.telefono2;
    this.actualizar.correo = this.cliente.correoElectronico;
    this.actualizar.idComuna = this.cliente.idComuna;

    const valido = this.usuarioService.actualizarCliente(this.cliente.run, this.actualizar);

    if(valido){

      window.location.reload();

    }


  }

}
