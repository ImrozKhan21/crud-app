import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MaterialModule} from '../materials/materials.module';
import {FeaturesModule} from '../features/features.module';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {ContainerComponent} from './container/container.component';
import {HeaderComponent} from './header/header.component';


@NgModule({
  declarations: [
    ContainerComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FeaturesModule,
    AppRoutingModule
  ],
  exports: [
    ContainerComponent,
    HeaderComponent
  ],
  providers: [],
  bootstrap: []
})
export class CoreModule {
}
