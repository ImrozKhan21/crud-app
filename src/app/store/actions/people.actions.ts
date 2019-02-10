import { Action } from '@ngrx/store';
import {IPeopleState} from '../models/people.model';

export enum EPeople {
  SetDefaultPeople = '[EPeople] Set DefaultPeople',
  DeletePeople = '[EPeople] Delete People',
  AddPeople = '[EPeople] Add People'
}

export class SetDefaultPeople implements Action {
  readonly type = EPeople.SetDefaultPeople;
  constructor(public payload: Array<IPeopleState>) {}
}

export class DeletePeople implements Action {
  readonly type = EPeople.DeletePeople;
  constructor(public payload: number) {}
}

export class AddPeople implements Action {
  readonly type = EPeople.AddPeople;
  constructor(public payload: IPeopleState) {}
}

export type PeopleActions = SetDefaultPeople | DeletePeople | AddPeople;
