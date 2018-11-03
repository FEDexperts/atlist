import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { GetList, missingListActions, missingListActionsTypes, GetListSuccess, GetListItem, GetListItemSuccess, AddItem, AddItemSuccess } from "./missing-list.actions";
import { tap, switchMap, map } from "rxjs/operators";
import { of } from "rxjs";
import { ApiService } from "../../shared/services/api.service";
import { environment } from "../../../environments/environment";

@Injectable()
export class MissingEffects {

    @Effect()
    getList$ = this.actions$
        .pipe(
            ofType<GetList>(missingListActionsTypes.GET_LIST),
            switchMap(action => {
                return this.api.get(`${environment.url}api/lists/missing/${action.payload.listId}`)
                    .pipe(
                        map(res => {
                            return new GetListSuccess(res)
                        }),
                    )
            }),
        )

    @Effect()
    getSingle$ = this.actions$
        .pipe(
            ofType<GetListItem>(missingListActionsTypes.GET_SINGLE),
            switchMap(action => {
                return this.api.get(`${environment.url}api/lists/missing/${action.payload.listId}/single/`, { foodId: action.payload.foodId })
                    .pipe(
                        map(res => {
                            return new GetListItemSuccess(res);
                        })
                    )
            })
        )

    @Effect()
    addItem$ = this.actions$
        .pipe(
            ofType<AddItem>(missingListActionsTypes.ADD_ITEM),
            switchMap(action => {
                return this.api.post(`${environment.url}api/lists/missing/${action.payload.listId}`, action.payload.item)
                    .pipe(
                        map(res => {
                            return new AddItemSuccess(res)
                        })
                    )
            }),
        )

    constructor(private actions$: Actions, private api: ApiService) { }
}