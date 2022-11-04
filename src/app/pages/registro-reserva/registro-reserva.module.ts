import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroReservaPageRoutingModule } from './registro-reserva-routing.module';

import { RegistroReservaPage } from './registro-reserva.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroReservaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RegistroReservaPage]
})
export class RegistroReservaPageModule {}
