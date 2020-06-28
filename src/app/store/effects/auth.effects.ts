import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { requestLogin, successLogin, errorLogin, logout } from '../actions/auth.actions';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthEffects {
    public requestLogin$ = createEffect(() => this.actions$.pipe(
        tap((action) => {
            console.log(action);
        }),
        ofType(requestLogin),
        switchMap((payload) => this.authService.login(payload.username, payload.password).pipe(
            map((res) => successLogin(res)),
            catchError((res) => of(errorLogin({
                error: res.error
            })))
        ))
    ));

    public successLogin$ = createEffect(() => this.actions$.pipe(
        ofType(successLogin),
        tap((action) => {
            localStorage.setItem(environment.authTokenStorageName, action.accessToken)
        })
    ), { dispatch: false });

    public logout$ = createEffect(() => this.actions$.pipe(
        ofType(logout),
        tap(() => {
            localStorage.removeItem(environment.authTokenStorageName);
        })
    ), { dispatch: false });

    private authService: AuthService;

    constructor(
        private actions$: Actions,
        authService: AuthService
    ) {
        this.actions$ = actions$;
        this.authService = authService;
    }
}
