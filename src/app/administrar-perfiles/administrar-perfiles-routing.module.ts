import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrarPerfilesPage } from './administrar-perfiles.page';

const routes: Routes = [
  {
    path: '',
    component: AdministrarPerfilesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrarPerfilesPageRoutingModule {}
