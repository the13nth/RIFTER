import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { DriversPageRoutingModule } from './drivers-routing.module';
import { DriversPage } from './drivers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DriversPageRoutingModule
  ],
  declarations: [DriversPage],
  providers: [],
  exports: []
})
export class DriversPageModule { }
