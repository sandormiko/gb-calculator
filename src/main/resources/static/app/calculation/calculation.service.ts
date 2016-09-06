import { Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import {Calculation} from '../shared/calculation';
import { Observable }     from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class CalculationService {
    constructor(private http: Http) { }
    private calculationsUrl = '/calculations/';  // URL to web API

    addCalculation(calculation: Calculation): Observable<Calculation> {
        let body = JSON.stringify({ calculation });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.calculationsUrl, calculation, options).
            map((res: Response) => res.json());
    }
}
