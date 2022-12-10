import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerCheckinPage } from './ver-checkin.page';

const routes: Routes = [
  {
    path: '',
    component: VerCheckinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerCheckinPageRoutingModule {}
