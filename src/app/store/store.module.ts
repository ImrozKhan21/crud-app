import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {routeReducer} from './reducers/route.reducer';
import {peopleReducer} from './reducers/people.reducer';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({
      routeState: routeReducer,
      people: peopleReducer
    })
  ]
})
export class AppStoreModule {
}
