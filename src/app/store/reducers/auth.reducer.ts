import { createReducer, on } from '@ngrx/store';
import { requestLogin, successLogin, errorLogin, logout } from '../actions/auth.actions';
import { environment } from 'src/environments/environment';

export interface AuthState {
    isLoginPrecessing: boolean,
    error: string,
    isLoggedIn: boolean
}

export const initialState: AuthState = {
    isLoginPrecessing: false,
    error: '',
    isLoggedIn: !!localStorage.getItem(environment.authTokenStorageName)
};

const _authReducer = createReducer(initialState,
    on(requestLogin, (state) => ({
        ...state,
        isLoginPrecessing: true
    })),
    on(successLogin, (state) => ({
        ...state,
        isLoginPrecessing: false,
        error: '',
        isLoggedIn: true
    })),
    on(errorLogin, (state, { error }) => ({
        ...state,
        isLoginPrecessing: false,
        error
    })),
    on(logout, (state) => ({
        ...state,
        isLoggedIn: false
    }))
);

export function authReducer(state, action) {
    return _authReducer(state, action);
};
