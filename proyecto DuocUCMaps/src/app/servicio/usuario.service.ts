import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { IUsuario } from '../interfaz/IUsuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url: string = "https://my-json-server.typicode.com/Migue132/mockjson/advertisements";
  private cliente: HttpClient;

  constructor(moduloHttp: HttpClient) { 
    this.cliente = moduloHttp;
  }

  public listarUsuarios(): Observable<Array<IUsuario>>{
    return this.cliente.get<Array<IUsuario>>(this.url);

  }

  public agregarUsuario(usuarioNuevo: IUsuario): Observable<IUsuario> {
    return this.cliente.post<IUsuario>(this.url, JSON.stringify(usuarioNuevo),{
      headers: {
        "Content-Type":"application/json"
      }
    });
  }

}
