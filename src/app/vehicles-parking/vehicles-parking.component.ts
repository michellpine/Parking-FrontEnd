import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-vehicles-parking',
  templateUrl: './vehicles-parking.component.html',
  styleUrls: ['./vehicles-parking.component.css']
})
export class VehiclesParkingComponent {
  vehicles: any[];

  private url = 'http://localhost:8282/api/vehicles/';

  constructor(private http: Http) {
    http.get(this.url)
      .subscribe(response => {
        console.log(response.json());
        this.vehicles = response.json();
      });
  }
}
