import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuarios } from './../../interfaces/usuarios';
import { Router } from '@angular/router';
import { UsuarioservService } from "./../../servicios/usuarioserv.service"
@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {
  public usurioInicio: Array<any> = [];
  public formulario!: FormGroup ;
  public usuario!: Usuarios;
  constructor(
    private apiUsuario: UsuarioservService, private fb: FormBuilder, private router : Router
  ) { this.formularioInicio(); }

  ngOnInit() {
    this.apiUsuario.listarUsers$.subscribe(datos => { this.usurioInicio = datos; console.log(datos) });
    this.apiUsuario.inicioSesion();
    console.log(this.usurioInicio)
  }
  public iniciar() { console.log(this.usurioInicio) };

  public formularioInicio() {
    this.formulario = this.fb.group({
      nombre_usuario: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      pass: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(1000)]),
    })
  }
  public campo(control: string) {
    return this.formulario.get(control);
  }


  public iniciarSesion() {
    this.usuario = this.usurioInicio.find(user => {
      let inicio = this.formulario.value.nombre_usuario
      return user.nombre_usuario === inicio
    });
    console.log(this.formulario.value)
    if (this.usuario) {
      if (this.usuario.pass == this.formulario.value.pass) { if (this.usuario.admin == true) { this.router.navigate(['menu-dueno']) }
      else { this.router.navigate(['menu-invitado']) } }
      else { }
    }
    else {  }
  }

}
