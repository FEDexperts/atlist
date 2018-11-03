import { createSelector } from "@ngrx/store";
import { getSearchState } from "../../../../store";

export const getSearchResultsState = createSelector(
    getSearchState,
    search => search.results
)

export const getSearchEnableAddState = createSelector(
    getSearchState,
    search => search.enableAdd
)