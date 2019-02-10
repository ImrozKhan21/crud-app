import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PeopleService} from '../../services/people.service';
import {Address, People} from '../../models/flow.constants';
import {Store} from '@ngrx/store';
import {getAllPeopleState} from '../../store/models/people.model';
import {IAppState} from '../../store/app.state';
import * as RouteActions from '../../store/actions/route.actions';
import {FlowService} from '../../services/flow.service';


@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.scss']
})
export class DetailsViewComponent implements OnInit {
  id: number;
  address: Address;
  selectedPeople: People;

  constructor(private route: ActivatedRoute, private peopleService: PeopleService, private store: Store<IAppState>, private flowService: FlowService) {
  }

  ngOnInit() {
    this.store.dispatch(new RouteActions.SetRoute('details'));
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getAddress();
    });
  }

  getAddress() {
    this.peopleService.getParticularAddress(this.id).subscribe(address => {
      this.address = address;
      this.getSelectedPeople();
    });
  }

  getSelectedPeople() {
    this.store.select(getAllPeopleState).subscribe(people => {
      setTimeout(() => { // To Add Loading effect
        this.selectedPeople = people.find(item => item.id === this.id);
      }, 500);
    });
  }

  back() {
    this.flowService.navigateBack();
  }

}
