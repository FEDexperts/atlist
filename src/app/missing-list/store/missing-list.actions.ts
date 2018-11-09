import { Action } from "@ngrx/store";

export enum missingListActionsTypes {
    GET_LIST = '[MissingList] Get missing list',
    GET_LIST_SUCCESS = '[MissingList] Get missing list success',
    GET_SINGLE = '[MissingList] Get single item',
    GET_SINGLE_SUCCESS = '[MissingList] Get single item success',
    ADD_ITEM = '[MissingList] Add item',
    ADD_ITEM_SUCCESS = '[MissingList] Add item success',
    REMOVE_ITEM_SUCCESS = '[MissingList] Remove item success',
}

export class GetList implements Action {
    type: string = missingListActionsTypes.GET_LIST;
}

export class GetListSuccess implements Action {
    type: string = missingListActionsTypes.GET_LIST_SUCCESS;

    constructor(public payload: any) {
    }
}

export class GetSingle implements Action {
    type: string = missingListActionsTypes.GET_SINGLE;

    constructor(public payload: any) { }
}

export class GetSingleSuccess implements Action {
    type: string = missingListActionsTypes.GET_SINGLE_SUCCESS;

    constructor(public payload: any) { }
}

export class AddItem implements Action {
    type: string = missingListActionsTypes.ADD_ITEM;

    constructor(public payload: any) { }
}

export class AddItemSuccess implements Action {
    type: string = missingListActionsTypes.ADD_ITEM_SUCCESS;

    constructor(public payload: any) { }
}

export class RemoveItemSuccess implements Action {
    type: string = missingListActionsTypes.REMOVE_ITEM_SUCCESS;

    constructor(public payload: any) { }
}

export type missingListActions =
    GetList |
    GetListSuccess |
    GetSingle |
    GetSingleSuccess |
    AddItem |
    AddItemSuccess |
    RemoveItemSuccess;