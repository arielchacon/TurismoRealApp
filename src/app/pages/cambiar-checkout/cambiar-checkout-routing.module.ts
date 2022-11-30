import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CambiarCheckoutPage } from './cambiar-checkout.page';

const routes: Routes = [
  {
    path: '',
    component: CambiarCheckoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CambiarCheckoutPageRoutingModule {}
