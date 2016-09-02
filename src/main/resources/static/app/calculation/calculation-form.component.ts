import {Component,OnInit} from '@angular/core';
import {Calculation} from '../shared/calculation';
import {CalculationService} from './calculation.service';
import {CalculationResultComponent} from './calculation-result.component';
import {VatRate} from '../shared/vatRate';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router, ActivatedRoute }       from '@angular/router';

@Component({
  selector: 'calculation-form',
  templateUrl: 'app/calculation/calculation-form.component.html'
})

export class CalculationFormComponent implements OnInit{
  vatRates:Array<VatRate>;
  calculationResult :Calculation;
  model:Calculation;
  submitted = false;
  calculationForm: FormGroup;

  constructor(private calculationService: CalculationService,private formBuilder: FormBuilder,private router: Router){}
  cancel(){
		this.submitted = false;
	}
  onSubmit() {
	this.submitted = true;
	console.log('calculationForm.value ',this.calculationForm.value);
  this.model = this.calculationForm.value;
  /*this.model = new Calculation(this.calculationForm.value.vatRate,
                                this.calculationForm.value.valueAddedTax,
                                this.calculationForm.value.priceWoVat,
                                this.calculationForm.value.priceIncVat);*/
	this.calculationService.addCalculation(this.model).subscribe(

      // the first argument is a function which runs on success
      data => {
		this.calculationResult = new Calculation(data.vatRate,data.valueAddedTax,data.priceWoVat,data.priceInclVat,data.id);
		this.router.navigate(['/calculations', this.calculationResult.id]);
	  },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading foods')

    );

  }

  get diagnostic() { return JSON.stringify(this.model); }

  newCalculation(){
    console.log('Hello');
  }

  ngOnInit() {
  console.log('Init');

     this.vatRates = [VatRate.FIVE,VatRate.TEN,VatRate.FIFTEEN,VatRate.TWENTY,VatRate.TWENTY_SEVEN];
     const numbersRegexp = '[0-9]+';
       // Example use of FormBuilder, ControlGroups, and Controls
    this.calculationForm= this.formBuilder.group({
      vatRate: ['', Validators.required],
      valueAddedTax: ['', Validators.pattern (numbersRegexp)],
      priceInclVat: ['', Validators.pattern (numbersRegexp)],
      priceWoVat: ['', Validators.pattern (numbersRegexp)]
    //}, {validator: this.matchPassword('valueAddedTax','priceInclVat','priceWoVat')})
	})
  }

  matchPassword(valueAddedTaxKey:string,priceInclVatKey:string,priceWoVatKey:string): any {
     return (group) => {
	let valueAddedTax = group.controls[valueAddedTaxKey].value;
	let priceInclVat = group.controls[priceInclVatKey].value;
	let priceWoVat = group.controls[priceWoVatKey].value;

	if(valueAddedTax !== '' ||  priceInclVat !=='' || priceWoVat !==''){
		return group.controls[valueAddedTaxKey].setErrors({notEquivalent: true});
	}

	console.log('priceWoVat ',priceWoVat);
	console.log('valueAddedTax ',valueAddedTax);
	console.log('priceInclVat ',priceInclVat);
	console.log('priceWoVat ',priceWoVat);

    // Mark group as touched so we can add invalid class easily
    group.markAsTouched();

    return null;
	}
}


}
