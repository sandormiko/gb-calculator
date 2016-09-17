import {SavedOlderComponent } from '../../app/history/saved-older.component';
import {MockHistoryService} from './mock-history.service';

describe('SavedOlderComponent', () => {

    let sOlderComp: SavedOlderComponent;

    beforeEach(() => {
        let srv = new MockHistoryService();
        sOlderComp = new SavedOlderComponent(srv);
    });

    it('#should have title Older', () => {
        expect(sOlderComp.title).toBe('Older');
    });


})
