import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { ApiService } from "../../shared/services/api.service";
import { switchMap, map, tap } from "rxjs/operators";
import {
    listActionsTypes,
    GetListSuccess,
    GetSingle,
    GetList,
    GetSingleSuccess,
    AddItem
} from ".";
import { environment } from "../../../environments/environment";
import { AddItemSuccess, RemoveItem, RemoveItemSuccess, ListValueChange } from "./list.actions";

@Injectable()
export class ListEffects {
    @Effect()
    getList$ = this.actions$
        .pipe(
            ofType<GetList>(listActionsTypes.GET_LIST),
            switchMap(action => {
                return this.api.get(`${environment.url}api/${action.payload.listConfig.listService}/${action.payload.listConfig.listId}`)
                    .pipe(
                        map(res => {
                            return new GetListSuccess(res);
                        }),
                    )
            }),
        )

    @Effect()
    getSingle$ = this.actions$
        .pipe(
            ofType<GetSingle>(listActionsTypes.GET_SINGLE),
            switchMap(action => {
                return this.api.get(`${environment.url}api/${action.payload.listConfig.listService}/${action.payload.listConfig.listId}/${action.payload.id}`)
                    .pipe(
                        map((res: any[]) => {
                            return new GetSingleSuccess(res);
                        })
                    )
            })
        )

    @Effect()
    removeItem$ = this.actions$
        .pipe(
            ofType<RemoveItem>(listActionsTypes.REMOVE_ITEM),
            tap(action => console.log(action.payload)),
            switchMap(action => {
                return this.api.delete(`${environment.url}api/${action.payload.listConfig.listService}/${action.payload.listConfig.listId}/${action.payload.id}`)
                    .pipe(
                        map(res => {
                            return new GetList({ listConfig: action.payload.listConfig });
                        })
                    )
            })
        )

    @Effect({ dispatch: false })
    valueChange$ = this.actions$
        .pipe(
            ofType<ListValueChange>(listActionsTypes.VALUE_CHANGED),
            tap(action => console.log(action)),
            switchMap(action => {
                return this.api.put(`${environment.url}api/${action.payload.listConfig.listService}/${action.payload.listConfig.listId}/${action.payload.id}`, { value: action.payload.value })
                    .pipe(
                        map(res => {
                        })
                    )
            })
        )

    constructor(private actions$: Actions, private api: ApiService) { }
}