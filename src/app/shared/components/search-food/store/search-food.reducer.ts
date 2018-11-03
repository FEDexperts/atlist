import { SearchActions, SearchActionTypes } from "./search-food.actions";

export interface State {
    searchValue: string;
    results: any;
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
            return Object.assign({}, state, { results: action.payload })
        default:
            return state;
    }
}