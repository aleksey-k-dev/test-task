import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/app/store/reducers/auth.reducer';
import { logout } from 'src/app/store/actions/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private store: Store<{ auth: AuthState }>;

  constructor(store: Store<{ auth: AuthState }>) {
    this.store = store;
  }

  public logout(): void {
    this.store.dispatch(logout());
  }
}
