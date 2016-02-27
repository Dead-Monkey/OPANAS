import {Injectable} from 'angular2/core';
import {Food} from '../food/food.service';

@Injectable()

export class CalendarService {

    private calendar: Array<Day>= [];

    getCalendar() {
        return this.calendar;
    }

    addDay() {
        let date = new Date();
        date.setHours(0, 0, 0, 0);
        let day: Day = {'date': date, 'food': [], 'sport':[], 'rest':[]}
        for (let day of this.calendar) {
            if (day['date'].getTime() === date.getTime()) {
                return console.log(`date already exist`);
            }
        }
        this.calendar.push(day);
    }




    getDay(date: Date): Day {
        date.setHours(0, 0, 0, 0);
        for (let day of this.calendar) {
            if (day['date'].getTime() === date.getTime()) {
                return day;
            }
        }
    }

    getDailyFood(date: Date):Array<Food> {
        date.setHours(0, 0, 0, 0);
        for (let day of this.calendar) {
            if (day['date'].getTime() === date.getTime()) {
                return day['food'];
            } else {
                console.log(`not exist date`);
            }
        }
    }

    setDailyFood(food: Food, date: Date) {
        date.setHours(0, 0, 0, 0);
        for (let day of this.calendar) {
            if (day['date'].getTime() === date.getTime()) {
                day['food'].push(food);
            } else {
                this.calendar.push()
            }
        }
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
