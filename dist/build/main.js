var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("shared/services/translate/src/services/translate.service", ['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    var TranslateService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TranslateService = (function () {
                function TranslateService() {
                    this.messages = {
                        'error': {
                            'setLanguages': 'you are dont set any languages! :-(',
                            'setKeys': 'you are dont set any keys! :-(',
                            'supportLang': 'is not suport language. We are support:',
                            'badKey': 'does not exist key!',
                            'translate': '!translate error! :-(',
                            'currentLanguage': 'please set currentLanguage'
                        }
                    };
                    this.setSupportLanguages(this.messages.error.setLanguages);
                    this.setKeys(this.messages.error.setKeys);
                }
                TranslateService.prototype.getDefaultLanguage = function () {
                    return this.defaultLanguage;
                };
                TranslateService.prototype.setDefaultLanguage = function (lang) {
                    for (var key in this.supportLanguages) {
                        if (this.supportLanguages.hasOwnProperty(lang)) {
                            this.defaultLanguage = lang;
                            return this.currentLanguage;
                        }
                    }
                    console.log(lang + " " + this.messages.error.supportLang + " ", this.supportLanguages);
                };
                TranslateService.prototype.getCurrentLanguage = function () {
                    return this.currentLanguage;
                };
                TranslateService.prototype.setCurrentLanguage = function (lang) {
                    for (var key in this.supportLanguages) {
                        if (this.supportLanguages.hasOwnProperty(lang)) {
                            this.currentLanguage = lang;
                            return this.currentLanguage;
                        }
                    }
                    console.log(lang + " " + this.messages.error.supportLang + " ", this.supportLanguages);
                };
                TranslateService.prototype.getSupportLanguages = function () {
                    return this.supportLanguages;
                };
                TranslateService.prototype.setSupportLanguages = function (lang) {
                    this.supportLanguages = lang;
                };
                TranslateService.prototype.getKeys = function () {
                    return this.keys;
                };
                TranslateService.prototype.setKeys = function (keys) {
                    this.keys = keys;
                };
                TranslateService.prototype.getTranslate = function (word) {
                    var res = "" + this.messages.error.translate;
                    if (this.currentLanguage) {
                        for (var key in this.keys[this.currentLanguage]) {
                            if (this.keys[this.currentLanguage].hasOwnProperty(word)) {
                                res = this.keys[this.currentLanguage][word];
                            }
                            else if (this.defaultLanguage) {
                                if (this.keys[this.defaultLanguage].hasOwnProperty(word)) {
                                    res = this.keys[this.defaultLanguage][word];
                                }
                                else {
                                    console.log(word + " - " + this.messages.error.badKey);
                                    res = "" + this.messages.error.translate;
                                }
                            }
                            else {
                                console.log(word + " - " + this.messages.error.badKey);
                                res = "" + this.messages.error.translate;
                            }
                        }
                        return "" + res;
                    }
                    console.log(this.messages.error.translate + " :: " + this.messages.error.currentLanguage);
                    return "" + this.messages.error.translate;
                };
                TranslateService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], TranslateService);
                return TranslateService;
            }());
            exports_1("TranslateService", TranslateService);
        }
    }
});
System.register("shared/services/translate/src/pipes/translate.pipe", ['angular2/core', "shared/services/translate/src/services/translate.service"], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_2, translate_service_1;
    var TranslatePipe;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (translate_service_1_1) {
                translate_service_1 = translate_service_1_1;
            }],
        execute: function() {
            TranslatePipe = (function () {
                function TranslatePipe(_translator) {
                    this._translator = _translator;
                }
                TranslatePipe.prototype.transform = function (value, args) {
                    return this._translator.getTranslate(value);
                };
                TranslatePipe = __decorate([
                    core_2.Pipe({
                        name: 'translate',
                        pure: false
                    }), 
                    __metadata('design:paramtypes', [translate_service_1.TranslateService])
                ], TranslatePipe);
                return TranslatePipe;
            }());
            exports_2("TranslatePipe", TranslatePipe);
        }
    }
});
System.register("shared/services/translate/translate.service", ["shared/services/translate/src/services/translate.service", "shared/services/translate/src/pipes/translate.pipe"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    return {
        setters:[
            function (translate_service_2_1) {
                exports_3({
                    "TranslateService": translate_service_2_1["TranslateService"]
                });
            },
            function (translate_pipe_1_1) {
                exports_3({
                    "TranslatePipe": translate_pipe_1_1["TranslatePipe"]
                });
            }],
        execute: function() {
        }
    }
});
System.register("shared/components/progress-bar/progress-bar.component", ['angular2/core', "shared/services/translate/translate.service"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var core_3, translate_service_3;
    var ProgressBar;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (translate_service_3_1) {
                translate_service_3 = translate_service_3_1;
            }],
        execute: function() {
            ProgressBar = (function () {
                function ProgressBar() {
                }
                ProgressBar.prototype.getMainLine = function () {
                    this.mainLine = (this.mainLine > 100) ? 100 : this.mainLine;
                    return this.mainLine;
                };
                ProgressBar.prototype.getSecondLine = function () {
                    this.secondLine = (this.secondLine > 100) ? 100 : this.secondLine;
                    return this.secondLine;
                };
                __decorate([
                    core_3.Input(), 
                    __metadata('design:type', String)
                ], ProgressBar.prototype, "name", void 0);
                __decorate([
                    core_3.Input(), 
                    __metadata('design:type', Number)
                ], ProgressBar.prototype, "mainLine", void 0);
                __decorate([
                    core_3.Input(), 
                    __metadata('design:type', Number)
                ], ProgressBar.prototype, "secondLine", void 0);
                ProgressBar = __decorate([
                    core_3.Component({
                        selector: 'fm-progress-bar',
                        directives: [],
                        providers: [],
                        pipes: [translate_service_3.TranslatePipe],
                        styles: ["\n.progress_container {\nwidth: 90vw;\nheight: 7vw;\nposition: relative;\nleft: 5vw;\nbackground-color: rgba(49, 51, 61, 0.7);\nbox-sizing: border-box;\nborder: 5px solid #0C1017;\nborder-radius: 10px;\nz-index:1;\n\n}\n.progress_mainLine {\n  position:absolute;\n  top:0;\n  left:0;\n  background-color: #E48426;\n  height: 100%;\n  border-radius: 5px;\n  text-align: center;\n  color: #181A21;\n  font-size: 4vw;\n}\n.progress_secondLine {\n  position: absolute;\n  top:0;\n  left:0;\n  background-color: #181A21;\n  height: 100%;\n  border-radius: 5px;\n  text-align: right;\n  color: #E48426;\n  font-size: 4vw;\n}\n.progress_barHeader {\n    text-align: center;\n    color: #E48426;\n    font-size: 5vw;\n}\n\n "],
                        template: "\n<div class=\"progress_barHeader\">{{name|translate|uppercase}}</div>\n<div class=\"progress_container\">\n  <div class=\"progress_secondLine\" [style.width.%]=\"getSecondLine()\">\n  </div>\n  <div class=\"progress_mainLine\" [style.width.%]=\"getMainLine()\">\n    1488\n  </div>\n\n</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProgressBar);
                return ProgressBar;
            }());
            exports_4("ProgressBar", ProgressBar);
        }
    }
});
System.register("services/food/food.service", ['angular2/core'], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var core_4;
    var FoodService, food;
    return {
        setters:[
            function (core_4_1) {
                core_4 = core_4_1;
            }],
        execute: function() {
            FoodService = (function () {
                function FoodService() {
                }
                FoodService.prototype.getAllFood = function () {
                    return food;
                };
                FoodService = __decorate([
                    core_4.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], FoodService);
                return FoodService;
            }());
            exports_5("FoodService", FoodService);
            food = [
                {
                    "id": 1,
                    "name": "pizza",
                    "calories": 10,
                    "protein": 10,
                    "carbohydrates": 10,
                    "fat": 10
                },
                {
                    "id": 2,
                    "name": "meet",
                    "calories": 5,
                    "protein": 5,
                    "carbohydrates": 5,
                    "fat": 5
                },
                {
                    "id": 3,
                    "name": "patato",
                    "calories": 20,
                    "protein": 20,
                    "carbohydrates": 20,
                    "fat": 20
                },
                {
                    "id": 4,
                    "name": "tomato",
                    "calories": 20,
                    "protein": 20,
                    "carbohydrates": 20,
                    "fat": 20
                },
                {
                    "id": 5,
                    "name": "apple",
                    "calories": 12,
                    "protein": 12,
                    "carbohydrates": 11,
                    "fat": 10
                }
            ];
        }
    }
});
System.register("shared/pipes/simple-search/simple-search.pipe", ['angular2/core'], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var core_5;
    var SimpleSearch;
    return {
        setters:[
            function (core_5_1) {
                core_5 = core_5_1;
            }],
        execute: function() {
            SimpleSearch = (function () {
                function SimpleSearch() {
                }
                SimpleSearch.prototype.transform = function (value, _a) {
                    var field = _a[0], letter = _a[1];
                    return value.filter(function (item) { return item[field].toLowerCase().includes(letter.toLowerCase()); });
                };
                SimpleSearch = __decorate([
                    core_5.Pipe({
                        name: 'simpleSearch',
                        pure: false
                    }), 
                    __metadata('design:paramtypes', [])
                ], SimpleSearch);
                return SimpleSearch;
            }());
            exports_6("SimpleSearch", SimpleSearch);
        }
    }
});
System.register("shared/services/storage/storage.service", ['angular2/core'], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var core_6;
    var StorageService;
    return {
        setters:[
            function (core_6_1) {
                core_6 = core_6_1;
            }],
        execute: function() {
            StorageService = (function () {
                function StorageService() {
                }
                StorageService.prototype.setItem = function (name, item) {
                    localStorage.setItem(name, JSON.stringify(item));
                    console.log("set " + name + " :: size is " + localStorage.getItem(name).length / 1000 + " KB");
                };
                StorageService.prototype.getItem = function (name) {
                    if (localStorage.getItem(name)) {
                        console.log("get " + name + " :: size is " + localStorage.getItem(name).length / 1000 + " KB");
                    }
                    return JSON.parse(localStorage.getItem(name));
                };
                StorageService = __decorate([
                    core_6.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], StorageService);
                return StorageService;
            }());
            exports_7("StorageService", StorageService);
        }
    }
});
System.register("services/calenadar/calendar.service", ['angular2/core', "shared/services/storage/storage.service"], function(exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var core_7, storage_service_1;
    var CalendarService;
    return {
        setters:[
            function (core_7_1) {
                core_7 = core_7_1;
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
                }
                CalendarService.prototype.testStorage = function () {
                    this._storageService.setItem('name', this.calendar);
                    console.log(this._storageService.getItem('name'));
                };
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
                            day['food'].push(food);
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
                CalendarService.prototype.setDailySport = function () {
                };
                CalendarService.prototype.setDailyRest = function () {
                };
                CalendarService = __decorate([
                    core_7.Injectable(), 
                    __metadata('design:paramtypes', [storage_service_1.StorageService])
                ], CalendarService);
                return CalendarService;
            }());
            exports_8("CalendarService", CalendarService);
        }
    }
});
System.register("services/refresh-date/refresh-date.service", ['angular2/core'], function(exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var core_8;
    var RefreshDateService;
    return {
        setters:[
            function (core_8_1) {
                core_8 = core_8_1;
            }],
        execute: function() {
            RefreshDateService = (function () {
                function RefreshDateService() {
                    this.today = new Date();
                    this.timerMaker();
                }
                RefreshDateService.prototype.timerMaker = function () {
                    this.today = new Date();
                    this.tomorrow = new Date();
                    this.tomorrow.setHours(0, 0, 0, 0);
                    this.tomorrow.setDate(this.today.getDate() + 1);
                    this.timer = this.tomorrow.getTime() - this.today.getTime();
                };
                RefreshDateService.prototype.refresher = function () {
                    var _this = this;
                    var arg = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        arg[_i - 0] = arguments[_i];
                    }
                    console.log("refresher in da house. refresh will make badaboom in " + this.timer / 1000 / 60 + " minutes");
                    console.log("the refresher observes:" + arg);
                    setTimeout(function () {
                        arg.map(function (item) { return item(); });
                        _this.timerMaker();
                        _this.refresher.apply(_this, arg);
                        console.log("refresher da best");
                    }, this.timer);
                };
                RefreshDateService = __decorate([
                    core_8.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], RefreshDateService);
                return RefreshDateService;
            }());
            exports_9("RefreshDateService", RefreshDateService);
        }
    }
});
System.register("components/food-page/food.component", ['angular2/core', "shared/services/translate/translate.service", "shared/components/progress-bar/progress-bar.component", "services/food/food.service", "shared/pipes/simple-search/simple-search.pipe", "services/calenadar/calendar.service", "services/refresh-date/refresh-date.service"], function(exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var core_9, translate_service_4, progress_bar_component_1, food_service_1, simple_search_pipe_1, calendar_service_1, refresh_date_service_1;
    var FoodComponent;
    return {
        setters:[
            function (core_9_1) {
                core_9 = core_9_1;
            },
            function (translate_service_4_1) {
                translate_service_4 = translate_service_4_1;
            },
            function (progress_bar_component_1_1) {
                progress_bar_component_1 = progress_bar_component_1_1;
            },
            function (food_service_1_1) {
                food_service_1 = food_service_1_1;
            },
            function (simple_search_pipe_1_1) {
                simple_search_pipe_1 = simple_search_pipe_1_1;
            },
            function (calendar_service_1_1) {
                calendar_service_1 = calendar_service_1_1;
            },
            function (refresh_date_service_1_1) {
                refresh_date_service_1 = refresh_date_service_1_1;
            }],
        execute: function() {
            FoodComponent = (function () {
                function FoodComponent(_foodServe, _calendarService, _refreshDateService) {
                    this._foodServe = _foodServe;
                    this._calendarService = _calendarService;
                    this._refreshDateService = _refreshDateService;
                    this.model = {};
                    this.currentDate = new Date();
                    this.pickedFood = {};
                    this.pickedFoodContainer = [];
                    this.correctFood = false;
                    this.totalFood = {
                        "calories": {
                            "full": 0,
                            "maybe": 0
                        },
                        "protein": {
                            "full": 0,
                            "maybe": 0
                        },
                        "carbohydrates": {
                            "full": 0,
                            "maybe": 0
                        },
                        "fat": {
                            "full": 0,
                            "maybe": 0
                        }
                    };
                }
                FoodComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.foodContainer = this._foodServe.getAllFood();
                    this.pickedFoodContainer = this._calendarService.getDailyFood(this.currentDate);
                    //4 calculate progress-bar
                    for (var _i = 0, _a = this.pickedFoodContainer; _i < _a.length; _i++) {
                        var food = _a[_i];
                        this.calculateFood(food);
                    }
                    //refresh view on 00:00
                    this._refreshDateService.refresher(function () {
                        _this.currentDate = new Date();
                        // this.currentDate.setDate(this.currentDate.getDate()+1);
                        _this.pickedFoodContainer = _this._calendarService.getDailyFood(_this.currentDate);
                        console.log("refresher 4o-li");
                        //4 progress bar
                        _this.calculateFoodRefresh();
                        for (var _i = 0, _a = _this.pickedFoodContainer; _i < _a.length; _i++) {
                            var food = _a[_i];
                            _this.calculateFood(food);
                        }
                    });
                };
                FoodComponent.prototype.onSubmit = function (food) {
                    this.pickedFood['weight'] = food.value.weight;
                    this.pickedFood['picked'] = true;
                    this._calendarService.setDailyFood(this.pickedFood, this.currentDate);
                    this.calculateFood(this.pickedFood);
                    this.pickedFood = {};
                    this.model = {};
                    this.correctFood = false;
                };
                FoodComponent.prototype.removeFodd = function (index, food) {
                    this._calendarService.removeDailyFood(index, this.currentDate);
                    this.calculateFoodMinus(food);
                };
                FoodComponent.prototype.pickFoodInput = function (name) {
                    for (var _i = 0, _a = this.foodContainer; _i < _a.length; _i++) {
                        var obj = _a[_i];
                        if (obj['name'] === name) {
                            return this.pickFood(obj);
                        }
                        else {
                            this.correctFood = false;
                            console.log("unCorrectFood");
                        }
                    }
                };
                FoodComponent.prototype.pickFood = function (food) {
                    this.pickedFood = Object.assign({}, food);
                    this.model['name'] = food.name;
                    this.correctFood = true;
                };
                FoodComponent.prototype.checkBoxToggle = function (food) {
                    if (food['picked']) {
                        this.calculateFullMinus(food);
                    }
                    else {
                        this.calculateFull(food);
                    }
                    food['picked'] = !food['picked'];
                };
                FoodComponent.prototype.calculateFood = function (food) {
                    this.calculateFull(food);
                    this.calculateMayBe(food);
                };
                FoodComponent.prototype.calculateFoodMinus = function (food) {
                    this.calculateFullMinus(food);
                    this.calculateMayBeMinus(food);
                };
                FoodComponent.prototype.calculateFoodRefresh = function () {
                    this.totalFood.calories.full = 0;
                    this.totalFood.protein.full = 0;
                    this.totalFood.carbohydrates.full = 0;
                    this.totalFood.fat.full = 0;
                    this.totalFood.calories.maybe = 0;
                    this.totalFood.protein.maybe = 0;
                    this.totalFood.carbohydrates.maybe = 0;
                    this.totalFood.fat.maybe = 0;
                };
                FoodComponent.prototype.calculateFull = function (food) {
                    this.totalFood.calories.full = this.totalFood.calories.full + food.calories;
                    this.totalFood.protein.full = this.totalFood.protein.full + food.protein;
                    this.totalFood.carbohydrates.full = this.totalFood.carbohydrates.full + food.carbohydrates;
                    this.totalFood.fat.full = this.totalFood.fat.full + food.fat;
                };
                FoodComponent.prototype.calculateMayBe = function (food) {
                    this.totalFood.calories.maybe = this.totalFood.calories.maybe + food.calories;
                    this.totalFood.protein.maybe = this.totalFood.protein.maybe + food.protein;
                    this.totalFood.carbohydrates.maybe = this.totalFood.carbohydrates.maybe + food.carbohydrates;
                    this.totalFood.fat.maybe = this.totalFood.fat.maybe + food.fat;
                };
                FoodComponent.prototype.calculateFullMinus = function (food) {
                    this.totalFood.calories.full = this.totalFood.calories.full - food.calories;
                    this.totalFood.protein.full = this.totalFood.protein.full - food.protein;
                    this.totalFood.carbohydrates.full = this.totalFood.carbohydrates.full - food.carbohydrates;
                    this.totalFood.fat.full = this.totalFood.fat.full - food.fat;
                };
                FoodComponent.prototype.calculateMayBeMinus = function (food) {
                    this.totalFood.calories.maybe = this.totalFood.calories.maybe - food.calories;
                    this.totalFood.protein.maybe = this.totalFood.protein.maybe - food.protein;
                    this.totalFood.carbohydrates.maybe = this.totalFood.carbohydrates.maybe - food.carbohydrates;
                    this.totalFood.fat.maybe = this.totalFood.fat.maybe - food.fat;
                };
                FoodComponent = __decorate([
                    core_9.Component({
                        selector: 'op-food',
                        directives: [progress_bar_component_1.ProgressBar],
                        providers: [],
                        pipes: [translate_service_4.TranslatePipe, simple_search_pipe_1.SimpleSearch],
                        styles: ["\n\n  .food_form {\n    position: relative;\n    margin: 5vw;\n    height: 10vw;\n  }\n  .food_inputFood {\n    position: absolute;\n    height: 10vw;\n    width: 60vw;\n    background-color: rgba(49, 51, 61, 0.3);\n    box-sizing: border-box;\n    border: 1.5vw solid #0C1017;\n    border-radius: 2vw;\n  }\n  .food_inputWeight {\n    position: absolute;\n    height: 10vw;\n    width: 16vw;\n    left: 61vw;\n    background-color: rgba(49, 51, 61, 0.3);\n    box-sizing: border-box;\n    color: #0d0e15;\n    border: 1.5vw solid #0C1017;\n    border-radius: 2vw;\n  }\n  .food_inputButton_off {\n    position: absolute;\n    right: 0;\n    height: 10vw;\n    width: 12vw;\n    background: url('./src/img/check-off.png') no-repeat center center;\n    background-size: cover;\n    box-sizing: border-box;\n    color: #0d0e15;\n    border: 1.5vw solid #0C1017;\n    border-radius: 2vw;\n  }\n  .food_inputButton_on {\n    position: absolute;\n    right: 0;\n    height: 10vw;\n    width: 12vw;\n    background: url('./src/img/check-on.png') no-repeat center center;\n    background-size: cover;\n    box-sizing: border-box;\n    color: #0d0e15;\n    border: 1.5vw solid #0C1017;\n    border-radius: 2vw;\n  }\n\n  .food_serchContainer {\n    position: absolute;\n    background-color: #aaa;\n    width: 60vw;\n    left: 0;\n    right: 10px;\n    height: 200px;\n    top: 27px;\n    overflow-y: scroll;\n  }\n  .food_list {\n    margin: 5vw;\n    width: 90vw;\n    height: 60vw;\n    overflow-y: scroll;\n  }\n  .food_listItem {\n    float:left;\n    margin-bottom: 2vw;\n    height: 12vw;\n    width: 55vw;\n    line-height: 12vw;\n    box-sizing: border-box;\n    background-color: #3f414a;\n    color: #ff9d2d;\n    font-size: 6vw;\n    text-align: center;\n    border-radius: 2vw;\n    line-height: 12vw;\n\n  }\n  .food_listWeight {\n    float:left;\n    margin-left: 2vw;\n    margin-right: 2vw;\n    height: 12vw;\n    width: 15vw;\n    line-height: 12vw;\n    background-color: #3f414a;\n    box-sizing: border-box;\n    color: #ff9d2d;\n    font-size: 6vw;\n    text-align: center;\n    border-radius: 2vw;\n    border: none;\n  }\n\n  .food_listButton_on {\n    float:left;\n    height: 12vw;\n    width: 12vw;\n    background: url('./src/img/check-on.png') no-repeat center center;\n    background-color: #3f414a;\n    background-size: cover;\n    box-sizing: border-box;\n    color: #0d0e15;\n    border-radius: 2vw;\n  }\n  .food_listButton_off {\n    float:left;\n    height: 12vw;\n    width: 12vw;\n    background: url('./src/img/check-off.png') no-repeat center center;\n    background-color: #3f414a;\n    background-size: cover;\n    box-sizing: border-box;\n    color: #0d0e15;\n    border-radius: 2vw;\n  }\n    "],
                        template: "\n<fm-progress-bar [name]=\"'calories'\" [mainLine]=\"totalFood.calories.full\" [secondLine]=\"totalFood.calories.maybe\"></fm-progress-bar>\n<fm-progress-bar [name]=\"'protein'\" [mainLine]=\"totalFood.protein.full\" [secondLine]=\"totalFood.protein.maybe\"></fm-progress-bar>\n<fm-progress-bar [name]=\"'fat'\" [mainLine]=\"totalFood.fat.full\" [secondLine]=\"totalFood.fat.maybe\"></fm-progress-bar>\n<fm-progress-bar [name]=\"'carbohydrates'\" [mainLine]=\"totalFood.carbohydrates.full\" [secondLine]=\"totalFood.carbohydrates.maybe\"></fm-progress-bar>\n\n<form class=\"food_form\" (ngSubmit)=\"onSubmit(foodForm)\" #foodForm=\"ngForm\">\n\n<label for=\"foodName\"></label>\n<input class=\"food_inputFood\" required [(ngModel)]=\"model.name\" ngControl=\"name\" #name=\"ngForm\" (keyup)=\"pickFoodInput(model.name)\">\n\n<label for=\"foodWeight\"></label>\n<input type=\"number\" min=\"1\" class=\"food_inputWeight\" required [(ngModel)]=\"model.weight\" ngControl=\"weight\" #weight=\"ngForm\">\n\n<button type=\"submit\" [ngClass]=\"{food_inputButton_off: (!foodForm.form.valid || !correctFood || !weight.value), food_inputButton_on: (foodForm.form.valid && correctFood && weight.value )}\" [disabled]=\"!foodForm.form.valid || !correctFood\"></button>\n\n<div *ngIf=\"name.valid\" class=\"food_serchContainer\">\n  <div class=\"food_listItem\" *ngFor=\"#item of foodContainer  | simpleSearch :'name' : name.value; #i = index;\" (click)=\"pickFood(item);\">\n      {{item?.name}}\n  </div>\n</div>\n</form>\n\n<div class=\"food_list\">\n<div *ngFor=\"#item of pickedFoodContainer; #i = index\">\n\n  <div class=\"food_listItem\">\n    {{item?.name}}\n  </div>\n  <input class=\"food_listWeight\" type=\"number\" min=\"1\" [(ngModel)]=\"item.weight\">\n\n  <button (click)=\"removeFodd(i, item)\">minus</button>\n  <div [ngClass]=\"{food_listButton_off: !item.picked, food_listButton_on: item.picked}\"  (click)=\"checkBoxToggle(item)\"></div>\n\n</div>\n</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [food_service_1.FoodService, calendar_service_1.CalendarService, refresh_date_service_1.RefreshDateService])
                ], FoodComponent);
                return FoodComponent;
            }());
            exports_10("FoodComponent", FoodComponent);
        }
    }
});
System.register("components/sport-page/sport.component", ['angular2/core', "shared/services/translate/translate.service"], function(exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    var core_10, translate_service_5;
    var SportComponent;
    return {
        setters:[
            function (core_10_1) {
                core_10 = core_10_1;
            },
            function (translate_service_5_1) {
                translate_service_5 = translate_service_5_1;
            }],
        execute: function() {
            SportComponent = (function () {
                function SportComponent() {
                }
                SportComponent = __decorate([
                    core_10.Component({
                        selector: 'op-sport',
                        directives: [],
                        providers: [],
                        pipes: [translate_service_5.TranslatePipe],
                        styles: [],
                        template: "\n    <h1 class=\"primary\">{{\"sport-page.title\" | translate}}</h1>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], SportComponent);
                return SportComponent;
            }());
            exports_11("SportComponent", SportComponent);
        }
    }
});
System.register("components/rest-page/rest.component", ['angular2/core'], function(exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    var core_11;
    var RestComponent;
    return {
        setters:[
            function (core_11_1) {
                core_11 = core_11_1;
            }],
        execute: function() {
            RestComponent = (function () {
                function RestComponent() {
                }
                RestComponent = __decorate([
                    core_11.Component({
                        selector: 'op-rest',
                        directives: [],
                        providers: [],
                        pipes: [],
                        styles: [],
                        template: "\n    <h1 class=\"primary\">REST</h1>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], RestComponent);
                return RestComponent;
            }());
            exports_12("RestComponent", RestComponent);
        }
    }
});
System.register("components/start-page/start.component", ['angular2/core', 'angular2/router'], function(exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    var core_12, router_1;
    var StartComponent;
    return {
        setters:[
            function (core_12_1) {
                core_12 = core_12_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            StartComponent = (function () {
                function StartComponent() {
                }
                StartComponent = __decorate([
                    core_12.Component({
                        selector: 'op-start',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [],
                        pipes: [],
                        styles: ["\n      .startPage_navigator {\n        display: flex;\n        flex-flow: column nowrap;\n        position: absolute;\n        justify-content: space-around;\n        align-items: center;\n        width: 30vw;\n        height: 100vh;\n        bottom: 0;\n        left: 35vw;\n        overflow: hidden;\n        background-color: silver;\n      }\n      .startPage_foodButton {\n      background: url('./src/img/food.png') no-repeat center center;\n      background-size: cover;\n      box-sizing: border-box;\n      width: 27vw;\n      height: 27vw;\n    }\n    .startPage_sportButton {\n      background: url('./src/img/sport.png') no-repeat center center;\n      background-size: cover;\n      box-sizing: border-box;\n      width: 27vw;\n      height: 27vw;\n    }\n    .startPage_restButton {\n      background: url('./src/img/rest.png') no-repeat center center;\n      background-size: cover;\n      box-sizing: border-box;\n      width: 27vw;\n      height: 27vw;\n    }\n      "],
                        template: "\n    <nav class=\"startPage_navigator\">\n      <a [routerLink]=\"['Food']\">\n        <div class=\"startPage_foodButton\"></div>\n      </a>\n      <a [routerLink]=\"['Sport']\">\n        <div class=\"startPage_sportButton\"></div>\n      </a>\n      <a [routerLink]=\"['Rest']\">\n        <div class=\"startPage_restButton\"></div>\n      </a>\n    </nav>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], StartComponent);
                return StartComponent;
            }());
            exports_13("StartComponent", StartComponent);
        }
    }
});
System.register("shared/components/side-bar/side-bar.component", ['angular2/core', 'angular2/router'], function(exports_14, context_14) {
    "use strict";
    var __moduleName = context_14 && context_14.id;
    var core_13, router_2;
    var SideBar;
    return {
        setters:[
            function (core_13_1) {
                core_13 = core_13_1;
            },
            function (router_2_1) {
                router_2 = router_2_1;
            }],
        execute: function() {
            SideBar = (function () {
                function SideBar() {
                    this.isOpenChange = new core_13.EventEmitter();
                }
                SideBar.prototype.start = function (evt) {
                    this.xDown = evt.touches[0].clientX;
                    this.yDown = evt.touches[0].clientY;
                    console.log("start", evt, screen.width, window.innerWidth);
                };
                SideBar.prototype.move = function (evt) {
                    console.log(event);
                    if (!this.xDown || !this.yDown) {
                        return;
                    }
                    var xUp = evt.touches[0].clientX;
                    var yUp = evt.touches[0].clientY;
                    var xDiff = this.xDown - xUp;
                    var yDiff = this.yDown - yUp;
                    if (Math.abs(xDiff) > Math.abs(yDiff)) {
                        /*most significant*/
                        if (xDiff > 0) {
                            /* left swip */
                            console.log("left swipe");
                            this.toggle();
                        }
                        else {
                            /* right swipe */
                            console.log("right swipe");
                            this.toggle();
                        }
                    }
                    else {
                        if (yDiff > 0) {
                            /* up swip */
                            console.log("up swipe");
                        }
                        else {
                            /* down swipe */
                            console.log("down swipe");
                        }
                    }
                    this.xDown = evt.touches[0].clientX;
                    this.yDown = evt.touches[0].clientY;
                };
                SideBar.prototype.end = function (evt) {
                    /* reset values */
                    this.xDown = null;
                    this.yDown = null;
                    console.log("end");
                };
                SideBar.prototype.toggle = function () {
                    this.isOpen = !this.isOpen;
                    this.isOpenChange.emit(this.isOpen);
                };
                __decorate([
                    core_13.Input(), 
                    __metadata('design:type', Boolean)
                ], SideBar.prototype, "isOpen", void 0);
                __decorate([
                    core_13.Output(), 
                    __metadata('design:type', Object)
                ], SideBar.prototype, "isOpenChange", void 0);
                SideBar = __decorate([
                    core_13.Component({
                        selector: 'fm-side-bar', directives: [router_2.ROUTER_DIRECTIVES], providers: [], pipes: [], styles: ["\n    .sideBarContainer {\n    position: absolute;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: space-around;\n    align-items: center;\n    height: 100vh;\n    width: 70vw;\n    left: 0;\n    top: 0;\n    z-index: 999;\n    background-color: gray;\n  }\n  .sideBar_toggle {\n    position: absolute;\n    top:0;\n    left:5vw;\n    background: url('./src/img/menu-icon.png') no-repeat center center;\n    background-size: cover;\n    box-sizing: border-box;\n    width: 15vw;\n    height: 15vw;\n  }\n  .sideBarSwipePlace {\n    position: fixed;\n    top:0;\n    left:0;\n    background-color: silver;\n    height:100vh;\n    width:10vw;\n    z-index: 999;\n  }\n  .sideBarShadow {\n    position: absolute;\n    height: 100vh;\n    width: 30vw;\n    left: 70vw;\n    top: 0;\n    background-color: black;\n    opacity: 0.5;\n  }\n  "], template: "\n<div class=\"sideBar_toggle\" (click)=\"toggle()\"></div>\n\n<div class=\"sideBarContainer\" *ngIf=\"isOpen\" (touchmove)=\"move($event)\" (touchstart)=\"start($event)\" (touchend)=\"end($event)\">\n  <a [routerLink]=\"['Food']\">\n     {{\"opanas.router.food\"}}\n  </a>\n  <a [routerLink]=\"['Sport']\">\n     {{\"opanas.router.sport\"}}\n  </a> <a [routerLink]=\"['Rest']\">\n     {{\"opanas.router.rest\"}}\n  </a>\n  <div class=\"sideBarShadow\" (click)=\"toggle()\"></div>\n</div>\n\n<div *ngIf=\"!isOpen\" class=\"sideBarSwipePlace\" (touchmove)=\"move($event)\" (touchstart)=\"start($event)\" (touchend)=\"end($event)\"></div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], SideBar);
                return SideBar;
            }());
            exports_14("SideBar", SideBar);
        }
    }
});
System.register("components/opanas/opanas.component", ['angular2/core', 'angular2/router', "components/food-page/food.component", "components/sport-page/sport.component", "components/rest-page/rest.component", "components/start-page/start.component", "shared/components/side-bar/side-bar.component", "shared/services/translate/translate.service", "services/food/food.service", "services/calenadar/calendar.service", "services/refresh-date/refresh-date.service", "shared/services/storage/storage.service"], function(exports_15, context_15) {
    "use strict";
    var __moduleName = context_15 && context_15.id;
    var core_14, router_3, food_component_1, sport_component_1, rest_component_1, start_component_1, side_bar_component_1, translate_service_6, food_service_2, calendar_service_2, refresh_date_service_2, storage_service_2;
    var OpanasComponent, languages, keysVendor;
    return {
        setters:[
            function (core_14_1) {
                core_14 = core_14_1;
            },
            function (router_3_1) {
                router_3 = router_3_1;
            },
            function (food_component_1_1) {
                food_component_1 = food_component_1_1;
            },
            function (sport_component_1_1) {
                sport_component_1 = sport_component_1_1;
            },
            function (rest_component_1_1) {
                rest_component_1 = rest_component_1_1;
            },
            function (start_component_1_1) {
                start_component_1 = start_component_1_1;
            },
            function (side_bar_component_1_1) {
                side_bar_component_1 = side_bar_component_1_1;
            },
            function (translate_service_6_1) {
                translate_service_6 = translate_service_6_1;
            },
            function (food_service_2_1) {
                food_service_2 = food_service_2_1;
            },
            function (calendar_service_2_1) {
                calendar_service_2 = calendar_service_2_1;
            },
            function (refresh_date_service_2_1) {
                refresh_date_service_2 = refresh_date_service_2_1;
            },
            function (storage_service_2_1) {
                storage_service_2 = storage_service_2_1;
            }],
        execute: function() {
            OpanasComponent = (function () {
                function OpanasComponent(_translator, _calendarService, _refreshDateService) {
                    this._translator = _translator;
                    this._calendarService = _calendarService;
                    this._refreshDateService = _refreshDateService;
                    this.sideBarIsOpen = false;
                }
                //config app
                OpanasComponent.prototype.ngOnInit = function () {
                    //translator config
                    this._translator.setSupportLanguages(languages);
                    this._translator.setKeys(keysVendor);
                    //basic language of application
                    this._translator.setCurrentLanguage('ru');
                    //default language will be use if current language dont has key. it's an optional.
                    this._translator.setDefaultLanguage('en');
                };
                //replace this 2 userPage;
                OpanasComponent.prototype.goEn = function () {
                    this._translator.setCurrentLanguage('en');
                };
                OpanasComponent.prototype.goRu = function () {
                    this._translator.setCurrentLanguage('ru');
                };
                OpanasComponent = __decorate([
                    core_14.Component({
                        selector: 'opanas-app',
                        directives: [router_3.ROUTER_DIRECTIVES, side_bar_component_1.SideBar],
                        providers: [router_3.ROUTER_PROVIDERS, core_14.provide(router_3.LocationStrategy, { useClass: router_3.HashLocationStrategy }), translate_service_6.TranslateService, food_service_2.FoodService, calendar_service_2.CalendarService, refresh_date_service_2.RefreshDateService, storage_service_2.StorageService],
                        pipes: [translate_service_6.TranslatePipe],
                        styles: ["\n    .header{\n    height: 50px;\n    width: 100vw;\n    }\n\t\t.container {\n      background: url(./src/img/tempBackground.png) no-repeat center center;\n      width: 100%;\n      height: 100%;\n    }\n\n  .temporary {\n    position: absolute;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: center;\n    align-items: center;\n    background-color: green;\n    right: 0;\n    top: 0;\n    height: 50px;\n    width: 100px;\n    opacity: 0.3;\n  }\n  "],
                        template: "\n<div class=\"container\">\n\n  <div class=\"header\">\n    <div class=\"temporary\">\n      <div (click)=\"goEn()\">english</div>\n      <div (click)=\"goRu()\">russian</div>\n    </div>\n  </div>\n\n  <fm-side-bar [(isOpen)]=\"sideBarIsOpen\"></fm-side-bar>\n\n  <router-outlet></router-outlet>\n</div>\n\n" }),
                    router_3.RouteConfig([
                        { path: '/', name: 'Start', component: start_component_1.StartComponent, useAsDefault: true },
                        { path: '/food', name: 'Food', component: food_component_1.FoodComponent },
                        { path: '/sport', name: 'Sport', component: sport_component_1.SportComponent },
                        { path: '/rest', name: 'Rest', component: rest_component_1.RestComponent },
                        { path: '/*path', redirectTo: ['Start'] }
                    ]), 
                    __metadata('design:paramtypes', [translate_service_6.TranslateService, calendar_service_2.CalendarService, refresh_date_service_2.RefreshDateService])
                ], OpanasComponent);
                return OpanasComponent;
            }());
            exports_15("OpanasComponent", OpanasComponent);
            languages = {
                'en': 'english',
                'ru': 'russian'
            };
            keysVendor = {
                'en': {
                    'sport-page.title': 'sport pagie',
                    'calories': 'calories',
                    'protein': 'protein',
                    'carbohydrates': 'carbohydrates',
                    'fat': 'fat'
                },
                'ru': {
                    'sport-page.title': 'спорт страничга',
                    'calories': 'калории',
                    'protein': 'белки',
                    'carbohydrates': 'углеводы',
                    'fat': 'жиры'
                }
            };
        }
    }
});
System.register("main", ['angular2/platform/browser', "components/opanas/opanas.component"], function(exports_16, context_16) {
    "use strict";
    var __moduleName = context_16 && context_16.id;
    var browser_1, opanas_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (opanas_component_1_1) {
                opanas_component_1 = opanas_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(opanas_component_1.OpanasComponent);
        }
    }
});
//# sourceMappingURL=main.js.map