import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import * as RouteActions from '../../store/actions/route.actions';
import {Store} from '@ngrx/store';
import {IAppState} from '../../store/app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor(private store: Store<IAppState>) { }

  ngOnInit() {
    this.store.dispatch(new RouteActions.SetRoute('home'));
  }

}
