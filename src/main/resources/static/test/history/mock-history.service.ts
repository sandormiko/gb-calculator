import {HistoryService } from '../../app/history/history.service';

export class MockHistoryService extends HistoryService {
    constructor() {
        super(null);
    }
}
