import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroClientePageRoutingModule } from './registro-cliente-routing.module';

import { RegistroClientePage } from './registro-cliente.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroClientePageRoutingModule,
    ComponentsModule
  ],
  declarations: [RegistroClientePage]
})
export class RegistroClientePageModule {}
