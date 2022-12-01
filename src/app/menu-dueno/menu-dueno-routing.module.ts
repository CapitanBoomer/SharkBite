import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuDuenoPage } from './menu-dueno.page';

const routes: Routes = [
  {
    path: '',
    component: MenuDuenoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuDuenoPageRoutingModule {}
