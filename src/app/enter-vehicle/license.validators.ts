import { AbstractControl, ValidationErrors } from '@angular/forms';

// como solo singup-form usa esta validacion, se pone
// dentro de su carpeta, pero si varios componenetes necesitan
// esta validacion se crea un folder common con este archivo
export class LicenseValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return { cannotContainSpace: true };
            /*return {
                minlength: {
                    requiredLength: 10,
                    actualLength: control.value.length
                }
            }*/
        }
        return null;
    }
}
