import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerUsuariosClientePage } from './ver-usuarios-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: VerUsuariosClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerUsuariosClientePageRoutingModule {}
