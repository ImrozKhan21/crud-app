import {Routes} from '@angular/router';

import {GridViewComponent} from '../features/grid-view/grid-view.component';
import {ListViewComponent} from '../features/list-view/list-view.component';
import {DetailsViewComponent} from '../features/details-view/details-view.component';
import {PeopleResolver} from '../resolvers/people.resolver';
import {AddComponent} from '../features/add/add.component';
import {HomeComponent} from '../features/home/home.component';

export const routes: Routes = [
  {path: 'grid-view', component: GridViewComponent, resolve: {people: PeopleResolver}},
  {path: 'list-view', component: ListViewComponent, resolve: {people: PeopleResolver}},
  {path: 'add', component: AddComponent},
  {path: 'people/:id', component: DetailsViewComponent, resolve: {people: PeopleResolver}}, // Added Resolver for refresh
  {path: 'home', component: HomeComponent, resolve: {people: PeopleResolver}},
  {path: '', redirectTo: '/grid-view', pathMatch: 'full'}
];
