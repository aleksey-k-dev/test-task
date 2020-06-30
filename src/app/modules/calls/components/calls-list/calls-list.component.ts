import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CallsState } from 'src/app/store/reducers/calls.reducer';
import { requestCallsFetching } from 'src/app/store/actions/calls.actions';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Call } from 'src/app/interfaces/call.interface';

@Component({
  selector: 'app-calls-list',
  templateUrl: './calls-list.component.html',
  styleUrls: ['./calls-list.component.scss']
})
export class CallsListComponent implements OnInit {
  public calls$: Observable<Call[]>;

  private store: Store<{ calls: CallsState }>;

  constructor(store: Store<{ calls: CallsState }>) {
    this.store = store;

    this.calls$ = store.pipe(
      select('calls'),
      map((state) => state.calls)
    );
  }

  ngOnInit(): void {
    this.store.dispatch(requestCallsFetching());
  }
}
