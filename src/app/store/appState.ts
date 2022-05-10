import { ActionReducerMap } from '@ngrx/store';
import { UsuarioEffects } from './usuarios/usuarioEffects';
import { usuarioReducer, UsuariosState } from './usuarios/usuarioReducer';

export interface AppState {
    usuarios: UsuariosState,
    // novoState: NovoState

}

export const appReducer: ActionReducerMap<AppState> = {
    usuarios: usuarioReducer,
    // novoState: novosReducer
} 

export const appEffects = [
    UsuarioEffects,
    // novoEffects
]