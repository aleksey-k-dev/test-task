import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CallsService } from 'src/app/services/calls.service';
import { requestCallsFetching, successCallsFetching, errorCallsFetching } from '../actions/calls.actions';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class CallsEffects {
    public requestCalls$ = createEffect(() => this.actions$.pipe(
        ofType(requestCallsFetching),
        switchMap(() => this.callsService.getCalls().pipe(
            map((calls) => successCallsFetching({
                calls
            })),
            catchError(() => of(errorCallsFetching({
                error: 'Cannot fetch calls, please try again'
            })))
        ))
    ));

    private callsService: CallsService;

    constructor(
        private actions$: Actions,
        callsService: CallsService
    ) {
        this.callsService = callsService;
    }
}
