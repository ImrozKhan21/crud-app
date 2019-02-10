import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {MaterialModule} from './materials/materials.module';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppStoreModule} from './store/store.module';
import {CoreModule} from './core/core.module';
import {FeaturesModule} from './features/features.module';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {AppComponent} from './app.component';

import {PeopleService} from './services/people.service';
import {FlowService} from './services/flow.service';
import {PeopleResolver} from './resolvers/people.resolver';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    BrowserAnimationsModule,
    FeaturesModule,
    AppRoutingModule,
    AppStoreModule,
    StoreDevtoolsModule.instrument({
      maxAge: 5
    })
  ],
  providers: [PeopleService, FlowService, PeopleResolver],
  bootstrap: [AppComponent]
})
export class AppModule {
}
