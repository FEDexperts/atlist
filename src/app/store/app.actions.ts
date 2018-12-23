import { Action } from "@ngrx/store";

export enum appActions {
    GET_UNITS = '[App] Get units',
    GET_UNITS_SUCCESS = '[App] Get units success',
    GET_UNITS_FAILURE = '[App] Get units failure',
}

export class GetUnits implements Action {
    type: string = appActions.GET_UNITS;
}

export class GetUnitsSuccess implements Action {
    type: string = appActions.GET_UNITS_SUCCESS;

    constructor(public payload: any) { }
}

export class GetUnitsFailure implements Action {
    type: string = appActions.GET_UNITS_FAILURE;

    constructor(public payload: any) { }
}