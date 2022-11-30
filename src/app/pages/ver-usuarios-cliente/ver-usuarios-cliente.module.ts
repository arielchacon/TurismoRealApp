import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerUsuariosClientePageRoutingModule } from './ver-usuarios-cliente-routing.module';

import { VerUsuariosClientePage } from './ver-usuarios-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerUsuariosClientePageRoutingModule
  ],
  declarations: [VerUsuariosClientePage]
})
export class VerUsuariosClientePageModule {}
