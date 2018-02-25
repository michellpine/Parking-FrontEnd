import { Component, OnInit, Input, Inject } from '@angular/core';
import { ParkingGuardService } from '../services/parking-guard.service';

@Component({
  selector: 'app-parking-ticket',
  templateUrl: './parking-ticket.component.html',
  styleUrls: ['./parking-ticket.component.css']
})

export class ParkingTicketComponent implements OnInit {
  interval: any;
  idRecive: string;

  constructor(private service: ParkingGuardService) { }

  ngOnInit() {
    /*this.interval = setInterval(() => {
        this.parkigVehicles();
    }, 1000);
    */
  }

  reciveData(id, vehicle) {
    const headers = new Headers({'Content-Type': 'application/json'});
    this.service.outVehicle(id, vehicle)
    .subscribe(response => {
      console.log(response.json());
    });
    console.log("sali");
  }

  onClick() {
  }

}
