import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerServiciosPage } from './ver-servicios.page';

const routes: Routes = [
  {
    path: '',
    component: VerServiciosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerServiciosPageRoutingModule {}
