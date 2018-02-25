import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-vehicles-parking',
  templateUrl: './vehicles-parking.component.html',
  styleUrls: ['./vehicles-parking.component.css']
})
export class VehiclesParkingComponent implements OnInit{
  vehicles: any[];
  interval: any;

  private url = 'http://localhost:8282/api/vehicles/';

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.parkigVehicles();
    this.interval = setInterval(() => { 
        this.parkigVehicles(); 
    }, 2000);
  }

  parkigVehicles() { 
    this.http.get(this.url)
    .subscribe(response => {
      console.log(response.json());
      this.vehicles = response.json();
    });
  }

  outVehicle(id, vehicle) {
    const headers = new Headers({'Content-Type': 'application/json'});
    this.http.patch(this.url + id, vehicle)
    .subscribe(response => {
      console.log(response.json());
      this.vehicles = response.json();
    });
  }
}