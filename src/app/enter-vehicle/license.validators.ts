import { AbstractControl, ValidationErrors } from '@angular/forms';
import { ParkingGuardService } from '../services/parking-guard.service';

export class LicenseValidators {
    vehicles: any[];
    license:  any[];

    constructor(public service: ParkingGuardService) {
    }

    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return { cannotContainSpace: true };
        }
        return null;
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors> | null {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'mosh') {
                    resolve({ shouldBeUnique: true });
                } else {
                    resolve (null);
                }
            }, 2000);
        });
    }
}
