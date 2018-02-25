import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EnterVehicleComponent } from './enter-vehicle/enter-vehicle.component';
import { VehiclesParkingComponent } from './vehicles-parking/vehicles-parking.component';
import { ParkingTicketComponent } from './parking-ticket/parking-ticket.component';
import { ParkingGuardService } from './services/parking-guard.service';



@NgModule({
  declarations: [
    AppComponent,
    EnterVehicleComponent,
    VehiclesParkingComponent,
    ParkingTicketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [
    ParkingTicketComponent,
    ParkingGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
