import {AmountValidator } from '../../app/shared/amount.validator';
import { FormBuilder} from '@angular/forms';
import { inject ,TestBed} from '@angular/core/testing';

describe('AmountValidatorTest', () => {

    let formBuilder: FormBuilder;
    const failResult = { 'moreThanOneAmountIsGiven': true };

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers:[FormBuilder]
         });
    });

    beforeEach(inject([FormBuilder], (fBuilder: FormBuilder) => {
        formBuilder = fBuilder;
    }));

    it('#should fail when 3 amounts are given', () => {
        let group = { valueAddedTax: ['1'], priceInclVat: ['2'], priceWoVat: ['2'] };
        let controlGroup = formBuilder.group(group);
        let validationResult = AmountValidator.validate(controlGroup);
        expect(validationResult).toEqual(failResult);
    });

    it('#should fail when 2 amounts are given', () => {
        let group = { valueAddedTax: ['1'], priceInclVat: ['2'], priceWoVat: [''] };
        let controlGroup = formBuilder.group(group);
        let validationResult = AmountValidator.validate(controlGroup);
        expect(validationResult).toEqual(failResult);
    });

    it('#should pass when one amount is given', () => {
        let group = { valueAddedTax: ['1'], priceInclVat: [''], priceWoVat: [''] };
        let controlGroup = formBuilder.group(group);
        let validationResult = AmountValidator.validate(controlGroup);
        expect(validationResult).toBe(null);
    });

    it('#should fail when no amount is given', () => {
        let group = { valueAddedTax: [''], priceInclVat: [''], priceWoVat: [''] };
        let controlGroup = formBuilder.group(group);
        let validationResult = AmountValidator.validate(controlGroup);
        expect(validationResult).not.toBe(null);
    });
});
