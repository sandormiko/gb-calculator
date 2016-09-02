import {Component,OnInit} from '@angular/core';
import {Calculation} from '../shared/calculation';
import {HistoryService} from './history.service';
import {Router, ActivatedRoute}       from '@angular/router';

@Component({
  selector: 'saved-older',
  templateUrl: 'app/history/list.component.html'
})

export class SavedOlderComponent implements OnInit{
  
  calculations : Array<Calculation>;
  title = 'Older';
  
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
      () => console.log('saved older done history')

    );   
  }
  
 
  
}
