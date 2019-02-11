import { Action } from '@ngrx/store';

export enum ERoute {
  SetRoute = '[ERoute] Set Route',
}

export class SetRoute implements Action {
  readonly type = ERoute.SetRoute;
  constructor(public payload: string) {}
}

export type RouteActions = SetRoute;
