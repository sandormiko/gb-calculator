import { FormControl } from '@angular/forms';

export class VatRateValidator {

    static validate(control: FormControl): any {

        let vatRate = control.value;
        if (vatRate === '' || vatRate === -1) {
            return { noVatRateGiven: true };
        }
        return null;
    }

}
