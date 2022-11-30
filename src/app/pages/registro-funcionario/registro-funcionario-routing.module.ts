import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroFuncionarioPage } from './registro-funcionario.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroFuncionarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroFuncionarioPageRoutingModule {}
