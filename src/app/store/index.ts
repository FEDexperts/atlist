import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IUnit } from '../shared/types/unit';
import { AppState, GeneralState } from '../app.types';

export * from './app.reducer';

export const getGeneralState = createFeatureSelector<GeneralState>('general');
export const getUnitsState = createSelector(getGeneralState, state => state.units);
export const getEnableAddState = createSelector(getGeneralState, state => state.enableAdd);