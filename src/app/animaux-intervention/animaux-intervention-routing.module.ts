import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimauxInterventionPage } from './animaux-intervention.page';

const routes: Routes = [
  {
    path: '',
    component: AnimauxInterventionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimauxInterventionPageRoutingModule {}
