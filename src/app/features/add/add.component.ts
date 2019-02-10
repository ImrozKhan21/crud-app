import {Component, OnInit} from '@angular/core';
import {FlowService} from '../../services/flow.service';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {IAppState} from '../../store/app.state';
import * as RouteActions from '../../store/actions/route.actions';
import {PeopleService} from '../../services/people.service';
import {ActivatedRoute} from '@angular/router';
import {getAllPeopleState} from '../../store/models/people.model';
import {Address, DetailPeopleConstant, People} from '../../models/flow.constants';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  newPeopleForm: FormGroup;
  submitted: boolean;
  name: AbstractControl;
  streetAddress: AbstractControl;
  city: AbstractControl;
  state: AbstractControl;
  zipCode: AbstractControl;
  country: AbstractControl;
  editId: number;
  selectedPeople: People;
  address: Address;
  initialState: DetailPeopleConstant;
  personUpdated: boolean = false;

  constructor(private flowService: FlowService, private fb: FormBuilder, private store: Store<IAppState>,
              private peopleService: PeopleService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.createForm();
    this.route.queryParams.subscribe(params => {
      if (params && params.flow === 'edit') {
        this.store.dispatch(new RouteActions.SetRoute('edit'));
        this.editId = Number(params.id);
        this.getAddress();
      } else {
        this.store.dispatch(new RouteActions.SetRoute('add'));
      }
    });
  }

  getAddress() {
    this.peopleService.getParticularAddress(this.editId).subscribe(address => {
      this.address = address;
      this.getSelectedPeople();
    });
  }

  getSelectedPeople() {
    this.store.select(getAllPeopleState).subscribe(people => {
      this.selectedPeople = people.find(item => item.id === this.editId);
      this.initialState = {...this.selectedPeople, ...this.address};
      this.createFormControlsOrSetValues(true);
    });
  }

  createForm() {
    this.newPeopleForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      streetAddress: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      zipCode: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required])
    });
    this.createFormControlsOrSetValues();
  }

  createFormControlsOrSetValues(setInitialState = false) {
    const formControlNames = ['name', 'streetAddress', 'city', 'state', 'zipCode', 'country'];
    formControlNames.forEach(item => {
      if (setInitialState && this.initialState) {
        this[item].setValue(this.initialState[item]);
      } else {
        this[item] = this.newPeopleForm.controls[item];
      }
    });
  }

  addPeople() {
    this.submitted = true;
    if (this.newPeopleForm.valid) {
      this.personUpdated = true;
      this.editId || this.editId === 0 ? this.peopleService.editPeople(this.newPeopleForm.value, this.selectedPeople)
        : this.peopleService.addNewPeople(this.newPeopleForm.value);
    }
  }

  cancel() {
    this.flowService.navigateBack();
  }

  hasErrors(c: FormControl) {
    return this.flowService.checkForErrors(c, this.submitted);
  }

  addAnother() {
    this.createForm();
    this.personUpdated = false;
    this.submitted = false;
  }
}
