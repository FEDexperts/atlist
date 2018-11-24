import { Action } from "@ngrx/store";

export enum genActionTypes {
    GET_MEASUREMENTS = '[List] Get measurments',
}

export class GetMeasurements implements Action {
    type: string = genActionTypes.GET_MEASUREMENTS;
}

export type genActions = GetMeasurements;