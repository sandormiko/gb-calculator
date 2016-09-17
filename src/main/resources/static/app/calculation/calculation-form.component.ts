import {Component, OnInit} from '@angular/core';
import {Calculation} from '../shared/calculation';
import {CalculationService} from './calculation.service';
import {CalculationResultComponent} from './calculation-result.component';
import {VatRate} from '../shared/vatRate';
import { FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { Router, ActivatedRoute }       from '@angular/router';
import {AmountValidator} from '../shared/amount.validator';
import {VatRateValidator} from '../shared/vatrate.validator';

@Component({
    selector: 'calculation-form',
    templateUrl: 'app/calculation/calculation-form.component.html'
})

export class CalculationFormComponent implements OnInit {
    vatRates: Array<VatRate>;
    calculationResult: Calculation;
    model: Calculation;
    submitted = false;
    calculationForm: FormGroup;


    constructor(private calculationService: CalculationService, private formBuilder: FormBuilder, private router: Router) { }
    cancel() {
        this.submitted = false;
    }

    onSubmit() {
        this.submitted = true;
        if (this.calculationForm.valid) {
            this.model = this.calculationForm.value;
            this.calculationService.addCalculation(this.model).subscribe(

                data => {
                    this.calculationResult = new Calculation(data.vatRate, data.valueAddedTax, data.priceWoVat, data.priceInclVat, data.id);
                    this.router.navigate(['/calculations', this.calculationResult.id]);
                },
                err => console.error(err),
                () => console.log('done loading calculation')

            );
        }
    }

    get validationMessages() {
        const errorMessages = {
            'vatRate': 'Vat rate is empty',
            'priceInclVat': 'Price Including vat must be a valid number',
            'priceWoVat': 'Price without vat must be a valid nuber',
            'valueAddedTax': 'Value added tax must be a valid number'
        }
        let errors = [];
        if (this.calculationForm.hasError('noAmountIsGiven')) {
            errors.push('Please fill out an amount');
        }
        else if (this.calculationForm.hasError('moreThanOneAmountIsGiven')) {
            errors.push('Please fill out only one amount');
        }
        for (let controlName in this.calculationForm.controls) {
            if (!this.calculationForm.controls[controlName].valid) {
                let msg = errorMessages[controlName];
                errors.push(msg);
            }
        }
        return errors;
    }

    ngOnInit() {
        this.vatRates = [VatRate.FIVE, VatRate.TEN, VatRate.FIFTEEN, VatRate.TWENTY, VatRate.TWENTY_SEVEN];
        const numbersRegexp = '[0-9]+';
        const noVatRateIsSelected = -1;
        this.calculationForm = this.formBuilder.group({
            vatRate: [-1, VatRateValidator.validate],
            valueAddedTax: ['', Validators.pattern(numbersRegexp)],
            priceInclVat: ['', Validators.pattern(numbersRegexp)],
            priceWoVat: ['', Validators.pattern(numbersRegexp)]
        }, { validator: AmountValidator.validate });
    }
}
