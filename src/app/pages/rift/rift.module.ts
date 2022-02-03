import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RIFTPageRoutingModule } from './rift-routing.module';
import { RIFTPage } from './rift.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RIFTPageRoutingModule
  ],
  declarations: [RIFTPage],
  providers: [],
  exports: []
})
export class RIFTPageModule { }
