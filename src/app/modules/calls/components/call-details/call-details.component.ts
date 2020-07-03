import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CallsState } from 'src/app/store/reducers/calls.reducer';
import { Observable, Subscription } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { map, filter, tap } from 'rxjs/operators';
import { Call } from 'src/app/interfaces/call.interface';
import { requestCallUpdate } from 'src/app/store/actions/calls.actions';
import { slide } from 'src/app/animations/slide';

@Component({
  animations: [slide()],
  selector: 'app-call-details',
  templateUrl: './call-details.component.html',
  styleUrls: ['./call-details.component.scss']
})
export class CallDetailsComponent implements OnInit, OnDestroy {
  public callsState$: Observable<CallsState>;
  public form: FormGroup;

  private store: Store<{ calls: CallsState }>;
  private activeCall: Call | null;
  private callsStateSubscription: Subscription;
  private formBuilder: FormBuilder;

  constructor(
    store: Store<{ calls: CallsState }>,
    formBuilder: FormBuilder
  ) {
    this.store = store;
    this.formBuilder = formBuilder;
    this.form = formBuilder.group({});

    this.callsState$ = store.pipe(
      select('calls')
    );
  }

  ngOnInit(): void {
    this.callsStateSubscription = this.store.pipe(
      select('calls'),
      tap(({ activeCall }) => {
        if (this.activeCall && activeCall && this.activeCall.id === activeCall.id) {
          return;
        }

        this.activeCall = activeCall;
        const formGroup = this.callToForm();
        this.form = this.formBuilder.group(formGroup);
      }),
      tap(({ hasCallUpdated }) => {
        if (hasCallUpdated) {
          this.form.markAsPristine();
        }
      })
    ).subscribe();
  }

  ngOnDestroy(): void {
    if (this.callsStateSubscription) {
      this.callsStateSubscription.unsubscribe();
    }
  }

  public saveCall(): void {
    if (!this.activeCall) {
      return;
    }

    this.form.markAsDirty();
    this.store.dispatch(requestCallUpdate({
      id: this.activeCall.id,
      call: this.formToCall()
    }));
  }

  private callToForm(): object {
    return !this.activeCall ? {} : this.activeCall.wrapups.reduce((form, wrapup) => ({
      ...form,
      [`wrapupComment_${wrapup.wrapupId}`]: [wrapup.wrapupComment]
    }), {});
  }

  private formToCall(): Call | null {
    if (!this.activeCall) {
      return null;
    }

    return {
      ...this.activeCall,
      wrapups: this.activeCall.wrapups.map((wrapup) => ({
        ...wrapup,
        wrapupComment: this.form.value[`wrapupComment_${wrapup.wrapupId}`]
      }))
    }
  }
}
