import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { LicenseValidators } from './license.validators';

@Component({
  selector: 'app-enter-vehicle',
  templateUrl: './enter-vehicle.component.html',
  styleUrls: ['./enter-vehicle.component.css']
})
export class EnterVehicleComponent  {
  form: FormGroup;
  vehicles: any[];
  private url = 'http://localhost:8282/api/vehicles/';

  constructor(private http: Http, fb: FormBuilder) {
    this.form = fb.group({
      license: ['',
        Validators.required,
        LicenseValidators.cannotContainSpace
      ],
    });
  }

  enterVehicle(input: HTMLInputElement) {
    const headers = new Headers({'Content-Type': 'application/json'});
    let vehicle = { license: input.value, type: 'CAR' };
    input.value = ' ';
      this.http.post(this.url, vehicle, {headers: headers} )
      .subscribe(response => {
        console.log(response.toString());
      });
  }

}
