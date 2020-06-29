import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthState } from '../store/reducers/auth.reducer';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private router: Router;
  private store: Store<{ auth: AuthState }>;

  constructor(
    router: Router,
    store: Store<{ auth: AuthState }>
  ) {
    this.router = router;
    this.store = store;
  }

  canActivate(): Observable<boolean | UrlTree> {
    return this.store.pipe(
      take(1),
      select('auth'),
      map((state) => state.isLoggedIn ? true : this.router.parseUrl('/login'))
    );
  }
}
