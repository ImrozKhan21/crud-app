import {IRouteState} from './models/route.model';
import {IPeople} from './models/people.model';

export interface IAppState {
  routeState: IRouteState;
  people: IPeople;
}
