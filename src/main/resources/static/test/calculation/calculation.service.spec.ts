import { inject, TestBed } from '@angular/core/testing';
import { CalculationService } from '../../app/calculation/calculation.service';
import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { Observable }     from 'rxjs/Rx';
import { Calculation}     from '../../app/shared/calculation';
import { MockBackend, MockConnection } from '@angular/http/testing';

describe('CalculationServiceTest', () => {
    let service: CalculationService;
    let backend: MockBackend;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [MockBackend,
                BaseRequestOptions,
                {
                    provide: Http,
                    useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backendInstance, defaultOptions);
                    },
                    deps: [MockBackend, BaseRequestOptions]
                },
                , CalculationService]
        });
    });
    beforeEach(inject([CalculationService, MockBackend], (cService: CalculationService, mBackend: MockBackend) => {
        service = cService;
        backend = mBackend;
    }));


    it('#should return a valid calculation', (done) => {
        let result = Observable.of(new Calculation('1', '2', '2', '2'));
        backend.connections.subscribe((connection: MockConnection) => {
            let options = new ResponseOptions({
                body: JSON.stringify(result)
            });
            connection.mockRespond(new Response(options));
        });
        service.addCalculation(new Calculation('1', '2', '2', '2')).subscribe(
            data => {
                expect(JSON.stringify(data)).toEqual(JSON.stringify(result));
                expect(1).toBe(1);
                done();
            });
    });
});
