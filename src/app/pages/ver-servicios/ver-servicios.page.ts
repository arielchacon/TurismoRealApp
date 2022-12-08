import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicioService } from '../../services/servicio.service';

@Component({
  selector: 'app-ver-servicios',
  templateUrl: './ver-servicios.page.html',
  styleUrls: ['./ver-servicios.page.scss'],
})
export class VerServiciosPage implements OnInit {

  servicios: Observable<any>;

  constructor(private servicioService: ServicioService) { }

  ngOnInit() {

    this.servicios = this.servicioService.listarServicio();

  }

}
