import {EPeople, PeopleActions} from '../actions/people.actions';
import {IPeople} from '../models/people.model';

const initialState: IPeople = {
  allPeople: null
};


export function peopleReducer(state: IPeople = initialState, action: PeopleActions) {

  switch (action.type) {
    case EPeople.SetDefaultPeople:
      return {...state, allPeople: action.payload};
    case EPeople.DeletePeople:
      return {...state, allPeople: state.allPeople.filter(item => item.id !== action.payload)};
    case EPeople.AddPeople:
      state.allPeople.push(action.payload);
      return {...state, allPeople: state.allPeople};
    default:
      return state;
  }
}
