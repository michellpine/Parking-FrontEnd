import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatDialog, MatDialogModule, MatInputModule, MatButtonModule } from '@angular/material';


import { AppComponent } from './app.component';
import { EnterVehicleComponent } from './enter-vehicle/enter-vehicle.component';
import { VehiclesParkingComponent } from './vehicles-parking/vehicles-parking.component';
import { ParkingGuardService } from './services/parking-guard.service';
import { ParkingTicketComponent } from './parking-ticket/parking-ticket.component';

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
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule
  ],
  entryComponents: [
    ParkingTicketComponent
  ],
  providers: [
    ParkingGuardService,
    ParkingTicketComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
