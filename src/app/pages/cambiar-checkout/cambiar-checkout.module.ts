import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambiarCheckoutPageRoutingModule } from './cambiar-checkout-routing.module';

import { CambiarCheckoutPage } from './cambiar-checkout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambiarCheckoutPageRoutingModule
  ],
  declarations: [CambiarCheckoutPage]
})
export class CambiarCheckoutPageModule {}
