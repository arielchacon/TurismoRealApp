import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerServiciosPageRoutingModule } from './ver-servicios-routing.module';

import { VerServiciosPage } from './ver-servicios.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerServiciosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [VerServiciosPage]
})
export class VerServiciosPageModule {}
