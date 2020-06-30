import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { requestLogin, successLogin, errorLogin, logout } from '../actions/auth.actions';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
    public requestLogin$ = createEffect(() => this.actions$.pipe(
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
        }),
        tap(() => {
            this.router.navigate(['/']);
        })
    ), { dispatch: false });

    public logout$ = createEffect(() => this.actions$.pipe(
        ofType(logout),
        tap(() => {
            localStorage.removeItem(environment.authTokenStorageName);
        }),
        tap(() => {
            this.router.navigate(['/login']);
        })
    ), { dispatch: false });

    private authService: AuthService;
    private router: Router;

    constructor(
        private actions$: Actions,
        authService: AuthService,
        router: Router
    ) {
        this.actions$ = actions$;
        this.authService = authService;
        this.router = router;
    }
}
