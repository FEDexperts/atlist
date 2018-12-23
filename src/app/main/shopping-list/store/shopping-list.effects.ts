import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {tap, switchMap, map, catchError} from 'rxjs/operators';
import {ApiService} from '../../../shared/services/api.service';
import {environment} from '../../../../environments/environment';
import {AddItem, listActionsTypes, listConfig, AddItemSuccess, AddItemFailure} from '../../../core/list';
import {of} from 'rxjs';

@Injectable()
export class ShoppingListEffects {

    @Effect()
    addItem$ = this.actions$
        .pipe(
            ofType<AddItem>(listActionsTypes.ADD_ITEM),
            switchMap(action => {
                return this.api.post(`${environment.url}/${listConfig.shopping.listService}`, {itemId: action.payload.foodId})
                    .pipe(
                        map(res => {
                            return new AddItemSuccess(res);
                        }),
                        catchError(err => of(new AddItemFailure(err)))
                    );
            }),
        );


    constructor(private actions$: Actions, private api: ApiService) {
    }
}