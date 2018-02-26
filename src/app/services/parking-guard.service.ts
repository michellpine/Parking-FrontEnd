import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";


import { AppError } from '../common/app-error';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ParkingGuardService {
  private url = 'http://localhost:8282/api/vehicles/';


  constructor(private http: Http) { }

  parkigVehicles() {
    return this.http.get(this.url);
  }

  enterCar(car) {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(this.url, car, {headers: headers} );
  }

  enterBike(bike) {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(this.url, bike, {headers: headers} );
  }

  outVehicle(id, vehicle) {
    return this.http.patch(this.url + id, vehicle);
  }

}
