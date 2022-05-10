import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/appState';
import * as fromUsuariosAction from '../../store/usuarios/usuarioAction';
import * as fromUsuariosSelector from '../../store/usuarios/usuarioReducer';
import { UsuarioModel } from '../../models/usuarioModel';

@Component({
  selector: 'app-listar-usuarios-admin',
  templateUrl: './listar-usuarios-admin.component.html',
  styleUrls: ['./listar-usuarios-admin.component.scss']
})
export class ListarUsuariosAdminComponent implements OnInit {

//PRIMEIRA FORMA DE BUSCAR PELO STATE
  listaUsuariosAdmin$: Observable<UsuarioModel[]> = this.store.select(fromUsuariosSelector.getUsuarioAdministradores);
//SEGUNDA FORMA FORMA DE BUSCAR PELO STATE
listaUsuariosAdmin: UsuarioModel[] = [];
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    
    this.getUsuariosAdmin();
  }

  getUsuariosAdmin(): void {
    this.store.select(fromUsuariosSelector.getUsuarioAdministradores)
    .subscribe((usuarios: UsuarioModel[]) =>{
      this.listaUsuariosAdmin = usuarios;
    })
  }
  deletarUsuario(id: any): void {
    if (id) {
      this.store.dispatch(fromUsuariosAction.deleteUsuario({payload: +id}))
    }
  }

}
