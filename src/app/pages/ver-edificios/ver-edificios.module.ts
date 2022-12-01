import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerEdificiosPageRoutingModule } from './ver-edificios-routing.module';

import { VerEdificiosPage } from './ver-edificios.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerEdificiosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [VerEdificiosPage]
})
export class VerEdificiosPageModule {}
