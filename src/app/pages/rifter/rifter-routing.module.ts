import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RifterPage } from './rifter.page';

const routes: Routes = [
  {
    path: '',
    component: RifterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RifterPageRoutingModule {}