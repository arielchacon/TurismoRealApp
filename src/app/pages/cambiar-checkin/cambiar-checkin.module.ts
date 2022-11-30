import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambiarCheckinPageRoutingModule } from './cambiar-checkin-routing.module';

import { CambiarCheckinPage } from './cambiar-checkin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambiarCheckinPageRoutingModule
  ],
  declarations: [CambiarCheckinPage]
})
export class CambiarCheckinPageModule {}
