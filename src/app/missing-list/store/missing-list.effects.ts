import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import {
    GetList,
    missingListActionsTypes,
    GetListSuccess,
    GetSingle,
    GetSingleSuccess,
    AddItem,
    AddItemSuccess,
    RemoveItemSuccess
} from "./missing-list.actions";
import { tap, switchMap, map } from "rxjs/operators";
import { of } from "rxjs";
import { ApiService } from "../../shared/services/api.service";
import { environment } from "../../../environments/environment";
import { ListValueChange, listActionsTypes, RemoveListItem } from "../../shared/components/list/store";
import { isNullOrUndefined } from "util";
import { EnableAdd } from "../../shared/components/search-food/store/search-food.actions";
import { response } from "../../shared/interaces/response";

@Injectable()
export class MissingEffects {
    private listId = 2;

    @Effect()
    getList$ = this.actions$
        .pipe(
            ofType<GetList>(missingListActionsTypes.GET_LIST),
            switchMap(action => {
                return this.api.get(`${environment.url}api/lists/missing/${this.listId}`)
                    .pipe(
                        map((res: { errorCode: number, results: any[] }) => {
                            return new GetListSuccess(res.results);
                        }),
                    )
            }),
        )

    @Effect()
    getSingle$ = this.actions$
        .pipe(
            ofType<GetSingle>(missingListActionsTypes.GET_SINGLE),
            switchMap(action => {
                return this.api.get(`${environment.url}api/lists/missing/${this.listId}/${action.payload.FoodId}`)
                    .pipe(
                        map((res: response) => {
                            return new EnableAdd(res.results.length === 0);
                        })
                    )
            })
        )

    @Effect()
    addItem$ = this.actions$
        .pipe(
            ofType<AddItem>(missingListActionsTypes.ADD_ITEM),
            switchMap(action => {
                return this.api.post(`${environment.url}api/lists/missing/${this.listId}`, { foodId: action.payload.itemId })
                    .pipe(
                        map((res: response) => {
                            return new AddItemSuccess(res.results[0]);
                        })
                    )
            }),
        )

    @Effect({ dispatch: false })
    valueChange$ = this.actions$
        .pipe(
            ofType<ListValueChange>(listActionsTypes.VALUE_CHANGED),
            tap(action => console.log(action)),
            switchMap(action => {
                return this.api.put(`${environment.url}api/lists/missing/${this.listId}/${action.payload.item.itemId}`, { value: action.payload.value })
            })
        )

    @Effect()
    removeItem$ = this.actions$
        .pipe(
            ofType<RemoveListItem>(listActionsTypes.REMOVE_ITEM),
            switchMap(action => {
                return this.api.delete(`${environment.url}api/lists/missing/${this.listId}/${action.payload.item.itemId}`)
                    .pipe(
                        map((res: response) => {
                            return new RemoveItemSuccess(res.results);
                        })
                    )
            })
        )

    constructor(private actions$: Actions, private api: ApiService) { }
}