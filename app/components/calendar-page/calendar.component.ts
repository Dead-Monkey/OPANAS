import {Component, OnInit} from 'angular2/core';
import {CalendarService, Day} from '../../services/calenadar/calendar.service';

@Component({
    selector: 'op-calendar',
    directives: [],
    providers: [],
    pipes: [],
    styles: [`
.calendar{
  position:absolute;
  top:20vw;
  left:13vw;
  width:74vw;
  background:#3f414a;
  text-align: center;
  color: #ff9d2d;
  overflow:hidden;
  line-height: 10vw;
}
.year{
  height:10vw;
  width:100%;
  overflow:hidden;
  font-size: 7vw;

}
.month{
  height:10vw;
  width: 100%;
  font-size: 6vw;
}

.date {
  float: left;
  width: 10vw;
  height: 10vw;
  border: 0.5vw solid #ff9d2d;
}
.currentDate {
  background-color: #0d0e15;
  color: #de5200;
}
.toggleLeft {
  float: left;
  width: 25vw;
}
.toggleRight {
  float: left;
  width: 20vw;
}
.calendar_buttons {
  position: absolute;
  top: 110vw;
  left: 13vw;
  width: 74vw;
  height: 50vw;
  font-size: 5vw;
  color: #ff9d2d;
  float: left;
}
.calendar_todayButton {
  position: relative;
  float: left;
  height: 12vw;
  width: 50vw;
  margin-bottom: 3vw;
}
.calendar_todayIcon {
  position: relative;
  height: 12vw;
  width: 12vw;
  float: left;
  background: url('./src/img/today.png') no-repeat center center;
  background-size: cover;
  box-sizing: border-box;
}
.calendar_todayText {
  position: relative;
  width: 20vw;
  float: left;
  line-height: 12vw;
  height: 12vw;
  left: 3vw;
}
      `],
    template: `
  <div class="container">
  <div class="calendar">
    <div class="year">

      <div class="toggleLeft" (click)="switchViewYearMinus()">
        <</div>
          <div class="toggleLeft">
            {{clMonth[0]['date'].getFullYear()}}
          </div>
          <div class="toggleRight" (click)="switchViewYearPlus()">></div>
      </div>

      <div class="month" [ngSwitch]="clMonth[0]['date'].getMonth()">
        <div class="toggleLeft" (click)="switchViewMonthMinus()">
          <</div>

            <div class="toggleLeft" *ngSwitchWhen="0"> January </div>
            <div class="toggleLeft" *ngSwitchWhen="1"> February </div>
            <div class="toggleLeft" *ngSwitchWhen="2"> March </div>
            <div class="toggleLeft" *ngSwitchWhen="3"> April </div>
            <div class="toggleLeft" *ngSwitchWhen="4"> May </div>
            <div class="toggleLeft" *ngSwitchWhen="5"> June </div>
            <div class="toggleLeft" *ngSwitchWhen="6"> July </div>
            <div class="toggleLeft" *ngSwitchWhen="7"> August </div>
            <div class="toggleLeft" *ngSwitchWhen="8"> September </div>
            <div class="toggleLeft" *ngSwitchWhen="9"> October </div>
            <div class="toggleLeft" *ngSwitchWhen="10"> November </div>
            <div class="toggleLeft" *ngSwitchWhen="11"> December </div>

            <div class="toggleRight" (click)="switchViewMonthPlus()">></div>

        </div>

        <div class="date">Sun</div>
        <div class="date">Mon</div>
        <div class="date">Tue</div>
        <div class="date">Wed</div>
        <div class="date">Thu</div>
        <div class="date">Fri</div>
        <div class="date">Sat</div>

        <div class="date" *ngFor="#item of pushDays"></div>
        <div class="date" [ngClass]="{currentDate: marker(item)}" *ngFor="#item of clMonth" (click)="pickDate(item, marker);">{{item['date'].getDate()}}</div>
        <div class="date" *ngFor="#item of pushDaysEnd"></div>
      </div>

      <div class="calendar_buttons">
        <div class="calendar_todayButton" (touchend)="goToday()">
          <div class="calendar_todayIcon"></div>
          <div class="calendar_todayText" >Today</div>
        </div>
      </div>

    </div>

`
})
export class CalendarComponent implements OnInit {

    private clMonth = []
    private pushDays = []
    private pushDaysEnd = []
    private currentYear = new Date().getFullYear()
    private currentMonth = new Date().getMonth()
    private currentDay = false

    constructor(private _calendarServe: CalendarService) {
    }

    ngOnInit() {
        this.createView();
    }

    createView() {
        this.clMonth = this._calendarServe.getMonth();
        this.pushDays = []
        this.pushDaysEnd = []

        let pusher = this.clMonth[0].date.getDay() - 1;
        for (let i = 0; i <= pusher; i++) {
            this.pushDays.push(i)
        }
        let pusherEnd = this.clMonth[this.clMonth.length - 1].date.getDay()
        for (let i = 0; i < (6 - pusherEnd); i++) {
            this.pushDaysEnd.push(i)
        }
    }

    switchViewYearPlus() {
        this._calendarServe.switchYearPlus();
        this.createView();
    }

    switchViewYearMinus() {
        this._calendarServe.switchYearMinus();
        this.createView();
    }

    switchViewMonthPlus() {
        this._calendarServe.switchwMonthPlus();
        this.createView();
    }

    switchViewMonthMinus() {
        this._calendarServe.switchMonthMinus();
        this.createView();
    }

    pickDate(item) {
        this._calendarServe.setCurrentDate(item['date']);
    }

    marker(item) {
        if (this._calendarServe.getCurrentDate().getTime() === item['date'].getTime()) {
            return true
        }
    }

    goToday() {
        this._calendarServe.swithToToday()
        this.createView();
    }

}
