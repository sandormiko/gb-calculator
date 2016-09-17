import {CalculatedTodayComponent } from '../../app/history/calculated-today.component';
import {MockHistoryService} from './mock-history.service';

describe('CalculatedTodayComponent', () => {

    let cTodayComp: CalculatedTodayComponent;

    beforeEach(() => {
        let srv = new MockHistoryService();
        cTodayComp = new CalculatedTodayComponent(srv);
    });

    it('#should have title Today', () => {
        expect(cTodayComp.title).toBe('Today');
    });


})
