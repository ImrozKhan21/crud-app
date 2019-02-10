import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {People, Address} from '../models/flow.constants';
import {forkJoin, Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {IAppState} from '../store/app.state';
import * as PeopleActions from '../store/actions/people.actions';
import * as faker from 'faker';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
  cachedPeople: Array<People>;
  peopleUrl = environment.apiRoot + environment.getPeople;
  addressUrl = environment.apiRoot + environment.getAddress;

  constructor(private http: HttpClient, private store: Store<IAppState>) {
  }

  public getPeople(): Observable<Array<People>> {
    if (this.cachedPeople) {
      return of(this.cachedPeople);
    } else {
      return this.http.get<Array<People>>(this.peopleUrl).pipe(
        tap(people => {
          this.store.dispatch(new PeopleActions.SetDefaultPeople(people));
          this.cachedPeople = people;
          return people;
        }),
        catchError((error: HttpErrorResponse) => {
          console.log('ERROR', error);
          return of(null);
        })
      );
    }
  }

  public getPeopleAddresses(): Observable<Address> {
    return this.http.get<Address>(this.addressUrl).pipe(
      tap(addresses => {
        return addresses;
      })
    );
  }

  public getParticularAddress(id): Observable<Address> {
    const url = this.addressUrl + '/' + id;
    return this.http.get<Address>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        return of(null);
      })
  );
  }

  public addNewPeople(formValues) {
    const id = Math.floor(Math.random() * 10000000);
    const payloadForPeople = this.getPayloadForPeople(formValues, id);
    const payloadForAddress = this.getPayLoadForAddress(formValues, id);
    let peopleCall = this.http.post(this.peopleUrl, payloadForPeople, this.httpOptions);
    let addressCall = this.http.post(this.addressUrl, payloadForAddress, this.httpOptions);
    this.joinApiCalls(peopleCall, addressCall, 'add', null, payloadForPeople);
  }

  public deletePeopleAndAddress(id) {
    const addressUrl = this.addressUrl + '/' + id;
    const peopleUrl = this.peopleUrl + '/' + id;
    let peopleCall = this.http.delete(peopleUrl);
    let addressCall = this.http.delete(addressUrl);
    this.joinApiCalls(peopleCall, addressCall, 'delete', id);
  }

  public editPeople(formValues, selectedPeople) {
    const id = selectedPeople.id;
    const addressUrl = this.addressUrl + '/' + id;
    const peopleUrl = this.peopleUrl + '/' + id;
    const payloadForPeople = this.getPayloadForPeople(formValues, id, selectedPeople.avatar);
    const payloadForAddress = this.getPayLoadForAddress(formValues, id);
    let peopleCall = this.http.put(peopleUrl, payloadForPeople, this.httpOptions);
    let addressCall = this.http.put(addressUrl, payloadForAddress, this.httpOptions);
    this.joinApiCalls(peopleCall, addressCall);
  }

  private joinApiCalls(peopleCall, addressCall, type?, id?, payloadForPeople?) {
    forkJoin([peopleCall, addressCall]).subscribe(() => {
      if (type === 'add') {
        this.store.dispatch(new PeopleActions.AddPeople(payloadForPeople));
      } else if (type === 'delete') {
        this.store.dispatch(new PeopleActions.DeletePeople(id));
      }
      this.cachedPeople = null;
    });
  }

  private getPayloadForPeople(formValues, id, avatar?) {
    return {
      name: formValues.name,
      id: id,
      avatar: avatar ? avatar : faker.internet.avatar()
    };
  }

  private getPayLoadForAddress(formValues, id) {
    return {
      id: id,
      streetAddress: formValues.streetAddress,
      city: formValues.city,
      zipCode: formValues.zipCode,
      country: formValues.country,
      state: formValues.state
    };
  }

}



