import { Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import {Calculation} from '../shared/calculation';
import { Observable }     from 'rxjs/Rx'
import 'rxjs/add/operator/map';

@Injectable()
export class HistoryService {
    constructor(private http: Http) { }
    private calculationsUrl = 'app/calculation.json';  // URL to web API

    getCalculation(calculationId: number): Observable<Calculation> {
        let body = JSON.stringify({ calculationId });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        const mockCalculation = new Calculation('11111', '22222', '322222', '444444', 234);
        return Observable.of(mockCalculation);


    }

    getCalculations(): Observable<Calculation[]> {

        const mockCalculation1 = new Calculation('11111', '22222', '322222', '444444', 234);
        const mockCalculation2 = new Calculation('21111', '32222', '4322222', '5444444', 333);
        let results = [mockCalculation1, mockCalculation2];
        return Observable.of(results);


    }

}
