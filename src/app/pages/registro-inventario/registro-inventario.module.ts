import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroInventarioPageRoutingModule } from './registro-inventario-routing.module';

import { RegistroInventarioPage } from './registro-inventario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroInventarioPageRoutingModule
  ],
  declarations: [RegistroInventarioPage]
})
export class RegistroInventarioPageModule {}
