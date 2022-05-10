import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { UsuariosService } from 'src/app/repository/usuarios.service';
import * as fromUsuariosAction from './usuarioAction';

@Injectable()
export class UsuarioEffects {
  constructor(
    private actions$: Actions,
    private usuariosService: UsuariosService
  ) {}

  loadUsuarios$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsuariosAction.UsuarioTypeAction.LOAD_USUARIOS),
      exhaustMap(() =>
        this.usuariosService.getUsuarios().pipe(
          map((payload) => fromUsuariosAction.loadUsuariosSuccess({ payload })),
          catchError((error) => of(fromUsuariosAction.loadUsuariosFail({ error }))
          )
        )
      )
    )
  );

  loadUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsuariosAction.UsuarioTypeAction.LOAD_USUARIO),
      exhaustMap((record: any) =>
        this.usuariosService.getUsuario(record.payload).pipe(
          map((payload) => fromUsuariosAction.loadUsuarioSuccess({ payload })),
          catchError((error) => of(fromUsuariosAction.loadUsuarioFail({ error }))
          )
        )
      )
    )
  );

  createUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsuariosAction.UsuarioTypeAction.CREATE_USUARIO),
      exhaustMap((record: any) =>
        this.usuariosService.addUsuario(record.payload).pipe(
          map((payload) => fromUsuariosAction.createUsuarioSuccess({ payload })),
          catchError((error) => of(fromUsuariosAction.createUsuarioFail({ error }))
          )
        )
      )
    )
  );

  updateUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsuariosAction.UsuarioTypeAction.UPDATE_USUARIO),
      exhaustMap((record: any) =>
        this.usuariosService.updateUsuario(record.payload).pipe(
          map((payload) => fromUsuariosAction.updateUsuarioSuccess({ payload })),
          catchError((error) => of(fromUsuariosAction.updateUsuarioFail({ error }))
          )
        )
      )
    )
  );

  deleteUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsuariosAction.UsuarioTypeAction.DELETE_USUARIO),
      exhaustMap((record: any) =>
        this.usuariosService.deleteUsuario(record.payload).pipe(
          map(() => fromUsuariosAction.deleteUsuarioSuccess({ payload: record.payload })),
          catchError((error) => of(fromUsuariosAction.deleteUsuarioFail({ error }))
          )
        )
      )
    )
  );
}
