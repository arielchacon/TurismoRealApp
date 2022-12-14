import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading: HTMLIonLoadingElement;

  constructor(public loadingController: LoadingController) { }

  ngOnInit() {
  }

  async presentLoading(){

    this.loading = await this.loadingController.create({
      message: 'Cargando...'
    });

    await this.loading.present();

  }

}
