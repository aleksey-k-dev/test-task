import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CallsState } from 'src/app/store/reducers/calls.reducer';
import { Store } from '@ngrx/store';
import { requestSingleCallFetching } from 'src/app/store/actions/calls.actions';

@Component({
  selector: 'app-call-details-page',
  templateUrl: './call-details-page.component.html',
  styleUrls: ['./call-details-page.component.scss']
})
export class CallDetailsPageComponent implements OnInit, OnDestroy {
  private route: ActivatedRoute;
  private paramsSubscription: Subscription;
  private store: Store<{ calls: CallsState }>;

  constructor(
    route: ActivatedRoute,
    store: Store<{ calls: CallsState }>
  ) {
    this.route = route;
    this.store = store;
  }

  ngOnInit(): void {
    this.paramsSubscription = this.route.paramMap.subscribe((params) => {
      const callId = params.get('id');

      if (callId !== null) {
        this.store.dispatch(requestSingleCallFetching({
          id: +callId
        }));
      }
    });
  }

  ngOnDestroy(): void {
    if (this.paramsSubscription) {
      this.paramsSubscription.unsubscribe();
    }
  }
}
