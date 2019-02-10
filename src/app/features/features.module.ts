import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MaterialModule} from '../materials/materials.module';
import {GridViewComponent} from './grid-view/grid-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { DetailsViewComponent } from './details-view/details-view.component';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    GridViewComponent,
    ListViewComponent,
    DetailsViewComponent,
    AddComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    GridViewComponent,
    ListViewComponent
  ]
})
export class FeaturesModule {
}
