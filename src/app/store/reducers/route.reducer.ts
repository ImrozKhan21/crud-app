import {IRouteState} from '../models/route.model';
import {ERoute, RouteActions} from '../actions/route.actions';

const initialState: IRouteState = {
  currentRouteState: null
};


export function routeReducer(state: IRouteState = initialState, action: RouteActions) {

  switch (action.type) {
    case ERoute.SetRoute:
      return {...state, currentRouteState: action.payload};
    default:
      return state;
  }
}
