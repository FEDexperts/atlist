import {Injectable} from '@angular/core';
import {Effect, Actions, ofType} from '@ngrx/effects';
import {ApiService} from '../../shared/services/api.service';
import {switchMap, map, catchError} from 'rxjs/operators';
import {
    listActionsTypes,
    GetListSuccess,
    GetSingle,
    GetList,
    GetSingleSuccess,
    RemoveItemFailure, UpdateItemSuccess, UpdateItemFailure, GetListFailure
} from '.';
import {environment} from '../../../environments/environment';
import {RemoveItem, RemoveItemSuccess, UpdateItem, GetSingleFailure} from './list.actions';
import {of} from 'rxjs';

@Injectable()
export class ListEffects {

    @Effect({dispatch: false})
    hello$ = this.actions$
        .pipe(
            ofType<GetList>(listActionsTypes.GET_LIST),
            map(action => {
                return this.api.get(`${environment.url}/lists/hello`)
                    .subscribe(res => console.log('atlist => ', res));
            }),
        );

    @Effect()
    get$ = this.actions$
        .pipe(
            ofType<GetList>(listActionsTypes.GET_LIST),
            switchMap(action => {
                return this.api.get(`${environment.url}/${action.payload.list.listService}`)
                    .pipe(
                        map(res => {
                            return new GetListSuccess(res);
                        }),
                        catchError(err => of(new GetListFailure(err))),
                    );
            }),
        );

    @Effect()
    getSingle$ = this.actions$
        .pipe(
            ofType<GetSingle>(listActionsTypes.GET_SINGLE),
            switchMap(action => {
                return this.api.get(`${environment.url}/${action.payload.list.listService}/${action.payload.id}`)
                    .pipe(
                        map(res => {
                            return new GetSingleSuccess(res);
                        }),
                        catchError(err => of(new GetSingleFailure(err))),
                    );
            })
        );

    @Effect()
    removeItem$ = this.actions$
        .pipe(
            ofType<RemoveItem>(listActionsTypes.REMOVE_ITEM),
            switchMap(action => {
                return this.api.delete(`${environment.url}/${action.payload.list.listService}/${action.payload.id}`)
                    .pipe(
                        map(res => {
                            return new RemoveItemSuccess(res);
                        }),
                        catchError(err => of(new RemoveItemFailure(err))),
                    );
            })
        );

    @Effect({dispatch: false})
    updateItem$ = this.actions$
        .pipe(
            ofType<UpdateItem>(listActionsTypes.UPDATE_ITEM),
            switchMap(action => {
                return this.api.patch(`${environment.url}/${action.payload.list.listService}/${action.payload.id}`, action.payload.data)
                    .pipe(
                        map(res => {
                            return new UpdateItemSuccess(res);
                        }),
                        catchError(err => of(new UpdateItemFailure(err))),
                    );
            })
        );

    constructor(private actions$: Actions, private api: ApiService) {
    }
}
