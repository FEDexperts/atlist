import {Action} from '@ngrx/store';

export enum listActionsTypes {
    GET_LIST = '[List] Get list',
    GET_LIST_SUCCESS = '[List] Get list success',
    GET_SINGLE = '[List] Get single item',
    GET_SINGLE_SUCCESS = '[List] Get single item success',
    GET_SINGLE_FAILURE = '[List] Get single item failure',
    ADD_ITEM = '[List] Add item',
    ADD_ITEM_SUCCESS = '[List] Add item success',
    ADD_ITEM_FAILURE = '[List] Add item failure',
    REMOVE_ITEM = '[List] Remove item',
    REMOVE_ITEM_SUCCESS = '[List] Remove item success',
    REMOVE_ITEM_FAILURE = '[List] Remove item failure',
    UPDATE_ITEM = '[List] Update list item',
    UPDATE_ITEM_SUCCESS = '[List] Update list item success',
    ENABLE_ADD = '[List] Enable add item',
}

export class GetList implements Action {
    type: string = listActionsTypes.GET_LIST;

    constructor(public payload: any) {
    }
}

export class GetListSuccess implements Action {
    type: string = listActionsTypes.GET_LIST_SUCCESS;

    constructor(public payload: any) {
    }
}

export class GetSingle implements Action {
    type: string = listActionsTypes.GET_SINGLE;

    constructor(public payload: any) {
    }
}

export class GetSingleSuccess implements Action {
    type: string = listActionsTypes.GET_SINGLE_SUCCESS;

    constructor(public payload: any) {
    }
}

export class GetSingleFailure implements Action {
    type: string = listActionsTypes.GET_SINGLE_FAILURE;

    constructor(public payload: any) {
    }
}

export class AddItem implements Action {
    type: string = listActionsTypes.ADD_ITEM;

    constructor(public payload: any) {
    }
}

export class AddItemSuccess implements Action {
    type: string = listActionsTypes.ADD_ITEM_SUCCESS;

    constructor(public payload: any) {
    }
}

export class AddItemFailure implements Action {
    type: string = listActionsTypes.ADD_ITEM_FAILURE;

    constructor(public payload: any) {
    }
}

export class RemoveItem implements Action {
    type: string = listActionsTypes.REMOVE_ITEM;

    constructor(public payload: any) {
    }
}

export class RemoveItemSuccess implements Action {
    type: string = listActionsTypes.REMOVE_ITEM_SUCCESS;
}

export class UpdateItem implements Action {
    type: string = listActionsTypes.UPDATE_ITEM;

    constructor(public payload: any) {
    }
}

export class UpdateItemSuccess implements Action {
    type: string = listActionsTypes.UPDATE_ITEM_SUCCESS;

    constructor(public payload: any) {
    }
}

export class EnableAdd implements Action {
    type: string = listActionsTypes.ENABLE_ADD;

    constructor(public payload: any) {
    }
}

export type listActions =
    GetList |
    GetSingle |
    AddItem |
    RemoveItem;