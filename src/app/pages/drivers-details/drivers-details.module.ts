import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DriversDetailsPageRoutingModule } from './drivers-details-routing.module';
import { DriversDetailsPage } from './drivers-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DriversDetailsPageRoutingModule
  ],
  declarations: [DriversDetailsPage],
  providers: [],
  exports: []
})
export class DriversDetailsPageModule { }
