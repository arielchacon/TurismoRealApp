import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroDepartamentoPageRoutingModule } from './registro-departamento-routing.module';

import { RegistroDepartamentoPage } from './registro-departamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroDepartamentoPageRoutingModule
  ],
  declarations: [RegistroDepartamentoPage]
})
export class RegistroDepartamentoPageModule {}
