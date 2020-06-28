import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { AuthState } from 'src/app/store/reducers/auth.reducer';
import { requestLogin, errorLogin } from 'src/app/store/actions/auth.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  public form: FormGroup;
  public authState$: Observable<AuthState>;

  private store: Store<{ auth: AuthState }>;

  constructor(
    store: Store<{ auth: AuthState }>,
    formBuilder: FormBuilder
  ) {
    this.store = store;

    this.authState$ = store.pipe(
      select('auth')
    );

    this.form = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public login(): void {
    this.form.markAllAsTouched();

    if (!this.form.valid) {
      this.store.dispatch(errorLogin({
        error: 'Enter username and password'
      }));
    } else {
      this.store.dispatch(requestLogin({
        username: this.form.controls.username.value,
        password: this.form.controls.password.value
      }));
    }
  }
}
