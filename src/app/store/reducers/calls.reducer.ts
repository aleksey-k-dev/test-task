import { createReducer, on } from '@ngrx/store';
import { Call } from 'src/app/interfaces/call.interface';
import { requestCallsFetching, successCallsFetching, errorCallsFetching, requestSingleCallFetching, successSingleCallFetching, errorSingleCallFetching, requestCallUpdate, successCallUpdate, errorCallUpdate } from '../actions/calls.actions';

export interface CallsState {
    isCallsFetching: boolean,
    callsFetchingError: string,
    calls: Call[]
    isActiveCallFetching: boolean,
    activeCallFetchingError: string,
    activeCall: Call | null,
    isCallUpdating: boolean,
    hasCallUpdated: boolean,
    callUpdateError: string
}

export const initialCallsState: CallsState = {
    isCallsFetching: false,
    callsFetchingError: '',
    calls: [],
    isActiveCallFetching: false,
    activeCallFetchingError: '',
    activeCall: null,
    isCallUpdating: false,
    hasCallUpdated: false,
    callUpdateError: ''
};

const _callsReducer = createReducer(initialCallsState,
    on(requestCallsFetching, (state) => ({
        ...state,
        isCallsFetching: true
    })),
    on(successCallsFetching, (state, { calls }) => ({
        ...state,
        isCallsFetching: false,
        calls
    })),
    on(errorCallsFetching, (state, { error }) => ({
        ...state,
        isCallsFetching: false,
        error
    })),
    on(requestSingleCallFetching, (state) => ({
        ...state,
        isActiveCallFetching: true,
        activeCall: null
    })),
    on(successSingleCallFetching, (state, { call }) => ({
        ...state,
        isActiveCallFetching: false,
        activeCall: call,
        hasCallUpdated: false
    })),
    on(errorSingleCallFetching, (state, { error }) => ({
        ...state,
        isActiveCallFetching: false,
        activeCallFetchingError: error
    })),
    on(requestCallUpdate, (state) => ({
        ...state,
        isCallUpdating: true,
        hasCallUpdated: false
    })),
    on(successCallUpdate, (state) => ({
        ...state,
        isCallUpdating: false,
        hasCallUpdated: true
    })),
    on(errorCallUpdate, (state, { error }) => ({
        ...state,
        isCallUpdating: false,
        callUpdateError: error
    }))
);

export function callsReducer(state, action) {
    return _callsReducer(state, action);
};
