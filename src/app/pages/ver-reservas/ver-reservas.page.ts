import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReservaResponse } from 'src/app/interfaces/interfaces';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-ver-reservas',
  templateUrl: './ver-reservas.page.html',
  styleUrls: ['./ver-reservas.page.scss'],
})
export class VerReservasPage implements OnInit {

  reservas: Observable<ReservaResponse[]>

  constructor(public reservaService: ReservaService) { }

  ngOnInit() {

    this.reservas = this.reservaService.listarReserva();
    
  }

}
