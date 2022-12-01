import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuDuenoPageRoutingModule } from './menu-dueno-routing.module';

import { MenuDuenoPage } from './menu-dueno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuDuenoPageRoutingModule
  ],
  declarations: [MenuDuenoPage]
})
export class MenuDuenoPageModule {}
