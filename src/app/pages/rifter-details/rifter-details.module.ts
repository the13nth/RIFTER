import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RifterDetailsPageRoutingModule } from './rifter-details-routing.module';
import { RifterDetailsPage } from './rifter-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RifterDetailsPageRoutingModule
  ],
  declarations: [RifterDetailsPage],
  providers: [],
  exports: []
})
export class RifterDetailsPageModule { }
