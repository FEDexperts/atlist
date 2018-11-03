import { Action } from "@ngrx/store";

export enum missingListActionsTypes {
    GET_LIST = '[MissingList] Get missing list',
    GET_LIST_SUCCESS = '[MissingList] Get missing list success',
    GET_SINGLE = '[MissingList] Get single item',
    GET_SINGLE_SUCCESS = '[MissingList] Get single item success',
}

export class GetList implements Action {
    type: string = missingListActionsTypes.GET_LIST;

    constructor(public payload: { listId: number }) { }
}

export class GetListSuccess implements Action {
    type: string = missingListActionsTypes.GET_LIST_SUCCESS;

    constructor(public payload: any) {
    }
}

export class GetListItem implements Action {
    type: string = missingListActionsTypes.GET_SINGLE;

    constructor(public payload: { listId: number, foodId: number }) { }
}

export class GetListItemSuccess implements Action {
    type: string = missingListActionsTypes.GET_SINGLE_SUCCESS;

    constructor(public payload: any) { }
}

export type missingListActions =
    GetList |
    GetListSuccess |
    GetListItem |
    GetListItemSuccess;