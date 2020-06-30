import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AuthState } from './store/reducers/auth.reducer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isLoggedIn$: Observable<boolean>;

  constructor(store: Store<{ auth: AuthState }>) {
    this.isLoggedIn$ = store.pipe(
      select('auth'),
      map((state) => state.isLoggedIn)
    );
  }
}
