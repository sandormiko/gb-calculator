import { Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import{Calculation} from './calculation';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CalculationService {
  constructor (private http: Http) {}
  private calculationsUrl = 'calculations/';  // URL to web API

addCalculation (calculation: Calculation): Observable<Calculation> {
    let body = JSON.stringify({ calculation });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log('addCalculation ',body);

    console.log('result is ', this.http.post(this.calculationsUrl,calculation,options).
                    map((res:Response) => res.json()));
    return this.http.post(this.calculationsUrl,calculation,options).
                    map((res:Response) => res.json())


  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
}
