import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerCheckinPageRoutingModule } from './ver-checkin-routing.module';

import { VerCheckinPage } from './ver-checkin.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerCheckinPageRoutingModule,
    ComponentsModule
  ],
  declarations: [VerCheckinPage]
})
export class VerCheckinPageModule {}
