import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RIFTPage } from './rift.page';

const routes: Routes = [
  {
    path: '',
    component: RIFTPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RIFTPageRoutingModule {}