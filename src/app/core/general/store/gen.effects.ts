import { Actions, Effect, ofType } from "@ngrx/effects";
import { ApiService } from "../../../shared/services/api.service";
import { Injectable } from "@angular/core";
import { GetMeasurements, genActionTypes } from "./general.actions";
import { tap } from "rxjs/operators";

@Injectable()
export class GeneralEffects {

    @Effect({ dispatch: false })
    getMeasurements$ = this.actions$
        .pipe(
            ofType<GetMeasurements>(genActionTypes.GET_MEASUREMENTS),
            tap(action => console.log(action)),
        )

    constructor(private actions$: Actions, private api: ApiService) { }
}