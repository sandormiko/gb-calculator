import {Component,OnInit} from '@angular/core';
import {Calculation} from '../shared/calculation';
import {CalculationService} from './calculation.service';
import {Router, ActivatedRoute}       from '@angular/router';

@Component({
  selector: 'calculation-result',
  templateUrl: 'app/calculation/calculation-result.component.html'
  //template : '<p>Hello {{result.vatRate}}</p>'
})

export class CalculationResultComponent implements OnInit{

  result : Calculation;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CalculationService) {}


  ngOnInit() {
    this.route.params.subscribe(params => {
       let id = +params['id']; // (+) converts string 'id' to a number
       this.service.getCalculation(id).subscribe(data => this.result = data);
     });
  }

  back(){
	this.router.navigate(['/calculations/new']);
  }

}
