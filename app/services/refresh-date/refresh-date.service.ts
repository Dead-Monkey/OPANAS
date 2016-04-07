import {Injectable} from 'angular2/core';

@Injectable()

export class RefreshDateService {
    private today: Date = new Date();
    private tomorrow: Date;
    private timer: number;
    private go;
    constructor() {
        this.timerMaker();
        this.refresher();
        document.addEventListener("deviceready", () => {
            cordova.plugins.backgroundMode.onactivate = () => {
                clearTimeout(this.go)
                this.refresher();
            }
            cordova.plugins.backgroundMode.ondeactivate = () => {
                clearTimeout(this.go)
                this.refresher();
            };
        }, false);
    }

    timerMaker() {
        this.today = new Date();
        this.tomorrow = new Date();
        this.tomorrow.setHours(0, 0, 0, 0);
        this.tomorrow.setDate(this.today.getDate() + 1);
        this.timer = this.tomorrow.getTime() - this.today.getTime();
        console.log(`timer ${Math.floor(this.timer / 1000 / 60 / 60)} hours ${Math.floor(this.timer / 1000 / 60 % 60)} minutes ${Math.floor(this.timer / 1000 - Math.floor(this.timer / 1000 / 60) * 60)} seconds`);
    }

    refresher() {
        this.go = setTimeout(() => {
            location.reload();
        }, this.timer);
    }
}
