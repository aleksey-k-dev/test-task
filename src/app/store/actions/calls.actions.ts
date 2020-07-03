import { createAction, props } from '@ngrx/store';
import { Call } from 'src/app/interfaces/call.interface';

export enum CallsActionTypes {
    requestCallsFetching = '[Calls] Request calls fetching',
    successCallsFetching = '[Calls] Success calls fetching',
    errorCallsFetching = '[Calls] Error calls fetching',
    requestSingleCallFetching = '[Calls] Request single call fetching',
    successSingleCallFetching = '[Calls] Success single call fetching',
    errorSingleCallFetching = '[Calls] Error single call fetching',
    requestCallUpdate = '[Calls] Request call update',
    successCallUpdate = '[Calls] Success call update',
    errorCallUpdate = '[Calls] Error call update'
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

export const requestSingleCallFetching = createAction(
    CallsActionTypes.requestSingleCallFetching,
    props<{ id: number }>()
);

export const successSingleCallFetching = createAction(
    CallsActionTypes.successSingleCallFetching,
    props<{ call: Call }>()
);

export const errorSingleCallFetching = createAction(
    CallsActionTypes.errorSingleCallFetching,
    props<{ error: string }>()
);

export const requestCallUpdate = createAction(
    CallsActionTypes.requestCallUpdate,
    props<{ id: number, call: Call }>()
);

export const successCallUpdate = createAction(
    CallsActionTypes.successCallUpdate
);

export const errorCallUpdate = createAction(
    CallsActionTypes.errorCallUpdate,
    props<{ error: string }>()
);
