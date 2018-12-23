import { IUnit } from "./shared/types/unit";
import { ActionReducerMap } from "@ngrx/store";

import * as fromApp from './store';

export interface GeneralState {
    units: IUnit[];
    enableAdd: boolean;
}

export interface AppState {
}

export const reducers: ActionReducerMap<any> = {
    general: fromApp.appReducer,
};
