import { Component, Inject, InjectionToken } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-parking-ticket',
  templateUrl: './parking-ticket.component.html',
  styleUrls: ['./parking-ticket.component.css']
})
export class ParkingTicketComponent {

  vehicle: any[];

  constructor(@Inject(MAT_DIALOG_DATA) data: any[]) {
    this.vehicle = data;
    console.log('Data: ', JSON.stringify(data));
  }
}
