import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {IAppState} from '../../store/app.state';
import {getCurrentRoute, getState} from '../../store/models/route.model';
import {RoutesConstant} from '../../models/flow.constants';
import {Location} from '@angular/common';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  routeName: string;
  routesConstant = RoutesConstant;

  constructor(private store: Store<IAppState>, private location: Location) {
  }

  ngOnInit() {
    this.getCurrentView();
  }

  getCurrentView() {
    this.store.select(getCurrentRoute).subscribe(route => {
      setTimeout(() => {
        this.routeName = this.location.path() === '/home' ? 'home' : route;
      }, 0);
    });

    this.store.select(getState).subscribe(state => {
      console.log('FULL STATE', state);
    });
  }
}
