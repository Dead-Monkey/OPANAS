System.register(['angular2/core', '../../shared/services/storage/storage.service'], function(exports_1, context_1) {
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
    var core_1, storage_service_1;
    var CalendarService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (storage_service_1_1) {
                storage_service_1 = storage_service_1_1;
            }],
        execute: function() {
            CalendarService = (function () {
                function CalendarService(_storageService) {
                    this._storageService = _storageService;
                    this.calendar = [];
                    this.storageKeys = {
                        'calendar': 'calendar'
                    };
                    this.saveCalendar();
                    console.log(this.getDay(new Date()));
                }
                CalendarService.prototype.createCalendar = function () {
                    var startYear = 2014;
                    var lastYear = 2020;
                    var days = (lastYear - startYear) * 366;
                    for (var i = 1; i < days; i++) {
                        this.addDay(new Date(startYear, 0, i));
                    }
                    console.log("calendare is created");
                };
                CalendarService.prototype.saveCalendar = function () {
                    if (this._storageService.getItem(this.storageKeys.calendar)) {
                        this.calendar = this._storageService.getItem(this.storageKeys.calendar);
                        for (var _i = 0, _a = this.calendar; _i < _a.length; _i++) {
                            var day = _a[_i];
                            day['date'] = new Date(day['date']);
                        }
                        console.log("calendar saved");
                    }
                    else {
                        this.createCalendar();
                        this._storageService.setItem(this.storageKeys.calendar, this.calendar);
                        this.calendar = this._storageService.getItem(this.storageKeys.calendar);
                        for (var _b = 0, _c = this.calendar; _b < _c.length; _b++) {
                            var day = _c[_b];
                            day['date'] = new Date(day['date']);
                        }
                        console.log("new calendar created and saved");
                    }
                };
                CalendarService.prototype.refreshCalendar = function () {
                    this._storageService.setItem(this.storageKeys.calendar, this.calendar);
                };
                CalendarService.prototype.getCalendar = function () {
                    return this.calendar;
                };
                CalendarService.prototype.addDay = function (date) {
                    if (date === void 0) { date = new Date(); }
                    var daySample = { 'date': date, 'food': [], 'sport': [], 'rest': [] };
                    date.setHours(0, 0, 0, 0);
                    for (var _i = 0, _a = this.calendar; _i < _a.length; _i++) {
                        var day = _a[_i];
                        if (day['date'].getTime() === date.getTime()) {
                            return console.log("date already exist");
                        }
                    }
                    this.calendar.push(daySample);
                };
                CalendarService.prototype.getDay = function (date) {
                    date.setHours(0, 0, 0, 0);
                    for (var _i = 0, _a = this.calendar; _i < _a.length; _i++) {
                        var day = _a[_i];
                        if (day['date'].getTime() === date.getTime()) {
                            return day;
                        }
                    }
                };
                CalendarService.prototype.getDailyFood = function (date) {
                    date.setHours(0, 0, 0, 0);
                    for (var _i = 0, _a = this.calendar; _i < _a.length; _i++) {
                        var day = _a[_i];
                        if (day['date'].getTime() === date.getTime()) {
                            return day['food'];
                        }
                    }
                    console.log("not exist date");
                };
                //can be use 4 menu
                CalendarService.prototype.setDailyFood = function (food, date) {
                    date.setHours(0, 0, 0, 0);
                    for (var _i = 0, _a = this.calendar; _i < _a.length; _i++) {
                        var day = _a[_i];
                        if (day['date'].getTime() === date.getTime()) {
                            day['food'].unshift(food);
                        }
                    }
                    this.refreshCalendar();
                };
                CalendarService.prototype.changeDailyFood = function (index, date, food) {
                    date.setHours(0, 0, 0, 0);
                    for (var _i = 0, _a = this.calendar; _i < _a.length; _i++) {
                        var day = _a[_i];
                        if (day['date'].getTime() === date.getTime()) {
                            day['food'].splice(index, 1, food);
                        }
                    }
                    this.refreshCalendar();
                };
                CalendarService.prototype.removeDailyFood = function (index, date) {
                    date.setHours(0, 0, 0, 0);
                    for (var _i = 0, _a = this.calendar; _i < _a.length; _i++) {
                        var day = _a[_i];
                        if (day['date'].getTime() === date.getTime()) {
                            day['food'].splice(index, 1);
                        }
                    }
                    this.refreshCalendar();
                };
                CalendarService.prototype.getDailySport = function (date) {
                    date.setHours(0, 0, 0, 0);
                    for (var _i = 0, _a = this.calendar; _i < _a.length; _i++) {
                        var day = _a[_i];
                        if (day['date'].getTime() === date.getTime()) {
                            return day['sport'];
                        }
                    }
                    console.log("not exist date");
                };
                CalendarService.prototype.setDailySport = function (sport, date) {
                    date.setHours(0, 0, 0, 0);
                    for (var _i = 0, _a = this.calendar; _i < _a.length; _i++) {
                        var day = _a[_i];
                        if (day['date'].getTime() === date.getTime()) {
                            day['sport'].unshift(sport);
                        }
                    }
                    this.refreshCalendar();
                };
                CalendarService.prototype.changeDailySport = function (index, date, sport) {
                    date.setHours(0, 0, 0, 0);
                    for (var _i = 0, _a = this.calendar; _i < _a.length; _i++) {
                        var day = _a[_i];
                        if (day['date'].getTime() === date.getTime()) {
                            day['sport'].splice(index, 1, sport);
                        }
                    }
                    this.refreshCalendar();
                };
                CalendarService.prototype.removeDailySport = function (index, date) {
                    date.setHours(0, 0, 0, 0);
                    for (var _i = 0, _a = this.calendar; _i < _a.length; _i++) {
                        var day = _a[_i];
                        if (day['date'].getTime() === date.getTime()) {
                            day['sport'].splice(index, 1);
                        }
                    }
                    this.refreshCalendar();
                };
                CalendarService.prototype.setDailyRest = function () {
                };
                CalendarService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [storage_service_1.StorageService])
                ], CalendarService);
                return CalendarService;
            }());
            exports_1("CalendarService", CalendarService);
        }
    }
});
//# sourceMappingURL=calendar.service.js.map