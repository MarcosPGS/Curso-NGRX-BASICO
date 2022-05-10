import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { HomeComponent } from './home/home.component';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { UsuariosService } from '../repository/usuarios.service';
import { CadastrarUsuariosComponent } from './cadastrar-usuarios/cadastrar-usuarios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AtualizarUsuariosComponent } from './atualizar-usuarios/atualizar-usuarios.component';
import { ListarUsuariosAdminComponent } from './listar-usuarios-admin/listar-usuarios-admin.component';


@NgModule({
  declarations: [
    HomeComponent,
    ListarUsuariosComponent,
    CadastrarUsuariosComponent,
    AtualizarUsuariosComponent,
    ListarUsuariosAdminComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
  ,
  providers:[UsuariosService],
  exports: [
    HomeComponent,
    ListarUsuariosComponent,
    CadastrarUsuariosComponent,
    AtualizarUsuariosComponent,
    ListarUsuariosAdminComponent
  ]
})
export class ViewsModule { }
