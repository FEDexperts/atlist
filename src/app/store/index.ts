import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { } from "@ngrx/store";

import * as fromMissingList from '../missing-list/store';
import * as fromSearchFoodState from '../shared/components/search-food/store';

export interface AppState {
    missingList: fromMissingList.State,
    search: fromSearchFoodState.State
}

export const reducers: ActionReducerMap<AppState> = {
    missingList: fromMissingList.reducer,
    search: fromSearchFoodState.reducer
}

export const getMissingListState = createFeatureSelector<fromMissingList.State>('missingList');
export const getSearchState = createFeatureSelector<fromSearchFoodState.State>('search');