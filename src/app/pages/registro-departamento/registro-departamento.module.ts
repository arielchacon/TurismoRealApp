import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroDepartamentoPageRoutingModule } from './registro-departamento-routing.module';

import { RegistroDepartamentoPage } from './registro-departamento.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroDepartamentoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RegistroDepartamentoPage]
})
export class RegistroDepartamentoPageModule {}
