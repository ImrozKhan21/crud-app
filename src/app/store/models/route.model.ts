import {IAppState} from '../app.state';
import {createSelector} from '@ngrx/store';

export interface IRouteState {
  currentRouteState: string;
}

export const getState = (state: IAppState) => state;

export const getRouteState = (state: IAppState) => state.routeState;

export const getCurrentRoute = createSelector(getRouteState, (state: IRouteState) => state.currentRouteState);


