import { listActionsTypes } from '../../../core/list';

export interface State {
    results: any;
    selected?: any;
}

const initialState: State = {
    results: null,
};

export function reducer(state: State = initialState, action) {
    switch (action.type) {
        case listActionsTypes.GET_LIST_SUCCESS:
        case listActionsTypes.ADD_ITEM_SUCCESS:
        case listActionsTypes.REMOVE_ITEM_SUCCESS:
        case listActionsTypes.UPDATE_ITEM_SUCCESS:
            return Object.assign({}, state, { results: action.payload });
        case listActionsTypes.GET_SINGLE_SUCCESS:
            return Object.assign({}, state, { selected: action.payload });
        default:
            return state;
    }
}
