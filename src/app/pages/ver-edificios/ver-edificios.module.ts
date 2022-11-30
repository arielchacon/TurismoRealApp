import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerEdificiosPageRoutingModule } from './ver-edificios-routing.module';

import { VerEdificiosPage } from './ver-edificios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerEdificiosPageRoutingModule
  ],
  declarations: [VerEdificiosPage]
})
export class VerEdificiosPageModule {}
