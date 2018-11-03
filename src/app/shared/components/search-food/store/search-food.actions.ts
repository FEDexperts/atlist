import { Action } from "@ngrx/store";

export enum SearchActionTypes {
    SEARCH = "[Search Food] search food",
    SEARCH_SUCCESS = "[Search Food] search food success",
}

export class Search implements Action {
    type: string = SearchActionTypes.SEARCH;

    constructor(public payload: { searchValue: string }) { }
}

export class SearchSuccess implements Action {
    type: string = SearchActionTypes.SEARCH_SUCCESS;

    constructor(public payload: any) { }
}

export type SearchActions =
    Search |
    SearchSuccess;