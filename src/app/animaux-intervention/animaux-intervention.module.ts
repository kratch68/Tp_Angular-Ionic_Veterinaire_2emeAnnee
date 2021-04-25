import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimauxInterventionPageRoutingModule } from './animaux-intervention-routing.module';

import { AnimauxInterventionPage } from './animaux-intervention.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimauxInterventionPageRoutingModule
  ],
  declarations: [AnimauxInterventionPage]
})
export class AnimauxInterventionPageModule {}
