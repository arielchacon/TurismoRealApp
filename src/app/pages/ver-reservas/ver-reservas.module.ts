import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerReservasPageRoutingModule } from './ver-reservas-routing.module';

import { VerReservasPage } from './ver-reservas.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerReservasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [VerReservasPage]
})
export class VerReservasPageModule {}
