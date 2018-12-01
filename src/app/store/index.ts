import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromMissingList from '../missing-list/store';

export const getMissingListState = createFeatureSelector<fromMissingList.State>('missing-list');