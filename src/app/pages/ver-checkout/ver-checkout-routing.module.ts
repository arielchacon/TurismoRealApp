import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerCheckoutPage } from './ver-checkout.page';

const routes: Routes = [
  {
    path: '',
    component: VerCheckoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerCheckoutPageRoutingModule {}
