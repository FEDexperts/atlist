import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { GetUnits, appActions, GetUnitsSuccess, GetUnitsFailure } from "./app.actions";
import { tap, switchMap, map, catchError } from "rxjs/operators";
import { GeneralService } from "../shared/services/general.service";
import { of } from "rxjs";

@Injectable()
export class AppEffects {

    @Effect()
    getUnits$ = this.actions$
        .pipe(
            ofType<GetUnits>(appActions.GET_UNITS),
            switchMap(() => {
                return this.generalService.getUnits()
                    .pipe(
                        map(res => new GetUnitsSuccess(res)),
                        catchError(err => of(new GetUnitsFailure(err))),
                    )
            })
        )

    constructor(private actions$: Actions, private generalService: GeneralService) { }
}