import { Component, OnInit } from '@angular/core';
import { CheckInResponse } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-ver-checkin',
  templateUrl: './ver-checkin.page.html',
  styleUrls: ['./ver-checkin.page.scss'],
})
export class VerCheckinPage implements OnInit {

  checkins: Observable<CheckInResponse[]>;

  constructor(public reservaService: ReservaService) { }

  ngOnInit() {

    this.checkins = this.reservaService.listarCheckIn();

  }

}
