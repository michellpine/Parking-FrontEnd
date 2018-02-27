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
  troubles: any;

  constructor(private service: ParkingGuardService, fb: FormBuilder) {
    this.form = fb.group({
      license: ['',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(6),
          LicenseValidators.cannotContainSpace
        ])
      ],
      engine: [
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(4),
          LicenseValidators.cannotContainSpace
        ])
      ]
    });
  }

  enterCar(license: HTMLInputElement) {
    const car = { license: license.value, type: 'CAR' };
    license.value = '';
      this.service.enterCar(car)
      .subscribe(response => {
        console.log(response.toString());
      },
      (error: Response) => {
        this.troubles = error.json();
        this.parseErrors(this.troubles.message);
      }
    );
  }

  enterBike(licenseBike: HTMLInputElement, cc: HTMLInputElement) {
    const bike = { license: licenseBike.value, type: 'BYKE', engine: cc.value };
    licenseBike.value = '';
    cc.value = ' ';
    this.service.enterBike(bike)
    .subscribe(response => {
      console.log(response.toString());
    },
    (error: Response) => {
      this.troubles = error.json();
      this.parseErrors(this.troubles.message);
    }
  );
}


  tabVehicle(vehicle) {
   let i, tabcontent, tablinks;
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

  get license () {
    return this.form.get('license');
  }

  get engine () {
    return this.form.get('engine');
  }

  parseErrors (err: string) {
    if ( err === 'Vehicle cannot enter, there are not more cells available for motorcycles') {
      alert('No hay mas parqueaderos disponibles para motos');
    }
    if ( err === 'Vehicle cannot enter, there are not more cells available for cars') {
      alert('No hay mas parqueaderos disponibles para carros');
    }
    if ( err === 'Vehicle cannot enter, license begin for A and today is not available day for it') {
      alert('El vehiculo no puede ingresar. Hoy no es un dia habil para las placas que empiezan por A');
    }
    if ( err === 'Please enter the engine for the motorcycle') {
      alert('Ingrese el cilindraje de la moto');
    }
    if ( err === 'Please remove the engine for the car') {
      alert('No es necesario el cilindraje para carros');
    }
  }
}

