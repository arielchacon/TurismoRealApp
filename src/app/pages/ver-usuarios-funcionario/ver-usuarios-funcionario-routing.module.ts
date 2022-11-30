import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerUsuariosFuncionarioPage } from './ver-usuarios-funcionario.page';

const routes: Routes = [
  {
    path: '',
    component: VerUsuariosFuncionarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerUsuariosFuncionarioPageRoutingModule {}
