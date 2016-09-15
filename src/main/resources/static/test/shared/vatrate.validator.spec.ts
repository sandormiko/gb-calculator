import {VatRateValidator } from '../../app/shared/vatrate.validator';
import {Control} from '@angular/common';
import {VatRate} from '../../app/shared/vatrate';

describe('VatRateValidatorTest', () => {
  
	const failResult = {'noVatRateGiven':true};
  
    it('#should fail when vat rate is empty string', () => {
		let control = new Control('');  
		let validationResult = VatRateValidator.validate(control);
		expect(validationResult).toEqual(failResult);
    });
	
	it('#should fail when vat rate equals to -1', () => {
		let control = new Control(-1);  
		let validationResult = VatRateValidator.validate(control);
		expect(validationResult).toEqual(failResult);
    });
	
	it('#should pass when vat rate equals to 5', () => {
		let control = new Control(VatRate.FIVE);  
		let validationResult = VatRateValidator.validate(control);
		expect(validationResult).toBe(null);
    });
});
