import { Component, } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { LicenseValidators } from './license.validators';
import { ParkingGuardService } from '../services/parking-guard.service';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-enter-vehicle',
  templateUrl: './enter-vehicle.component.html',
  styleUrls: ['./enter-vehicle.component.css']
})
export class EnterVehicleComponent  {
  form: FormGroup;
  vehicles: any[];

  constructor(private service: ParkingGuardService, fb: FormBuilder) {
    this.form = fb.group({
      license: ['',
        Validators.required,
        LicenseValidators.cannotContainSpace
      ],
      engine: [
        Validators.required
      ]
    });
  }

  enterCar(license: HTMLInputElement) {
    let car = { license: license.value, type: 'CAR' };
    license.value = ' ';
      this.service.enterCar(car)
      .subscribe(response => {
        console.log(response.toString());
      }, (error: Response) => {
          if (error.status === 500) {
            alert("Vehicle cannot enter, there are not more cells available for cars");
          }
      });
  }

  enterBike(license: HTMLInputElement, cc: HTMLInputElement) {
    let bike = { license: license.value, type: 'BYKE', engine: cc.value };
    license.value = ' ';
    cc.value = ' ';
    this.service.enterBike(bike)
    .subscribe(response => {
      console.log(response.toString());
    }, (error: Response) => {
      if (error.status === 500) {
        alert("Vehicle cannot enter, there are not more cells available for motorbikes");
      }
  });
}

  tabVehicle(vehicle) {
   var i, tabcontent, tablinks;
   tabcontent = document.getElementsByClassName('tabcontent');
   for (i = 0; i < tabcontent.length; i++) {
       tabcontent[i].style.display = 'none';
   }
   tablinks = document.getElementsByClassName('tablinks');
   for (i = 0; i < tablinks.length; i++) {
       tablinks[i].className = tablinks[i].className.replace('active', '');
   }
   document.getElementById(vehicle).style.display = 'block';
  }
}
