import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroFuncionarioPageRoutingModule } from './registro-funcionario-routing.module';

import { RegistroFuncionarioPage } from './registro-funcionario.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroFuncionarioPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RegistroFuncionarioPage]
})
export class RegistroFuncionarioPageModule {}
