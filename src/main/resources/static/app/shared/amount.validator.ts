import {FormGroup } from '@angular/forms';

export class AmountValidator {

    static validate(group: FormGroup): any {

        let valueAddedTax = group.controls['valueAddedTax'].value;
        let priceInclVat = group.controls['priceInclVat'].value;
        let priceWoVat = group.controls['priceWoVat'].value;
        if (valueAddedTax === '' && priceInclVat === '' && priceWoVat === '') {
            return { 'noAmountIsGiven': true };
        }

        let amounts = [valueAddedTax, priceInclVat, priceWoVat];
        let nrOfAmountsGiven = amounts.filter((amount) => amount !== '').length;
        if (nrOfAmountsGiven > 1) {
            return { 'moreThanOneAmountIsGiven': true };
        }

        return null;

    }

}
