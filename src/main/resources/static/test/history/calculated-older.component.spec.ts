import {CalculatedOlderComponent } from '../../app/history/calculated-older.component';
import {MockHistoryService} from './mock-history.service';

describe('CalculatedOlderComponent', () => {

    let cOlderComp: CalculatedOlderComponent;

    beforeEach(() => {
        let srv = new MockHistoryService();
        cOlderComp = new CalculatedOlderComponent(srv);
    });

    it('#should have title Older', () => {
        expect(cOlderComp.title).toBe('Older');
    });


})
