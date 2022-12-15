import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuarioservService } from './../servicios/usuarioserv.service'
import { UsuarioConID } from './../interfaces/usuarios'
import {IonInfiniteScroll} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrar-perfiles',
  templateUrl: './administrar-perfiles.page.html',
  styleUrls: ['./administrar-perfiles.page.scss'],
})
export class AdministrarPerfilesPage implements OnInit {

  public listarUsuarios : Array<UsuarioConID> = [];



  constructor(
    private apiUsuarios : UsuarioservService,
    private router : Router

  ) { }

  ngOnInit() {
    this.apiUsuarios.listarUsers$.subscribe(datos =>{
      this.listarUsuarios = datos;
    });
    this.apiUsuarios.listaPrimerosUser();
  }


  ionViewWillEnter(): void{
    this.apiUsuarios.listaPrimerosUser();
  }

  public hacerAdmin(event:Event): void{



  }

  ionViewDidEnter(): void{

  }

  public cargarMasProds(){
    this.apiUsuarios.mostrarMasUsers();
  }

}
