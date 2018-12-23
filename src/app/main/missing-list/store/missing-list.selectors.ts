import { createSelector, createFeatureSelector } from "@ngrx/store";
import * as fromMissingList from '../store';

export const getMissingListState = createFeatureSelector<fromMissingList.State>('missing-list');

export const getListState = createSelector(
    getMissingListState,
    missingList => missingList.results
)

export const getSelectedState = createSelector(
    getMissingListState,
    missingList => missingList.selected
)