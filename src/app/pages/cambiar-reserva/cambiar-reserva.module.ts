import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambiarReservaPageRoutingModule } from './cambiar-reserva-routing.module';

import { CambiarReservaPage } from './cambiar-reserva.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambiarReservaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CambiarReservaPage]
})
export class CambiarReservaPageModule {}
