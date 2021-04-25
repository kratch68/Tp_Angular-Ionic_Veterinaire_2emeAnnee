import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'client-animaux',
    loadChildren: () => import('./client-animaux/client-animaux.module').then( m => m.ClientAnimauxPageModule)
  },
  {
    path: 'animaux-intervention',
    loadChildren: () => import('./animaux-intervention/animaux-intervention.module').then( m => m.AnimauxInterventionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
