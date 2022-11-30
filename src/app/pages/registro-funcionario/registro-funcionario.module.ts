import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroFuncionarioPageRoutingModule } from './registro-funcionario-routing.module';

import { RegistroFuncionarioPage } from './registro-funcionario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroFuncionarioPageRoutingModule
  ],
  declarations: [RegistroFuncionarioPage]
})
export class RegistroFuncionarioPageModule {}
