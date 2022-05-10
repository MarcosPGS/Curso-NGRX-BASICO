import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/appState';
import { UsuariosService } from '../../repository/usuarios.service';
import * as fromUsuariosAction from '../../store/usuarios/usuarioAction';
import { UsuarioModel } from '../../models/usuarioModel';

@Component({
  selector: 'app-cadastrar-usuarios',
  templateUrl: './cadastrar-usuarios.component.html',
  styleUrls: ['./cadastrar-usuarios.component.scss']
})
export class CadastrarUsuariosComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required]],
      idade: [null, [Validators.required]],
      perfil: [null, [Validators.required]],
    });
  }
  // salvar(): void {
  //   if (this.form.valid) {
  //     this.usuariosService.addUsuario(this.form.value).subscribe(
  //       {
  //         next: (res) => {
  //           console.log(res);
  //           this.router.navigate(['/'])
            
  //         },
  //         error: (err) => {
  //           console.log(err);
            
  //         },
  //       }
  //     )
  //   }
  // }
  salvar(): void {
    if (this.form.valid) {
      const payload: UsuarioModel = {...this.form.value};
      this.store.dispatch(fromUsuariosAction.createUsuario({payload}))
      this.router.navigate(['/']);
    }
  }
}
