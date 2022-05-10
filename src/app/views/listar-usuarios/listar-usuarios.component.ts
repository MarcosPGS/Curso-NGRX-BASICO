import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/appState';
import { UsuarioModel } from '../../models/usuarioModel';
import * as fromUsuariosAction from '../../store/usuarios/usuarioAction';
import * as fromUsuariosSelector from '../../store/usuarios/usuarioReducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.scss'],
})
export class ListarUsuariosComponent implements OnInit {
  // listaUsuarios: UsuarioModel[] = [];
  listaUsuarios$: Observable<UsuarioModel[]> = this.store.select(fromUsuariosSelector.getUsuarios);
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    
    this.getUsuarios();
  }

  getUsuarios(): void {
    this.store.dispatch(fromUsuariosAction.loadUsuarios());
  }
  deletarUsuario(id: any): void {
    if (id) {
      this.store.dispatch(fromUsuariosAction.deleteUsuario({payload: +id}))
    }
  }

  //SEM NGRX
  // getUsuarios(): void {
  //   this.usuarioService.getUsuarios().subscribe({
  //     next: (usuarios) => {
  //       this.listaUsuarios = usuarios;
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //   });
  // }

  // deletarUsuario(id: number): void {
  //   if (id !== null || id !== undefined) {
  //     this.usuarioService.deleteUsuario(id).subscribe({
  //       next: (res) => {
  //         this.getUsuarios();
  //       },
  //       error: (err) => {
  //         console.log(err);
  //       },
  //     });
  //   }
  // }
}
