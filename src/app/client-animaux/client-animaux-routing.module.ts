import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientAnimauxPage } from './client-animaux.page';

const routes: Routes = [
  {
    path: '',
    component: ClientAnimauxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientAnimauxPageRoutingModule {}
