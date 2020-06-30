import { createAction, props } from '@ngrx/store';
import { Call } from 'src/app/interfaces/call.interface';

export enum CallsActionTypes {
    requestCallsFetching = '[Calls] Request calls fetching',
    successCallsFetching = '[Calls] Success calls fetching',
    errorCallsFetching = '[Calls] Error calls fetching'
}

export const requestCallsFetching = createAction(CallsActionTypes.requestCallsFetching);

export const successCallsFetching = createAction(
    CallsActionTypes.successCallsFetching,
    props<{ calls: Call[] }>()
);

export const errorCallsFetching = createAction(
    CallsActionTypes.errorCallsFetching,
    props<{ error: string }>()
);
