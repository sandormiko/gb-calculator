import {Component,OnInit} from '@angular/core';
import {Calculation} from '../shared/calculation';
import {HistoryService} from './history.service';
import {Router, ActivatedRoute}       from '@angular/router';

@Component({
  selector: 'calculated-today',
  templateUrl: 'app/history/list.component.html'
})

export class CalculatedTodayComponent implements OnInit{
  
  calculations : Array<Calculation>;
  title = 'Today';
  
  constructor(
    private historyService: HistoryService) {}
	
	
  ngOnInit() {
    this.historyService.getCalculations().subscribe(

      // the first argument is a function which runs on success
      data => { 
		this.calculations = data;
	  },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('caulculated today done history')

    );   
  }
  
 
  
}
