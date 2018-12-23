import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { tap, switchMap, map } from "rxjs/operators";
import { ApiService } from "../../../shared/services/api.service";
import { environment } from "../../../../environments/environment";
import { AddItem, listActionsTypes, listConfig, GetList, AddItemSuccess } from "../../../core/list";

@Injectable()
export class MissingListEffects {

    @Effect()
    addItem$ = this.actions$
        .pipe(
            ofType<AddItem>(listActionsTypes.ADD_ITEM),
            tap(action => console.log(action.payload)),
            switchMap(action => {
                return this.api.post(`${environment.url}${listConfig.missing.listService}`, { foodId: action.payload.FoodId })
                    .pipe(
                        map(res => {
                            return new GetList({ listConfig: listConfig.missing });
                        })
                    )
            }),
        )



    constructor(private actions$: Actions, private api: ApiService) { }
}