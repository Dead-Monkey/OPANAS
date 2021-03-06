System.register(['angular2/core', '../../services/calenadar/calendar.service', '../../shared/services/translate/translate.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, calendar_service_1, translate_service_1;
    var CalendarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (calendar_service_1_1) {
                calendar_service_1 = calendar_service_1_1;
            },
            function (translate_service_1_1) {
                translate_service_1 = translate_service_1_1;
            }],
        execute: function() {
            CalendarComponent = (function () {
                function CalendarComponent(_calendarServe) {
                    this._calendarServe = _calendarServe;
                    this.clMonth = [];
                    this.pushDays = [];
                    this.pushDaysEnd = [];
                    this.currentYear = new Date().getFullYear();
                    this.currentMonth = new Date().getMonth();
                    this.currentDay = false;
                }
                CalendarComponent.prototype.ngOnInit = function () {
                    this.createView();
                };
                CalendarComponent.prototype.createView = function () {
                    this.clMonth = this._calendarServe.getMonth();
                    this.pushDays = [];
                    this.pushDaysEnd = [];
                    var pusher = this.clMonth[0].date.getDay() - 1;
                    for (var i = 0; i <= pusher; i++) {
                        this.pushDays.push(i);
                    }
                    var pusherEnd = this.clMonth[this.clMonth.length - 1].date.getDay();
                    for (var i = 0; i < (6 - pusherEnd); i++) {
                        this.pushDaysEnd.push(i);
                    }
                };
                CalendarComponent.prototype.switchViewYearPlus = function () {
                    this._calendarServe.switchYearPlus();
                    this.createView();
                };
                CalendarComponent.prototype.switchViewYearMinus = function () {
                    this._calendarServe.switchYearMinus();
                    this.createView();
                };
                CalendarComponent.prototype.switchViewMonthPlus = function () {
                    this._calendarServe.switchwMonthPlus();
                    this.createView();
                };
                CalendarComponent.prototype.switchViewMonthMinus = function () {
                    this._calendarServe.switchMonthMinus();
                    this.createView();
                };
                CalendarComponent.prototype.pickDate = function (item) {
                    this._calendarServe.setCurrentDate(item['date']);
                };
                CalendarComponent.prototype.marker = function (item) {
                    if (this._calendarServe.getCurrentDate().getTime() === item['date'].getTime()) {
                        return true;
                    }
                };
                CalendarComponent.prototype.goToday = function () {
                    this._calendarServe.swithToToday();
                    this.createView();
                };
                CalendarComponent = __decorate([
                    core_1.Component({
                        selector: 'op-calendar',
                        directives: [],
                        providers: [],
                        pipes: [translate_service_1.TranslatePipe],
                        styles: ["\n.calendar{\n  position:absolute;\n  top:20vw;\n  left:13vw;\n  width:74vw;\n  background:#3f414a;\n  text-align: center;\n  color: #ff9d2d;\n  overflow:hidden;\n  line-height: 10vw;\n}\n.year{\n  height:10vw;\n  width:100%;\n  overflow:hidden;\n  font-size: 7vw;\n\n}\n.month{\n  height:10vw;\n  width: 100%;\n  font-size: 6vw;\n}\n\n.date {\n  float: left;\n  width: 10vw;\n  height: 10vw;\n  border: 0.5vw solid #ff9d2d;\n}\n.currentDate {\n  background-color: #0d0e15;\n  color: #de5200;\n}\n.toggleLeft {\n  float: left;\n  width: 25vw;\n}\n.toggleRight {\n  float: left;\n  width: 20vw;\n}\n.calendar_buttons {\n  position: absolute;\n  top: 117vw;\n  left: 13vw;\n  width: 74vw;\n  height: 50vw;\n  font-size: 5vw;\n  color: #ff9d2d;\n  float: left;\n}\n.calendar_todayButton {\n  position: relative;\n  float: left;\n  height: 12vw;\n  width: 50vw;\n  margin-bottom: 3vw;\n}\n.calendar_todayIcon {\n  position: relative;\n  height: 12vw;\n  width: 12vw;\n  float: left;\n  background: url('./src/img/today.png') no-repeat center center;\n  background-size: cover;\n  box-sizing: border-box;\n  border: 2px solid #ff9d2d;\n  border-radius: 50%;\n}\n.calendar_todayText {\n  position: relative;\n  width: 20vw;\n  float: left;\n  line-height: 12vw;\n  height: 12vw;\n  left: 3vw;\n}\n      "],
                        template: "\n  <div class=\"container\">\n  <div class=\"calendar\">\n    <div class=\"year\">\n\n      <div class=\"toggleLeft\" (click)=\"switchViewYearMinus()\">\n        <</div>\n          <div class=\"toggleLeft\">\n            {{clMonth[0]['date'].getFullYear()}}\n          </div>\n          <div class=\"toggleRight\" (click)=\"switchViewYearPlus()\">></div>\n      </div>\n\n      <div class=\"month\" [ngSwitch]=\"clMonth[0]['date'].getMonth()\">\n        <div class=\"toggleLeft\" (click)=\"switchViewMonthMinus()\"> <</div>\n\n            <div class=\"toggleLeft\" *ngSwitchWhen=\"0\"> {{'January'|translate}} </div>\n            <div class=\"toggleLeft\" *ngSwitchWhen=\"1\"> {{'February'|translate}} </div>\n            <div class=\"toggleLeft\" *ngSwitchWhen=\"2\"> {{'March'|translate}} </div>\n            <div class=\"toggleLeft\" *ngSwitchWhen=\"3\"> {{'April'|translate}} </div>\n            <div class=\"toggleLeft\" *ngSwitchWhen=\"4\"> {{'May'|translate}} </div>\n            <div class=\"toggleLeft\" *ngSwitchWhen=\"5\">{{'June'|translate}} </div>\n            <div class=\"toggleLeft\" *ngSwitchWhen=\"6\">{{'July'|translate}} </div>\n            <div class=\"toggleLeft\" *ngSwitchWhen=\"7\"> {{'August'|translate}} </div>\n            <div class=\"toggleLeft\" *ngSwitchWhen=\"8\">{{'September'|translate}} </div>\n            <div class=\"toggleLeft\" *ngSwitchWhen=\"9\">{{'October'|translate}} </div>\n            <div class=\"toggleLeft\" *ngSwitchWhen=\"10\"> {{'November'|translate}} </div>\n            <div class=\"toggleLeft\" *ngSwitchWhen=\"11\"> {{'December'|translate}} </div>\n\n            <div class=\"toggleRight\" (click)=\"switchViewMonthPlus()\">></div>\n\n        </div>\n\n        <div class=\"date\">{{'Sun'|translate}}  </div>\n        <div class=\"date\">{{'Mon'|translate}} </div>\n        <div class=\"date\">{{'Tue'|translate}} </div>\n        <div class=\"date\">{{'Wed'|translate}} </div>\n        <div class=\"date\">{{'Thu'|translate}} </div>\n        <div class=\"date\">{{'Fri'|translate}} </div>\n        <div class=\"date\">{{'Sat'|translate}} </div>\n\n        <div class=\"date\" *ngFor=\"#item of pushDays\"></div>\n        <div class=\"date\" [ngClass]=\"{currentDate: marker(item)}\" *ngFor=\"#item of clMonth\" (click)=\"pickDate(item, marker);\">{{item['date'].getDate()}}</div>\n        <div class=\"date\" *ngFor=\"#item of pushDaysEnd\"></div>\n      </div>\n\n      <div class=\"calendar_buttons\">\n        <div class=\"calendar_todayButton\" (touchend)=\"goToday()\">\n          <div class=\"calendar_todayIcon\"></div>\n          <div class=\"calendar_todayText\" >{{'today'|translate}} </div>\n        </div>\n      </div>\n\n    </div>\n\n"
                    }), 
                    __metadata('design:paramtypes', [calendar_service_1.CalendarService])
                ], CalendarComponent);
                return CalendarComponent;
            }());
            exports_1("CalendarComponent", CalendarComponent);
        }
    }
});
//# sourceMappingURL=calendar.component.js.map