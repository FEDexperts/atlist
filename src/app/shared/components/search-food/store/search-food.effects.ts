import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { ApiService } from "../../../services/api.service";
import { SearchActionTypes, Search, SearchSuccess } from "./search-food.actions";
import { switchMap, map, tap } from "rxjs/operators";
import { food } from "../../../interaces/food.interface";
import { environment } from "../../../../../environments/environment";

@Injectable()
export class SearchEffects {

    @Effect()
    search$ = this.actions$
        .pipe(
            ofType<Search>(SearchActionTypes.SEARCH),
            switchMap(action => {
                return this.api.get<food[]>(`${environment.url}api/foods/search`, { searchValue: action.payload.searchValue })
                    .pipe(
                        map(res => {
                            return new SearchSuccess(res);
                        })
                    )
            })
        )

    constructor(private actions$: Actions, private api: ApiService) { }
}