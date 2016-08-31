import {Component} from '@angular/core';
import {Calculation} from './calculation';
import {CalculationService} from './calculation.service';
import {CalculationResultComponent} from './calculation-result.component';
import {VatRate} from './vatRate';

@Component({
  selector: 'calculation-form',
  templateUrl: 'app/calculation/calculation-form.component.html',
  providers: [CalculationService],
  directives: [CalculationResultComponent]
})

export class CalculationFormComponent{
  vatRates:Array<VatRate>;
  calculationResult :Calculation;
  model:Calculation;
  submitted = false;
  
  constructor(private calculationService: CalculationService){
	this.vatRates = [VatRate.FIVE,VatRate.TEN,VatRate.FIFTEEN,VatRate.TWENTY,VatRate.TWENTY_SEVEN];
	this.model =new Calculation('', '', '', '');
  }
  
  onSubmit() { this.submitted = true; }

  get diagnostic() { return JSON.stringify(this.model); }

  newCalculation(){
    console.log(JSON.stringify(this.model));

    this.calculationService.addCalculation(this.model).subscribe(

      // the first argument is a function which runs on success
      data => { this.calculationResult = new Calculation(data.vatRate,data.valueAddedTax,data.priceWoVat,data.priceInclVat)},
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading foods')

    );
    //this.model = new Calculation('','','','');
  }
}
