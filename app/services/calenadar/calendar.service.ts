import {Injectable} from 'angular2/core';
import {Food} from '../food/food.service';
import {Sport} from '../sport/sport.service';
import {StorageService} from '../../shared/services/storage/storage.service';

@Injectable()

export class CalendarService {

    private calendar: Array<Day> = [];
    private currentYear = new Date().getFullYear()
    private currentMonth = new Date().getMonth()
    private currentDate = new Date();
    private startYear = 2016;
    private lastYear = 2020;
    private storageKeys = {
        'calendar': 'calendar'
    }

    constructor(private _storageService: StorageService) {
        this.saveCalendar();
        this.currentDate.setHours(0, 0, 0, 0)
    }

    getFirstYear() {
        return this.startYear;
    }
    getLastYear() {
        return this.lastYear;

    }

    createCalendar() {
        let startYear = this.startYear;
        let lastYear = this.lastYear;
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

    getCurrentDate() {
        return this.currentDate;
    }

    setCurrentDate(date: Date) {
        this.currentDate = date;
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

    getYear(year) {
        for (let day of this.calendar) {
            if (day['date'].getFullYear() === year) {
                console.log(this.calendar.indexOf(day))
            }
        }
    }
    switchYearPlus() {
        if (this.currentYear < this.getLastYear() - 1) {
            this.currentYear++;
        }
        console.log(`plus`, this.currentYear);
    }

    switchYearMinus() {
        if (this.currentYear > this.getFirstYear()) {
            this.currentYear--;
        }
        console.log(`minus`);

    }

    getMonth(year: number = this.currentYear, month: number = this.currentMonth) {
        let res = []
        for (let day of this.calendar) {
            if (day['date'].getFullYear() === year && day['date'].getMonth() === month) {
                res.push(day)
            }
        }
        return res;
    }

    switchwMonthPlus() {
        if (this.currentMonth < 11) {
            this.currentMonth++;
        }
    }

    switchMonthMinus() {
        if (this.currentMonth > 0) {
            this.currentMonth--;
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
      if(isNaN(food['weight'])){
        food['weight']=0
      }
        date.setHours(0, 0, 0, 0);
        for (let day of this.calendar) {
            if (day['date'].getTime() === date.getTime()) {
                day['food'].unshift(food);
            }
        }
        this.refreshCalendar();
    }

    changeDailyFood(index, date: Date, food: Food) {
        date.setHours(0, 0, 0, 0);
        for (let day of this.calendar) {
            if (day['date'].getTime() === date.getTime()) {
                day['food'].splice(index, 1, food);
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



    getDailySport(date: Date): Array<Sport> {
        date.setHours(0, 0, 0, 0);
        for (let day of this.calendar) {
            if (day['date'].getTime() === date.getTime()) {
                return day['sport'];
            }
        }
        console.log(`not exist date`);
    }

    setDailySport(sport: Sport, date: Date) {
        date.setHours(0, 0, 0, 0);
        for (let day of this.calendar) {
            if (day['date'].getTime() === date.getTime()) {
                day['sport'].unshift(sport);
            }
        }
        this.refreshCalendar();
    }

    changeDailySport(index, date: Date, sport: Sport) {
        date.setHours(0, 0, 0, 0);
        for (let day of this.calendar) {
            if (day['date'].getTime() === date.getTime()) {
                day['sport'].splice(index, 1, sport);
            }
        }
        this.refreshCalendar();
    }

    removeDailySport(index, date: Date) {
        date.setHours(0, 0, 0, 0);
        for (let day of this.calendar) {
            if (day['date'].getTime() === date.getTime()) {
                day['sport'].splice(index, 1);
            }
        }
        this.refreshCalendar();
    }

    setDailyRest() {

    }

}

export interface Day {
    date: Date;
    food: Array<Food>;
    sport: Array<Sport>;
    rest: Array<Object>;
}
