import { Action } from "@ngrx/store";

export enum listActionsTypes {
    GET_LIST = '[List] Get list',
    GET_LIST_SUCCESS = '[List] Get list success',
    GET_SINGLE = '[List] Get single item',
    GET_SINGLE_SUCCESS = '[List] Get single item success',
    ADD_ITEM = '[List] Add item',
    ADD_ITEM_SUCCESS = '[List] Add item success',
    REMOVE_ITEM = '[List] Remove item',
    REMOVE_ITEM_SUCCESS = '[List] Remove item success',
    VALUE_CHANGED = '[List] Value changed',
    VALUE_CHANGED_SUCCESS = '[List] Value changed success',
}

export class GetList implements Action {
    type: string = listActionsTypes.GET_LIST;

    constructor(public payload: any) { }
}

export class GetListSuccess implements Action {
    type: string = listActionsTypes.GET_LIST_SUCCESS;

    constructor(public payload: any) {
    }
}

export class GetSingle implements Action {
    type: string = listActionsTypes.GET_SINGLE;

    constructor(public payload: any) { }
}

export class GetSingleSuccess implements Action {
    type: string = listActionsTypes.GET_SINGLE_SUCCESS;

    constructor(public payload: any) { }
}

export class AddItem implements Action {
    type: string = listActionsTypes.ADD_ITEM;

    constructor(public payload: any) { }
}

export class AddItemSuccess implements Action {
    type: string = listActionsTypes.ADD_ITEM_SUCCESS;
}

export class RemoveItem implements Action {
    type: string = listActionsTypes.REMOVE_ITEM;

    constructor(public payload: any) { }
}

export class RemoveItemSuccess implements Action {
    type: string = listActionsTypes.REMOVE_ITEM_SUCCESS;
}

export class ListValueChange implements Action {
    type: string = listActionsTypes.VALUE_CHANGED;

    constructor(public payload: any) { }
}

export class ListValueChangeSuccess implements Action {
    type: string = listActionsTypes.VALUE_CHANGED_SUCCESS;

    constructor(public payload: any) { }
}

export type listActions =
    GetList |
    GetSingle |
    AddItem |
    RemoveItem |
    ListValueChange;