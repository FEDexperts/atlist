import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

// import { } from "@ngrx/store";

import * as fromMissingList from '../missing-list/store';
import * as fromSearchFoodState from '../shared/components/search-food/store';
// import { GeneralState, generalReducer } from '../core/general/store/gen.reducer';

// export interface AppState {
//     general: GeneralState,
//     missingList: fromMissingList.State,
//     search: fromSearchFoodState.State,
// }

// export const reducers: ActionReducerMap<AppState> = {
//     general: generalReducer,
//     missingList: fromMissingList.reducer,
//     search: fromSearchFoodState.reducer,
// }

export const getMissingListState = createFeatureSelector<fromMissingList.State>('missing-list');
export const getSearchState = createFeatureSelector<fromSearchFoodState.State>('search');