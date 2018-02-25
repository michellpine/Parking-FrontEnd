import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ParkingTicketComponent } from '../parking-ticket/parking-ticket.component';
import { ParkingGuardService } from '../services/parking-guard.service';

@Component({
  selector: 'app-vehicles-parking',
  templateUrl: './vehicles-parking.component.html',
  styleUrls: ['./vehicles-parking.component.css']
})
export class VehiclesParkingComponent implements OnInit{

  vehicles: any[];
  interval: any;
  
  constructor(private service: ParkingGuardService, private ticket: ParkingTicketComponent) {
  }

  ngOnInit() {
    this.parkigVehicles();
    this.interval = setInterval(() => {
        this.parkigVehicles();
    }, 2000);
  }

  parkigVehicles() {
    this.service.parkigVehicles()
    .subscribe(response => {
      console.log(response.json());
      this.vehicles = response.json();
    });
  }

  outVehicle(id, vehicle) {
    console.log('quiero salir');
    this.ticket.reciveData(id, vehicle);
  }
}

