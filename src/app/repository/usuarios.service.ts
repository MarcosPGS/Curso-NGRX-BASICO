import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../models/usuarioModel';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private URL = 'http://localhost:3000/usuarios'

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<UsuarioModel[]>{
    return this.http.get<UsuarioModel[]>(`${this.URL}`);
  }

  getUsuario(id: number): Observable<UsuarioModel>{
    return this.http.get<UsuarioModel>(`${this.URL}/`+ id);
  }

  addUsuario(usuario: UsuarioModel): Observable<UsuarioModel>{
    return this.http.post<UsuarioModel>(`${this.URL}`, usuario);
  }

  updateUsuario(usuario: UsuarioModel): Observable<UsuarioModel>{
    return this.http.put<UsuarioModel>(`${this.URL}/` + usuario.id, usuario);
  }
  
  deleteUsuario(id: number): Observable<void>{
    return this.http.delete<void>(`${this.URL}/` + id);
  }
}
