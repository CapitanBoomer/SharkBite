import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministrarPerfilesPageRoutingModule } from './administrar-perfiles-routing.module';
import { UsuarioservService } from './../servicios/usuarioserv.service';

import { AdministrarPerfilesPage } from './administrar-perfiles.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministrarPerfilesPageRoutingModule,
    HttpClientModule
  ],
  declarations: [AdministrarPerfilesPage],
  providers : [UsuarioservService]
})
export class AdministrarPerfilesPageModule {}
