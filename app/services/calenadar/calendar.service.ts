import {Injectable} from 'angular2/core';
import {Food} from '../food/food.service';

@Injectable()

export class CalendarService {

    private calendar: Array<Day> = [];

    constructor() {

        let today = new Date();
        let tomorrow = new Date();
        tomorrow.setHours(0, 0, 0, 0);
        tomorrow.setDate(today.getDate() + 1)
        console.log(tomorrow.getTime() - today.getTime());
        
        if (this.calendar) {
            this.createCalendar();
        }
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

    //mb 4 menu
    // setDailyFood(food: Food, date: Date) {
    //     date.setHours(0, 0, 0, 0);
    //     for (let day of this.calendar) {
    //         if (day['date'].getTime() === date.getTime()) {
    //             day['food'].push(food);
    //         } else {
    //             this.calendar.push()
    //         }
    //     }
    // }

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
