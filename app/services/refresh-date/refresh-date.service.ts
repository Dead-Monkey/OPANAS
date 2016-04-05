import {Injectable} from 'angular2/core';

@Injectable()

export class RefreshDateService {
    private today: Date = new Date();
    private tomorrow: Date;
    private timer: number;

    constructor() {
        this.timerMaker();
    }

    timerMaker() {
        this.today = new Date();
        this.tomorrow = new Date();
        this.tomorrow.setHours(0, 0, 0, 0);
        this.tomorrow.setDate(this.today.getDate() + 1);
        this.timer = this.tomorrow.getTime() - this.today.getTime();
    }

    refresher() {
        setTimeout(() => {
            location.reload();
        }, this.timer);
    }
}
