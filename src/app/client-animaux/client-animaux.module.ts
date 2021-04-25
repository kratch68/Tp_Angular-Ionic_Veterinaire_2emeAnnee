import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientAnimauxPageRoutingModule } from './client-animaux-routing.module';

import { ClientAnimauxPage } from './client-animaux.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientAnimauxPageRoutingModule
  ],
  declarations: [ClientAnimauxPage]
})
export class ClientAnimauxPageModule {}
