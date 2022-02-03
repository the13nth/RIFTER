import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RifterPageRoutingModule } from './rifter-routing.module';
import { RifterPage } from './rifter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RifterPageRoutingModule
  ],
  declarations: [RifterPage],
  providers: [],
  exports: []
})
export class RifterPageModule { }
