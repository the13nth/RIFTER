import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RIFTDetailsPageRoutingModule } from './rift-details-routing.module';
import { RIFTDetailsPage } from './rift-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RIFTDetailsPageRoutingModule
  ],
  declarations: [RIFTDetailsPage],
  providers: [],
  exports: []
})
export class RIFTDetailsPageModule { }
