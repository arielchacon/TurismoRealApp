import { Component, OnInit } from '@angular/core';
import { CheckOutResponse } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-ver-checkout',
  templateUrl: './ver-checkout.page.html',
  styleUrls: ['./ver-checkout.page.scss'],
})
export class VerCheckoutPage implements OnInit {

  checkouts: Observable<CheckOutResponse[]>;

  constructor(public reservaService: ReservaService) { }

  ngOnInit() {

    this.checkouts = this.reservaService.listarCheckOut();

  }

}
