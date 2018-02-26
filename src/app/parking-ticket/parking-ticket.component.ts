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
  vehicleRecive: any[];

  constructor(private service: ParkingGuardService) { }

  ngOnInit() {
    /*this.onClick();
    this.interval = setInterval(() => {
        this.onClick();
    }, 2000);*/
  }

  reciveData(id, vehicle) {
    this.idRecive = id;
    this.vehicleRecive = vehicle;
    console.log('recibiendo data'+this.idRecive+' '+JSON.stringify(this.vehicleRecive));
    const headers = new Headers({'Content-Type': 'application/json'});
    this.service.outVehicle(this.idRecive, this.vehicleRecive)
    .subscribe(response => {
      console.log(response.json());
    });
    console.log("sali");
    
  }

  outVehicle(id?, vehicle?){
    const headers = new Headers({'Content-Type': 'application/json'});
    this.service.outVehicle(this.idRecive, this.vehicleRecive)
    .subscribe(response => {
      console.log(response.json());
    });
    console.log("sali");
  }

  onClick() {
    this.outVehicle();
  }
    
}
