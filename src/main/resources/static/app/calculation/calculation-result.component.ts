import {Component,Input} from '@angular/core';
import {Calculation} from './calculation';

@Component({
  selector: 'calculation-result',
  templateUrl: 'app/calculation/calculation-result.component.html'
  //template : '<p>Hello {{result.vatRate}}</p>'
})

export class CalculationResultComponent {
  @Input() result :Calculation;
}
