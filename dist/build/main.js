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
System.register("shared/components/progress-bar/progress-bar.component", ['angular2/core'], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var core_3;
    var ProgressBar;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            }],
        execute: function() {
            ProgressBar = (function () {
                function ProgressBar() {
                    this.maxNumber = 0;
                    this.minNumber = 0;
                }
                ProgressBar.prototype.ngOnChanges = function (changes) {
                    if (changes['mainLine']) {
                        if (isNaN(changes['mainLine'].currentValue)) {
                            this.mainLine = 0;
                        }
                        if (changes['mainLine'].currentValue > 100 || this.mainLine > 100) {
                            this.mainLine = 100;
                        }
                    }
                    if (changes['secondLine']) {
                        if (isNaN(changes['secondLine'].currentValue)) {
                            this.secondLine = 0;
                        }
                        if (changes['secondLine'].currentValue > 100 || this.secondLine > 100) {
                            this.secondLine = 100;
                        }
                    }
                    if (changes['maxNumber']) {
                        if (isNaN(changes['maxNumber'].currentValue)) {
                            this.maxNumber = 0;
                        }
                    }
                    if (changes['minNumber']) {
                        if (isNaN(changes['minNumber'].currentValue)) {
                            this.minNumber = 0;
                        }
                    }
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
                __decorate([
                    core_3.Input(), 
                    __metadata('design:type', Number)
                ], ProgressBar.prototype, "maxNumber", void 0);
                __decorate([
                    core_3.Input(), 
                    __metadata('design:type', Number)
                ], ProgressBar.prototype, "minNumber", void 0);
                ProgressBar = __decorate([
                    core_3.Component({
                        selector: 'fm-progress-bar',
                        directives: [],
                        providers: [],
                        pipes: [],
                        styles: ["\n.progress_container {\n  width: 90vw;\n  height: 7vw;\n  position: relative;\n  left: 5vw;\n  background-color: rgba(49, 51, 61, 0.7);\n  box-sizing: border-box;\n  border: 5px solid #0C1017;\n  border-radius: 10px;\n  z-index: 1;\n}\n.progress_mainLine {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: #E48426;\n  height: 100%;\n  border-radius: 5px;\n  text-align: center;\n  color: #181A21;\n  font-size: 4vw;\n}\n.progress_secondLine {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: #2a2b2d;\n  height: 100%;\n  border-radius: 5px;\n  text-align: right;\n  color: #E48426;\n  font-size: 4vw;\n}\n.progress_barHeader {\n  text-align: center;\n  color: #E48426;\n  font-size: 5vw;\n}\n.numbers {\n  position: absolute;\n  color: blue;\n  height: 7vw;\n  width: 90vw;\n  overflow: hidden;\n}\n "],
                        template: "\n<div class=\"progress_barHeader\">{{name|uppercase}}</div>\n<div class=\"progress_container\">\n  <div class=\"progress_secondLine\" [style.width.%]=\"secondLine\">\n  </div>\n  <div class=\"progress_mainLine\" [style.width.%]=\"mainLine\">\n    <div class=\"numbers\">{{minNumber}} / {{maxNumber}}</div>\n  </div>\n\n</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProgressBar);
                return ProgressBar;
            }());
            exports_4("ProgressBar", ProgressBar);
        }
    }
});
System.register("shared/services/storage/storage.service", ['angular2/core'], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var core_4;
    var StorageService;
    return {
        setters:[
            function (core_4_1) {
                core_4 = core_4_1;
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
                StorageService.prototype.removeItem = function (name) {
                    localStorage.removeItem(name);
                };
                StorageService = __decorate([
                    core_4.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], StorageService);
                return StorageService;
            }());
            exports_5("StorageService", StorageService);
        }
    }
});
System.register("services/user/user.service", ['angular2/core'], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var core_5;
    var UserService;
    return {
        setters:[
            function (core_5_1) {
                core_5 = core_5_1;
            }],
        execute: function() {
            UserService = (function () {
                function UserService() {
                    this.language = 'ru';
                    this.foodSets = {
                        "calories": {
                            "full": 2000
                        },
                        "protein": {
                            "full": 150
                        },
                        "fat": {
                            "full": 80
                        },
                        "carbohydrates": {
                            "full": 300
                        }
                    };
                    this.sportSets = {};
                }
                UserService.prototype.getLanguage = function () {
                    return this.language;
                };
                UserService.prototype.setLanguage = function (language) {
                    this.language = language;
                };
                UserService.prototype.getUserFoodSets = function () {
                    return this.foodSets;
                };
                UserService.prototype.setUserCalories = function (value) {
                    this.foodSets['calories']['full'] = value;
                };
                UserService.prototype.setUserProtein = function (value) {
                    this.foodSets['protein']['full'] = value;
                };
                UserService.prototype.setUserFat = function (value) {
                    this.foodSets['fat']['full'] = value;
                };
                UserService.prototype.setUserCarbohydrates = function (value) {
                    this.foodSets['carbohydrates']['full'] = value;
                };
                UserService.prototype.getUserSportSets = function () {
                    return this.sportSets;
                };
                UserService = __decorate([
                    core_5.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], UserService);
                return UserService;
            }());
            exports_6("UserService", UserService);
        }
    }
});
System.register("services/food/food.service", ['angular2/core', "shared/services/storage/storage.service", "services/user/user.service"], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var core_6, storage_service_1, user_service_1;
    var FoodService, foodVendor;
    return {
        setters:[
            function (core_6_1) {
                core_6 = core_6_1;
            },
            function (storage_service_1_1) {
                storage_service_1 = storage_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            FoodService = (function () {
                function FoodService(_storageService, _userServe) {
                    this._storageService = _storageService;
                    this._userServe = _userServe;
                    this.food = foodVendor;
                    this.userFood = [];
                    this.allFood = [];
                    this.storageKeys = {
                        'userFood': 'userFood'
                    };
                    if (this._storageService.getItem(this.storageKeys.userFood)) {
                        this.userFood = this._storageService.getItem(this.storageKeys.userFood);
                    }
                    this.prepareFood();
                }
                FoodService.prototype.getAllFood = function () {
                    this.prepareFood();
                    return this.allFood;
                };
                FoodService.prototype.refreshUserFood = function () {
                    this._storageService.setItem(this.storageKeys.userFood, this.userFood);
                };
                FoodService.prototype.prepareFood = function () {
                    this.allFood.length = 0;
                    var container = this.food.slice();
                    if (this.userFood.length) {
                        for (var _i = 0, _a = this.userFood; _i < _a.length; _i++) {
                            var itemUser = _a[_i];
                            for (var _b = 0, container_1 = container; _b < container_1.length; _b++) {
                                var itemContainer = container_1[_b];
                                if (itemUser.name[this._userServe.getLanguage()].trim() === itemContainer.name[this._userServe.getLanguage()].trim()) {
                                    var rem = container.indexOf(itemContainer);
                                    container.splice(rem, 1);
                                }
                            }
                        }
                        (_c = this.allFood).push.apply(_c, container.concat(this.userFood));
                    }
                    else {
                        (_d = this.allFood).push.apply(_d, this.food);
                    }
                    var _c, _d;
                };
                FoodService.prototype.getUserFood = function () {
                    return this.userFood;
                };
                FoodService.prototype.setUserFood = function (food) {
                    for (var _i = 0, _a = this.userFood; _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.name[this._userServe.getLanguage()].trim() === food.name[this._userServe.getLanguage()].trim()) {
                            var rem = this.userFood.indexOf(item);
                            this.userFood.splice(rem, 1);
                        }
                    }
                    this.userFood.push(food);
                    this.refreshUserFood();
                    this.prepareFood();
                };
                FoodService.prototype.removeUserFood = function (food) {
                    for (var _i = 0, _a = this.userFood; _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.name[this._userServe.getLanguage()].trim() === food.name[this._userServe.getLanguage()].trim()) {
                            var rem = this.userFood.indexOf(item);
                            this.userFood.splice(rem, 1);
                        }
                    }
                    this.refreshUserFood();
                    this.prepareFood();
                };
                FoodService = __decorate([
                    core_6.Injectable(), 
                    __metadata('design:paramtypes', [storage_service_1.StorageService, user_service_1.UserService])
                ], FoodService);
                return FoodService;
            }());
            exports_7("FoodService", FoodService);
            foodVendor = [
                {
                    "name": {
                        "en": "pizza",
                        "ru": "пицца"
                    },
                    "custom": false,
                    "calories": 100,
                    "protein": 75,
                    "fat": 50,
                    "carbohydrates": 25
                },
                {
                    "name": {
                        "en": "apple",
                        "ru": "яблоко"
                    },
                    "custom": false,
                    "calories": 5,
                    "protein": 5,
                    "fat": 5,
                    "carbohydrates": 5
                },
                {
                    "name": {
                        "en": "tomato",
                        "ru": "помидор"
                    },
                    "custom": false,
                    "calories": 20,
                    "protein": 20,
                    "fat": 20,
                    "carbohydrates": 20
                },
                {
                    "name": {
                        "en": "potato",
                        "ru": "картофан"
                    },
                    "custom": false,
                    "calories": 20,
                    "protein": 20,
                    "fat": 20,
                    "carbohydrates": 20
                },
                {
                    "name": {
                        "en": "niceThing",
                        "ru": "ништяк"
                    },
                    "custom": false,
                    "calories": 12,
                    "protein": 12,
                    "fat": 10,
                    "carbohydrates": 11
                }
            ];
        }
    }
});
System.register("services/sport/sport.service", ['angular2/core', "shared/services/storage/storage.service", "services/user/user.service"], function(exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var core_7, storage_service_2, user_service_2;
    var SportService, sportVendor;
    return {
        setters:[
            function (core_7_1) {
                core_7 = core_7_1;
            },
            function (storage_service_2_1) {
                storage_service_2 = storage_service_2_1;
            },
            function (user_service_2_1) {
                user_service_2 = user_service_2_1;
            }],
        execute: function() {
            SportService = (function () {
                function SportService(_storageService, _userServe) {
                    this._storageService = _storageService;
                    this._userServe = _userServe;
                    this.sport = sportVendor;
                    this.userSport = [];
                    this.allSport = [];
                    this.storageKeys = {
                        'userSport': 'userSport'
                    };
                    if (this._storageService.getItem(this.storageKeys.userSport)) {
                        this.userSport = this._storageService.getItem(this.storageKeys.userSport);
                    }
                    this.prepareSport();
                }
                SportService.prototype.getAllSport = function () {
                    this.prepareSport();
                    return this.allSport;
                };
                SportService.prototype.refreshUserSport = function () {
                    this._storageService.setItem(this.storageKeys.userSport, this.userSport);
                };
                SportService.prototype.prepareSport = function () {
                    this.allSport.length = 0;
                    var container = this.sport.slice();
                    if (this.userSport.length) {
                        for (var _i = 0, _a = this.userSport; _i < _a.length; _i++) {
                            var itemUser = _a[_i];
                            for (var _b = 0, container_2 = container; _b < container_2.length; _b++) {
                                var itemContainer = container_2[_b];
                                if (itemUser.name[this._userServe.getLanguage()].trim() === itemContainer.name[this._userServe.getLanguage()].trim()) {
                                    var rem = container.indexOf(itemContainer);
                                    container.splice(rem, 1);
                                }
                            }
                        }
                        (_c = this.allSport).push.apply(_c, container.concat(this.userSport));
                    }
                    else {
                        (_d = this.allSport).push.apply(_d, this.sport);
                    }
                    var _c, _d;
                };
                SportService.prototype.getUserSport = function () {
                    return this.userSport;
                };
                SportService.prototype.setUserSport = function (sport) {
                    for (var _i = 0, _a = this.userSport; _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.name[this._userServe.getLanguage()].trim() === sport.name[this._userServe.getLanguage()].trim()) {
                            var rem = this.userSport.indexOf(item);
                            this.userSport.splice(rem, 1);
                        }
                    }
                    this.userSport.push(sport);
                    this.refreshUserSport();
                    this.prepareSport();
                };
                SportService.prototype.removeUserSport = function (food) {
                    for (var _i = 0, _a = this.userSport; _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.name[this._userServe.getLanguage()].trim() === food.name[this._userServe.getLanguage()].trim()) {
                            var rem = this.userSport.indexOf(item);
                            this.userSport.splice(rem, 1);
                        }
                    }
                    this.refreshUserSport();
                    this.prepareSport();
                };
                SportService = __decorate([
                    core_7.Injectable(), 
                    __metadata('design:paramtypes', [storage_service_2.StorageService, user_service_2.UserService])
                ], SportService);
                return SportService;
            }());
            exports_8("SportService", SportService);
            sportVendor = [
                {
                    "name": {
                        "en": "bench press",
                        "ru": "жим лежа"
                    },
                    "custom": false,
                    "calories": 0
                },
                {
                    "name": {
                        "en": "squat",
                        "ru": "присед"
                    },
                    "custom": false,
                    "calories": 0
                },
                {
                    "name": {
                        "en": "pull-up",
                        "ru": "подтягивание"
                    },
                    "custom": false,
                    "calories": 0
                },
                {
                    "name": {
                        "en": "deadlift",
                        "ru": "становая тяга"
                    },
                    "custom": false,
                    "calories": 0
                },
                {
                    "name": {
                        "en": "push ups",
                        "ru": "отжимания"
                    },
                    "custom": false,
                    "calories": 0
                }
            ];
        }
    }
});
System.register("shared/pipes/simple-search/simple-search.pipe", ['angular2/core'], function(exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var core_8;
    var SimpleSearch;
    return {
        setters:[
            function (core_8_1) {
                core_8 = core_8_1;
            }],
        execute: function() {
            SimpleSearch = (function () {
                function SimpleSearch() {
                }
                SimpleSearch.prototype.transform = function (value, _a) {
                    var field = _a[0], field2 = _a[1], letter = _a[2];
                    if (letter) {
                        if (field2) {
                            return value.filter(function (item) { return item[field][field2].toLowerCase().includes(letter.toLowerCase()); });
                        }
                        else {
                            return value.filter(function (item) { return item[field].toLowerCase().includes(letter.toLowerCase()); });
                        }
                    }
                };
                SimpleSearch = __decorate([
                    core_8.Pipe({
                        name: 'simpleSearch',
                        pure: false
                    }), 
                    __metadata('design:paramtypes', [])
                ], SimpleSearch);
                return SimpleSearch;
            }());
            exports_9("SimpleSearch", SimpleSearch);
        }
    }
});
System.register("components/plus-bar/plus-bar.component", ['angular2/core', "services/food/food.service", "services/sport/sport.service", "shared/pipes/simple-search/simple-search.pipe", "shared/services/translate/translate.service"], function(exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var core_9, food_service_1, sport_service_1, simple_search_pipe_1, translate_service_3;
    var PlusComponent;
    return {
        setters:[
            function (core_9_1) {
                core_9 = core_9_1;
            },
            function (food_service_1_1) {
                food_service_1 = food_service_1_1;
            },
            function (sport_service_1_1) {
                sport_service_1 = sport_service_1_1;
            },
            function (simple_search_pipe_1_1) {
                simple_search_pipe_1 = simple_search_pipe_1_1;
            },
            function (translate_service_3_1) {
                translate_service_3 = translate_service_3_1;
            }],
        execute: function() {
            PlusComponent = (function () {
                function PlusComponent(_foodServe, _sportServe, _translateService) {
                    this._foodServe = _foodServe;
                    this._sportServe = _sportServe;
                    this._translateService = _translateService;
                    this.isOpen = true;
                    this.isOpenChange = new core_9.EventEmitter();
                    this.model = {};
                    this.modelSport = {};
                }
                PlusComponent.prototype.ngOnInit = function () {
                    this.customFood = this._foodServe.getUserFood();
                    this.refreshModel();
                    this.customSport = this._sportServe.getUserSport();
                };
                PlusComponent.prototype.toggle = function () {
                    this.isOpen = !this.isOpen;
                    this.isOpenChange.emit(this.isOpen);
                };
                PlusComponent.prototype.checkForm = function (value) {
                    if (value) {
                        if (value.trim()) {
                            return true;
                        }
                    }
                    return false;
                };
                //4 food
                PlusComponent.prototype.onSubmit = function (food) {
                    if (food.value.name.trim()) {
                        var name_1 = food.value.name.trim();
                        food.value['name'] = {};
                        for (var key in this._translateService.getSupportLanguages()) {
                            food.value['name'][key] = name_1;
                        }
                        food.value['custom'] = true;
                        this.setFood(food.value);
                        this.refreshModel();
                    }
                };
                PlusComponent.prototype.refreshModel = function () {
                    this.model['name'] = '';
                    this.model['calories'] = 0;
                    this.model['protein'] = 0;
                    this.model['fat'] = 0;
                    this.model['carbohydrates'] = 0;
                };
                PlusComponent.prototype.setFood = function (food) {
                    this._foodServe.setUserFood(food);
                    this.customFood = this._foodServe.getUserFood();
                };
                //4 sport
                PlusComponent.prototype.onSubmitSport = function (sport) {
                    if (sport.value.name.trim()) {
                        var name_2 = sport.value.name.trim();
                        sport.value['name'] = {};
                        for (var key in this._translateService.getSupportLanguages()) {
                            sport.value['name'][key] = name_2;
                        }
                        sport.value['custom'] = true;
                        this.setSport(sport.value);
                        this.modelSport['name'] = '';
                    }
                };
                PlusComponent.prototype.setSport = function (sport) {
                    this._sportServe.setUserSport(sport);
                    this.customSport = this._sportServe.getUserSport();
                };
                __decorate([
                    core_9.Input(), 
                    __metadata('design:type', Boolean)
                ], PlusComponent.prototype, "isOpen", void 0);
                __decorate([
                    core_9.Input(), 
                    __metadata('design:type', String)
                ], PlusComponent.prototype, "iAm", void 0);
                __decorate([
                    core_9.Output(), 
                    __metadata('design:type', Object)
                ], PlusComponent.prototype, "isOpenChange", void 0);
                PlusComponent = __decorate([
                    core_9.Component({
                        selector: 'op-plus',
                        directives: [],
                        providers: [],
                        pipes: [translate_service_3.TranslatePipe, simple_search_pipe_1.SimpleSearch],
                        styles: ["\n.container {\n  position: fixed;\n  left: 5vw;\n  top: 15vw;\n  background-color: silver;\n  width:90vw;\n  height: 87vh;\n  z-index: 10;\n}\n.plusBar{\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 20vw;\n  height: 15vw;\n  background-color: blue;\n  overflow: hidden;\n}\n.closeMe{\n  position: fixed;\n  left: 0;\n  top: 0;\n  background-color: black;\n  opacity: 0.5;\n  width: 100vw;\n  height: 100vh;\n  z-index: 9;\n\n}\n.food_form {\n  position: relative;\n  margin: 5vw;\n  height: 10vw;\n}\n.food_inputFood {\n  position: absolute;\n  height: 10vw;\n  width: 60vw;\n  left: 20vw;\n  background-color: rgba(49, 51, 61, 0.3);\n  box-sizing: border-box;\n  border: 1.5vw solid #0C1017;\n  border-radius: 2vw;\n}\n.food_inputCalories {\n  position: absolute;\n  height: 10vw;\n  width: 16vw;\n  left: 50vw;\n  top:11vw;\n  background-color: rgba(49, 51, 61, 0.3);\n  box-sizing: border-box;\n  color: #0d0e15;\n  border: 1.5vw solid #0C1017;\n  border-radius: 2vw;\n}\n.food_inputProtein {\n  position: absolute;\n  height: 10vw;\n  width: 16vw;\n  left: 50vw;\n  top:22vw;\n  background-color: rgba(49, 51, 61, 0.3);\n  box-sizing: border-box;\n  color: #0d0e15;\n  border: 1.5vw solid #0C1017;\n  border-radius: 2vw;\n}\n.food_inputFat {\n  position: absolute;\n  height: 10vw;\n  width: 16vw;\n  left: 50vw;\n  top:33vw;\n  background-color: rgba(49, 51, 61, 0.3);\n  box-sizing: border-box;\n  color: #0d0e15;\n  border: 1.5vw solid #0C1017;\n  border-radius: 2vw;\n}\n.food_inputCarbohydrates {\n  position: absolute;\n  height: 10vw;\n  width: 16vw;\n  left: 50vw;\n  top:44vw;\n  background-color: rgba(49, 51, 61, 0.3);\n  box-sizing: border-box;\n  color: #0d0e15;\n  border: 1.5vw solid #0C1017;\n  border-radius: 2vw;\n}\n.food_inputButton_off {\n  position: absolute;\n  top: 28vh;\n  right: 0;\n  height: 10vw;\n  width: 12vw;\n  background: url('./src/img/check-off.png') no-repeat center center;\n  background-size: cover;\n  box-sizing: border-box;\n  color: #0d0e15;\n  border: 1.5vw solid #0C1017;\n  border-radius: 2vw;\n}\n.food_inputButton_on {\n  position: absolute;\n  top:28vh;\n  right: 0;\n  height: 10vw;\n  width: 12vw;\n  background: url('./src/img/check-on.png') no-repeat center center;\n  background-size: cover;\n  box-sizing: border-box;\n  color: #0d0e15;\n  border: 1.5vw solid #0C1017;\n  border-radius: 2vw;\n}\n.tmp{\n  width: 80vw;\n  position: relative;\n  top:50%;\n}\n.tmp2{\n  height: 12vw;\n  width: 80vw;\n  line-height: 12vw;\n  box-sizing: border-box;\n  font-size: 6vw;\n  text-align: center;\n  line-height: 12vw;\n}\n    "],
                        template: "\n<div class=\"plusBar\" (click)=\"toggle()\">PLUS</div>\n<div class=\"container\" *ngIf=\"isOpen && (iAm === 'food')\">\n\n  <form class=\"food_form\" (ngSubmit)=\"onSubmit(foodForm)\" #foodForm=\"ngForm\">\n\n    <label style=\"left:0; border:none;\" class=\"food_inputFood\" for=\"name\">foodName</label>\n    <input class=\"food_inputFood\" required [(ngModel)]=\"model.name\" ngControl=\"name\" #name=\"ngForm\">\n\n    <label style=\"left:0; border:none;\" class=\"food_inputCalories\" for=\"calories\">calories</label>\n    <input type=\"number\" min=\"0\" class=\"food_inputCalories\" required [(ngModel)]=\"model.calories\" ngControl=\"calories\" #calories=\"ngForm\">\n\n    <label style=\"left:0; border:none;\" class=\"food_inputProtein\" for=\"protein\">protein</label>\n    <input type=\"number\" min=\"0\" class=\"food_inputProtein\" required [(ngModel)]=\"model.protein\" ngControl=\"protein\" #protein=\"ngForm\">\n\n    <label style=\"left:0; border:none;\" class=\"food_inputFat\" for=\"fat\">fat</label>\n    <input type=\"number\" min=\"0\" class=\"food_inputFat\" required [(ngModel)]=\"model.fat\" ngControl=\"fat\" #fat=\"ngForm\">\n\n    <label style=\"left:0; border:none;\" class=\"food_inputCarbohydrates\" for=\"carbohydrates\">carbohydrates</label>\n    <input type=\"number\" min=\"0\" class=\"food_inputCarbohydrates\" required [(ngModel)]=\"model.carbohydrates\" ngControl=\"carbohydrates\" #carbohydrates=\"ngForm\">\n\n    <button type=\"submit\" [ngClass]=\"{food_inputButton_off: !checkForm(name.value), food_inputButton_on: checkForm(name.value) }\" [disabled]=\"!checkForm(name.value)\"></button>\n\n  </form>\n  <div class=\"tmp\" *ngFor=\"#item of customFood\">\n    <div class=\"tmp2\">name: {{item.name.ru}} calories: {{item.calories}}</div>\n  </div>\n</div>\n<div class=\"container\" *ngIf=\"isOpen && (iAm === 'sport')\">\n\n\n  <form class=\"food_form\" (ngSubmit)=\"onSubmitSport(sportForm)\" #sportForm=\"ngForm\">\n\n    <label style=\"left:0; border:none;\" class=\"food_inputFood\" for=\"name\">sportName</label>\n    <input class=\"food_inputFood\" required [(ngModel)]=\"modelSport.name\" ngControl=\"name\" #name=\"ngForm\">\n\n    <button type=\"submit\" [ngClass]=\"{food_inputButton_off: !checkForm(name.value), food_inputButton_on: checkForm(name.value) }\" [disabled]=\"!checkForm(name.value)\"></button>\n\n  </form>\n  <div class=\"tmp\" *ngFor=\"#item of customSport\">\n    <div class=\"tmp2\">name: {{item.name.ru}} </div>\n  </div>\n</div>\n<div *ngIf=\"isOpen\" class=\"closeMe\" (click)=\"toggle()\"></div>\n    "
                    }), 
                    __metadata('design:paramtypes', [food_service_1.FoodService, sport_service_1.SportService, translate_service_3.TranslateService])
                ], PlusComponent);
                return PlusComponent;
            }());
            exports_10("PlusComponent", PlusComponent);
        }
    }
});
System.register("services/calenadar/calendar.service", ['angular2/core', "shared/services/storage/storage.service"], function(exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    var core_10, storage_service_3;
    var CalendarService;
    return {
        setters:[
            function (core_10_1) {
                core_10 = core_10_1;
            },
            function (storage_service_3_1) {
                storage_service_3 = storage_service_3_1;
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
                            day['food'].push(food);
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
                            day['sport'].push(sport);
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
                    core_10.Injectable(), 
                    __metadata('design:paramtypes', [storage_service_3.StorageService])
                ], CalendarService);
                return CalendarService;
            }());
            exports_11("CalendarService", CalendarService);
        }
    }
});
System.register("shared/directives/swipeHolder/swipe-holder.directive", ['angular2/core'], function(exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    var core_11;
    var SwipeHoldertDirective;
    return {
        setters:[
            function (core_11_1) {
                core_11 = core_11_1;
            }],
        execute: function() {
            SwipeHoldertDirective = (function () {
                function SwipeHoldertDirective(el) {
                    this.fmSwipe = new core_11.EventEmitter();
                    this.fmSwipeRight = new core_11.EventEmitter();
                    this.fmSwipeLeft = new core_11.EventEmitter();
                    this.fmSwipeDown = new core_11.EventEmitter();
                    this.fmSwipeUp = new core_11.EventEmitter();
                }
                SwipeHoldertDirective.prototype.start = function (evt) {
                    this.xStart = evt.touches[0].clientX;
                    this.yStart = evt.touches[0].clientY;
                };
                SwipeHoldertDirective.prototype.move = function (evt) {
                    if (!this.xStart || !this.yStart) {
                        return;
                    }
                    var xNew = evt.touches[0].clientX;
                    var yNew = evt.touches[0].clientY;
                    var xDiff = this.xStart - xNew;
                    var yDiff = this.yStart - yNew;
                    if (Math.abs(xDiff) > Math.abs(yDiff)) {
                        if (xDiff > 0) {
                            this.fmSwipe.emit(['leftSwipe', xNew, yNew, evt]);
                            this.fmSwipeLeft.emit(['leftSwipe', xNew, evt]);
                        }
                        else {
                            this.fmSwipe.emit(['rightSwipe', xNew, yNew, evt]);
                            this.fmSwipeRight.emit(['rightSwipe', xNew, evt]);
                        }
                    }
                    else {
                        if (yDiff > 0) {
                            this.fmSwipe.emit(['upSwipe', xNew, yNew, evt]);
                            this.fmSwipeUp.emit(['upSwipe', yNew, evt]);
                        }
                        else {
                            this.fmSwipe.emit(['downSwipe', xNew, yNew, evt]);
                            this.fmSwipeDown.emit(['downSwipe', yNew, evt]);
                        }
                    }
                    this.xStart = evt.touches[0].clientX;
                    this.yStart = evt.touches[0].clientY;
                };
                SwipeHoldertDirective.prototype.end = function (evt) {
                    this.xStart = null;
                    this.yStart = null;
                };
                __decorate([
                    core_11.Output(), 
                    __metadata('design:type', Object)
                ], SwipeHoldertDirective.prototype, "fmSwipe", void 0);
                __decorate([
                    core_11.Output(), 
                    __metadata('design:type', Object)
                ], SwipeHoldertDirective.prototype, "fmSwipeRight", void 0);
                __decorate([
                    core_11.Output(), 
                    __metadata('design:type', Object)
                ], SwipeHoldertDirective.prototype, "fmSwipeLeft", void 0);
                __decorate([
                    core_11.Output(), 
                    __metadata('design:type', Object)
                ], SwipeHoldertDirective.prototype, "fmSwipeDown", void 0);
                __decorate([
                    core_11.Output(), 
                    __metadata('design:type', Object)
                ], SwipeHoldertDirective.prototype, "fmSwipeUp", void 0);
                SwipeHoldertDirective = __decorate([
                    core_11.Directive({
                        selector: '[fmSwipe]',
                        host: {
                            '(touchstart)': 'start($event)',
                            '(touchmove)': 'move($event)',
                            '(touchend)': 'end($event)'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_11.ElementRef])
                ], SwipeHoldertDirective);
                return SwipeHoldertDirective;
            }());
            exports_12("SwipeHoldertDirective", SwipeHoldertDirective);
        }
    }
});
System.register("components/food-page/food.component", ['angular2/core', "shared/services/translate/translate.service", "shared/components/progress-bar/progress-bar.component", "components/plus-bar/plus-bar.component", "services/food/food.service", "shared/pipes/simple-search/simple-search.pipe", "services/calenadar/calendar.service", "services/user/user.service", "shared/directives/swipeHolder/swipe-holder.directive"], function(exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    var core_12, translate_service_4, progress_bar_component_1, plus_bar_component_1, food_service_2, simple_search_pipe_2, calendar_service_1, user_service_3, swipe_holder_directive_1;
    var FoodComponent;
    return {
        setters:[
            function (core_12_1) {
                core_12 = core_12_1;
            },
            function (translate_service_4_1) {
                translate_service_4 = translate_service_4_1;
            },
            function (progress_bar_component_1_1) {
                progress_bar_component_1 = progress_bar_component_1_1;
            },
            function (plus_bar_component_1_1) {
                plus_bar_component_1 = plus_bar_component_1_1;
            },
            function (food_service_2_1) {
                food_service_2 = food_service_2_1;
            },
            function (simple_search_pipe_2_1) {
                simple_search_pipe_2 = simple_search_pipe_2_1;
            },
            function (calendar_service_1_1) {
                calendar_service_1 = calendar_service_1_1;
            },
            function (user_service_3_1) {
                user_service_3 = user_service_3_1;
            },
            function (swipe_holder_directive_1_1) {
                swipe_holder_directive_1 = swipe_holder_directive_1_1;
            }],
        execute: function() {
            FoodComponent = (function () {
                function FoodComponent(_foodServe, _calendarService, _userServe) {
                    this._foodServe = _foodServe;
                    this._calendarService = _calendarService;
                    this._userServe = _userServe;
                    this.model = {};
                    this.currentDate = new Date();
                    this.language = 'en';
                    this.pickedFood = {};
                    this.pickedFoodContainer = [];
                    this.correctFood = false;
                    this.plusIsOpen = false;
                    this.totalFood = {
                        "calories": {
                            "full": 0,
                            "maybe": 0
                        },
                        "protein": {
                            "full": 0,
                            "maybe": 0
                        },
                        "fat": {
                            "full": 0,
                            "maybe": 0
                        },
                        "carbohydrates": {
                            "full": 0,
                            "maybe": 0
                        }
                    };
                }
                FoodComponent.prototype.ngOnInit = function () {
                    this.language = this._userServe.getLanguage();
                    this.userSets = this._userServe.getUserFoodSets();
                    this.foodContainer = this._foodServe.getAllFood();
                    this.pickedFoodContainer = this._calendarService.getDailyFood(this.currentDate);
                    //4 calculate progress-bar
                    for (var _i = 0, _a = this.pickedFoodContainer; _i < _a.length; _i++) {
                        var food = _a[_i];
                        this.calculateFood(food);
                    }
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
                FoodComponent.prototype.pickFoodInput = function (name) {
                    for (var _i = 0, _a = this.foodContainer; _i < _a.length; _i++) {
                        var obj = _a[_i];
                        if (obj['name'][this.language] === name) {
                            return this.pickFood(obj);
                        }
                        else {
                            this.correctFood = false;
                            console.log("unCorrectFood");
                        }
                    }
                };
                FoodComponent.prototype.pickFood = function (food) {
                    var _this = this;
                    this.pickedFood = Object.assign({}, food);
                    setTimeout(function () { return _this.model['name'] = food.name[_this.language]; }, 0);
                    this.correctFood = true;
                };
                FoodComponent.prototype.checkBoxToggle = function (index, food) {
                    if (food['picked']) {
                        this.calculateFullMinus(food);
                    }
                    else {
                        this.calculateFull(food);
                    }
                    food['picked'] = !food['picked'];
                    this._calendarService.changeDailyFood(index, this.currentDate, food);
                };
                FoodComponent.prototype.removeFood = function (index, food) {
                    this._calendarService.removeDailyFood(index, this.currentDate);
                    this.calculateFoodRefresh();
                    for (var _i = 0, _a = this.pickedFoodContainer; _i < _a.length; _i++) {
                        var food_1 = _a[_i];
                        this.calculateFood(food_1);
                    }
                };
                FoodComponent.prototype.changeFoodWeight = function (index, food) {
                    var _this = this;
                    var timer;
                    if (!isNaN(food['weight'])) {
                        this._calendarService.changeDailyFood(index, this.currentDate, food);
                        this.calculateFoodRefresh();
                        for (var _i = 0, _a = this.pickedFoodContainer; _i < _a.length; _i++) {
                            var variable = _a[_i];
                            this.calculateFood(variable);
                        }
                    }
                    else {
                        timer = setTimeout(function () {
                            if (isNaN(food['weight'])) {
                                food['weight'] = 0;
                                _this._calendarService.changeDailyFood(index, _this.currentDate, food);
                                _this.calculateFoodRefresh();
                                for (var _i = 0, _a = _this.pickedFoodContainer; _i < _a.length; _i++) {
                                    var variable = _a[_i];
                                    _this.calculateFood(variable);
                                }
                            }
                        }, 1000);
                    }
                };
                FoodComponent.prototype.calculateFood = function (food) {
                    if (food['picked']) {
                        this.calculateFull(food);
                        this.calculateMayBe(food);
                    }
                    else {
                        this.calculateMayBe(food);
                    }
                };
                FoodComponent.prototype.calculateFoodMinus = function (food) {
                    this.calculateFullMinus(food);
                    this.calculateMayBeMinus(food);
                };
                FoodComponent.prototype.calculateFoodRefresh = function () {
                    for (var prop in this.totalFood) {
                        for (var key in this.totalFood[prop]) {
                            this.totalFood[prop][key] = 0;
                            this.totalFood[prop][key] = 0;
                        }
                    }
                };
                FoodComponent.prototype.calculateFull = function (food) {
                    for (var prop in this.totalFood) {
                        this.totalFood[prop]['full'] = this.totalFood[prop]['full'] + Math.round((food[prop] * food['weight'] / 100));
                    }
                };
                FoodComponent.prototype.calculateMayBe = function (food) {
                    for (var prop in this.totalFood) {
                        this.totalFood[prop]['maybe'] = this.totalFood[prop]['maybe'] + Math.round((food[prop] * food['weight'] / 100));
                    }
                };
                FoodComponent.prototype.calculateFullMinus = function (food) {
                    for (var prop in this.totalFood) {
                        this.totalFood[prop]['full'] = this.totalFood[prop]['full'] - Math.round((food[prop] * food['weight'] / 100));
                    }
                };
                FoodComponent.prototype.calculateMayBeMinus = function (food) {
                    for (var prop in this.totalFood) {
                        this.totalFood[prop]['maybe'] = this.totalFood[prop]['maybe'] - Math.round((food[prop] * food['weight'] / 100));
                    }
                };
                FoodComponent = __decorate([
                    core_12.Component({
                        selector: 'op-food',
                        directives: [progress_bar_component_1.ProgressBar, plus_bar_component_1.PlusComponent, swipe_holder_directive_1.SwipeHoldertDirective],
                        providers: [],
                        pipes: [translate_service_4.TranslatePipe, simple_search_pipe_2.SimpleSearch],
                        styles: ["\n\n  .food_form {\n    position: relative;\n    margin: 5vw;\n    height: 10vw;\n  }\n  .food_inputFood {\n    position: absolute;\n    height: 10vw;\n    width: 60vw;\n    background-color: rgba(49, 51, 61, 0.3);\n    box-sizing: border-box;\n    border: 5px solid #0C1017;\n    border-radius: 2vw;\n  }\n  .food_inputWeight {\n    position: absolute;\n    height: 10vw;\n    width: 16vw;\n    left: 61vw;\n    background-color: rgba(49, 51, 61, 0.3);\n    box-sizing: border-box;\n    color: #0d0e15;\n    border: 5px solid #0C1017;\n    border-radius: 2vw;\n  }\n  .food_inputButton_off {\n    position: absolute;\n    right: 0;\n    height: 10vw;\n    width: 12vw;\n    background: url('./src/img/check-off.png') no-repeat center center;\n    background-size: cover;\n    box-sizing: border-box;\n    color: #0d0e15;\n    border: 5px solid #0C1017;\n    border-radius: 2vw;\n  }\n  .food_inputButton_on {\n    position: absolute;\n    right: 0;\n    height: 10vw;\n    width: 12vw;\n    background: url('./src/img/check-on.png') no-repeat center center;\n    background-size: cover;\n    box-sizing: border-box;\n    color: #0d0e15;\n    border: 5px solid #0C1017;\n    border-radius: 2vw;\n  }\n\n  .food_serchContainer {\n    position: absolute;\n    background-color: #aaa;\n    width: 60vw;\n    left: 0;\n    right: 10px;\n    height: 200px;\n    top: 27px;\n    overflow-y: scroll;\n  }\n  .food_list {\n    margin: 5vw;\n    width: 90vw;\n    height: 60vw;\n    overflow-y: scroll;\n  }\n  .food_listItem {\n    float:left;\n    margin-bottom: 2vw;\n    height: 12vw;\n    width: 55vw;\n    line-height: 12vw;\n    box-sizing: border-box;\n    background-color: #3f414a;\n    color: #ff9d2d;\n    font-size: 6vw;\n    text-align: center;\n    border-radius: 2vw;\n    line-height: 12vw;\n\n  }\n  .food_listWeight {\n    float:left;\n    margin-left: 2vw;\n    margin-right: 2vw;\n    height: 12vw;\n    width: 15vw;\n    line-height: 12vw;\n    background-color: #3f414a;\n    box-sizing: border-box;\n    color: #ff9d2d;\n    font-size: 6vw;\n    text-align: center;\n    border-radius: 2vw;\n    border: none;\n  }\n\n  .food_listButton_on {\n    float:left;\n    height: 12vw;\n    width: 12vw;\n    background: url('./src/img/check-on.png') no-repeat center center;\n    background-color: #3f414a;\n    background-size: cover;\n    box-sizing: border-box;\n    color: #0d0e15;\n    border-radius: 2vw;\n  }\n  .food_listButton_off {\n    float:left;\n    height: 12vw;\n    width: 12vw;\n    background: url('./src/img/check-off.png') no-repeat center center;\n    background-color: #3f414a;\n    background-size: cover;\n    box-sizing: border-box;\n    color: #0d0e15;\n    border-radius: 2vw;\n  }\n    "],
                        template: "\n<op-plus [iAm]=\"'food'\" [(isOpen)]=\"plusIsOpen\"></op-plus>\n<fm-progress-bar [name]=\"'calories'|translate\" [mainLine]=\"totalFood.calories.full / userSets.calories.full * 100\" [secondLine]=\"totalFood.calories.maybe / userSets.calories.full * 100\" [minNumber]=\"totalFood.calories.full\" [maxNumber]=\"userSets.calories.full\"></fm-progress-bar>\n<fm-progress-bar [name]=\"'protein'|translate\" [mainLine]=\"totalFood.protein.full / userSets.protein.full * 100\" [secondLine]=\"totalFood.protein.maybe / userSets.protein.full * 100\" [minNumber]=\"totalFood.protein.full\" [maxNumber]=\"userSets.protein.full\"></fm-progress-bar>\n<fm-progress-bar [name]=\"'fat'|translate\" [mainLine]=\"totalFood.fat.full / userSets.fat.full * 100\" [secondLine]=\"totalFood.fat.maybe / userSets.fat.full * 100\" [minNumber]=\"totalFood.fat.full\" [maxNumber]=\"userSets.fat.full\"></fm-progress-bar>\n<fm-progress-bar [name]=\"'carbohydrates'|translate\" [mainLine]=\"totalFood.carbohydrates.full / userSets.carbohydrates.full * 100\" [secondLine]=\"totalFood.carbohydrates.maybe / userSets.carbohydrates.full * 100\" [minNumber]=\"totalFood.carbohydrates.full\" [maxNumber]=\"userSets.carbohydrates.full\"></fm-progress-bar>\n\n<form class=\"food_form\" (ngSubmit)=\"onSubmit(foodForm)\" #foodForm=\"ngForm\">\n\n  <label for=\"foodName\"></label>\n  <input class=\"food_inputFood\" required [placeholder]=\"('search'|translate) + '...'\" [(ngModel)]=\"model.name\" ngControl=\"name\" #name=\"ngForm\" (input)=\"pickFoodInput(model.name)\">\n\n  <label for=\"foodWeight\"></label>\n  <input type=\"number\" [min]=\"1\" [placeholder]=\"('weight'|translate) + '...'\" class=\"food_inputWeight\" required [(ngModel)]=\"model.weight\" ngControl=\"weight\" #weight=\"ngForm\">\n\n  <button #subBtn type=\"submit\" [ngClass]=\"{food_inputButton_off: subBtn['disabled'], food_inputButton_on: !subBtn['disabled']}\"  [disabled]=\"!foodForm.form.valid || !correctFood\"></button>\n\n  <div *ngIf=\"(name.valid && !correctFood)\" class=\"food_serchContainer\">\n    <div class=\"food_listItem\" *ngFor=\"#item of foodContainer  | simpleSearch :'name':language : name.value; #i = index;\" (click)=\"pickFood(item);\">\n      {{item?.name[language]}}\n    </div>\n  </div>\n</form>\n\n<div class=\"food_list\">\n  <div *ngFor=\"#item of pickedFoodContainer; #i = index\" fmSwipe (fmSwipeLeft)=\"removeFood(i, item)\" (fmSwipeRight)=\"removeFood(i, item)\">\n\n    <div class=\"food_listItem\">\n      {{item?.name[language]}}\n    </div>\n    <input class=\"food_listWeight\" type=\"number\" min=\"0\" required [(ngModel)]=\"item.weight\" (blur)=\"changeFoodWeight(i, item)\">\n\n    <div [ngClass]=\"{food_listButton_off: !item.picked, food_listButton_on: item.picked}\" (click)=\"checkBoxToggle(i, item)\"></div>\n\n  </div>\n</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [food_service_2.FoodService, calendar_service_1.CalendarService, user_service_3.UserService])
                ], FoodComponent);
                return FoodComponent;
            }());
            exports_13("FoodComponent", FoodComponent);
        }
    }
});
System.register("components/sport-page/sport.component", ['angular2/core', "shared/services/translate/translate.service", "shared/components/progress-bar/progress-bar.component", "components/plus-bar/plus-bar.component", "shared/pipes/simple-search/simple-search.pipe", "services/calenadar/calendar.service", "services/user/user.service", "shared/directives/swipeHolder/swipe-holder.directive", "services/sport/sport.service"], function(exports_14, context_14) {
    "use strict";
    var __moduleName = context_14 && context_14.id;
    var core_13, translate_service_5, progress_bar_component_2, plus_bar_component_2, simple_search_pipe_3, calendar_service_2, user_service_4, swipe_holder_directive_2, sport_service_2;
    var SportComponent;
    return {
        setters:[
            function (core_13_1) {
                core_13 = core_13_1;
            },
            function (translate_service_5_1) {
                translate_service_5 = translate_service_5_1;
            },
            function (progress_bar_component_2_1) {
                progress_bar_component_2 = progress_bar_component_2_1;
            },
            function (plus_bar_component_2_1) {
                plus_bar_component_2 = plus_bar_component_2_1;
            },
            function (simple_search_pipe_3_1) {
                simple_search_pipe_3 = simple_search_pipe_3_1;
            },
            function (calendar_service_2_1) {
                calendar_service_2 = calendar_service_2_1;
            },
            function (user_service_4_1) {
                user_service_4 = user_service_4_1;
            },
            function (swipe_holder_directive_2_1) {
                swipe_holder_directive_2 = swipe_holder_directive_2_1;
            },
            function (sport_service_2_1) {
                sport_service_2 = sport_service_2_1;
            }],
        execute: function() {
            SportComponent = (function () {
                function SportComponent(_sportServe, _calendarService, _userServe) {
                    this._sportServe = _sportServe;
                    this._calendarService = _calendarService;
                    this._userServe = _userServe;
                    this.model = {};
                    this.currentDate = new Date();
                    this.language = 'en';
                    this.pickedSport = {};
                    this.pickedSportContainer = [];
                    this.correctSport = false;
                    this.plusIsOpen = false;
                    this.totalSport = {
                        'done': 0,
                        'procentDone': 0
                    };
                }
                SportComponent.prototype.ngOnInit = function () {
                    this.language = this._userServe.getLanguage();
                    this.userSets = this._userServe.getUserSportSets();
                    this.sportContainer = this._sportServe.getAllSport();
                    this.pickedSportContainer = this._calendarService.getDailySport(this.currentDate);
                    for (var _i = 0, _a = this.pickedSportContainer; _i < _a.length; _i++) {
                        var variable = _a[_i];
                        this.calculateTotalSportInit(variable);
                    }
                };
                SportComponent.prototype.onSubmit = function (sport) {
                    if (sport.value['weight']) {
                        this.pickedSport['weight'] = sport.value['weight'];
                    }
                    if (sport.value['numbers']) {
                        this.pickedSport['numbers'] = sport.value['numbers'];
                    }
                    if (sport.value['time']) {
                        this.pickedSport['time'] = sport.value['time'];
                    }
                    this.pickedSport['picked'] = true;
                    this._calendarService.setDailySport(this.pickedSport, this.currentDate);
                    this.calculateTotalSport(this.pickedSport);
                    this.pickedSport = {};
                    this.model = {};
                    this.correctSport = false;
                };
                SportComponent.prototype.pickSportInput = function (name) {
                    for (var _i = 0, _a = this.sportContainer; _i < _a.length; _i++) {
                        var obj = _a[_i];
                        if (obj['name'][this.language] === name) {
                            return this.pickSport(obj);
                        }
                        else {
                            this.correctSport = false;
                            console.log("unCorrectFood");
                        }
                    }
                };
                SportComponent.prototype.pickSport = function (sport) {
                    var _this = this;
                    this.pickedSport = Object.assign({}, sport);
                    setTimeout(function () { return _this.model['name'] = sport.name[_this.language]; }, 0);
                    this.correctSport = true;
                };
                SportComponent.prototype.removeSport = function (index, sport) {
                    this._calendarService.removeDailySport(index, this.currentDate);
                    this.calculateSportRefresh();
                    for (var _i = 0, _a = this.pickedSportContainer; _i < _a.length; _i++) {
                        var variable = _a[_i];
                        this.calculateTotalSportInit(variable);
                    }
                };
                SportComponent.prototype.checkBoxToggle = function (index, sport) {
                    sport['picked'] = !sport['picked'];
                    this.calculateTotalSport(sport);
                    this._calendarService.changeDailySport(index, this.currentDate, sport);
                };
                SportComponent.prototype.calculateTotalSport = function (sport) {
                    if (sport['picked']) {
                        this.totalSport['done']++;
                    }
                    else {
                        this.totalSport['done']--;
                    }
                    if (this.pickedSportContainer.length) {
                        this.totalSport['procentDone'] = this.totalSport['done'] / this.pickedSportContainer.length * 100;
                    }
                };
                SportComponent.prototype.calculateTotalSportInit = function (sport) {
                    if (sport['picked']) {
                        this.totalSport['done']++;
                    }
                    if (this.pickedSportContainer.length) {
                        this.totalSport['procentDone'] = this.totalSport['done'] / this.pickedSportContainer.length * 100;
                    }
                };
                SportComponent.prototype.calculateSportRefresh = function () {
                    for (var prop in this.totalSport) {
                        this.totalSport[prop] = 0;
                        this.totalSport[prop] = 0;
                    }
                };
                SportComponent.prototype.changeSport = function (index, sport) {
                    this._calendarService.changeDailySport(index, this.currentDate, sport);
                };
                SportComponent = __decorate([
                    core_13.Component({
                        selector: 'op-sport',
                        directives: [progress_bar_component_2.ProgressBar, plus_bar_component_2.PlusComponent, swipe_holder_directive_2.SwipeHoldertDirective],
                        providers: [],
                        pipes: [translate_service_5.TranslatePipe, simple_search_pipe_3.SimpleSearch],
                        styles: ["\n      .sport_form {\n        position: relative;\n        margin: 5vw;\n        height: 10vw;\n      }\n      .sport_inputSport {\n        position: absolute;\n        height: 10vw;\n        width: 70vw;\n        background-color: rgba(49, 51, 61, 0.3);\n        box-sizing: border-box;\n        border: 5px solid #0C1017;\n        border-radius: 2vw;\n      }\n      .sport_inputWeight {\n        position: absolute;\n        height: 10vw;\n        width: 30vw;\n        top: 11vw;\n        left: 0;\n        background-color: rgba(49, 51, 61, 0.3);\n        box-sizing: border-box;\n        color: #0d0e15;\n        border: 5px solid #0C1017;\n        border-radius: 2vw;\n      }\n      .sport_inputCount {\n        position: absolute;\n        height: 10vw;\n        width: 30vw;\n        top: 11vw;\n        left: 31vw;\n        background-color: rgba(49, 51, 61, 0.3);\n        box-sizing: border-box;\n        color: #0d0e15;\n        border: 5px solid #0C1017;\n        border-radius: 2vw;\n      }\n      .sport_inputTime {\n        position: absolute;\n        height: 10vw;\n        width: 30vw;\n        top: 11vw;\n        left: 62vw;\n        background-color: rgba(49, 51, 61, 0.3);\n        box-sizing: border-box;\n        color: #0d0e15;\n        border: 5px solid #0C1017;\n        border-radius: 2vw;\n      }\n      .sport_inputButton_off {\n        position: absolute;\n        right: 0;\n        height: 10vw;\n        width: 12vw;\n        background: url('./src/img/check-off.png') no-repeat center center;\n        background-size: cover;\n        box-sizing: border-box;\n        color: #0d0e15;\n        border: 5px solid #0C1017;\n        border-radius: 2vw;\n      }\n      .sport_inputButton_on {\n        position: absolute;\n        right: 0;\n        height: 10vw;\n        width: 12vw;\n        background: url('./src/img/check-on.png') no-repeat center center;\n        background-size: cover;\n        box-sizing: border-box;\n        color: #0d0e15;\n        border: 5px solid #0C1017;\n        border-radius: 2vw;\n      }\n\n      .sport_serchContainer {\n        position: absolute;\n        background-color: #aaa;\n        width: 60vw;\n        left: 0;\n        right: 10px;\n        height: 200px;\n        top: 27px;\n        overflow-y: scroll;\n        z-index: 10;\n      }\n\n      .sport_list {\n        position:relative;\n        top:5vh;\n        margin: 5vw;\n        width: 90vw;\n        height: 55vh;\n        overflow-y: scroll;\n        overflow-x: hidden;\n      }\n      .sport_listItem {\n        float:left;\n        margin-bottom: 2vh;\n        margin-right: 5vw;\n        height: 12vw;\n        width: 70vw;\n        box-sizing: border-box;\n        background-color: #3f414a;\n        color: #ff9d2d;\n        font-size: 6vw;\n        text-align: center;\n        border-radius: 2vw;\n        line-height: 12vw;\n\n      }\n      .sport_listWeight {\n        float:left;\n        height: 12vw;\n        width: 25vw;\n        line-height: 12vw;\n        background-color: #3f414a;\n        box-sizing: border-box;\n        color: #ff9d2d;\n        font-size: 6vw;\n        text-align: center;\n        border-radius: 2vw;\n        border: none;\n      }\n      .sport_listNumbers {\n        float:left;\n\n        margin-left: 5vw;\n        margin-right: 5vw;\n        height: 12vw;\n        width: 25vw;\n        line-height: 12vw;\n        background-color: #3f414a;\n        box-sizing: border-box;\n        color: #ff9d2d;\n        font-size: 6vw;\n        text-align: center;\n        border-radius: 2vw;\n        border: none;\n      }\n      .sport_listTime {\n        float:left;\n        height: 12vw;\n        width: 25vw;\n        line-height: 12vw;\n        background-color: #3f414a;\n        box-sizing: border-box;\n        color: #ff9d2d;\n        font-size: 6vw;\n        text-align: center;\n        border-radius: 2vw;\n        border: none;\n      }\n\n      .sport_listButton_on {\n        float:left;\n        height: 12vw;\n        width: 12vw;\n        background: url('./src/img/check-on.png') no-repeat center center;\n        background-color: #3f414a;\n        background-size: cover;\n        box-sizing: border-box;\n        color: #0d0e15;\n        border-radius: 2vw;\n      }\n      .sport_listButton_off {\n      float: left;\n      height: 12vw;\n      width: 12vw;\n      background: url('./src/img/check-off.png') no-repeat center center;\n      background-color: #3f414a;\n      background-size: cover;\n      box-sizing: border-box;\n      color: #0d0e15;\n      border-radius: 2vw;\n    }\n    .repeatLine {\n      float: left;\n      margin: 1.5vw;\n\n      width: 100%;\n      height: 1.5vw;\n      background-color: #0C1017;\n    }\n    .tmp{\nheight: 2vh;\n    }\n      "],
                        template: "\n<op-plus [iAm]=\"'sport'\" [(isOpen)]=\"plusIsOpen\"></op-plus>\n\n<fm-progress-bar [name]=\"'progress'|translate\" [mainLine]=\"totalSport.procentDone\" [secondLine]=\"\" [minNumber]=\"totalSport.done\" [maxNumber]=\"pickedSportContainer.length\"></fm-progress-bar>\n\n<form class=\"sport_form\" (ngSubmit)=\"onSubmit(sportForm)\" #sportForm=\"ngForm\">\n\n  <label for=\"sportName\"></label>\n  <input class=\"sport_inputSport\" required [placeholder]=\"('search'|translate) + '...'\" [(ngModel)]=\"model.name\" ngControl=\"name\" #name=\"ngForm\" (input)=\"pickSportInput(model.name)\">\n\n  <label for=\"sportWeight\"></label>\n  <input type=\"number\" [min]=\"1\" [placeholder]=\"('sport.weight'|translate) + '...'\" class=\"sport_inputWeight\" [(ngModel)]=\"model.weight\" ngControl=\"weight\" #weight=\"ngForm\">\n\n  <label for=\"sportNumber\"></label>\n  <input type=\"number\" [min]=\"1\" [placeholder]=\"('sport.numbers'|translate) + '...'\" class=\"sport_inputCount\" [(ngModel)]=\"model.numbers\" ngControl=\"numbers\" #numbers=\"ngForm\">\n\n  <label for=\"sportTime\"></label>\n  <input type=\"number\" [min]=\"1\" [placeholder]=\"('sport.time'|translate) + '...'\" class=\"sport_inputTime\" [(ngModel)]=\"model.time\" ngControl=\"time\" #time=\"ngForm\">\n\n  <button #subBtn type=\"submit\" [ngClass]=\"{sport_inputButton_off: subBtn['disabled'], sport_inputButton_on: !subBtn['disabled']}\" [disabled]=\"!sportForm.form.valid || !correctSport\"></button>\n\n  <div *ngIf=\"(name.valid && !correctSport)\" class=\"sport_serchContainer\">\n    <div class=\"sport_listItem\" *ngFor=\"#item of sportContainer  | simpleSearch :'name':language : name.value; #i = index;\" (click)=\"pickSport(item);\">\n\n  {{item?.name[language]}}\n    </div>\n  </div>\n</form>\n\n<div class=\"sport_list\">\n  <div *ngFor=\"#item of pickedSportContainer; #i = index\" fmSwipe (fmSwipeLeft)=\"removeSport(i, item)\" (fmSwipeRight)=\"removeSport(i, item)\">\n\n      <div class=\"sport_listItem\">\n        {{item?.name[language]}}\n      </div>\n      <div [ngClass]=\"{sport_listButton_off: !item.picked, sport_listButton_on: item.picked}\" (click)=\"checkBoxToggle(i, item)\"></div>\n      <input class=\"sport_listWeight\" type=\"number\" min=\"0\" [(ngModel)]=\"item.weight\" (blur)=\"changeSport(i, item)\">\n      <input class=\"sport_listNumbers\" type=\"number\" min=\"0\" [(ngModel)]=\"item.numbers\" (blur)=\"changeSport(i, item)\">\n      <input class=\"sport_listTime\" type=\"number\" min=\"0\" [(ngModel)]=\"item.time\" (blur)=\"changeSport(i, item)\">\n      <div class=\"repeatLine\"></div>\n\n  </div>\n</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [sport_service_2.SportService, calendar_service_2.CalendarService, user_service_4.UserService])
                ], SportComponent);
                return SportComponent;
            }());
            exports_14("SportComponent", SportComponent);
        }
    }
});
System.register("components/rest-page/rest.component", ['angular2/core'], function(exports_15, context_15) {
    "use strict";
    var __moduleName = context_15 && context_15.id;
    var core_14;
    var RestComponent;
    return {
        setters:[
            function (core_14_1) {
                core_14 = core_14_1;
            }],
        execute: function() {
            RestComponent = (function () {
                function RestComponent() {
                    var _this = this;
                    this.test2 = 1;
                    this.test4 = 1;
                    this.date = new Date().getHours();
                    this.dateM = new Date().getMinutes();
                    this.dateBig = new Date();
                    setTimeout(function () { return _this.test1 = "timeout constructor 5sec"; }, 5000);
                    setInterval(function () { return _this.test2++; }, 1000);
                    this.timerMaker();
                }
                RestComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    setTimeout(function () { return _this.test3 = "timeout constructor 10sec"; }, 10000);
                    setInterval(function () { return _this.test4++; }, 1000);
                };
                RestComponent.prototype.timerMaker = function () {
                    this.today = new Date();
                    this.tomorrow = new Date();
                    this.tomorrow.setHours(0, 0, 0, 0);
                    this.tomorrow.setDate(this.today.getDate() + 1);
                    this.timer = (this.tomorrow.getTime() - this.today.getTime()) / 1000 / 60 / 60;
                };
                RestComponent = __decorate([
                    core_14.Component({
                        selector: 'op-rest',
                        directives: [],
                        providers: [],
                        pipes: [],
                        styles: [],
                        template: "\n    <h1 class=\"primary\">REST</h1>\n    <div>constructor timeout 5sec: {{test1}}</div>\n    <hr>\n    <div>constructor: {{test2}}</div>\n    <hr>\n    <div>onInit timeout 10sec: {{test3}}</div>\n    <hr>\n    <div>onInit: {{test4}}</div>\n    <hr>\n    <div> time is: {{date}}:{{dateM}}</div>\n    <hr>\n    <div>{{dateBig}}</div>\n    <hr>\n    <div>time 2 reload: {{timer}} hours</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], RestComponent);
                return RestComponent;
            }());
            exports_15("RestComponent", RestComponent);
        }
    }
});
System.register("components/start-page/start.component", ['angular2/core', 'angular2/router'], function(exports_16, context_16) {
    "use strict";
    var __moduleName = context_16 && context_16.id;
    var core_15, router_1;
    var StartComponent;
    return {
        setters:[
            function (core_15_1) {
                core_15 = core_15_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            StartComponent = (function () {
                function StartComponent() {
                }
                StartComponent = __decorate([
                    core_15.Component({
                        selector: 'op-start',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [],
                        pipes: [],
                        styles: ["\n      .startPage_navigator {\n        display: flex;\n        flex-flow: column nowrap;\n        position: absolute;\n        justify-content: space-around;\n        width: 30vw;\n        height: 100vh;\n        bottom: 0;\n        left: 35vw;\n        overflow: hidden;\n      }\n      .startPage_foodButton {\n      background: url('./src/img/food.png') no-repeat center center;\n      background-size: cover;\n      box-sizing: border-box;\n      width: 27vw;\n      height: 27vw;\n      margin: auto;\n    }\n    .startPage_sportButton {\n      background: url('./src/img/sport.png') no-repeat center center;\n      background-size: cover;\n      box-sizing: border-box;\n      width: 27vw;\n      height: 27vw;\n      margin: auto;\n\n    }\n    .startPage_restButton {\n      background: url('./src/img/rest.png') no-repeat center center;\n      background-size: cover;\n      box-sizing: border-box;\n      width: 27vw;\n      height: 27vw;\n      margin: auto;\n\n    }\n      "],
                        template: "\n    <nav class=\"startPage_navigator\">\n      <a [routerLink]=\"['Food']\">\n        <div class=\"startPage_foodButton\"></div>\n      </a>\n      <a [routerLink]=\"['Sport']\">\n        <div class=\"startPage_sportButton\"></div>\n      </a>\n      <a [routerLink]=\"['Rest']\">\n        <div class=\"startPage_restButton\"></div>\n      </a>\n    </nav>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], StartComponent);
                return StartComponent;
            }());
            exports_16("StartComponent", StartComponent);
        }
    }
});
System.register("shared/components/side-bar/side-bar.component", ['angular2/core', 'angular2/router', "shared/directives/swipeHolder/swipe-holder.directive"], function(exports_17, context_17) {
    "use strict";
    var __moduleName = context_17 && context_17.id;
    var core_16, router_2, swipe_holder_directive_3;
    var SideBar;
    return {
        setters:[
            function (core_16_1) {
                core_16 = core_16_1;
            },
            function (router_2_1) {
                router_2 = router_2_1;
            },
            function (swipe_holder_directive_3_1) {
                swipe_holder_directive_3 = swipe_holder_directive_3_1;
            }],
        execute: function() {
            SideBar = (function () {
                function SideBar() {
                    this.isOpenChange = new core_16.EventEmitter();
                }
                SideBar.prototype.toggle = function () {
                    this.isOpen = !this.isOpen;
                    this.isOpenChange.emit(this.isOpen);
                };
                __decorate([
                    core_16.Input(), 
                    __metadata('design:type', Boolean)
                ], SideBar.prototype, "isOpen", void 0);
                __decorate([
                    core_16.Output(), 
                    __metadata('design:type', Object)
                ], SideBar.prototype, "isOpenChange", void 0);
                SideBar = __decorate([
                    core_16.Component({
                        selector: 'fm-side-bar',
                        directives: [router_2.ROUTER_DIRECTIVES, swipe_holder_directive_3.SwipeHoldertDirective],
                        providers: [],
                        pipes: [],
                        styles: ["\n    .sideBarContainer {\n    position: absolute;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: space-around;\n    align-items: center;\n    height: 100vh;\n    width: 70vw;\n    left: 0;\n    top: 0;\n    z-index: 999;\n    background-color: gray;\n  }\n  .sideBar_toggle {\n    position: absolute;\n    top:0;\n    left:5vw;\n    background: url('./src/img/menu-icon.png') no-repeat center center;\n    background-size: cover;\n    box-sizing: border-box;\n    width: 15vw;\n    height: 15vw;\n    z-index: 998;\n  }\n  .sideBarSwipePlace {\n    position: fixed;\n    top:0;\n    left:0;\n    // background-color: silver;\n    // opacity:0.5;\n    height:100vh;\n    width:10vw;\n    z-index: 997;\n  }\n  .sideBarShadow {\n    position: absolute;\n    height: 100vh;\n    width: 30vw;\n    left: 70vw;\n    top: 0;\n    background-color: black;\n    opacity: 0.5;\n    z-index:998;\n  }\n  "], template: "\n<div class=\"sideBar_toggle\" (click)=\"toggle()\"></div>\n\n<div class=\"sideBarContainer\" *ngIf=\"isOpen\" fmSwipe (fmSwipeLeft)=\"toggle()\" (fmSwipeRight)=\"toggle()\">\n  <a [routerLink]=\"['Food']\" (click)=\"toggle()\">\n     {{\"opanas.router.food\"}}\n  </a>\n  <a [routerLink]=\"['Sport']\" (click)=\"toggle()\">\n     {{\"opanas.router.sport\"}}\n  </a> <a [routerLink]=\"['Rest']\" (click)=\"toggle()\">\n     {{\"opanas.router.rest\"}}\n  </a>\n  <div class=\"sideBarShadow\" (click)=\"toggle()\"></div>\n</div>\n\n<div *ngIf=\"!isOpen\" class=\"sideBarSwipePlace\" fmSwipe (fmSwipeLeft)=\"toggle()\" (fmSwipeRight)=\"toggle()\"></div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], SideBar);
                return SideBar;
            }());
            exports_17("SideBar", SideBar);
        }
    }
});
System.register("services/refresh-date/refresh-date.service", ['angular2/core'], function(exports_18, context_18) {
    "use strict";
    var __moduleName = context_18 && context_18.id;
    var core_17;
    var RefreshDateService;
    return {
        setters:[
            function (core_17_1) {
                core_17 = core_17_1;
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
                    console.log("refresher in da house. refresh will make badaboom in " + this.timer / 1000 / 60 + " minutes");
                    setTimeout(function () {
                        console.log("refresher da best");
                        location.reload();
                    }, this.timer);
                };
                RefreshDateService = __decorate([
                    core_17.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], RefreshDateService);
                return RefreshDateService;
            }());
            exports_18("RefreshDateService", RefreshDateService);
        }
    }
});
System.register("components/opanas/opanas.component", ['angular2/core', 'angular2/router', "components/food-page/food.component", "components/sport-page/sport.component", "components/rest-page/rest.component", "components/start-page/start.component", "shared/components/side-bar/side-bar.component", "shared/services/translate/translate.service", "services/food/food.service", "services/sport/sport.service", "services/calenadar/calendar.service", "services/refresh-date/refresh-date.service", "shared/services/storage/storage.service", "services/user/user.service"], function(exports_19, context_19) {
    "use strict";
    var __moduleName = context_19 && context_19.id;
    var core_18, router_3, food_component_1, sport_component_1, rest_component_1, start_component_1, side_bar_component_1, translate_service_6, food_service_3, sport_service_3, calendar_service_3, refresh_date_service_1, storage_service_4, user_service_5;
    var OpanasComponent, languages, keysVendor;
    return {
        setters:[
            function (core_18_1) {
                core_18 = core_18_1;
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
            function (food_service_3_1) {
                food_service_3 = food_service_3_1;
            },
            function (sport_service_3_1) {
                sport_service_3 = sport_service_3_1;
            },
            function (calendar_service_3_1) {
                calendar_service_3 = calendar_service_3_1;
            },
            function (refresh_date_service_1_1) {
                refresh_date_service_1 = refresh_date_service_1_1;
            },
            function (storage_service_4_1) {
                storage_service_4 = storage_service_4_1;
            },
            function (user_service_5_1) {
                user_service_5 = user_service_5_1;
            }],
        execute: function() {
            OpanasComponent = (function () {
                function OpanasComponent(_translator, _calendarService, _refreshDateService) {
                    this._translator = _translator;
                    this._calendarService = _calendarService;
                    this._refreshDateService = _refreshDateService;
                    this.sideBarIsOpen = false;
                }
                OpanasComponent.prototype.bla = function () {
                    location.reload();
                };
                //config app
                OpanasComponent.prototype.ngOnInit = function () {
                    //refresh-date
                    this._refreshDateService.refresher();
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
                    core_18.Component({
                        selector: 'opanas-app',
                        directives: [router_3.ROUTER_DIRECTIVES, side_bar_component_1.SideBar],
                        providers: [router_3.ROUTER_PROVIDERS, core_18.provide(router_3.LocationStrategy, { useClass: router_3.HashLocationStrategy }), translate_service_6.TranslateService, food_service_3.FoodService, sport_service_3.SportService, calendar_service_3.CalendarService, refresh_date_service_1.RefreshDateService, storage_service_4.StorageService, user_service_5.UserService],
                        pipes: [translate_service_6.TranslatePipe],
                        styles: ["\n    .header{\n    height: 15vw;\n    width: 100vw;\n    }\n\t\t.container {\n      background: url(./src/img/tempBackground.png) no-repeat center center;\n      width: 100%;\n      height: 100%;\n      overflow: hidden;\n    }\n\n  .temporary {\n    position: absolute;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: center;\n    align-items: center;\n    background-color: green;\n    right: 40vw;\n    top: 40;\n    height: 50px;\n    width: 100px;\n    opacity: 0.3;\n  }\n  "],
                        template: "\n<div class=\"container\">\n\n  <div class=\"header\">\n    <div class=\"temporary\">\n      <div (click)=\"goEn()\">english</div>\n      <div (click)=\"goRu()\">russian</div>\n      <div (click)=\"bla()\">reload</div>\n\n    </div>\n  </div>\n\n  <fm-side-bar [(isOpen)]=\"sideBarIsOpen\"></fm-side-bar>\n  <router-outlet></router-outlet>\n</div>\n\n" }),
                    router_3.RouteConfig([
                        { path: '/', name: 'Start', component: start_component_1.StartComponent, useAsDefault: true },
                        { path: '/food', name: 'Food', component: food_component_1.FoodComponent },
                        { path: '/sport', name: 'Sport', component: sport_component_1.SportComponent },
                        { path: '/rest', name: 'Rest', component: rest_component_1.RestComponent },
                        { path: '/*path', redirectTo: ['Start'] }
                    ]), 
                    __metadata('design:paramtypes', [translate_service_6.TranslateService, calendar_service_3.CalendarService, refresh_date_service_1.RefreshDateService])
                ], OpanasComponent);
                return OpanasComponent;
            }());
            exports_19("OpanasComponent", OpanasComponent);
            languages = {
                'en': 'english',
                'ru': 'russian'
            };
            keysVendor = {
                'en': {
                    'progress': 'progress',
                    'search': 'search',
                    'weight': 'weight',
                    'sport.weight': 'weight',
                    'sport.numbers': 'numbers',
                    'sport.time': 'time',
                    'calories': 'calories',
                    'protein': 'protein',
                    'carbohydrates': 'carbohydrates',
                    'fat': 'fat'
                },
                'ru': {
                    'progress': 'прогресс',
                    'search': 'поиск',
                    'weight': 'вес',
                    'sport.weight': 'какой вес',
                    'sport.numbers': 'сколько раз',
                    'sport.time': 'время',
                    'calories': 'калории',
                    'protein': 'белки',
                    'carbohydrates': 'углеводы',
                    'fat': 'жиры'
                }
            };
        }
    }
});
System.register("main", ['angular2/platform/browser', "components/opanas/opanas.component"], function(exports_20, context_20) {
    "use strict";
    var __moduleName = context_20 && context_20.id;
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