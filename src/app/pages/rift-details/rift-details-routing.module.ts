import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RIFTDetailsPage } from './rift-details.page';

const routes: Routes = [
  {
    path: '',
    component: RIFTDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RIFTDetailsPageRoutingModule {}