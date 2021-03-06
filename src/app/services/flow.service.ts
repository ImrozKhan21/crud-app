import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import {Location} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FlowService {

  constructor(private router: Router, private location: Location) {
  }

  public navigateToSelectedPeople(id) {
    this.router.navigate(['/people', id]);
  }

  public checkForErrors(c: FormControl, submitted: boolean) {
    if (c.errors) {
      return (c.dirty && c.errors.required) || (c.touched && !c.errors.required) || (c.errors.required && submitted);
    }
  }

  public navigateBack() {
    this.location.back();
  }

  public navigateToEditView(id)  {
    this.router.navigate(['/add'], {queryParams: {flow: 'edit', id: id}});
  }

}
