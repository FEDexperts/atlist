import { missingListActionsTypes, missingListActions } from "./missing-list.actions";

export interface State {
    list: any,
    selected?: any,
}

const initialState: State = {
    list: null,
};

export function reducer(state: State = initialState, action) {
    switch (action.type) {
        case missingListActionsTypes.GET_LIST_SUCCESS:
            return Object.assign({}, state, { list: action.payload });
        case missingListActionsTypes.GET_SINGLE_SUCCESS:
            return Object.assign({}, state, { selected: action.payload });
        case missingListActionsTypes.ADD_ITEM_SUCCESS:
            return Object.assign({}, state, { list: action.payload });
        default:
            return state;
    }
}