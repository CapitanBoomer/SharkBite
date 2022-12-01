import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroUsuarioPageRoutingModule } from './registro-usuario-routing.module';
import { UsuarioservService } from './../../servicios/usuarioserv.service';
import { RegistroUsuarioPage } from './registro-usuario.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegistroUsuarioPageRoutingModule,
    HttpClientModule
  ],
  declarations: [RegistroUsuarioPage],
  providers: [UsuarioservService]
})
export class RegistroUsuarioPageModule {}
