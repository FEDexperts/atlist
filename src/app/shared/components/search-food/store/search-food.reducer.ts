import { SearchActions, SearchActionTypes } from "./search-food.actions";

export interface State {
    searchValue: string;
    results: any;
    enableAdd?: boolean;
}

const initialState: State = {
    searchValue: null,
    results: null,
}

export function reducer(state: State = initialState, action: SearchActions) {
    switch (action.type) {
        case SearchActionTypes.SEARCH:
            return Object.assign({}, state, { searchValue: action.payload.searchValue });
        case SearchActionTypes.SEARCH_SUCCESS:
            return Object.assign({}, state, { results: action.payload });
        case SearchActionTypes.SEARCH_ENABLE_ADD:
            return Object.assign({}, state, { enableAdd: action.payload });
        case SearchActionTypes.SEARCH_RESET:
            return Object.assign({}, state, { results: null });
        default:
            return state;
    }
}