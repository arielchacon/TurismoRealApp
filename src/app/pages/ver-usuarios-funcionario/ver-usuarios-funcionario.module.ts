import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerUsuariosFuncionarioPageRoutingModule } from './ver-usuarios-funcionario-routing.module';

import { VerUsuariosFuncionarioPage } from './ver-usuarios-funcionario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerUsuariosFuncionarioPageRoutingModule
  ],
  declarations: [VerUsuariosFuncionarioPage]
})
export class VerUsuariosFuncionarioPageModule {}
