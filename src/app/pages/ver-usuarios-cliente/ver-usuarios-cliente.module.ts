import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerUsuariosClientePageRoutingModule } from './ver-usuarios-cliente-routing.module';

import { VerUsuariosClientePage } from './ver-usuarios-cliente.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerUsuariosClientePageRoutingModule,
    ComponentsModule
  ],
  declarations: [VerUsuariosClientePage]
})
export class VerUsuariosClientePageModule {}
