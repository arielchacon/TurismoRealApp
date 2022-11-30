import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroDepartamentoPage } from './registro-departamento.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroDepartamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroDepartamentoPageRoutingModule {}
