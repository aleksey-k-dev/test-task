import { createReducer, on } from '@ngrx/store';
import { Call } from 'src/app/interfaces/call.interface';
import { requestCallsFetching, successCallsFetching, errorCallsFetching } from '../actions/calls.actions';

export interface CallsState {
    isCallsFetching: boolean,
    callsFetchingError: string,
    calls: Call[]
}

export const initialCallsState: CallsState = {
    isCallsFetching: false,
    callsFetchingError: '',
    calls: []
};

function mapDateFormat(date: string): string {
    return `${date.substring(6, 10)}-${date.substring(3, 5)}-${date.substring(0, 2)} ${date.substring(11)}`;
}

const _callsReducer = createReducer(initialCallsState,
    on(requestCallsFetching, (state) => ({
        ...state,
        isCallsFetching: true
    })),
    on(successCallsFetching, (state, { calls }) => ({
        ...state,
        isCallsFetching: false,
        calls: calls.map((call) => ({
            ...call,
            startedAt: mapDateFormat(call.startedAt),
            finishedAt: mapDateFormat(call.finishedAt)
        }))
    })),
    on(errorCallsFetching, (state, { error }) => ({
        ...state,
        isCallsFetching: false,
        error
    }))
);

export function callsReducer(state, action) {
    return _callsReducer(state, action);
};
