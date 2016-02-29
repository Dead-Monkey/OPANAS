import {Injectable} from 'angular2/core';
import {Food} from '../food/food.service';
import {StorageService} from '../../shared/services/storage/storage.service';

@Injectable()

export class CalendarService {

    private calendar: Array<Day> = [];
    private storageKeys = {
        'calendar': 'calendar'
    }

    constructor(private _storageService: StorageService) {
        this.saveCalendar();
    }

    testStorage() {
        this._storageService.setItem('name', this.calendar);
        console.log(this._storageService.getItem('name'));

    }

    createCalendar() {
        let startYear = 2014;
        let lastYear = 2020;
        let days = (lastYear - startYear) * 366;

        for (let i = 1; i < days; i++) {
            this.addDay(new Date(startYear, 0, i));
        }
        console.log(`calendare is created`);
    }

    saveCalendar() {
        if (this._storageService.getItem(this.storageKeys.calendar)) {
            this.calendar = this._storageService.getItem(this.storageKeys.calendar);
            for (let day of this.calendar) {
                day['date'] = new Date(<any>day['date']);
            }
            console.log(`calendar saved`);
        } else {
            this.createCalendar();
            this._storageService.setItem(this.storageKeys.calendar, this.calendar)
            this.calendar = this._storageService.getItem(this.storageKeys.calendar);
            for (let day of this.calendar) {
                day['date'] = new Date(<any>day['date']);
            }
            console.log(`new calendar created and saved`);
        }
    }

    refreshCalendar() {
        this._storageService.setItem(this.storageKeys.calendar, this.calendar);
    }

    getCalendar() {
        return this.calendar;
    }

    addDay(date: Date = new Date()) {
        let daySample: Day = { 'date': date, 'food': [], 'sport': [], 'rest': [] }
        date.setHours(0, 0, 0, 0);
        for (let day of this.calendar) {
            if (day['date'].getTime() === date.getTime()) {
                return console.log(`date already exist`);
            }
        }
        this.calendar.push(daySample);
    }

    getDay(date: Date): Day {
        date.setHours(0, 0, 0, 0);
        for (let day of this.calendar) {
            if (day['date'].getTime() === date.getTime()) {
                return day;
            }
        }
    }

    getDailyFood(date: Date): Array<Food> {
        date.setHours(0, 0, 0, 0);
        for (let day of this.calendar) {
            if (day['date'].getTime() === date.getTime()) {
                return day['food'];
            }
        }
        console.log(`not exist date`);
    }

    //can be use 4 menu
    setDailyFood(food: Food, date: Date) {
        date.setHours(0, 0, 0, 0);
        for (let day of this.calendar) {
            if (day['date'].getTime() === date.getTime()) {
                day['food'].push(food);
            }
        }
        this.refreshCalendar();
    }

    removeDailyFood(index, date: Date) {
        date.setHours(0, 0, 0, 0);
        for (let day of this.calendar) {
            if (day['date'].getTime() === date.getTime()) {
                day['food'].splice(index, 1);
            }
        }
        this.refreshCalendar();
    }

    setDailySport() {

    }

    setDailyRest() {

    }

}

export interface Day {
    date: Date;
    food: Array<Food>;
    sport: Array<Object>;
    rest: Array<Object>;
}
