import { Action } from "@ngrx/store";

export enum SearchActionTypes {
    SEARCH = "[Search] search food",
    SEARCH_SUCCESS = "[Search] search food success",
    SEARCH_ENABLE_ADD = "[Search] Enable add",
    SEARCH_RESET = "[Search] Reset",
}

export class Search implements Action {
    type: string = SearchActionTypes.SEARCH;

    constructor(public payload: { searchValue: string }) { }
}

export class SearchSuccess implements Action {
    type: string = SearchActionTypes.SEARCH_SUCCESS;

    constructor(public payload: any) { }
}

export class SearchEnableAdd implements Action {
    type: string = SearchActionTypes.SEARCH_ENABLE_ADD;

    constructor(public payload: boolean) { }
}

export class SearchReset implements Action {
    type: string = SearchActionTypes.SEARCH_RESET;

}

export type SearchActions =
    Search |
    SearchSuccess |
    SearchEnableAdd;