import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioSesionPageRoutingModule } from './inicio-sesion-routing.module';
import {HttpClientModule} from '@angular/common/http'

import { InicioSesionPage } from './inicio-sesion.page';
import {UsuarioservService} from './../../servicios/usuarioserv.service';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    InicioSesionPageRoutingModule,
    HttpClientModule
  ],
  declarations: [InicioSesionPage],
  providers: [UsuarioservService]
})
export class InicioSesionPageModule {}
