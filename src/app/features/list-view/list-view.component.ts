import {Component, OnInit} from '@angular/core';
import {IAppState} from '../../store/app.state';
import {Store} from '@ngrx/store';
import {PeopleService} from '../../services/people.service';
import * as RouteActions from '../../store/actions/route.actions';
import {getAllPeopleState} from '../../store/models/people.model';
import {FlowService} from '../../services/flow.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  people;

  constructor(private peopleService: PeopleService, private store: Store<IAppState>, private flowService: FlowService) {
  }

  ngOnInit() {
    this.store.dispatch(new RouteActions.SetRoute('list'));
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

  editSelected(selectedItem) {
    this.flowService.navigateToEditView(selectedItem.id);
  }
}
