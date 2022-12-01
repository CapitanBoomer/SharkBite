import { Injectable } from '@angular/core';
import { UsuarioConID, Usuarios } from '../interfaces/usuarios';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsuarioservService {
  private API_usuario_URL = 'http://localhost:3000/usuarios'
  private comportamientoListarUsuario = new BehaviorSubject<Array<any>>([]);
  public listarUsers$ = this.comportamientoListarUsuario.asObservable();

  constructor( private cliente : HttpClient) { }

  public agregarUsuario(nuevoUsuario : Usuarios): Observable<any>{
    return this.cliente.post(this.API_usuario_URL, nuevoUsuario,{
      headers :{
        'Content-Type': 'application/json; charset=utf-8'
      }
    })
  }
  public inicioSesion(){
    this.cliente.get<Array<Usuarios>>(`${this.API_usuario_URL}?_page=1&_limit=5`)
    .subscribe(datos => {this.comportamientoListarUsuario.next(datos)})
  }
}
