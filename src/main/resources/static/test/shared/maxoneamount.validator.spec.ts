import {MaxOneAmountValidator } from '../../app/shared/maxoneamount.validator';
import {ControlGroup ,FormBuilder} from '@angular/common';
import {addProviders,inject } from '@angular/core/testing';

describe('MaxOneAmountValidatorTest', () => {
  
  let formBuilder : FormBuilder;
  const failResult = {'moreThanOneAmountIsGiven':true};
  
  beforeEach(() => {
        addProviders([FormBuilder]);
    });
	
   beforeEach(inject([FormBuilder], (fBuilder: FormBuilder) => {
        formBuilder = fBuilder;
    }));

    it('#should fail when 3 amounts are given', () => {
		let group = {valueAddedTax:['1'],priceInclVat:['2'],priceWoVat:['2']};
		let controlGroup = formBuilder.group(group);
		let validationResult = MaxOneAmountValidator.validate(controlGroup);
		expect(validationResult).toEqual(failResult);
    });
	
	it('#should fail when 2 amounts are given', () => {
		let group = {valueAddedTax:['1'],priceInclVat:['2'],priceWoVat:['']};
		let controlGroup = formBuilder.group(group);
		let validationResult = MaxOneAmountValidator.validate(controlGroup);
		expect(validationResult).toEqual(failResult);
    });
	
	it('#should pass when one amount is given', () => {
		let group = {valueAddedTax:['1'],priceInclVat:[''],priceWoVat:['']};
    	let controlGroup = formBuilder.group(group);
		let validationResult = MaxOneAmountValidator.validate(controlGroup);
		expect(validationResult).toBe(null);
    });
	
	it('#should pass when no amount is given', () => {
		let group = {valueAddedTax:[''],priceInclVat:[''],priceWoVat:['']};
    	let controlGroup = formBuilder.group(group);
		let validationResult = MaxOneAmountValidator.validate(controlGroup);
		expect(validationResult).toBe(null);
    });
});
