import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdificiosPageRoutingModule } from './edificios-routing.module';

import { EdificiosPage } from './edificios.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdificiosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EdificiosPage]
})
export class EdificiosPageModule {}
