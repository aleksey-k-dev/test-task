import { createReducer, on } from '@ngrx/store';
import { requestLogin, successLogin, errorLogin, logout } from '../actions/auth.actions';

export interface AuthState {
    isLoginPrecessing: boolean,
    error: string
}

export const initialState: AuthState = {
    isLoginPrecessing: false,
    error: ''
};

const _authReducer = createReducer(initialState,
    on(requestLogin, (state) => ({ ...state, isLoginPrecessing: true })),
    on(successLogin, (state) => ({
        ...state,
        isLoginPrecessing: false,
        error: ''
    })),
    on(errorLogin, (state, { error }) => ({
        ...state,
        isLoginPrecessing: false,
        error
    })),
    on(logout, (state) => ({ ...state }))
);

export function authReducer(state, action) {
    return _authReducer(state, action);
};
