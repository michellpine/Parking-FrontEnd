import { Component, OnInit, Inject, trigger, state, style, animate, transition } from '@angular/core';
import { ParkingGuardService } from '../services/parking-guard.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ParkingTicketComponent } from '../parking-ticket/parking-ticket.component';

@Component({
  selector: 'app-vehicles-parking',
  templateUrl: './vehicles-parking.component.html',
  styleUrls: ['./vehicles-parking.component.css']
})
export class VehiclesParkingComponent implements OnInit {
  vehicles: any[];
  vehicle: any[];
  interval: any;

  constructor(private dialog: MatDialog, private service: ParkingGuardService) {
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
    const headers = new Headers({'Content-Type': 'application/json'});
    this.service.outVehicle(id, vehicle)
    .subscribe(response => {
      vehicle = response.json();
      this.dialog.open(ParkingTicketComponent, {
        height: '390px',
        width: '470px',
        data: { 'license':    vehicle.vehicle.license,
                'dateArrive': vehicle.dateArrive,
                'dateOut':    vehicle.dateOut,
                'valueToPay': vehicle.valueToPay
              }
      });
      console.log(response.json());
    });
  }
}
