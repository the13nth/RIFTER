import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriversDetailsPage } from './drivers-details.page';

const routes: Routes = [
  {
    path: '',
    component: DriversDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriversDetailsPageRoutingModule {}