import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Comuna, DepartamentoResponse, EdificioResponse, InfoCliente, Provincia, Region, Reserva } from 'src/app/interfaces/interfaces';
import { DireccionService } from 'src/app/services/direccion.service';
import { EdificioService } from 'src/app/services/edificio.service';
import { ReservaService } from 'src/app/services/reserva.service';
import { DepartamentoService } from '../../services/departamento.service';
import { NgForm } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';

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
  departamento: any;
  reserva: Reserva = {

    cantDepartamento: 1,
    fechaReserva: "1900-01-01",
    monto:0,
    estado:'',
    fechaCheckin: "",
    abono:0,
    runFuncionario:'',
    fechaCheckout: "",
    multa:0,
    runCliente:'',
    idDepartamento:0

  };
  nombreUsuario: string;
  errorMsg = '';
  
  constructor(public direccionService: DireccionService,
    public edificioService: EdificioService,
    public departamentoService: DepartamentoService,
    public reservaService: ReservaService,
    private alertController: AlertController,
    private usuarioService: UsuarioService,
    private navCtrl: NavController) { }

  ngOnInit() {

    this.regiones = this.direccionService.obtenerRegion();

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

  setValueDepartamento() {

    this.departamentos = this.departamentoService.listarDepartamento(this.edificio);

  }

  padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }

  formatDate(date: Date) {
    return (
      [
        date.getFullYear(),
        this.padTo2Digits(date.getMonth() + 1),
        this.padTo2Digits(date.getDate()),
      ].join('-'));
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Fail en el registro',
      message: this.errorMsg,
      buttons: ['Aceptar']
    });

    await alert.present();
  }

  async registrarReserva(fRegistro: NgForm) {

    this.reserva.cantDepartamento = 1;
    this.reserva.fechaReserva = this.formatDate(new Date());
    this.reserva.monto = this.departamento.valor;
    this.reserva.estado = "Creado";
    this.reserva.runFuncionario = "11111111-1";
    this.reserva.runCliente = this.usuarioService.obtenerRut();
    this.reserva.idDepartamento = this.departamento;
    
    const valido = this.reservaService.crearReserva(this.reserva);

    if( valido ){

      this.navCtrl.navigateRoot('reservas', {animated: true});

    }else {

      this.presentAlert();

    }


  }

}
