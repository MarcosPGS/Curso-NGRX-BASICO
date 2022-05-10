import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizarUsuariosComponent } from './atualizar-usuarios/atualizar-usuarios.component';
import { CadastrarUsuariosComponent } from './cadastrar-usuarios/cadastrar-usuarios.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cadastrar',
    component: CadastrarUsuariosComponent
  },
  {
    path: 'atualizar/:id',
    component: AtualizarUsuariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ViewsRoutingModule { }
