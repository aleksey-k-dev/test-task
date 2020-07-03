import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CallsService } from 'src/app/services/calls.service';
import { requestCallsFetching, successCallsFetching, errorCallsFetching, requestSingleCallFetching, successSingleCallFetching, errorSingleCallFetching, requestCallUpdate, successCallUpdate, errorCallUpdate } from '../actions/calls.actions';
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

    public requestSingleCall$ = createEffect(() => this.actions$.pipe(
        ofType(requestSingleCallFetching),
        switchMap(({ id }) => this.callsService.getCall(id).pipe(
            map((call) => successSingleCallFetching({
                call
            })),
            catchError(() => of(errorSingleCallFetching({
                error: 'Cannot fetch call, please try again'
            })))
        ))
    ));

    public requestCallUpdate$ = createEffect(() => this.actions$.pipe(
        ofType(requestCallUpdate),
        switchMap(({ id, call }) => this.callsService.updateCall(id, call).pipe(
            map(() => successCallUpdate()),
            catchError((res) => of(errorCallUpdate({
                error: typeof res.error === 'string' ? res.error : 'Cannot save a call'
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
