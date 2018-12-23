import { AppState } from "../app.types";
import { Action } from "@ngrx/store";
import { appActions } from "./app.actions";
import { listActionsTypes } from "../core/list";

const INITIAL_STATE: AppState = {
}

export function appReducer(state: AppState = INITIAL_STATE, action) {
    switch (action.type) {
        case appActions.GET_UNITS_SUCCESS:
            return Object.assign({}, state, { units: action.payload });
        case listActionsTypes.ENABLE_ADD:
            return Object.assign({}, state, { enableAdd: action.payload });
        default:
            return state;
    }
}