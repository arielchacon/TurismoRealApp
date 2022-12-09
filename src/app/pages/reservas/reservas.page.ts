import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReservaService } from 'src/app/services/reserva.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ReservaResponse } from '../../interfaces/interfaces';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
})
export class ReservasPage implements OnInit {

  reservas: Observable<ReservaResponse[]>

  constructor(public reservaService: ReservaService,
              private usuarioService: UsuarioService) { }

  ngOnInit() {

    this.reservas = this.reservaService.listarReservaCliente(this.usuarioService.obtenerRut());

  }

}
