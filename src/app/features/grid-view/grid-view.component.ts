import {Component, OnInit} from '@angular/core';
import {PeopleService} from '../../services/people.service';
import {People} from '../../models/flow.constants';
import {Store} from '@ngrx/store';
import * as RouteActions from '../../store/actions/route.actions';
import {IAppState} from '../../store/app.state';
import {FlowService} from '../../services/flow.service';
import {getAllPeopleState} from '../../store/models/people.model';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {
  people: Array<People>;

  constructor(private peopleService: PeopleService,
              private store: Store<IAppState>,
              private flowService: FlowService) {
  }

  ngOnInit() {
    this.store.dispatch(new RouteActions.SetRoute('grid'));
    this.store.select(getAllPeopleState).subscribe(people => {
      this.people = people;
    });
  }

  goToDetailsView(selectedItem) {
    this.flowService.navigateToSelectedPeople(selectedItem.id);
    console.log('selectedItem', selectedItem);
  }

  deleteSelected(selectedItem) {
    this.peopleService.deletePeopleAndAddress(selectedItem.id);
  }
}
