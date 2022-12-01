import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarObjetoPageRoutingModule } from './agregar-objeto-routing.module';

import { AgregarObjetoPage } from './agregar-objeto.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarObjetoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AgregarObjetoPage]
})
export class AgregarObjetoPageModule {}
