import {SavedTodayComponent } from '../../app/history/saved-today.component';
import {MockHistoryService} from './mock-history.service';

describe('SavedTodayComponent', () => {

    let sTodayComp: SavedTodayComponent;

    beforeEach(() => {
        let srv = new MockHistoryService();
        sTodayComp = new SavedTodayComponent(srv);
    });

    it('#should have title Today', () => {
        expect(sTodayComp.title).toBe('Today');
    });


})
