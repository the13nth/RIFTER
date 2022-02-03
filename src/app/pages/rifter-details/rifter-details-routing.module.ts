import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RifterDetailsPage } from './rifter-details.page';

const routes: Routes = [
  {
    path: '',
    component: RifterDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RifterDetailsPageRoutingModule {}