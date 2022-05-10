import { createAction, props } from "@ngrx/store";
import { UsuarioModel } from '../../models/usuarioModel';

export const enum UsuarioTypeAction{
    LOAD_USUARIOS = '[LOAD_USUARIOS] LOAD USUARIOS',
    LOAD_USUARIOS_SUCCESS = '[LOAD_USUARIOS_SUCCESS] LOAD USUARIOS SUCCESS',
    LOAD_USUARIOS_FAIL= '[LOAD_USUARIOS_FAIL] LOAD USUARIOS FAIL',

    LOAD_USUARIO = '[LOAD_USUARIO] LOAD USUARIO',
    LOAD_USUARIO_SUCCESS = '[LOAD_USUARIO_SUCCESS] LOAD USUARIO SUCCESS',
    LOAD_USUARIO_FAIL= '[LOAD_USUARIO_FAIL] LOAD USUARIO FAIL',

    CREATE_USUARIO = '[CREATE_USUARIO] CREATE USUARIO',
    CREATE_USUARIO_SUCCESS = '[CREATE_USUARIO_SUCCESS] CREATE USUARIO SUCCESS',
    CREATE_USUARIO_FAIL= '[CREATE_USUARIO_FAIL] CREATE USUARIO FAIL',

    UPDATE_USUARIO = '[UPDATE_USUARIO] UPDATE USUARIO',
    UPDATE_USUARIO_SUCCESS = '[UPDATE_USUARIO_SUCCESS] UPDATE USUARIO SUCCESS',
    UPDATE_USUARIO_FAIL= '[UPDATE_USUARIO_FAIL] UPDATE USUARIO FAIL',


    DELETE_USUARIO = '[DELETE_USUARIO] DELETE USUARIO',
    DELETE_USUARIO_SUCCESS = '[DELETE_USUARIO_SUCCESS] DELETE USUARIO SUCCESS',
    DELETE_USUARIO_FAIL= '[DELETE_USUARIO_FAIL] DELETE USUARIO FAIL',
}

//usuarios
export const loadUsuarios  = createAction (
    UsuarioTypeAction.LOAD_USUARIOS
);

export const loadUsuariosSuccess  = createAction (
    UsuarioTypeAction.LOAD_USUARIOS_SUCCESS,
    props<{payload: UsuarioModel[]}>()
);

export const loadUsuariosFail  = createAction (
    UsuarioTypeAction.LOAD_USUARIOS_FAIL,
    props<{error: string}>()
);

//usuario
export const loadUsuario  = createAction (
    UsuarioTypeAction.LOAD_USUARIO,
    props<{payload: number}>()
);

export const loadUsuarioSuccess  = createAction (
    UsuarioTypeAction.LOAD_USUARIO_SUCCESS,
    props<{payload: UsuarioModel}>()
);

export const loadUsuarioFail  = createAction (
    UsuarioTypeAction.LOAD_USUARIO_FAIL,
    props<{error: string}>()
);

//usuario create
export const createUsuario  = createAction (
    UsuarioTypeAction.CREATE_USUARIO,
    props<{payload: UsuarioModel}>()
);

export const createUsuarioSuccess  = createAction (
    UsuarioTypeAction.CREATE_USUARIO_SUCCESS,
    props<{payload: UsuarioModel}>()
);

export const createUsuarioFail  = createAction (
    UsuarioTypeAction.CREATE_USUARIO_FAIL,
    props<{error: string}>()
);

//usuario update
export const updateUsuario  = createAction (
    UsuarioTypeAction.UPDATE_USUARIO,
    props<{payload: UsuarioModel}>()
);

export const updateUsuarioSuccess  = createAction (
    UsuarioTypeAction.UPDATE_USUARIO_SUCCESS,
    props<{payload: UsuarioModel}>()
);

export const updateUsuarioFail  = createAction (
    UsuarioTypeAction.UPDATE_USUARIO_FAIL,
    props<{error: string}>()
);

//usuario delete
export const deleteUsuario  = createAction (
    UsuarioTypeAction.DELETE_USUARIO,
    props<{payload: number}>()
);

export const deleteUsuarioSuccess  = createAction (
    UsuarioTypeAction.DELETE_USUARIO_SUCCESS,
    props<{payload: any}>()
);

export const deleteUsuarioFail  = createAction (
    UsuarioTypeAction.DELETE_USUARIO_FAIL,
    props<{error: string}>()
);