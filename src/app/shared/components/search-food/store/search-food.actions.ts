import { Action } from "@ngrx/store";

export enum SearchActionTypes {
    SEARCH = "[Search] search food",
    SEARCH_SUCCESS = "[Search] search food success",
    ENABLE_ADD = "[Search] Enable add",
}

export class Search implements Action {
    type: string = SearchActionTypes.SEARCH;

    constructor(public payload: { searchValue: string }) { }
}

export class SearchSuccess implements Action {
    type: string = SearchActionTypes.SEARCH_SUCCESS;

    constructor(public payload: any) { }
}

export class EnableAdd implements Action {
    type: string = SearchActionTypes.ENABLE_ADD;

    constructor(public payload: boolean) { }
}

export type SearchActions =
    Search |
    SearchSuccess;