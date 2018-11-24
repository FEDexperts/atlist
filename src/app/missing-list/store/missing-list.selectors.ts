import { createSelector } from "@ngrx/store";
import { getMissingListState } from "../../store";

export const getListState = createSelector(
    getMissingListState,
    missingList => missingList.results
)

export const getSelectedState = createSelector(
    getMissingListState,
    missingList => missingList.selected
)