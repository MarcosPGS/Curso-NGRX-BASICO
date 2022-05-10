import { Action, createFeature, createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import { UsuarioModel } from '../../models/usuarioModel';
import * as fromUsuariosAction from '../usuarios/usuarioAction'
export interface UsuariosState {
    usuarios: UsuarioModel[];
    usuario: UsuarioModel | null;
    error: string | null;

}
//REDUCER
export const initialState: UsuariosState = {
    usuarios: [],
    usuario: null,
    error: null
}
const _usuarioReducer =  createReducer(
    initialState,
    on(fromUsuariosAction.loadUsuariosSuccess, (state, {payload}) => ({...state, usuarios: payload, error: ''})),
    on(fromUsuariosAction.loadUsuariosFail, (state, {error}) => ({...state,  error: error})),

    on(fromUsuariosAction.loadUsuarioSuccess, (state, {payload}) => ({...state, usuario: payload, error: ''})),
    on(fromUsuariosAction.loadUsuarioFail, (state, {error}) => ({...state,  error: error})),

    on(fromUsuariosAction.createUsuarioSuccess, (state, {payload}) => ({...state, usuarios: [...state.usuarios, payload], error: ''})),
    on(fromUsuariosAction.createUsuarioFail, (state, {error}) => ({...state,  error: error})),

    on(fromUsuariosAction.updateUsuarioSuccess, (state, {payload}) => ({...state, usuarios: [...state.usuarios].map((row) => {
        if (row.id === payload.id) {
            return payload
        } else {
            return row
        }
    }), error: ''})),
    on(fromUsuariosAction.updateUsuarioFail, (state, {error}) => ({...state,  error: error})),

    on(fromUsuariosAction.deleteUsuarioSuccess, (state, {payload}) => ({...state, usuarios: [...state.usuarios].filter(
        (filter) => filter.id !== payload
    ), error: ''})),
    on(fromUsuariosAction.deleteUsuarioFail, (state, {error}) => ({...state,  error: error})),
    
    )

export function usuarioReducer( state = initialState, action: Action) {
    return _usuarioReducer(state, action);

}
//REDUCER

//SELECTORS - obs -> você consegui fazer filtros buscar por determinada caracterisicas
const getUsuarioFeatureState = createFeatureSelector<UsuariosState>('usuarios');

export const getUsuarios = createSelector(
    getUsuarioFeatureState,
    (state : UsuariosState) => state.usuarios
);

export const getUsuario = createSelector(
    getUsuarioFeatureState,
    (state : UsuariosState) => state.usuario
);

export const getUsuarioErro = createSelector(
    getUsuarioFeatureState,
    (state : UsuariosState) => state.error
);

//APENAS ADMINISTRADOR
export const getUsuarioAdministradores = createSelector(
    getUsuarioFeatureState,
    (state : UsuariosState) => state.usuarios.filter((filter) => filter.perfil.toLocaleLowerCase() === 'administrador')
);

//USUARIOS COM IDADE MAIOR QUE 50
export const getUsuarioIdadeMaiorQue50 = createSelector(
    getUsuarioFeatureState,
    (state : UsuariosState) => state.usuarios.filter((filter) => filter.idade > 50)
);
//SELECTORS
