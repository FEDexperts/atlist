import { genActions } from "./general.actions";

export interface GeneralState {
    measurements: any[],
}

const initialState: GeneralState = {
    measurements: null,
}

export function generalReducer(state: GeneralState = initialState, action: genActions) {
    switch (action.type) {
        default:
            return state;
    }
}