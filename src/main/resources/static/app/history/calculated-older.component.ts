import {Component, OnInit} from '@angular/core';
import {Calculation} from '../shared/calculation';
import {HistoryService} from './history.service';
import {Router, ActivatedRoute}       from '@angular/router';

@Component({
    selector: 'calculated-older',
    templateUrl: 'app/history/list.component.html'
})

export class CalculatedOlderComponent implements OnInit {

    calculations: Array<Calculation>;
    title = 'Older';

    constructor(
        private historyService: HistoryService) { }


    ngOnInit() {
        this.historyService.getCalculations().subscribe(
            data => {
                this.calculations = data;
            }
        );
    }



}
