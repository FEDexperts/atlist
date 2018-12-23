import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromShoppingList from '../store';

export const getShoppingListState = createFeatureSelector<fromShoppingList.State>('shopping-list');

export const getListState = createSelector(
    getShoppingListState,
    shoppingList => shoppingList.results
);

export const getSingleState = createSelector(
    getShoppingListState,
    shoppingList => shoppingList.selected
);
