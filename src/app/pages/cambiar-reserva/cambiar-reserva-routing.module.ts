import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CambiarReservaPage } from './cambiar-reserva.page';

const routes: Routes = [
  {
    path: '',
    component: CambiarReservaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CambiarReservaPageRoutingModule {}
