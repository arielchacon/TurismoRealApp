import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerEdificiosPage } from './ver-edificios.page';

const routes: Routes = [
  {
    path: '',
    component: VerEdificiosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerEdificiosPageRoutingModule {}
