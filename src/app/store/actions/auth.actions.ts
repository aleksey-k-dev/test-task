import { createAction, props } from '@ngrx/store';

export enum LoginActionTypes {
    requestLogin = '[Auth] Request login',
    successLogin = '[Auth] Success login',
    errorLogin = '[Auth] Error login',
    logout = '[Auth] Logout'
}

export const requestLogin = createAction(
    LoginActionTypes.requestLogin,
    props<{ username: string, password: string }>()
);

export const successLogin = createAction(
    LoginActionTypes.successLogin,
    props<{ accessToken: string }>()
);

export const errorLogin = createAction(
    LoginActionTypes.errorLogin,
    props<{ error: string }>()
);

export const logout = createAction(LoginActionTypes.logout);
