import {VatRateValidator } from '../../app/shared/vatrate.validator';
import {FormControl} from '@angular/forms';
import {VatRate} from '../../app/shared/vatRate';

describe('VatRateValidatorTest', () => {

    const failResult = { 'noVatRateGiven': true };

    it('#should fail when vat rate is empty string', () => {
        let control = new FormControl('');
        let validationResult = VatRateValidator.validate(control);
        expect(validationResult).toEqual(failResult);
    });

    it('#should fail when vat rate equals to -1', () => {
        let control = new FormControl(-1);
        let validationResult = VatRateValidator.validate(control);
        expect(validationResult).toEqual(failResult);
    });

    it('#should pass when vat rate equals to 5', () => {
        let control = new FormControl(VatRate.FIVE);
        let validationResult = VatRateValidator.validate(control);
        expect(validationResult).toBe(null);
    });
});
