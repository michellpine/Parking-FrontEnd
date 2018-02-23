import { Component, } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { LicenseValidators } from './license.validators';
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
  type: string;
  private url = 'http://localhost:8282/api/vehicles/';

  constructor(private http: Http, fb: FormBuilder) {
    this.form = fb.group({
      license: ['',
        Validators.required,
        LicenseValidators.cannotContainSpace
      ],
    });
  }

  enterCar(license: HTMLInputElement) {
    const headers = new Headers({'Content-Type': 'application/json'});
    let car = { license: license.value, type: 'CAR' };
    license.value = ' ';
      this.http.post(this.url, car, {headers: headers} )
      .subscribe(response => {
        console.log(response.toString());
      });
  }

  enterBike(license: HTMLInputElement, cc: HTMLInputElement) {
    const headers = new Headers({'Content-Type': 'application/json'});
    let bike = { license: license.value, type: 'BYKE', engine: cc.value };
    license.value = ' ';
    cc.value = ' ';
      this.http.post(this.url, bike, {headers: headers} )
      .subscribe(response => {
        console.log(response.toString());
      });
  }

  tabVehicle(cityName) {
   // Declare all variables
   var i, tabcontent, tablinks;

   // Get all elements with class="tabcontent" and hide them
   tabcontent = document.getElementsByClassName('tabcontent');
   for (i = 0; i < tabcontent.length; i++) {
       tabcontent[i].style.display = 'none';
   }

   // Get all elements with class="tablinks" and remove the class "active"
   tablinks = document.getElementsByClassName('tablinks');
   for (i = 0; i < tablinks.length; i++) {
       tablinks[i].className = tablinks[i].className.replace('active', '');
   }

   // Show the current tab, and add an "active" class to the link that opened the tab
   document.getElementById(cityName).style.display = 'block';

  
  }



}
