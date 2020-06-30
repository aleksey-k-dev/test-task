import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';
import { AuthState } from '../store/reducers/auth.reducer';
import { tap } from 'rxjs/operators';
import { logout } from '../store/actions/auth.actions';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
    private store: Store<{ auth: AuthState }>;

    constructor(store: Store<{ auth: AuthState }>) {
        this.store = store;
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const newReq = req.clone({
            setHeaders: {
                Authorization: `Bearer ${localStorage.getItem(environment.authTokenStorageName)}`
            }
        });

        return next.handle(newReq).pipe(
            tap({
                error: (err) => {
                    if (err instanceof HttpErrorResponse && err.status === 401) {
                        this.store.dispatch(logout());
                    }
                }
            })
        );
    }
}
