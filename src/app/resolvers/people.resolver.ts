import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {PeopleService} from '../services/people.service';
import {People} from '../models/flow.constants';

@Injectable()
export class PeopleResolver implements Resolve<Array<People>> {

  constructor(private peopleService: PeopleService) {
  }

  resolve(): Observable<Array<People>> {
    return this.peopleService.getPeople();
  }
}
