import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarObjetoPage } from './agregar-objeto.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarObjetoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarObjetoPageRoutingModule {}
