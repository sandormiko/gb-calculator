import {Component, OnInit} from '@angular/core';
import {Calculation} from '../shared/calculation';
import {HistoryService} from './history.service';
import {Router, ActivatedRoute}       from '@angular/router';

@Component({
    selector: 'saved-today',
    templateUrl: 'app/history/list.component.html'
})

export class SavedTodayComponent implements OnInit {

    calculations: Array<Calculation>;
    title = 'Today';

    constructor(
        private historyService: HistoryService) { }


    ngOnInit() {
        this.historyService.getCalculations().subscribe(

            data => {
                this.calculations = data;
            });
    }



}
