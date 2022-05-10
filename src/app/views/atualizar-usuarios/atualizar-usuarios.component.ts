import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/appState';
import * as fromUsuariosAction from '../../store/usuarios/usuarioAction';
import * as fromUsuariosSelector from '../../store/usuarios/usuarioReducer';
import { UsuarioModel } from '../../models/usuarioModel';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-atualizar-usuarios',
  templateUrl: './atualizar-usuarios.component.html',
  styleUrls: ['./atualizar-usuarios.component.scss']
})
export class AtualizarUsuariosComponent implements OnInit {

  form!: FormGroup;
  usuario!: UsuarioModel | null;
  constructor(private formBuilder: FormBuilder, private store: Store<AppState>, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    this.form = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required]],
      idade: [null, [Validators.required]],
      perfil: [null, [Validators.required]],
    });

    if (id) {
      this.store.dispatch(fromUsuariosAction.loadUsuario({payload: +id}));
     this.store.select(fromUsuariosSelector.getUsuario).subscribe((usuario: UsuarioModel | null) => {
          this.usuario = usuario;
          const dados= {
            id: this.usuario?.id,
            nome: this.usuario?.nome,
            idade: this.usuario?.idade,
            perfil: this.usuario?.perfil
          }
          this.form.patchValue(dados)
     });
    } 

  }

  getUsuario(): void { 
    
  }

  atualizar(): void {
    if (this.form.valid) {
      const payload: UsuarioModel = {...this.form.value};
      this.store.dispatch(fromUsuariosAction.updateUsuario({payload}))
      this.router.navigate(['/']);
    }
  }
}
