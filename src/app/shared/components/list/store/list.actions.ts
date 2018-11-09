import { Action } from "@ngrx/store";

export enum listActionsTypes {
    VALUE_CHANGED = '[List] Value changed',
    REMOVE_ITEM = '[List] Remove item',
}

export class ListValueChange implements Action {
    type: string = listActionsTypes.VALUE_CHANGED;

    constructor(public payload: any) { }
}

export class RemoveListItem implements Action {
    type: string = listActionsTypes.REMOVE_ITEM;

    constructor(public payload: any) { }
}

export type listActions =
    ListValueChange |
    RemoveListItem;