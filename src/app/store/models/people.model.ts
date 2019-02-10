import {IAppState} from '../app.state';
import {createSelector} from '@ngrx/store';

export interface IPeopleState {
  id: number;
  name: string;
  avatar: string;
}

export interface IPeople {
  allPeople: Array<IPeopleState>;
}


export const getPeopleState = (state: IAppState) => state.people;

export const getAllPeopleState = createSelector(getPeopleState, (state) => state.allPeople);

