import { createSelector } from "@ngrx/store";
import { getSearchState } from "../../../../store";

export const getSearchResultsState = createSelector(
    getSearchState,
    search => search.results
)