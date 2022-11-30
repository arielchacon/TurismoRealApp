import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CambiarCheckinPage } from './cambiar-checkin.page';

const routes: Routes = [
  {
    path: '',
    component: CambiarCheckinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CambiarCheckinPageRoutingModule {}
