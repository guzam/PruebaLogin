import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadoPageRoutingModule } from './dado-routing.module';

import { DadoPage } from './dado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadoPageRoutingModule
  ],
  declarations: [DadoPage]
})
export class DadoPageModule {}
