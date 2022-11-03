import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  slides: { img: string, titulo: string, desc: string}[] = [
    {
      img: '/assets/images/Hotel_Pucon.jpg',
      titulo: 'Hoteles',
      desc: 'Disfruta de una gran variedad de hoteles'
    },
    {
      img: '/assets/images/habitacion-single.jpg',
      titulo: 'Habitaciones',
      desc: 'Disponemos de habitaciones para tus necesidades'
    },
    {
      img: '/assets/images/buses.jpg',
      titulo: 'Transporte',
      desc: 'Llega sin contratiempos con nuestro servicio de transporte'
    }
  ]

  constructor(private menuCtrl:MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuCtrl.open();
  }

}
