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
                                    res = "" + this.messages.error.translate;
                                }
                            }
                            else {
                                res = "" + this.messages.error.translate;
                            }
                        }
                        return "" + res;
                    }
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
System.register("shared/components/progress-bar/progress-bar.component", ['angular2/core', 'angular2/router'], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var core_3, router_1;
    var ProgressBar;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ProgressBar = (function () {
                function ProgressBar(_router) {
                    this._router = _router;
                    this.maxNumber = 0;
                    this.minNumber = 0;
                    this.goSettings = false;
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
                ProgressBar.prototype.navigate = function () {
                    if (this.goSettings) {
                        this._router.navigate(['User']);
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
                __decorate([
                    core_3.Input(), 
                    __metadata('design:type', Boolean)
                ], ProgressBar.prototype, "goSettings", void 0);
                ProgressBar = __decorate([
                    core_3.Component({
                        selector: 'fm-progress-bar',
                        directives: [],
                        providers: [],
                        pipes: [],
                        styles: ["\n.progress_container {\n  width: 90vw;\n  height: 16px;\n  position: relative;\n  left: 5vw;\n  background-color: rgba(49, 51, 61, 0.7);\n  box-sizing: border-box;\n  border:3px solid #0C1017;\n  border-radius: 10px;\n  z-index: 1;\n}\n.progress_mainLine {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: #E48426;\n  height: 100%;\n  border-radius: 5px;\n  text-align: center;\n  color: #181A21;\n  font-size: 3vw;\n}\n.progress_secondLine {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: #2a2b2d;\n  height: 100%;\n  border-radius: 5px;\n  text-align: right;\n  color: #E48426;\n  font-size: 4vw;\n}\n.progress_barHeader {\n  text-align: center;\n  color: #E48426;\n  font-size: 4vw;\n}\n.numbers {\n  position: absolute;\n  color: #D0D9D9;\n  height: 11px;\n  width: 90vw;\n  overflow: hidden;\n  font-weight: bold;\n  line-height: 11px;\n}\n "],
                        template: "\n<div class=\"progress_barHeader\" (touchend)=\"navigate()\">{{name|uppercase}}</div>\n<div class=\"progress_container\" [style.border-color]=\"(minNumber > maxNumber)?'red':''\" (touchend)=\"navigate()\">\n  <div class=\"progress_secondLine\" [style.width.%]=\"secondLine\">\n  </div>\n  <div class=\"progress_mainLine\" [style.width.%]=\"mainLine\">\n    <div class=\"numbers\">{{minNumber}} / {{maxNumber}}</div>\n  </div>\n\n</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
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
                };
                StorageService.prototype.getItem = function (name) {
                    if (localStorage.getItem(name)) {
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
System.register("services/user/user.service", ['angular2/core', "shared/services/storage/storage.service"], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var core_5, storage_service_1;
    var UserService;
    return {
        setters:[
            function (core_5_1) {
                core_5 = core_5_1;
            },
            function (storage_service_1_1) {
                storage_service_1 = storage_service_1_1;
            }],
        execute: function() {
            UserService = (function () {
                function UserService(_storageService) {
                    this._storageService = _storageService;
                    this.storageKeys = {
                        'userSets': 'userSets'
                    };
                    this.sets = {
                        'foodSets': {
                            "calories": {
                                "full": 0
                            },
                            "protein": {
                                "full": 0
                            },
                            "fat": {
                                "full": 0
                            },
                            "carbohydrates": {
                                "full": 0
                            }
                        },
                        'sportSets': {},
                        'age': '',
                        'weight': '',
                        'height': '',
                        'sex': 'male',
                        'activity': {
                            'lvl': 1,
                            'multi': 1.2
                        },
                        'goal': {
                            'lvl': 10,
                            'multi': 1,
                        },
                        'language': 'en',
                        'firstEnter': true
                    };
                    if (this._storageService.getItem(this.storageKeys['userSets'])) {
                        this.sets = this._storageService.getItem(this.storageKeys['userSets']);
                    }
                }
                UserService.prototype.refreshUser = function () {
                    for (var key in this.sets['foodSets']) {
                        if (!this.sets['foodSets'][key]['full']) {
                            this.sets['foodSets'][key]['full'] = 0;
                        }
                    }
                    this._storageService.setItem(this.storageKeys['userSets'], this.sets);
                };
                UserService.prototype.getFirstEnter = function () {
                    return this.sets['firstEnter'];
                };
                UserService.prototype.setFirstEnter = function (enter) {
                    if (enter === void 0) { enter = false; }
                    this.sets['firstEnter'] = enter;
                    this.refreshUser();
                };
                UserService.prototype.getLanguage = function () {
                    return this.sets['language'];
                };
                UserService.prototype.setLanguage = function (language) {
                    this.sets['language'] = language;
                    this.refreshUser();
                };
                UserService.prototype.getUserSets = function () {
                    return this.sets;
                };
                UserService.prototype.setUserAge = function (value) {
                    if (!value) {
                        value = 0;
                    }
                    this.sets['age'] = value;
                    this.refreshUser();
                };
                UserService.prototype.setUserSex = function (value) {
                    if (!(value === 'male' || value === 'female')) {
                        value = 'male';
                    }
                    this.sets['sex'] = value;
                    this.refreshUser();
                };
                UserService.prototype.setUserWeight = function (value) {
                    if (!value) {
                        value = 0;
                    }
                    this.sets['weight'] = value;
                    this.refreshUser();
                };
                UserService.prototype.setUserHeight = function (value) {
                    if (!value) {
                        value = 0;
                    }
                    this.sets['height'] = value;
                    this.refreshUser();
                };
                UserService.prototype.setUserActivity = function (value) {
                    if (!value) {
                        value = 1;
                    }
                    this.sets['activity']['lvl'] = value;
                    switch (value) {
                        case 1:
                            value = 1.2;
                            break;
                        case 2:
                            value = 1.375;
                            break;
                        case 3:
                            value = 1.4625;
                            break;
                        case 4:
                            value = 1.550;
                            break;
                        case 5:
                            value = 1.6375;
                            break;
                        case 6:
                            value = 1.725;
                            break;
                        default:
                            value = 1.2;
                    }
                    this.sets['activity']['multi'] = value;
                    this.refreshUser();
                };
                UserService.prototype.setUserGoal = function (value) {
                    if (!value) {
                        value = 10;
                    }
                    this.sets['goal']['lvl'] = value;
                    switch (value) {
                        case 8:
                            value = 0.6;
                            break;
                        case 9:
                            value = 0.8;
                            break;
                        case 10:
                            value = 1;
                            break;
                        case 11:
                            value = 1.2;
                            break;
                        default:
                            value = 10;
                    }
                    this.sets['goal']['multi'] = value;
                    this.refreshUser();
                };
                UserService.prototype.setUserCalories = function (value) {
                    if (!value) {
                        value = 0;
                    }
                    this.sets['foodSets']['calories']['full'] = value;
                    this.refreshUser();
                };
                UserService.prototype.setUserProtein = function (value) {
                    if (!value) {
                        value = 0;
                    }
                    this.sets['foodSets']['protein']['full'] = value;
                    this.refreshUser();
                };
                UserService.prototype.setUserFat = function (value) {
                    if (!value) {
                        value = 0;
                    }
                    this.sets['foodSets']['fat']['full'] = value;
                    this.refreshUser();
                };
                UserService.prototype.setUserCarbohydrates = function (value) {
                    if (!value) {
                        value = 0;
                    }
                    this.sets['foodSets']['carbohydrates']['full'] = value;
                    this.refreshUser();
                };
                UserService.prototype.calculateUserDailyRate = function (sex, age, weight, height, activity, goal) {
                    var kcal;
                    this.setUserSex(sex);
                    this.setUserAge(age);
                    this.setUserWeight(weight);
                    this.setUserHeight(height);
                    this.setUserActivity(activity);
                    this.setUserGoal(goal);
                    if (sex === 'male') {
                        kcal = 10 * this.sets['weight'] + 6.25 * this.sets['height'] - 5 * this.sets['age'] + 5;
                    }
                    else if (sex === 'female') {
                        kcal = 10 * this.sets['weight'] + 6.25 * this.sets['height'] - 5 * this.sets['age'] - 161;
                    }
                    kcal = kcal * this.sets['activity']['multi'] * this.sets['goal']['multi'];
                    this.setUserCalories(Math.round(kcal));
                    this.setUserProtein(Math.round(weight * 1.8));
                    this.setUserFat(Math.round(weight));
                    this.setUserCarbohydrates(Math.round((kcal - this.sets['foodSets']['protein']['full'] * 4 - this.sets['foodSets']['fat']['full'] * 9) / 4));
                };
                UserService = __decorate([
                    core_5.Injectable(), 
                    __metadata('design:paramtypes', [storage_service_1.StorageService])
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
    var core_6, storage_service_2, user_service_1;
    var FoodService, foodVendor;
    return {
        setters:[
            function (core_6_1) {
                core_6 = core_6_1;
            },
            function (storage_service_2_1) {
                storage_service_2 = storage_service_2_1;
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
                    this.userMenu = [];
                    this.storageKeys = {
                        'userFood': 'userFood',
                        'userMenu': 'userMenu'
                    };
                    if (this._storageService.getItem(this.storageKeys.userFood)) {
                        this.userFood = this._storageService.getItem(this.storageKeys.userFood);
                    }
                    if (this._storageService.getItem(this.storageKeys.userMenu)) {
                        this.userMenu = this._storageService.getItem(this.storageKeys.userMenu);
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
                    this.userFood.unshift(food);
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
                FoodService.prototype.getUserMenuAll = function () {
                    return this.userMenu;
                };
                FoodService.prototype.getUserMenu = function (name) {
                    for (var _i = 0, _a = this.userMenu; _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.name.trim() === name.trim()) {
                            return item;
                        }
                    }
                };
                FoodService.prototype.setUserMenu = function (name, food) {
                    for (var _i = 0, _a = this.userMenu; _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.name.trim() === name.trim()) {
                            var rem = this.userMenu.indexOf(item);
                            this.userMenu.splice(rem, 1);
                        }
                    }
                    this.userMenu.unshift(this.createUserMenu(name, food));
                    this.refreshUserMenu();
                };
                FoodService.prototype.createUserMenu = function (name, food) {
                    var res = {};
                    res['name'] = name;
                    res['food'] = food;
                    return res;
                };
                FoodService.prototype.removeMenu = function (name) {
                    for (var _i = 0, _a = this.userMenu; _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.name.trim() === name.trim()) {
                            this.userMenu.splice(this.userMenu.indexOf(item), 1);
                        }
                    }
                    this.refreshUserMenu();
                };
                FoodService.prototype.removeFoodFromMenu = function (name, index) {
                    for (var _i = 0, _a = this.userMenu; _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.name.trim() === name.trim()) {
                            item['food'].splice(index, 1);
                        }
                    }
                    this.refreshUserMenu();
                };
                FoodService.prototype.changeFoodInMenu = function (name, index, weight) {
                    for (var _i = 0, _a = this.userMenu; _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.name.trim() === name.trim()) {
                            item['food'][index]['weight'] = weight;
                        }
                    }
                    this.refreshUserMenu();
                };
                FoodService.prototype.refreshUserMenu = function () {
                    this._storageService.setItem(this.storageKeys.userMenu, this.userMenu);
                };
                FoodService = __decorate([
                    core_6.Injectable(), 
                    __metadata('design:paramtypes', [storage_service_2.StorageService, user_service_1.UserService])
                ], FoodService);
                return FoodService;
            }());
            exports_7("FoodService", FoodService);
            foodVendor = [
                //1
                {
                    "name": {
                        "en": "Сhicken egg",
                        "ru": "Яйцо куриное"
                    },
                    "custom": false,
                    "calories": 157,
                    "protein": 12.7,
                    "fat": 10.9,
                    "carbohydrates": 0.7
                },
                // 2
                {
                    "name": {
                        "en": "Apricot",
                        "ru": "Абрикос"
                    },
                    "custom": false,
                    "calories": 41,
                    "protein": 0.9,
                    "fat": 0.1,
                    "carbohydrates": 10.8
                },
                // 3
                {
                    "name": {
                        "en": "Adjika",
                        "ru": "Аджика"
                    },
                    "custom": false,
                    "calories": 59,
                    "protein": 1.0,
                    "fat": 3.7,
                    "carbohydrates": 5.8
                },
                // 4
                {
                    "name": {
                        "en": "Quince",
                        "ru": "Айва"
                    },
                    "custom": false,
                    "calories": 40,
                    "protein": 0.6,
                    "fat": 0.5,
                    "carbohydrates": 9.8
                },
                // 5
                {
                    "name": {
                        "en": "Cherry-plum",
                        "ru": "Алыча"
                    },
                    "custom": false,
                    "calories": 27,
                    "protein": 0.2,
                    "fat": 0.0,
                    "carbohydrates": 6.9
                },
                // 6
                {
                    "name": {
                        "en": "Pineapple",
                        "ru": "Ананас"
                    },
                    "custom": false,
                    "calories": 49,
                    "protein": 0.4,
                    "fat": 0.2,
                    "carbohydrates": 10.6
                },
                // 7
                {
                    "name": {
                        "en": "Curd 9% bold",
                        "ru": "Творог 9% полужирный"
                    },
                    "custom": false,
                    "calories": 159,
                    "protein": 16.7,
                    "fat": 9.0,
                    "carbohydrates": 2.0
                },
                // 8
                {
                    "name": {
                        "en": "Curd 0% cheese",
                        "ru": "Творог 0% обезжиренный"
                    },
                    "custom": false,
                    "calories": 71,
                    "protein": 16.5,
                    "fat": 0.0,
                    "carbohydrates": 1.3
                },
                // 9
                {
                    "name": {
                        "en": "Chicken cutlet",
                        "ru": "Куриная котлета"
                    },
                    "custom": false,
                    "calories": 108.2,
                    "protein": 17,
                    "fat": 3.7,
                    "carbohydrates": 1.8
                },
                // 10
                {
                    "name": {
                        "en": "Chicken cue",
                        "ru": "Куриный биток"
                    },
                    "custom": false,
                    "calories": 128.7,
                    "protein": 21.3,
                    "fat": 3.1,
                    "carbohydrates": 2.4
                },
                // 11
                {
                    "name": {
                        "en": "Fried chicken",
                        "ru": "Курица жареная"
                    },
                    "custom": false,
                    "calories": 210,
                    "protein": 26.0,
                    "fat": 12.0,
                    "carbohydrates": 0.0
                },
                // 12
                {
                    "name": {
                        "en": "Boiled chicken",
                        "ru": "Курица вареная"
                    },
                    "custom": false,
                    "calories": 170,
                    "protein": 25.2,
                    "fat": 7.4,
                    "carbohydrates": 0.0
                },
                // 13
                {
                    "name": {
                        "en": "White rice",
                        "ru": "Рис белый"
                    },
                    "custom": false,
                    "calories": 116,
                    "protein": 2.2,
                    "fat": 0.5,
                    "carbohydrates": 24.9
                },
                // 14
                {
                    "name": {
                        "en": "Oatmeal with water",
                        "ru": "Овсяная каша на воде"
                    },
                    "custom": false,
                    "calories": 88,
                    "protein": 3.0,
                    "fat": 1.7,
                    "carbohydrates": 15.0
                },
                // 15
                {
                    "name": {
                        "en": "Semolina with milk",
                        "ru": "Манная каша на молоке"
                    },
                    "custom": false,
                    "calories": 98,
                    "protein": 3.0,
                    "fat": 3.2,
                    "carbohydrates": 15.3
                },
                // 16
                {
                    "name": {
                        "en": "Semolina water",
                        "ru": "Манная каша на воде"
                    },
                    "custom": false,
                    "calories": 80,
                    "protein": 2.5,
                    "fat": 0.2,
                    "carbohydrates": 16.8
                },
                // 17
                {
                    "name": {
                        "en": "Buckwheat porridge with milk",
                        "ru": "Гречневая каша на молоке"
                    },
                    "custom": false,
                    "calories": 118,
                    "protein": 4.2,
                    "fat": 2.3,
                    "carbohydrates": 21.6
                },
                // 18
                {
                    "name": {
                        "en": "Buckwheat",
                        "ru": "Гречневая каша"
                    },
                    "custom": false,
                    "calories": 132,
                    "protein": 4.5,
                    "fat": 2.3,
                    "carbohydrates": 25.0
                },
                // 19
                {
                    "name": {
                        "en": "Pearl barley porridge",
                        "ru": "Перловая каша"
                    },
                    "custom": false,
                    "calories": 106,
                    "protein": 3.1,
                    "fat": 0.4,
                    "carbohydrates": 23.0
                },
                // 20
                {
                    "name": {
                        "en": "Millet porridge",
                        "ru": "Пшенная каша"
                    },
                    "custom": false,
                    "calories": 135,
                    "protein": 4.7,
                    "fat": 1.1,
                    "carbohydrates": 26.1
                },
                // 21
                {
                    "name": {
                        "en": "Rice brown",
                        "ru": "Рис бурый"
                    },
                    "custom": false,
                    "calories": 337,
                    "protein": 7.4,
                    "fat": 1.8,
                    "carbohydrates": 72.9
                },
                // 22
                {
                    "name": {
                        "en": "Barley porridge",
                        "ru": "Ячменная каша"
                    },
                    "custom": false,
                    "calories": 310,
                    "protein": 11.5,
                    "fat": 2.0,
                    "carbohydrates": 65.8
                },
                // 23
                {
                    "name": {
                        "en": "Milk",
                        "ru": "Молоко"
                    },
                    "custom": false,
                    "calories": 64,
                    "protein": 3.2,
                    "fat": 3.6,
                    "carbohydrates": 4.8
                },
                // 24
                {
                    "name": {
                        "en": "Borscht",
                        "ru": "Борщ"
                    },
                    "custom": false,
                    "calories": 49,
                    "protein": 1.1,
                    "fat": 2.2,
                    "carbohydrates": 6.7
                },
                // 25
                {
                    "name": {
                        "en": "Chicken broth",
                        "ru": "Бульон куриный"
                    },
                    "custom": false,
                    "calories": 15,
                    "protein": 2.0,
                    "fat": 0.5,
                    "carbohydrates": 0.3
                },
                // 26
                {
                    "name": {
                        "en": "Pickle",
                        "ru": "Рассольник"
                    },
                    "custom": false,
                    "calories": 42,
                    "protein": 1.4,
                    "fat": 2.0,
                    "carbohydrates": 5.0
                },
                // 27
                {
                    "name": {
                        "en": "Meat solyanka",
                        "ru": "Солянка мясная"
                    },
                    "custom": false,
                    "calories": 69,
                    "protein": 5.2,
                    "fat": 4.6,
                    "carbohydrates": 1.7
                },
                // 28
                {
                    "name": {
                        "en": "Mushroom soup",
                        "ru": "Суп грибной"
                    },
                    "custom": false,
                    "calories": 50,
                    "protein": 1.9,
                    "fat": 2.4,
                    "carbohydrates": 5.7
                },
                // 29
                {
                    "name": {
                        "en": "Vegetable soup",
                        "ru": "Суп овощной"
                    },
                    "custom": false,
                    "calories": 43,
                    "protein": 1.7,
                    "fat": 1.8,
                    "carbohydrates": 6.2
                },
                // 30
                {
                    "name": {
                        "en": "Fish soup",
                        "ru": "Уха"
                    },
                    "custom": false,
                    "calories": 46,
                    "protein": 3.4,
                    "fat": 1.0,
                    "carbohydrates": 5.5
                },
                // 31
                {
                    "name": {
                        "en": "Dutch cheese",
                        "ru": "Сыр Голландский"
                    },
                    "custom": false,
                    "calories": 352,
                    "protein": 26.0,
                    "fat": 26.8,
                    "carbohydrates": 0.0
                },
                // 32
                {
                    "name": {
                        "en": "Cheese Russian",
                        "ru": "Сыр Российский"
                    },
                    "custom": false,
                    "calories": 363,
                    "protein": 24.1,
                    "fat": 29.5,
                    "carbohydrates": 0.3
                },
                // 33
                {
                    "name": {
                        "en": "Sulguni cheese",
                        "ru": "Сыр сулугуни"
                    },
                    "custom": false,
                    "calories": 290,
                    "protein": 20.0,
                    "fat": 24.0,
                    "carbohydrates": 0.0
                },
                // 34
                {
                    "name": {
                        "en": "Chees feta",
                        "ru": "Сыр фета"
                    },
                    "custom": false,
                    "calories": 290,
                    "protein": 17.0,
                    "fat": 24.0,
                    "carbohydrates": 0.0
                },
                // 35
                {
                    "name": {
                        "en": "Boiled chicken fillet",
                        "ru": "Куриное филе вареное"
                    },
                    "custom": false,
                    "calories": 137,
                    "protein": 29.8,
                    "fat": 1.8,
                    "carbohydrates": 0.5
                },
                // 36
                {
                    "name": {
                        "en": "Pork chops",
                        "ru": "Свинные отбивные"
                    },
                    "custom": false,
                    "calories": 470,
                    "protein": 17.5,
                    "fat": 40.3,
                    "carbohydrates": 8.8
                },
                // 37
                {
                    "name": {
                        "en": "Beef Cutlets",
                        "ru": "Котлеты из говядины"
                    },
                    "custom": false,
                    "calories": 260,
                    "protein": 18.0,
                    "fat": 20.0,
                    "carbohydrates": 0.0
                },
                // 38
                {
                    "name": {
                        "en": "Cooked turkey",
                        "ru": "Индейка вареная"
                    },
                    "custom": false,
                    "calories": 195,
                    "protein": 25.3,
                    "fat": 10.4,
                    "carbohydrates": 0.0
                },
                // 39
                {
                    "name": {
                        "en": "Roasted turkey",
                        "ru": "Индейка жареная"
                    },
                    "custom": false,
                    "calories": 165,
                    "protein": 28.0,
                    "fat": 6.0,
                    "carbohydrates": 0
                },
                // 40
                {
                    "name": {
                        "en": "Beef liver fried",
                        "ru": "Говяжья печень жареная"
                    },
                    "custom": false,
                    "calories": 199,
                    "protein": 22.9,
                    "fat": 10.2,
                    "carbohydrates": 3.9
                },
                // 41
                {
                    "name": {
                        "en": "Beef stew",
                        "ru": "Говядина тушеная"
                    },
                    "custom": false,
                    "calories": 232,
                    "protein": 16.8,
                    "fat": 18.3,
                    "carbohydrates": 0.0
                },
                // 42
                {
                    "name": {
                        "en": "Boiled beef",
                        "ru": "Говядина вареная"
                    },
                    "custom": false,
                    "calories": 254,
                    "protein": 25.8,
                    "fat": 16.8,
                    "carbohydrates": 0.0
                },
                // 43
                {
                    "name": {
                        "en": "Ham",
                        "ru": "Ветчина"
                    },
                    "custom": false,
                    "calories": 270,
                    "protein": 14.0,
                    "fat": 24.0,
                    "carbohydrates": 0.0
                },
                // 44
                {
                    "name": {
                        "en": "Fat",
                        "ru": "Cало"
                    },
                    "custom": false,
                    "calories": 797,
                    "protein": 2.4,
                    "fat": 89.0,
                    "carbohydrates": 0.0
                },
                // 45
                {
                    "name": {
                        "en": "Canned meat",
                        "ru": "Паштет мясной"
                    },
                    "custom": false,
                    "calories": 170,
                    "protein": 15.0,
                    "fat": 11.0,
                    "carbohydrates": 0.0
                },
                // 46
                {
                    "name": {
                        "en": "Boiled chicken",
                        "ru": "Курица вареная"
                    },
                    "custom": false,
                    "calories": 170,
                    "protein": 25.2,
                    "fat": 7.4,
                    "carbohydrates": 0.0
                },
                // 47
                {
                    "name": {
                        "en": "Fried chicken",
                        "ru": "Курица жареная"
                    },
                    "custom": false,
                    "calories": 210,
                    "protein": 26.0,
                    "fat": 12.0,
                    "carbohydrates": 0.0
                },
                // 48
                {
                    "name": {
                        "en": "French fries",
                        "ru": "Картофель фри"
                    },
                    "custom": false,
                    "calories": 170.1,
                    "protein": 1.8,
                    "fat": 11.4,
                    "carbohydrates": 16
                },
                // 49
                {
                    "name": {
                        "en": "Potatoes baked with herbs",
                        "ru": "Картофель печеный с травами"
                    },
                    "custom": false,
                    "calories": 87.2,
                    "protein": 2.1,
                    "fat": 1.4,
                    "carbohydrates": 17.7
                },
                // 50
                {
                    "name": {
                        "en": "Pumpkin pancakes",
                        "ru": "Кабачковые оладьи"
                    },
                    "custom": false,
                    "calories": 55.8,
                    "protein": 1.6,
                    "fat": 1.7,
                    "carbohydrates": 8.5
                },
                // 51
                {
                    "name": {
                        "en": "Pizza Margarita",
                        "ru": "Пицца Маргарита"
                    },
                    "custom": false,
                    "calories": 208,
                    "protein": 10.5,
                    "fat": 9,
                    "carbohydrates": 24
                },
                // 52
                {
                    "name": {
                        "en": "Coffee",
                        "ru": "Кофе"
                    },
                    "custom": false,
                    "calories": 0,
                    "protein": 0.1,
                    "fat": 0,
                    "carbohydrates": 0
                },
                // 53
                {
                    "name": {
                        "en": "Roast pork with potatoes",
                        "ru": "Жаркое из свинины с картошкой"
                    },
                    "custom": false,
                    "calories": 76.4,
                    "protein": 2.1,
                    "fat": 2.6,
                    "carbohydrates": 12
                },
                // 54
                {
                    "name": {
                        "en": "Pilaf",
                        "ru": "плов"
                    },
                    "custom": false,
                    "calories": 193.8,
                    "protein": 8.1,
                    "fat": 7.6,
                    "carbohydrates": 24
                },
                // 55
                {
                    "name": {
                        "en": "Pelmeni",
                        "ru": "Пельмени"
                    },
                    "custom": false,
                    "calories": 275,
                    "protein": 11.9,
                    "fat": 12.4,
                    "carbohydrates": 29.0
                },
                // 56
                {
                    "name": {
                        "en": "Black tea",
                        "ru": "Чай черный"
                    },
                    "custom": false,
                    "calories": 0,
                    "protein": 0.1,
                    "fat": 0.0,
                    "carbohydrates": 0.0
                },
                // 57
                {
                    "name": {
                        "en": "Butter",
                        "ru": "масло сливочное"
                    },
                    "custom": false,
                    "calories": 748,
                    "protein": 0.5,
                    "fat": 82.5,
                    "carbohydrates": 0.8
                },
                // 58
                {
                    "name": {
                        "en": "Bread",
                        "ru": "Хлеб"
                    },
                    "custom": false,
                    "calories": 198,
                    "protein": 6.6,
                    "fat": 1.2,
                    "carbohydrates": 39.6
                },
                // 59
                {
                    "name": {
                        "en": "Spaghetti",
                        "ru": "Спагетти"
                    },
                    "custom": false,
                    "calories": 344,
                    "protein": 10.4,
                    "fat": 1.1,
                    "carbohydrates": 71.5
                },
                // 60
                {
                    "name": {
                        "en": "Pasta carbonara",
                        "ru": "Паста карбонара"
                    },
                    "custom": false,
                    "calories": 346.5,
                    "protein": 16.4,
                    "fat": 18.7,
                    "carbohydrates": 26.8
                },
                // 61
                {
                    "name": {
                        "en": "Сabbage rolls",
                        "ru": "Голубцы"
                    },
                    "custom": false,
                    "calories": 93.2,
                    "protein": 4.7,
                    "fat": 5.2,
                    "carbohydrates": 8
                },
                // 62
                {
                    "name": {
                        "en": "Greek salad",
                        "ru": "Греческий салат"
                    },
                    "custom": false,
                    "calories": 91,
                    "protein": 2.8,
                    "fat": 6.7,
                    "carbohydrates": 4.1
                },
                // 63
                {
                    "name": {
                        "en": "Fish steak",
                        "ru": "Рыбный стейк"
                    },
                    "custom": false,
                    "calories": 155,
                    "protein": 12.8,
                    "fat": 6.0,
                    "carbohydrates": 12.0
                },
                // 64
                {
                    "name": {
                        "en": "Pork steak",
                        "ru": "Стейк из свинины"
                    },
                    "custom": false,
                    "calories": 343,
                    "protein": 13.6,
                    "fat": 31.9,
                    "carbohydrates": 0
                },
                // 65
                {
                    "name": {
                        "en": "Rabbit stewed in cream",
                        "ru": "Кролик тушеный в сметане"
                    },
                    "custom": false,
                    "calories": 122.2,
                    "protein": 12.2,
                    "fat": 7.3,
                    "carbohydrates": 1.9
                },
                // 66
                {
                    "name": {
                        "en": "Potato pancakes",
                        "ru": "Деруны"
                    },
                    "custom": false,
                    "calories": 105.7,
                    "protein": 2.8,
                    "fat": 2.7,
                    "carbohydrates": 18.5
                },
                // 67
                {
                    "name": {
                        "en": "Sausage",
                        "ru": "Сосиски"
                    },
                    "custom": false,
                    "calories": 304,
                    "protein": 9.0,
                    "fat": 29.5,
                    "carbohydrates": 0.7
                },
                // 68
                {
                    "name": {
                        "en": "Omelette",
                        "ru": "Яичница"
                    },
                    "custom": false,
                    "calories": 170.3,
                    "protein": 12.5,
                    "fat": 12.5,
                    "carbohydrates": 0.7
                },
                // 69
                {
                    "name": {
                        "en": "Herring",
                        "ru": "Сельдь"
                    },
                    "custom": false,
                    "calories": 217,
                    "protein": 19.8,
                    "fat": 15.4,
                    "carbohydrates": 0.0
                },
                // 70
                {
                    "name": {
                        "en": "Braised cabbage",
                        "ru": "Тушеная капуста"
                    },
                    "custom": false,
                    "calories": 68.3,
                    "protein": 1.8,
                    "fat": 4.7,
                    "carbohydrates": 4.6
                },
                // 71
                {
                    "name": {
                        "en": "Mashed potatoes",
                        "ru": "Картофельное пюре"
                    },
                    "custom": false,
                    "calories": 106,
                    "protein": 2.5,
                    "fat": 4.2,
                    "carbohydrates": 14.7
                },
                // 72
                {
                    "name": {
                        "en": "Fried potato",
                        "ru": "Картофель жареный"
                    },
                    "custom": false,
                    "calories": 192,
                    "protein": 2.8,
                    "fat": 9.5,
                    "carbohydrates": 23.4
                },
                // 73
                {
                    "name": {
                        "en": "Fishcake",
                        "ru": "Рыбные котлеты"
                    },
                    "custom": false,
                    "calories": 85.5,
                    "protein": 12.1,
                    "fat": 1.1,
                    "carbohydrates": 6.6
                },
                //74
                {
                    "name": {
                        "en": "Pork cutlets",
                        "ru": "Котлеты свиные"
                    },
                    "custom": false,
                    "calories": 233.3,
                    "protein": 12.4,
                    "fat": 18.5,
                    "carbohydrates": 3.5
                },
                // 75
                {
                    "name": {
                        "en": "Chicken liver fried",
                        "ru": "Куриная печень жареная"
                    },
                    "custom": false,
                    "calories": 120.5,
                    "protein": 13.1,
                    "fat": 6.5,
                    "carbohydrates": 2.6
                },
                // 76
                {
                    "name": {
                        "en": "Liver pork roast",
                        "ru": "Печень свиная жареная"
                    },
                    "custom": false,
                    "calories": 218.5,
                    "protein": 18.9,
                    "fat": 12.9,
                    "carbohydrates": 6.6
                },
                // 77
                {
                    "name": {
                        "en": "Julienne with chicken and mushrooms",
                        "ru": "Жульен с курицей и грибами"
                    },
                    "custom": false,
                    "calories": 150.6,
                    "protein": 13,
                    "fat": 9,
                    "carbohydrates": 3.8
                },
                // 78
                {
                    "name": {
                        "en": "Turkey breast",
                        "ru": "Филе индейки"
                    },
                    "custom": false,
                    "calories": 84,
                    "protein": 19.2,
                    "fat": 0.7,
                    "carbohydrates": 0
                },
                // 79
                {
                    "name": {
                        "en": "Turkey stuffing",
                        "ru": "Фарш индейки"
                    },
                    "custom": false,
                    "calories": 161,
                    "protein": 20,
                    "fat": 8,
                    "carbohydrates": 0.5
                },
                // 80
                {
                    "name": {
                        "en": " Belarus bread",
                        "ru": "Хлеб беларусский"
                    },
                    "custom": false,
                    "calories": 226,
                    "protein": 6.3,
                    "fat": 1.2,
                    "carbohydrates": 47.5
                },
                // 81
                {
                    "name": {
                        "en": "Pasta",
                        "ru": "Макароны"
                    },
                    "custom": false,
                    "calories": 371,
                    "protein": 13,
                    "fat": 1.5,
                    "carbohydrates": 75
                },
                // 82
                {
                    "name": {
                        "en": "Sour cream 20%",
                        "ru": "Cметана 20%"
                    },
                    "custom": false,
                    "calories": 206,
                    "protein": 2.8,
                    "fat": 20,
                    "carbohydrates": 3.2
                },
                // 83
                {
                    "name": {
                        "en": "Sour cream 15%",
                        "ru": "Cметана 15%"
                    },
                    "custom": false,
                    "calories": 158,
                    "protein": 2.6,
                    "fat": 15,
                    "carbohydrates": 3.0
                },
                // 84
                {
                    "name": {
                        "en": "Sour cream 10%",
                        "ru": "Cметана 10%"
                    },
                    "custom": false,
                    "calories": 115,
                    "protein": 3.0,
                    "fat": 10,
                    "carbohydrates": 2.9
                },
                // 85
                {
                    "name": {
                        "en": "Sugar",
                        "ru": "Сахар"
                    },
                    "custom": false,
                    "calories": 387,
                    "protein": 0,
                    "fat": 0,
                    "carbohydrates": 100
                },
                // 86
                {
                    "name": {
                        "en": "Peanut",
                        "ru": "Арахис"
                    },
                    "custom": false,
                    "calories": 567,
                    "protein": 26,
                    "fat": 49,
                    "carbohydrates": 16
                },
                // 86
                {
                    "name": {
                        "en": "Сashew",
                        "ru": "Кешью"
                    },
                    "custom": false,
                    "calories": 553,
                    "protein": 18,
                    "fat": 44,
                    "carbohydrates": 30
                },
                // 86
                {
                    "name": {
                        "en": "Almond",
                        "ru": "Миндаль"
                    },
                    "custom": false,
                    "calories": 576,
                    "protein": 21,
                    "fat": 49,
                    "carbohydrates": 22
                },
                // 87
                {
                    "name": {
                        "en": "Walnut",
                        "ru": "Грецкий орех"
                    },
                    "custom": false,
                    "calories": 654,
                    "protein": 15,
                    "fat": 65,
                    "carbohydrates": 14
                },
                // 88
                {
                    "name": {
                        "en": "Hazelnut",
                        "ru": "Фундук"
                    },
                    "custom": false,
                    "calories": 628,
                    "protein": 15,
                    "fat": 61,
                    "carbohydrates": 17
                },
                // 89
                {
                    "name": {
                        "en": "Honey",
                        "ru": "Мед"
                    },
                    "custom": false,
                    "calories": 304,
                    "protein": 0.3,
                    "fat": 0,
                    "carbohydrates": 82
                },
                // 90
                {
                    "name": {
                        "en": "Salmon",
                        "ru": "Семга (Лосось)"
                    },
                    "custom": false,
                    "calories": 304,
                    "protein": 25,
                    "fat": 14,
                    "carbohydrates": 0
                },
                // 91
                {
                    "name": {
                        "en": "Tuna",
                        "ru": "Тунец"
                    },
                    "custom": false,
                    "calories": 101,
                    "protein": 23,
                    "fat": 1,
                    "carbohydrates": 0
                },
                //92
                {
                    "name": {
                        "en": "Water",
                        "ru": "Вода"
                    },
                    "custom": false,
                    "calories": 0,
                    "protein": 0,
                    "fat": 0,
                    "carbohydrates": 0
                },
                //93
                {
                    "name": {
                        "en": "Oats",
                        "ru": "Oвес"
                    },
                    "custom": false,
                    "calories": 342,
                    "protein": 12.3,
                    "fat": 6.1,
                    "carbohydrates": 59.5
                },
                //94
                {
                    "name": {
                        "en": "Avocado",
                        "ru": "Авокадо"
                    },
                    "custom": false,
                    "calories": 160,
                    "protein": 2,
                    "fat": 15,
                    "carbohydrates": 9
                },
                //95
                {
                    "name": {
                        "en": "Orange",
                        "ru": "Апельсин"
                    },
                    "custom": false,
                    "calories": 47,
                    "protein": 0.9,
                    "fat": 0.1,
                    "carbohydrates": 12
                },
                //96
                {
                    "name": {
                        "en": "Watermelon",
                        "ru": "Арбуз"
                    },
                    "custom": false,
                    "calories": 30,
                    "protein": 0.6,
                    "fat": 0.2,
                    "carbohydrates": 8
                },
                //97
                {
                    "name": {
                        "en": "Banana",
                        "ru": "Банан"
                    },
                    "custom": false,
                    "calories": 89,
                    "protein": 1.1,
                    "fat": 0.3,
                    "carbohydrates": 23
                },
                //98
                {
                    "name": {
                        "en": "Cherry",
                        "ru": "Вишня"
                    },
                    "custom": false,
                    "calories": 50,
                    "protein": 1,
                    "fat": 0.3,
                    "carbohydrates": 12
                },
                //99
                {
                    "name": {
                        "en": "Garnet",
                        "ru": "Гранат"
                    },
                    "custom": false,
                    "calories": 83,
                    "protein": 1.7,
                    "fat": 1.2,
                    "carbohydrates": 19
                },
                //100
                {
                    "name": {
                        "en": "Grapefruit",
                        "ru": "Грейпфрут"
                    },
                    "custom": false,
                    "calories": 42,
                    "protein": 0.8,
                    "fat": 0.1,
                    "carbohydrates": 11
                },
                //101
                {
                    "name": {
                        "en": "Pear",
                        "ru": "Груша"
                    },
                    "custom": false,
                    "calories": 57,
                    "protein": 0.4,
                    "fat": 0.1,
                    "carbohydrates": 15
                },
                //102
                {
                    "name": {
                        "en": "Melon",
                        "ru": "Дыня"
                    },
                    "custom": false,
                    "calories": 34,
                    "protein": 0.8,
                    "fat": 0.2,
                    "carbohydrates": 8
                },
                //103
                {
                    "name": {
                        "en": "Kiwi",
                        "ru": "Киви"
                    },
                    "custom": false,
                    "calories": 61,
                    "protein": 1.1,
                    "fat": 0.5,
                    "carbohydrates": 15
                },
                //104
                {
                    "name": {
                        "en": "Lime",
                        "ru": "Лайм"
                    },
                    "custom": false,
                    "calories": 30,
                    "protein": 0.7,
                    "fat": 0.2,
                    "carbohydrates": 11
                },
                //105
                {
                    "name": {
                        "en": "Lemon",
                        "ru": "Лимон"
                    },
                    "custom": false,
                    "calories": 29,
                    "protein": 1.1,
                    "fat": 0.3,
                    "carbohydrates": 9
                },
                //106
                {
                    "name": {
                        "en": "Mango",
                        "ru": "Манго"
                    },
                    "custom": false,
                    "calories": 60,
                    "protein": 0.8,
                    "fat": 0.4,
                    "carbohydrates": 15
                },
                //107
                {
                    "name": {
                        "en": "Mandarin",
                        "ru": "Мандарин"
                    },
                    "custom": false,
                    "calories": 53,
                    "protein": 0.8,
                    "fat": 0.3,
                    "carbohydrates": 13.3
                },
                //108
                {
                    "name": {
                        "en": "Nectarine",
                        "ru": "Нектарин"
                    },
                    "custom": false,
                    "calories": 44,
                    "protein": 1.1,
                    "fat": 0.3,
                    "carbohydrates": 11
                },
                //109
                {
                    "name": {
                        "en": "Peach",
                        "ru": "Персик"
                    },
                    "custom": false,
                    "calories": 39,
                    "protein": 0.9,
                    "fat": 0.3,
                    "carbohydrates": 10
                },
                //110
                {
                    "name": {
                        "en": "Sweetie",
                        "ru": "Свити"
                    },
                    "custom": false,
                    "calories": 58,
                    "protein": 0.7,
                    "fat": 0.2,
                    "carbohydrates": 9
                },
                //111
                {
                    "name": {
                        "en": "Plum",
                        "ru": "Слива"
                    },
                    "custom": false,
                    "calories": 46,
                    "protein": 0.7,
                    "fat": 0.3,
                    "carbohydrates": 11
                },
                //112
                {
                    "name": {
                        "en": "Persimmon",
                        "ru": "Хурма"
                    },
                    "custom": false,
                    "calories": 127,
                    "protein": 0.8,
                    "fat": 0.4,
                    "carbohydrates": 34
                },
                //113
                {
                    "name": {
                        "en": "Cherries",
                        "ru": "Черешня"
                    },
                    "custom": false,
                    "calories": 52,
                    "protein": 1.1,
                    "fat": 0.4,
                    "carbohydrates": 10.6
                },
                //114
                {
                    "name": {
                        "en": "Mulberry",
                        "ru": "Шелковица"
                    },
                    "custom": false,
                    "calories": 43,
                    "protein": 1.4,
                    "fat": 0.4,
                    "carbohydrates": 10
                },
                //115
                {
                    "name": {
                        "en": "Apple",
                        "ru": "Яблоко"
                    },
                    "custom": false,
                    "calories": 52,
                    "protein": 0.3,
                    "fat": 0.2,
                    "carbohydrates": 14
                },
                //116
                {
                    "name": {
                        "en": "Eggplant",
                        "ru": "Баклажан"
                    },
                    "custom": false,
                    "calories": 25,
                    "protein": 1,
                    "fat": 0.2,
                    "carbohydrates": 6
                },
                //117
                {
                    "name": {
                        "en": "Squash",
                        "ru": "Кабачок"
                    },
                    "custom": false,
                    "calories": 17,
                    "protein": 1.2,
                    "fat": 0.3,
                    "carbohydrates": 3.1
                },
                //118
                {
                    "name": {
                        "en": "White cabbage",
                        "ru": "Капуста белокочанная"
                    },
                    "custom": false,
                    "calories": 25,
                    "protein": 1.3,
                    "fat": 0.1,
                    "carbohydrates": 6
                },
                //119
                {
                    "name": {
                        "en": "Broccoli",
                        "ru": "Капуста брокколи"
                    },
                    "custom": false,
                    "calories": 34,
                    "protein": 2.8,
                    "fat": 0.4,
                    "carbohydrates": 7
                },
                //120
                {
                    "name": {
                        "en": "Cabbage",
                        "ru": "Капуста пекинская"
                    },
                    "custom": false,
                    "calories": 12,
                    "protein": 1.1,
                    "fat": 0.2,
                    "carbohydrates": 2.2
                },
                //121
                {
                    "name": {
                        "en": "Cauliflower",
                        "ru": "Капуста цветная"
                    },
                    "custom": false,
                    "calories": 25,
                    "protein": 1.9,
                    "fat": 0.3,
                    "carbohydrates": 5
                },
                //122
                {
                    "name": {
                        "en": "Potatoes",
                        "ru": "Картофель"
                    },
                    "custom": false,
                    "calories": 77,
                    "protein": 2,
                    "fat": 0.1,
                    "carbohydrates": 17
                },
                //123
                {
                    "name": {
                        "en": "Corn boiled",
                        "ru": "Кукуруза варёная"
                    },
                    "custom": false,
                    "calories": 123,
                    "protein": 4.1,
                    "fat": 2.3,
                    "carbohydrates": 22.5
                },
                //124
                {
                    "name": {
                        "en": "Green onion",
                        "ru": "Лук зелёный"
                    },
                    "custom": false,
                    "calories": 19,
                    "protein": 1.3,
                    "fat": 0.0,
                    "carbohydrates": 4.6
                },
                //125
                {
                    "name": {
                        "en": "Bulb onions",
                        "ru": "Лук репчатый"
                    },
                    "custom": false,
                    "calories": 40,
                    "protein": 1.1,
                    "fat": 0.1,
                    "carbohydrates": 9
                },
                //126
                {
                    "name": {
                        "en": "Olives",
                        "ru": "Маслины"
                    },
                    "custom": false,
                    "calories": 166,
                    "protein": 2.2,
                    "fat": 10.5,
                    "carbohydrates": 5.1
                },
                //127
                {
                    "name": {
                        "en": "Carrot",
                        "ru": "Морковь"
                    },
                    "custom": false,
                    "calories": 41,
                    "protein": 0.9,
                    "fat": 0.2,
                    "carbohydrates": 10
                },
                //128
                {
                    "name": {
                        "en": "Cucumber",
                        "ru": "Огурец"
                    },
                    "custom": false,
                    "calories": 16,
                    "protein": 0.7,
                    "fat": 0.1,
                    "carbohydrates": 3.6
                },
                //129
                {
                    "name": {
                        "en": "Olives",
                        "ru": "Оливки"
                    },
                    "custom": false,
                    "calories": 115,
                    "protein": 0.8,
                    "fat": 11,
                    "carbohydrates": 6
                },
                //130
                {
                    "name": {
                        "en": "Bulgarian pepper",
                        "ru": "Болгарский перец"
                    },
                    "custom": false,
                    "calories": 20,
                    "protein": 0.9,
                    "fat": 0.2,
                    "carbohydrates": 4.6
                },
                //131
                {
                    "name": {
                        "en": "Radish",
                        "ru": "Редис"
                    },
                    "custom": false,
                    "calories": 19,
                    "protein": 1.2,
                    "fat": 0.1,
                    "carbohydrates": 3.4
                },
                //132
                {
                    "name": {
                        "en": "Arugula",
                        "ru": "Руккола"
                    },
                    "custom": false,
                    "calories": 25,
                    "protein": 2.6,
                    "fat": 0.7,
                    "carbohydrates": 3.7
                },
                //133
                {
                    "name": {
                        "en": "Salad",
                        "ru": "Салат"
                    },
                    "custom": false,
                    "calories": 15,
                    "protein": 1.4,
                    "fat": 0.2,
                    "carbohydrates": 2.9
                },
                //134
                {
                    "name": {
                        "en": "Beet",
                        "ru": "Свекла"
                    },
                    "custom": false,
                    "calories": 43,
                    "protein": 1.6,
                    "fat": 0.2,
                    "carbohydrates": 10
                },
                //135
                {
                    "name": {
                        "en": "Asparagus",
                        "ru": "Спаржа"
                    },
                    "custom": false,
                    "calories": 20,
                    "protein": 1.9,
                    "fat": 0.1,
                    "carbohydrates": 3.1
                },
                //136
                {
                    "name": {
                        "en": "Tomato",
                        "ru": "Помидор"
                    },
                    "custom": false,
                    "calories": 18,
                    "protein": 0.9,
                    "fat": 0.2,
                    "carbohydrates": 3.9
                },
                //137
                {
                    "name": {
                        "en": "Pumpkin",
                        "ru": "Тыква"
                    },
                    "custom": false,
                    "calories": 28,
                    "protein": 1.3,
                    "fat": 0.3,
                    "carbohydrates": 7.7
                },
                //138
                {
                    "name": {
                        "en": "Spinach",
                        "ru": "Шпинат"
                    },
                    "custom": false,
                    "calories": 23,
                    "protein": 2.9,
                    "fat": 0.4,
                    "carbohydrates": 3.6
                }
            ];
        }
    }
});
System.register("services/sport/sport.service", ['angular2/core', "shared/services/storage/storage.service", "services/user/user.service", 'angular2/router'], function(exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var core_7, storage_service_3, user_service_2, router_2;
    var SportService, sportVendor;
    return {
        setters:[
            function (core_7_1) {
                core_7 = core_7_1;
            },
            function (storage_service_3_1) {
                storage_service_3 = storage_service_3_1;
            },
            function (user_service_2_1) {
                user_service_2 = user_service_2_1;
            },
            function (router_2_1) {
                router_2 = router_2_1;
            }],
        execute: function() {
            SportService = (function () {
                function SportService(_storageService, _userServe, _router) {
                    var _this = this;
                    this._storageService = _storageService;
                    this._userServe = _userServe;
                    this._router = _router;
                    this.sport = sportVendor;
                    this.userSport = [];
                    this.allSport = [];
                    this.userTrain = [];
                    this.stopwatch = {
                        'hours': 0,
                        'minutes': 0,
                        'seconds': 0,
                        'mseconds': 0
                    };
                    this.stopwatchBussy = false;
                    this.storageKeys = {
                        'userSport': 'userSport',
                        'userTrain': 'userTrain'
                    };
                    if (this._storageService.getItem(this.storageKeys.userSport)) {
                        this.userSport = this._storageService.getItem(this.storageKeys.userSport);
                    }
                    if (this._storageService.getItem(this.storageKeys.userTrain)) {
                        this.userTrain = this._storageService.getItem(this.storageKeys.userTrain);
                    }
                    this.prepareSport();
                    document.addEventListener("deviceready", function () {
                        var timeStart, timeEnd, diff, hours, minutes, seconds;
                        cordova.plugins.backgroundMode.onactivate = function () {
                            if (_this.stopwatchBussy) {
                                _this.startTimer();
                                timeStart = new Date();
                                _this.timerBussyToggle();
                            }
                        };
                        cordova.plugins.backgroundMode.ondeactivate = function () {
                            if (_this.stopwatchBussy) {
                                timeEnd = new Date();
                                diff = timeEnd.getTime() - timeStart.getTime();
                                hours = Math.floor(diff / 1000 / 60 / 60);
                                minutes = Math.floor(diff / 1000 / 60 % 60);
                                seconds = Math.floor(diff / 1000 - Math.floor(diff / 1000 / 60) * 60);
                                _this.stopwatch['seconds'] = _this.stopwatch['seconds'] + seconds;
                                _this.stopwatch['minutes'] = _this.stopwatch['minutes'] + minutes;
                                _this.stopwatch['hours'] = _this.stopwatch['hours'] + hours;
                                if (_this.stopwatch['seconds'] >= 60) {
                                    _this.stopwatch['minutes'] = _this.stopwatch['minutes'] + Math.floor(_this.stopwatch['seconds'] / 60);
                                    _this.stopwatch['seconds'] = _this.stopwatch['seconds'] - Math.floor(_this.stopwatch['seconds'] / 60) * 60;
                                }
                                if (_this.stopwatch['minutes'] >= 60) {
                                    _this.stopwatch['hours'] = _this.stopwatch['hours'] + Math.floor(_this.stopwatch['minutes'] / 60);
                                    _this.stopwatch['minutes'] = _this.stopwatch['minutes'] - Math.floor(_this.stopwatch['minutes'] / 60) * 60;
                                }
                                _this.timerBussyToggle();
                                _this.startTimer();
                                _this._router.navigate(['Start']);
                            }
                        };
                    }, false);
                }
                SportService.prototype.startTimer = function () {
                    var _this = this;
                    if (!this.stopwatchBussy) {
                        this.stopwatchVendor = setInterval(function () {
                            _this.stopwatch['mseconds']++;
                            if (_this.stopwatch['mseconds'] >= 100) {
                                _this.stopwatch['seconds']++;
                                _this.stopwatch['mseconds'] = 0;
                            }
                            if (_this.stopwatch['seconds'] >= 60) {
                                _this.stopwatch['minutes']++;
                                _this.stopwatch['seconds'] = 0;
                            }
                            if (_this.stopwatch['minutes'] >= 60) {
                                _this.stopwatch['hours']++;
                                _this.stopwatch['minutes'] = 0;
                            }
                        }, 10);
                    }
                    else {
                        clearInterval(this.stopwatchVendor);
                    }
                    this.timerBussyToggle();
                };
                SportService.prototype.timerReset = function () {
                    for (var key in this.stopwatch) {
                        this.stopwatch[key] = 0;
                    }
                };
                SportService.prototype.getTimer = function () {
                    return this.stopwatch;
                };
                SportService.prototype.getTimerBussy = function () {
                    return this.stopwatchBussy;
                };
                SportService.prototype.timerBussyToggle = function () {
                    this.stopwatchBussy = !this.stopwatchBussy;
                };
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
                    this.userSport.unshift(sport);
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
                SportService.prototype.getUserTrainAll = function () {
                    return this.userTrain;
                };
                SportService.prototype.getUserTrain = function (name) {
                    for (var _i = 0, _a = this.userTrain; _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.name.trim() === name.trim()) {
                            return item;
                        }
                    }
                };
                SportService.prototype.setUserTrain = function (name, sport) {
                    for (var _i = 0, _a = this.userTrain; _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.name.trim() === name.trim()) {
                            var rem = this.userTrain.indexOf(item);
                            this.userTrain.splice(rem, 1);
                        }
                    }
                    this.userTrain.unshift(this.createUserTrain(name, sport));
                    this.refreshUserTrain();
                };
                SportService.prototype.createUserTrain = function (name, sport) {
                    var res = {};
                    res['name'] = name;
                    res['sport'] = sport;
                    return res;
                };
                SportService.prototype.removeTrain = function (name) {
                    for (var _i = 0, _a = this.userTrain; _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.name.trim() === name.trim()) {
                            this.userTrain.splice(this.userTrain.indexOf(item), 1);
                        }
                    }
                    this.refreshUserTrain();
                };
                SportService.prototype.removeSportFromTrain = function (name, index) {
                    for (var _i = 0, _a = this.userTrain; _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.name.trim() === name.trim()) {
                            item['sport'].splice(index, 1);
                        }
                    }
                    this.refreshUserTrain();
                };
                // changeSportInTrain(name: string, index, weight) {
                //     for (let item of this.userTrain) {
                //         if (item.name.trim() === name.trim()) {
                //             item['food'][index]['weight'] = weight
                //         }
                //     }
                //     this.refreshUserTrain()
                // }
                SportService.prototype.refreshUserTrain = function () {
                    this._storageService.setItem(this.storageKeys.userTrain, this.userTrain);
                };
                SportService = __decorate([
                    core_7.Injectable(), 
                    __metadata('design:paramtypes', [storage_service_3.StorageService, user_service_2.UserService, router_2.Router])
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
                        "en": "barbell back squat",
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
                },
                {
                    "name": {
                        "en": "bent-over barbell row",
                        "ru": "тяга штанги к животу"
                    },
                    "custom": false,
                    "calories": 0
                },
                {
                    "name": {
                        "en": "standing t-bar row",
                        "ru": "тяга т-грифа"
                    },
                    "custom": false,
                    "calories": 0
                },
                {
                    "name": {
                        "en": "wide-grip seated cable row",
                        "ru": "тяга к животу в тренажере"
                    },
                    "custom": false,
                    "calories": 0
                },
                {
                    "name": {
                        "en": "pull-down",
                        "ru": "тяга сверху"
                    },
                    "custom": false,
                    "calories": 0
                },
                {
                    "name": {
                        "en": "single-arm dumbbell row",
                        "ru": "тяга гантели в наклоне"
                    },
                    "custom": false,
                    "calories": 0
                },
                {
                    "name": {
                        "en": "pull-over",
                        "ru": "пуловер"
                    },
                    "custom": false,
                    "calories": 0
                },
                {
                    "name": {
                        "en": "barbell curl",
                        "ru": "подъем штанги на бицепс"
                    },
                    "custom": false,
                    "calories": 0
                },
                {
                    "name": {
                        "en": "incline dumbbell curl",
                        "ru": "подъем гантелей на бицепс сидя"
                    },
                    "custom": false,
                    "calories": 0
                },
                {
                    "name": {
                        "en": "standing biceps cable curl",
                        "ru": "тяга снизу на бицепс в тренажере"
                    },
                    "custom": false,
                    "calories": 0
                },
                {
                    "name": {
                        "en": "reverse grip bent-over rows",
                        "ru": "тяга штанги к животу обратным хватом"
                    },
                    "custom": false,
                    "calories": 0
                },
                {
                    "name": {
                        "en": "concentration curls",
                        "ru": "концентрированные сгибания рук с гантелей на бицепс"
                    },
                    "custom": false,
                    "calories": 0
                },
                {
                    "name": {
                        "en": "flat-bench dumbbell press",
                        "ru": "жим гантелей лежа"
                    },
                    "custom": false,
                    "calories": 0
                },
                {
                    "name": {
                        "en": "low-incline barbell bench press",
                        "ru": "жим лежа на наклонной скамье (положительной)"
                    },
                    "custom": false,
                    "calories": 0
                },
                {
                    "name": {
                        "en": "cable crossover",
                        "ru": "кроссовер"
                    },
                    "custom": false,
                    "calories": 0
                },
                {
                    "name": {
                        "en": "seated machine chest press",
                        "ru": "жим в хаммере"
                    },
                    "custom": false,
                    "calories": 0
                },
                {
                    "name": {
                        "en": "incline dumbbell press",
                        "ru": "жим гантелей на наклонной скамье (положительной)"
                    },
                    "custom": false,
                    "calories": 0
                },
                {
                    "name": {
                        "en": "bar dip",
                        "ru": "брусья"
                    },
                    "custom": false,
                    "calories": 0
                },
                {
                    "name": {
                        "en": "pec-deck machine",
                        "ru": "бабочка на грудь"
                    },
                    "custom": false,
                    "calories": 0
                },
                {
                    "name": {
                        "en": "flat dumbbell fly",
                        "ru": "разводка гантелей на грудь"
                    },
                    "custom": false,
                    "calories": 0
                },
                {
                    "name": {
                        "en": "front squats",
                        "ru": "фронтальный присед"
                    },
                    "custom": false,
                    "calories": 0
                },
                {
                    "name": {
                        "en": "squats with dumbbells",
                        "ru": "присед с гантелями"
                    },
                    "custom": false,
                    "calories": 0
                },
                {
                    "name": {
                        "en": "dumbbell lunges ",
                        "ru": "выпады с гантелями"
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
System.register("shared/directives/swipe-holder/swipe-holder.directive", ['angular2/core'], function(exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var core_9;
    var SwipeHoldertDirective;
    return {
        setters:[
            function (core_9_1) {
                core_9 = core_9_1;
            }],
        execute: function() {
            SwipeHoldertDirective = (function () {
                function SwipeHoldertDirective() {
                    this.fmSwipe = new core_9.EventEmitter();
                    this.fmSwipeRight = new core_9.EventEmitter();
                    this.fmSwipeLeft = new core_9.EventEmitter();
                    this.fmSwipeDown = new core_9.EventEmitter();
                    this.fmSwipeUp = new core_9.EventEmitter();
                }
                SwipeHoldertDirective.prototype.start = function (evt) {
                    this.xStart = evt.touches[0].clientX;
                    this.yStart = evt.touches[0].clientY;
                };
                SwipeHoldertDirective.prototype.move = function (evt) {
                    if (evt.type === 'touchend') {
                        return this.fmSwipe.emit(['swipeEnd', this.xNew, this.yNew, evt]);
                    }
                    if (!this.xStart || !this.yStart) {
                        return;
                    }
                    this.xNew = evt.touches[0].clientX;
                    this.yNew = evt.touches[0].clientY;
                    var xDiff = this.xStart - this.xNew;
                    var yDiff = this.yStart - this.yNew;
                    if (Math.abs(xDiff) > Math.abs(yDiff)) {
                        if (xDiff > 0) {
                            this.fmSwipe.emit(['leftSwipe', this.xNew, this.yNew, evt]);
                            this.fmSwipeLeft.emit(['leftSwipe', this.xNew, evt]);
                        }
                        else {
                            this.fmSwipe.emit(['rightSwipe', this.xNew, this.yNew, evt]);
                            this.fmSwipeRight.emit(['rightSwipe', this.xNew, evt]);
                        }
                    }
                    else {
                        if (yDiff > 0) {
                            this.fmSwipe.emit(['upSwipe', this.xNew, this.yNew, evt]);
                            this.fmSwipeUp.emit(['upSwipe', this.yNew, evt]);
                        }
                        else {
                            this.fmSwipe.emit(['downSwipe', this.xNew, this.yNew, evt]);
                            this.fmSwipeDown.emit(['downSwipe', this.yNew, evt]);
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
                    core_9.Output(), 
                    __metadata('design:type', Object)
                ], SwipeHoldertDirective.prototype, "fmSwipe", void 0);
                __decorate([
                    core_9.Output(), 
                    __metadata('design:type', Object)
                ], SwipeHoldertDirective.prototype, "fmSwipeRight", void 0);
                __decorate([
                    core_9.Output(), 
                    __metadata('design:type', Object)
                ], SwipeHoldertDirective.prototype, "fmSwipeLeft", void 0);
                __decorate([
                    core_9.Output(), 
                    __metadata('design:type', Object)
                ], SwipeHoldertDirective.prototype, "fmSwipeDown", void 0);
                __decorate([
                    core_9.Output(), 
                    __metadata('design:type', Object)
                ], SwipeHoldertDirective.prototype, "fmSwipeUp", void 0);
                SwipeHoldertDirective = __decorate([
                    core_9.Directive({
                        selector: '[fmSwipe]',
                        host: {
                            '(touchstart)': 'start($event)',
                            '(touchmove)': 'move($event)',
                            '(touchend)': 'move($event);end($event)'
                        }
                    }), 
                    __metadata('design:paramtypes', [])
                ], SwipeHoldertDirective);
                return SwipeHoldertDirective;
            }());
            exports_10("SwipeHoldertDirective", SwipeHoldertDirective);
        }
    }
});
System.register("shared/directives/swipe-delete-side/swipe-delete-side.directive", ['angular2/core'], function(exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    var core_10;
    var SwipeDeleteSideDirective;
    return {
        setters:[
            function (core_10_1) {
                core_10 = core_10_1;
            }],
        execute: function() {
            SwipeDeleteSideDirective = (function () {
                function SwipeDeleteSideDirective(_el) {
                    this._el = _el;
                    this.fmSwipeDeleteSide = new core_10.EventEmitter();
                    this.shadowOpacityTarget = 0.3;
                    this.lastTouch = { x: 0, y: 0 };
                    this.pusher = 0;
                    this.pusherTarget = 100;
                    this._el.nativeElement.style.opacity = 1;
                }
                SwipeDeleteSideDirective.prototype.move = function (evt) {
                    if (evt.type === 'touchmove') {
                        if (evt.touches[0].clientX - 2 > this.lastTouch.x) {
                            evt.preventDefault();
                            this._el.nativeElement.style.transform = 'translate3d(' + this.pusher + 'px,0,0)';
                            this._el.nativeElement.style['-webkit-transform'] = 'translate3d(' + this.pusher + 'px,0,0)';
                            if (this._el.nativeElement.style.opacity > this.shadowOpacityTarget) {
                                this._el.nativeElement.style.opacity = this._el.nativeElement.style.opacity - 0.02;
                            }
                            this.pusher = this.pusher + 6;
                        }
                        else if (evt.touches[0].clientX + 2 < this.lastTouch.x) {
                            evt.preventDefault();
                            this._el.nativeElement.style.transform = 'translate3d(' + this.pusher + 'px,0,0)';
                            this._el.nativeElement.style['-webkit-transform'] = 'translate3d(' + this.pusher + 'px,0,0)';
                            if (this._el.nativeElement.style.opacity > this.shadowOpacityTarget) {
                                this._el.nativeElement.style.opacity = this._el.nativeElement.style.opacity - 0.02;
                            }
                            this.pusher = this.pusher - 6;
                        }
                        this.lastTouch.x = evt.touches[0].clientX;
                    }
                    if (evt.type === 'touchend') {
                        if (this.pusher > this.pusherTarget || this.pusher < -this.pusherTarget) {
                            this.fmSwipeDeleteSide.emit('close');
                        }
                        else {
                            this.pusher = 0;
                            this._el.nativeElement.style.transform = 'translate3d(' + this.pusher + 'px,0,0)';
                            this._el.nativeElement.style['-webkit-transform'] = 'translate3d(' + this.pusher + 'px,0,0)';
                            this._el.nativeElement.style.opacity = 1;
                        }
                        this.lastTouch.x = 0;
                    }
                };
                __decorate([
                    core_10.Output(), 
                    __metadata('design:type', Object)
                ], SwipeDeleteSideDirective.prototype, "fmSwipeDeleteSide", void 0);
                SwipeDeleteSideDirective = __decorate([
                    core_10.Directive({
                        selector: '[fmSwipeDeleteSide]',
                        host: {
                            '(touchmove)': 'move($event)',
                            '(touchend)': 'move($event)'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_10.ElementRef])
                ], SwipeDeleteSideDirective);
                return SwipeDeleteSideDirective;
            }());
            exports_11("SwipeDeleteSideDirective", SwipeDeleteSideDirective);
        }
    }
});
System.register("services/calenadar/calendar.service", ['angular2/core', "shared/services/storage/storage.service"], function(exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    var core_11, storage_service_4;
    var CalendarService;
    return {
        setters:[
            function (core_11_1) {
                core_11 = core_11_1;
            },
            function (storage_service_4_1) {
                storage_service_4 = storage_service_4_1;
            }],
        execute: function() {
            CalendarService = (function () {
                function CalendarService(_storageService) {
                    this._storageService = _storageService;
                    this.calendar = [];
                    this.currentYear = new Date().getFullYear();
                    this.currentMonth = new Date().getMonth();
                    this.currentDate = new Date();
                    this.startYear = 2016;
                    this.lastYear = 2020;
                    this.storageKeys = {
                        'calendar': 'calendar'
                    };
                    this.saveCalendar();
                    this.currentDate.setHours(0, 0, 0, 0);
                }
                CalendarService.prototype.getFirstYear = function () {
                    return this.startYear;
                };
                CalendarService.prototype.getLastYear = function () {
                    return this.lastYear;
                };
                CalendarService.prototype.createCalendar = function () {
                    var startYear = this.startYear;
                    var lastYear = this.lastYear;
                    var days = (lastYear - startYear) * 366;
                    for (var i = 1; i < days; i++) {
                        this.addDay(new Date(startYear, 0, i));
                    }
                };
                CalendarService.prototype.saveCalendar = function () {
                    if (this._storageService.getItem(this.storageKeys.calendar)) {
                        this.calendar = this._storageService.getItem(this.storageKeys.calendar);
                        for (var _i = 0, _a = this.calendar; _i < _a.length; _i++) {
                            var day = _a[_i];
                            day['date'] = new Date(day['date']);
                        }
                    }
                    else {
                        this.createCalendar();
                        this._storageService.setItem(this.storageKeys.calendar, this.calendar);
                        this.calendar = this._storageService.getItem(this.storageKeys.calendar);
                        for (var _b = 0, _c = this.calendar; _b < _c.length; _b++) {
                            var day = _c[_b];
                            day['date'] = new Date(day['date']);
                        }
                    }
                };
                CalendarService.prototype.refreshCalendar = function () {
                    this._storageService.setItem(this.storageKeys.calendar, this.calendar);
                };
                CalendarService.prototype.getCalendar = function () {
                    return this.calendar;
                };
                CalendarService.prototype.getCurrentDate = function () {
                    return this.currentDate;
                };
                CalendarService.prototype.setCurrentDate = function (date) {
                    this.currentDate = date;
                };
                CalendarService.prototype.addDay = function (date) {
                    if (date === void 0) { date = new Date(); }
                    var daySample = { 'date': date, 'food': [], 'sport': [], 'rest': [] };
                    date.setHours(0, 0, 0, 0);
                    for (var _i = 0, _a = this.calendar; _i < _a.length; _i++) {
                        var day = _a[_i];
                        if (day['date'].getTime() === date.getTime()) {
                            return;
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
                CalendarService.prototype.getYear = function (year) {
                    for (var _i = 0, _a = this.calendar; _i < _a.length; _i++) {
                        var day = _a[_i];
                        if (day['date'].getFullYear() === year) {
                        }
                    }
                };
                CalendarService.prototype.swithToToday = function () {
                    this.currentYear = new Date().getFullYear();
                    this.currentMonth = new Date().getMonth();
                    this.currentDate = new Date();
                    this.currentDate.setHours(0, 0, 0, 0);
                };
                CalendarService.prototype.switchYearPlus = function () {
                    if (this.currentYear < this.getLastYear() - 1) {
                        this.currentYear++;
                    }
                };
                CalendarService.prototype.switchYearMinus = function () {
                    if (this.currentYear > this.getFirstYear()) {
                        this.currentYear--;
                    }
                };
                CalendarService.prototype.getMonth = function (year, month) {
                    if (year === void 0) { year = this.currentYear; }
                    if (month === void 0) { month = this.currentMonth; }
                    var res = [];
                    for (var _i = 0, _a = this.calendar; _i < _a.length; _i++) {
                        var day = _a[_i];
                        if (day['date'].getFullYear() === year && day['date'].getMonth() === month) {
                            res.push(day);
                        }
                    }
                    return res;
                };
                CalendarService.prototype.switchwMonthPlus = function () {
                    if (this.currentMonth < 11) {
                        this.currentMonth++;
                    }
                };
                CalendarService.prototype.switchMonthMinus = function () {
                    if (this.currentMonth > 0) {
                        this.currentMonth--;
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
                };
                //can be use 4 menu
                CalendarService.prototype.setDailyFood = function (food, date) {
                    if (date === void 0) { date = this.currentDate; }
                    if (isNaN(food['weight'])) {
                        food['weight'] = 0;
                    }
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
                };
                CalendarService.prototype.setDailySport = function (sport, date) {
                    if (date === void 0) { date = this.currentDate; }
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
                    core_11.Injectable(), 
                    __metadata('design:paramtypes', [storage_service_4.StorageService])
                ], CalendarService);
                return CalendarService;
            }());
            exports_12("CalendarService", CalendarService);
        }
    }
});
System.register("components/plus-bar/plus-bar.component", ['angular2/core', "services/food/food.service", "services/sport/sport.service", "shared/pipes/simple-search/simple-search.pipe", "shared/services/translate/translate.service", "services/user/user.service", "shared/directives/swipe-holder/swipe-holder.directive", "shared/directives/swipe-delete-side/swipe-delete-side.directive", "services/calenadar/calendar.service"], function(exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    var core_12, food_service_1, sport_service_1, simple_search_pipe_1, translate_service_3, user_service_3, swipe_holder_directive_1, swipe_delete_side_directive_1, calendar_service_1;
    var PlusComponent;
    return {
        setters:[
            function (core_12_1) {
                core_12 = core_12_1;
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
            },
            function (user_service_3_1) {
                user_service_3 = user_service_3_1;
            },
            function (swipe_holder_directive_1_1) {
                swipe_holder_directive_1 = swipe_holder_directive_1_1;
            },
            function (swipe_delete_side_directive_1_1) {
                swipe_delete_side_directive_1 = swipe_delete_side_directive_1_1;
            },
            function (calendar_service_1_1) {
                calendar_service_1 = calendar_service_1_1;
            }],
        execute: function() {
            PlusComponent = (function () {
                function PlusComponent(_foodServe, _sportServe, _translateService, _userServe, _calendarServe) {
                    this._foodServe = _foodServe;
                    this._sportServe = _sportServe;
                    this._translateService = _translateService;
                    this._userServe = _userServe;
                    this._calendarServe = _calendarServe;
                    this.isOpen = false;
                    this.isOpenChange = new core_12.EventEmitter();
                    this.language = 'en';
                    this.listOptions = false;
                    this.createFood = false;
                    this.createMenu = false;
                    this.pasteMenu = false;
                    this.createExercise = false;
                    this.createTrain = false;
                    this.pasteTrain = false;
                    this.model = {};
                    this.modelSport = {};
                    this.pickedFoodMenu = {};
                    this.pickedSportTrain = {};
                    this.allMenus = [];
                    this.allTrains = [];
                    this.foodMenuContainer = [];
                    this.sportTrainContainer = [];
                    this.modelMenu = {};
                    this.modelTrain = {};
                    this.correctFood = false;
                    this.correctSport = false;
                }
                PlusComponent.prototype.ngOnInit = function () {
                    this.language = this._userServe.getLanguage();
                    this.customFood = this._foodServe.getUserFood();
                    this.refreshModel();
                    this.foodContainer = this._foodServe.getAllFood();
                    this.allMenus = this._foodServe.getUserMenuAll();
                    this.allTrains = this._sportServe.getUserTrainAll();
                    this.sportContainer = this._sportServe.getAllSport();
                    this.customSport = this._sportServe.getUserSport();
                };
                PlusComponent.prototype.checkForm = function (value) {
                    if (value) {
                        return true;
                    }
                    return false;
                };
                //train
                PlusComponent.prototype.searchTrain = function (name) {
                    if (name) {
                        this.sportTrainContainer = [];
                        if (this._sportServe.getUserTrain(name)) {
                            this.sportTrainContainer = this._sportServe.getUserTrain(name)['sport'];
                        }
                    }
                };
                PlusComponent.prototype.pickSportTrainInput = function (name) {
                    for (var _i = 0, _a = this.sportContainer; _i < _a.length; _i++) {
                        var obj = _a[_i];
                        if (obj['name'][this.language] === name) {
                            return this.pickSportTrain(obj);
                        }
                        else {
                            this.correctSport = false;
                        }
                    }
                };
                PlusComponent.prototype.pickSportTrain = function (sport) {
                    var _this = this;
                    this.pickedSportTrain = Object.assign({}, sport);
                    setTimeout(function () { return _this.modelTrain['name'] = sport.name[_this.language]; }, 0);
                    this.correctSport = true;
                };
                PlusComponent.prototype.onSubmitTrain = function () {
                    this.pickedSportTrain['picked'] = false;
                    this.pickedSportTrain['setsToggle'] = true;
                    this.pickedSportTrain['sets'] = [{ 'picked': false }];
                    this.sportTrainContainer.unshift(this.pickedSportTrain);
                    this._sportServe.setUserTrain(this.modelTrain['trainName'], this.sportTrainContainer);
                    this.pickedSportTrain = {};
                    for (var item in this.modelTrain) {
                        if (!(item === 'trainName')) {
                            this.modelTrain[item] = undefined;
                        }
                    }
                    this.searchTrain(this.modelTrain['trainName']);
                    this.correctSport = false;
                };
                PlusComponent.prototype.removeSportTrain = function (trainName, item) {
                    this._sportServe.removeSportFromTrain(trainName, item);
                };
                PlusComponent.prototype.removeTrain = function (name) {
                    this._sportServe.removeTrain(name);
                };
                PlusComponent.prototype.pasteTrainToDay = function (item) {
                    for (var _i = 0, _a = item['sport']; _i < _a.length; _i++) {
                        var variable = _a[_i];
                        this._calendarServe.setDailySport(variable);
                    }
                    this.toggle();
                };
                PlusComponent.prototype.viewTrainDetail = function (item) {
                    this.pasteTrainToggle();
                    this.createTrainToggle();
                    this.searchTrain(item['name']);
                    this.modelTrain['trainName'] = item['name'];
                };
                //4menu
                PlusComponent.prototype.searchMenu = function (name) {
                    if (name) {
                        this.foodMenuContainer = [];
                        if (this._foodServe.getUserMenu(name)) {
                            this.foodMenuContainer = this._foodServe.getUserMenu(name)['food'];
                        }
                    }
                };
                PlusComponent.prototype.pickFoodMenuInput = function (name) {
                    for (var _i = 0, _a = this.foodContainer; _i < _a.length; _i++) {
                        var obj = _a[_i];
                        if (obj['name'][this.language] === name) {
                            return this.pickFoodMenu(obj);
                        }
                        else {
                            this.correctFood = false;
                        }
                    }
                };
                PlusComponent.prototype.pickFoodMenu = function (food) {
                    var _this = this;
                    this.pickedFoodMenu = Object.assign({}, food);
                    setTimeout(function () { return _this.modelMenu['name'] = food.name[_this.language]; }, 0);
                    this.correctFood = true;
                };
                PlusComponent.prototype.onSubmitMenu = function () {
                    this.pickedFoodMenu['weight'] = this.modelMenu['weight'];
                    this.pickedFoodMenu['picked'] = false;
                    this.foodMenuContainer.unshift(this.pickedFoodMenu);
                    this._foodServe.setUserMenu(this.modelMenu['menuName'], this.foodMenuContainer);
                    this.pickedFoodMenu = {};
                    for (var item in this.modelMenu) {
                        if (!(item === 'menuName')) {
                            this.modelMenu[item] = undefined;
                        }
                    }
                    this.searchMenu(this.modelMenu['menuName']);
                    this.correctFood = false;
                };
                PlusComponent.prototype.changeFoodWeight = function (menuName, item, weight) {
                    this._foodServe.changeFoodInMenu(menuName, item, weight);
                };
                PlusComponent.prototype.removeMenu = function (name) {
                    this._foodServe.removeMenu(name);
                };
                PlusComponent.prototype.removeFoodMenu = function (menuName, item) {
                    this._foodServe.removeFoodFromMenu(menuName, item);
                };
                PlusComponent.prototype.pasteMenuToDay = function (item) {
                    for (var _i = 0, _a = item['food']; _i < _a.length; _i++) {
                        var variable = _a[_i];
                        this._calendarServe.setDailyFood(variable);
                    }
                    this.toggle();
                };
                PlusComponent.prototype.viewMenuDetail = function (item) {
                    this.pasteMenuToggle();
                    this.createMenuToggle();
                    this.searchMenu(item['name']);
                    this.modelMenu['menuName'] = item['name'];
                };
                //4 food
                PlusComponent.prototype.onSubmit = function (food) {
                    if (food.value.trim()) {
                        var name_1 = food.value.trim();
                        food = { 'value': {} };
                        food.value['name'] = {};
                        for (var key in this._translateService.getSupportLanguages()) {
                            food.value['name'][key] = name_1;
                        }
                        food.value['custom'] = true;
                        food.value['calories'] = this.model['calories'];
                        food.value['protein'] = this.model['protein'];
                        food.value['fat'] = this.model['fat'];
                        food.value['carbohydrates'] = this.model['carbohydrates'];
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
                PlusComponent.prototype.removeFood = function (food) {
                    this._foodServe.removeUserFood(food);
                };
                //4 sport
                PlusComponent.prototype.onSubmitSport = function (sport) {
                    if (sport.value.trim()) {
                        var name_2 = sport.value.trim();
                        sport = { 'value': {} };
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
                PlusComponent.prototype.removeSport = function (sport) {
                    this._sportServe.removeUserSport(sport);
                };
                PlusComponent.prototype.toggle = function () {
                    this.isOpen = !this.isOpen;
                    this.listOptions = true;
                    this.createFood = false;
                    this.createMenu = false;
                    this.pasteMenu = false;
                    this.createExercise = false;
                    this.createTrain = false;
                    this.pasteTrain = false;
                    this.isOpenChange.emit(this.isOpen);
                };
                PlusComponent.prototype.createFoodToggle = function () {
                    this.createFood = !this.createFood;
                    this.listOptions = !this.listOptions;
                };
                PlusComponent.prototype.createMenuToggle = function () {
                    this.createMenu = !this.createMenu;
                    this.listOptions = !this.listOptions;
                };
                PlusComponent.prototype.pasteMenuToggle = function () {
                    this.pasteMenu = !this.pasteMenu;
                    this.listOptions = !this.listOptions;
                };
                PlusComponent.prototype.createExerciseToggle = function () {
                    this.createExercise = !this.createExercise;
                    this.listOptions = !this.listOptions;
                };
                PlusComponent.prototype.createTrainToggle = function () {
                    this.createTrain = !this.createTrain;
                    this.listOptions = !this.listOptions;
                };
                PlusComponent.prototype.pasteTrainToggle = function () {
                    this.pasteTrain = !this.pasteTrain;
                    this.listOptions = !this.listOptions;
                };
                __decorate([
                    core_12.Input(), 
                    __metadata('design:type', Boolean)
                ], PlusComponent.prototype, "isOpen", void 0);
                __decorate([
                    core_12.Input(), 
                    __metadata('design:type', String)
                ], PlusComponent.prototype, "iAm", void 0);
                __decorate([
                    core_12.Output(), 
                    __metadata('design:type', Object)
                ], PlusComponent.prototype, "isOpenChange", void 0);
                PlusComponent = __decorate([
                    core_12.Component({
                        selector: 'op-plus',
                        directives: [swipe_holder_directive_1.SwipeHoldertDirective, swipe_delete_side_directive_1.SwipeDeleteSideDirective],
                        providers: [],
                        pipes: [translate_service_3.TranslatePipe, simple_search_pipe_1.SimpleSearch],
                        styles: ["\n\n.container {\n  position: fixed;\n  top: 16vw;\n  overflow: hidden;\n  width:100vw;\n  height: 50vw;\n  z-index: 10;\n}\n.closeMe {\n  position: fixed;\n  left: 0;\n  top: 0;\n  background-color: #3f414a;\n  opacity: 0.95;\n  width: 100vw;\n  height: 100vh;\n  z-index: 9;\n}\n.plusBar {\n  position: absolute;\n  right: 5vw;\n  top: 1vw;\n  width: 14vw;\n  height: 14vw;\n  background: url('./src/img/newPlus.png') no-repeat center center;\n  background-size: cover;\n  box-sizing: border-box;\n  border: 2px solid #ff9d2d;\n  border-radius: 50%;\n  overflow: hidden;\n  z-index: 10;\n  transition: 0.3s;\n}\n.plusBarAnime {\n  transition: transform 0.5s;\n  transform: rotate(135deg);\n  -ms-transform: rotate(135deg);\n  -webkit-transform: rotate(135deg);\n}\n.list {\n  width: 90vw;\n  overflow-y: scroll;\n}\n.listItem {\n  float:left;\n  margin-bottom: 2vw;\n  min-height: 10vw;\n  width: 80vw;\n  line-height: 8vw;\n  box-sizing: border-box;\n  background-color: #3f414a;\n  color: #ff9d2d;\n  font-size: 6vw;\n  text-align: center;\n  border-radius: 7px;\n  border: 2px solid #ff9d2d;\n  overflow-x: hidden;\n}\n.foodListMove{\n  position: fixed;\n      width: 100vw;\n      padding-left: 10vw;\n      top: 101vw;\n      overflow-y: scroll;\n      overflow-x: hidden;\n      bottom: 1px;\n}\n.listItemName {\n  float: left;\n      margin-top: 2vw;\n  padding-left: 10vw;\n    width: 80vw;\n  height: 10vw;\n  text-align: center;\n  font-size: 6vw;\n  color: #ff9d2d;\n  font-weight: bold;\n  margin-bottom: 2vw;\n}\n.food_form {\n  position: relative;\n  margin: 5vw;\n  height: 10vw;\n}\n.food_inputFoodName {\n  font-size: 6.5vw;\n  width: 40vw;\n  height: 10vw;\n  float: left;\n  margin-left: 5vw;\n  margin-bottom: 2vw;\n  color: #ff9d2d;\n  line-height: 10vw;\n  font-weight: bold;\n}\n.food_inputFood {\n  position: relative;\n  float: left;\n  height: 10vw;\n  width: 40vw;\n  background-color: rgba(49, 51, 61, 0.3);\n  box-sizing: border-box;\n  border: 2px solid #0C1017;\n  border-radius: 7px;\n  font-size: 7vw;\n  color: #ff9d2d;\n  margin-bottom: 2vw;\n}\n.food_inputFoodNameNutritions {\n  font-size: 6vw;\n  width: 40vw;\n  height: 9vw;\n  float: left;\n  margin-left: 5vw;\n  margin-bottom: 2vw;\n  color: #ff9d2d;\n  line-height: 8vw;\n}\n.food_inputFoodNutritions {\n  float: left;\n  height: 9vw;\n  width: 20vw;\n  background-color: rgba(49, 51, 61, 0.3);\n  box-sizing: border-box;\n  border: 2px solid #0C1017;\n  border-radius: 7px;\n  font-size: 6vw;\n  color: #ff9d2d;\n  margin-bottom: 2vw;\n  line-height: 8vw;\n}\n.food_inputButtonName {\n  margin-top: 2vw;\n  font-size: 6.5vw;\n}\n.food_inputButton_off {\n  position: relative;\n  float: left;\n  height: 10vw;\n  width: 10vw;\n  background: url('./src/img/check-off.png') no-repeat center center;\n  background-size: cover;\n  box-sizing: border-box;\n  border: 2px solid #0C1017;\n  border-radius: 7px;\n}\n.food_inputButton_on {\n  position: relative;\n  float: left;\n  height: 10vw;\n  width: 10vw;\n  background: url('./src/img/check-on.png') no-repeat center center;\n  background-size: cover;\n  box-sizing: border-box;\n  border: 2px solid #0C1017;\n  border-radius: 7px;\n}\n.sport_inputButton_off {\n  position: relative;\n  float: left;\n  height: 10vw;\n  width: 10vw;\n  background: url('./src/img/check-off.png') no-repeat center center;\n  background-size: cover;\n  box-sizing: border-box;\n  border: 2px solid #0C1017;\n  border-radius: 7px;\n}\n\n.sport_inputButton_on {\n  position: relative;\n  float: left;\n  height: 10vw;\n  width: 10vw;\n  background: url('./src/img/check-on.png') no-repeat center center;\n  background-size: cover;\n  box-sizing: border-box;\n  border: 2px solid #0C1017;\n  border-radius: 7px;\n}\n.sport_inputSportName {\n  font-size: 6.5vw;\n  width: 40vw;\n  height: 12vw;\n  float: left;\n  margin-left: 5vw;\n  margin-bottom: 2vw;\n  color: #ff9d2d;\n  line-height: 10vw;\n  font-weight: bold;\n}\n.sport_inputSport{\n  position: relative;\n  float: left;\n  height: 10vw;\n  width: 40vw;\n  background-color: rgba(49, 51, 61, 0.3);\n  box-sizing: border-box;\n  border: 2px solid #0C1017;\n  border-radius: 7px;\n  font-size: 7vw;\n  color: #ff9d2d;\n  margin-bottom: 2vw;\n}\n.sportListMove {\n  position: fixed;;;\n  width: 100vw;\n  top: 58vw;\n  bottom: 1px;\n  padding-left: 10vw;\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n\n.createExercise{\n  width: 100%;\n  height: 100%\n}\n.plusBar_menuButtons {\n  position: absolute;\n  height: 50vw;\n  width: 90vw;\n  right: 5vw;\n  color: #ff9d2d;\n  font-size: 5.5vw;\n  overflow: hidden;\n}\n.plusBar_listItem {\n  width: 14vw;\n  height: 14vw;\n  position: absolute;\n  right: 0;\n  overflow: hidden;\n  box-sizing: border-box;\n  border: 2px solid #ff9d2d;\n  border-radius: 50%;\n}\n.plusBar_createFoodButton {\n  background: url('./src/img/addfood.png') no-repeat center center;\n  background-size: cover;\n\n}\n.plusBar_createMenuButton {\n  background: url('./src/img/createMenuButton.png') no-repeat center center;\n  background-size: cover;\n}\n.plusBar_pasteMenuButton {\n  background: url('./src/img/pasteMenuButton.png') no-repeat center center;\n  background-size: cover;\n}\n.plusBar_createExercise {\n  background: url('./src/img/exercise.png') no-repeat center center;\n  background-size: cover;\n}\n.plusBar_createTraining{\n  background: url('./src/img/trainingPlan.png') no-repeat center center;\n  background-size: cover;\n}\n.plusBar_listName {\n  position: absolute;\n  right: 16vw;\n  text-align: right;\n  height: 15vw;\n  width: 90vw;\n  line-height: 15vw;\n  margin-bottom: 1vw;\n\n}\n.plusBar_list1Btn{\n  position: absolute;\n  right:0;\n}\n.plusBar_list2Btn{\n  position: absolute;\n  right:0;\n  top: 30%;\n  animation:  mainList2Btn 300ms linear;\n}\n.plusBar_list3Btn{\n  position: absolute;\n  top: 60%;\n  right:0;\n  animation:  mainList3Btn 300ms linear;\n}\n@keyframes mainList2Btn {\n    0%   {top:0px;}\n    100% {top:30%;}\n}\n@keyframes mainList3Btn {\n    0%   {top:0;}\n    100% {top:60%;}\n}\n.containerFull {\n  height: 165vw;\n  width: 100vw;\n}\n.listItemContainer{\n  position:relative;\n  min-height: 13vw;\n  width:80vw;\n  overflow:hidden;\n}\n\n/*\u0422\u0443\u0442 \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0442\u0441\u044F \u043A\u043B\u0430\u0441\u0441\u044B \u0434\u043B\u044F \u043A\u043D\u043E\u043F\u043A\u0438 Create Menu*/\n\n.create_inputMenuName {\n  position: relative;\nheight: 10vw;\nmargin-left: 5vw;\nwidth: 80vw;\npadding-left: 1vw;\nbackground-color: rgba(49, 51, 61, 0.3);\nbox-sizing: border-box;\nborder: 2px solid #0C1017;\nborder-radius: 7px;\nfont-size: 7vw;\ncolor: #ff9d2d;\nmargin-bottom: 2vw;\n}\n.create_inputFood {\n  position: absolute;\n  height: 10vw;\n  width: 52vw;\n  background-color: rgba(49, 51, 61, 0.3);\n  box-sizing: border-box;\n  border: 2px solid #0C1017;\n  border-radius: 7px;\n  font-size: 6vw;\n  color: #ff9d2d;\n  top: 12vw;\n  left: 5vw;\n}\n.create_inputWeight {\n  position: absolute;\n  height: 10vw;\n  width: 16vw;\n  left: 58vw;\n  top: 12vw;\n  background-color: rgba(49, 51, 61, 0.3);\n  box-sizing: border-box;\n  border: 2px solid #0C1017;\n  border-radius: 7px;\n  font-size: 6vw;\n  color: #ff9d2d;\n}\n.create_inputButton_off {\n  position: absolute;\n  right: 5vw;\n  height: 10vw;\n  width: 10vw;\n  background: url('./src/img/check-off.png') no-repeat center center;\n  background-size: cover;\n  box-sizing: border-box;\n  color: #0d0e15;\n  border: 2px solid #0C1017;\n  border-radius: 7px;\n  top: 12vw;\n}\n.create_inputButton_on {\n  position: absolute;\n  right: 5vw;\n  height: 10vw;\n  width: 10vw;\n  background: url('./src/img/check-on.png') no-repeat center center;\n  background-size: cover;\n  box-sizing: border-box;\n  color: #0d0e15;\n  border: 2px solid #0C1017;\n  border-radius: 7px;\n  top: 12vw;\n}\n.create_serchContainer {\n  position: absolute;\n  background-color: #0C1017;\n  border-bottom: 2px solid #0C1017;\n  box-sizing: border-box;\n  width: 52vw;\n  max-height: 30vh;\n  padding-left: 1vw;\n  padding-top: 1vw;\n  left: 5vw;\n  top: 22vw;\n  overflow-y: scroll;\n  border-radius: 7px;\n  z-index: 3;\n}\n.create_searchListItem {\n  float: left;\n  margin-bottom: 1vw;\n  min-height: 12vw;\n  width: 50vw;\n  line-height: 12vw;\n  box-sizing: border-box;\n  background-color: #3f414a;\n  color: #ff9d2d;\n  font-size: 6vw;\n  text-align: center;\n  border-radius: 7px;\n}\n.create_list {\n  position: fixed;\n      top: 61vw;\n      padding-left: 10vw;\n      width: 95vw;\n      bottom: 1px;\n      overflow-y: scroll;\n      overflow-x: hidden;\n}\n.create_listItem {\n  float: left;\n  margin-right: 1vw;\n  margin-top: 2vw;\n  min-height: 10vw;\n  width: 65vw;\n  box-sizing: border-box;\n  background-color: #3f414a;\n  color: #ff9d2d;\n  font-size: 6vw;\n  text-align: center;\n  border-radius: 7px;\n  line-height: 10vw;\n  border: 2px solid #ff9d2d;\n}\n.create_listWeight {\n  float: left;\n  margin-top: 2vw;\n  margin-right: 2vw;\n  height: 11vw;\n  width: 14vw;\n  line-height: 10vw;\n  background-color: #3f414a;\n  box-sizing: border-box;\n  color: #ff9d2d;\n  font-size: 6vw;\n  border-radius: 7px;\n  text-align: center;\n  border: 2px solid #ff9d2d;\n}\n.create_form {\n  position: relative;\n  margin: 5vw;\n  height: 20vw;\n}\n.createListMove {\n  position: fixed;\n  width: 100vw;\n  padding-left: 10vw;\n  top: 59vw;\n  bottom: 1px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n.create_listItemName {\n  width: 80vw;\n  float: left;\n  height: 14vw;\n  text-align: center;\n  font-size: 6vw;\n  color: #ff9d2d;\n  font-weight: bold;\n  margin-left: 10vw;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.pasteListMove {\n  position: relative;\n  width: 100vw;\n  padding-left: 10vw;\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n.createTrain_inputSport {\n  position: relative;\nfloat: left;\nheight: 10vw;\nwidth: 68vw;\npadding-left: 1vw;\nbackground-color: rgba(49, 51, 61, 0.3);\nbox-sizing: border-box;\nborder: 2px solid #0C1017;\nborder-radius: 7px;\nfont-size: 7vw;\ncolor: #ff9d2d;\nmargin-left: 5vw;\nmargin-bottom: 2vw;\n}\n.createExercise_listItemName {\n  position: absolute;\n  top: 33vw;\n  padding-left: 10vw;\n  width: 80vw;\n  height: 10vw;\n  text-align: center;\n  font-size: 6vw;\n  color: #ff9d2d;\n  font-weight: bold;\n  margin-bottom: 2vw;\n}\n.createTrain_serchContainer {\n  position: absolute;\n  background-color: #0C1017;\n  border-bottom: 2px solid #0C1017;\n  box-sizing: border-box;\n  width: 68vw;\n  max-height: 30vh;\n  padding-left: 1vw;\n  padding-top: 1vw;\n  left: 5vw;\n  top: 22vw;\n  overflow-y: scroll;\n  border-radius: 7px;\n  z-index: 3;\n}\n.createTrain_searchListItem {\n  float: left;\n  margin-bottom: 1vw;\n  min-height: 12vw;\n  width: 66vw;\n  line-height: 12vw;\n  box-sizing: border-box;\n  background-color: #3f414a;\n  color: #ff9d2d;\n  font-size: 6vw;\n  text-align: center;\n  border-radius: 7px;\n  overflow: hidden;\n}\n.createTrain_listItemName {\n  position: absolute;\n    padding-left: 10vw;\n    width: 80vw;\n    height: 14vw;\n    text-align: center;\n    font-size: 6vw;\n    color: #ff9d2d;\n    font-weight: bold;\n    margin-bottom: 2vw;\n    overflow-x: hidden;\n    overflow-y: scroll;\n}\n.createTrain_listItem{\n  float: left;\n    margin-right: 1vw;\n    margin-top: 2vw;\n    min-height: 10vw;\n    width: 80vw;\n    box-sizing: border-box;\n    background-color: #3f414a;\n    color: #ff9d2d;\n    font-size: 6vw;\n    text-align: center;\n    border-radius: 7px;\n    line-height: 10vw;\n    border: 2px solid #ff9d2d;\n}\n.anomaliya {\n  font-size: 6vw;\nwidth: 40vw;\nheight: 9vw;\nmargin-left: 5vw;\ncolor: #ff9d2d;\nline-height: 8vw;\n}\n.paste_list {\n  position: fixed;\n top: 27vw;\n width: 100vw;\n bottom: 1px;\n overflow-x: hidden;\n overflow-y: scroll;\n}\n.paste_listItem {\n  float: left;\n  min-height: 10vw;\n  margin-left: 10vw;\nmargin-bottom: 2vw;\nwidth: 57vw;\nline-height: 8vw;\nbox-sizing: border-box;\nbackground-color: #3f414a;\ncolor: #ff9d2d;\nfont-size: 6vw;\ntext-align: center;\nborder-radius: 7px;\nborder: 2px solid #ff9d2d;\noverflow-x: hidden;\n}\n.paste_vievIcon {\n    width: 10vw;\n    height: 10vw;\n    float: left;\n    overflow: hidden;\n    margin-left: 2vw;\n    background: url('./src/img/wrench.png') no-repeat center center;\n    background-size: cover;\n    box-sizing: border-box;\n    border: 2px solid #ff9d2d;\n    border-radius: 50%;\n}\n.paste_goIcon {\n  width: 10vw;\n  height: 10vw;\n  float: left;\n  overflow: hidden;\n  margin-left: 2vw;\n  border: 2px solid #ff9d2d;\n  border-radius: 50%;\n  box-sizing: border-box;\n  color: #ff9d2d;\n  text-align: center;\n  line-height: 9vw;\n}\n.toRight {\n  float: right;\n}\n    "],
                        template: "\n\n<!-- \u041F\u043B\u044E\u0441\u0431\u0430\u0440 \u0432 Food -->\n<div class=\"plusBar\" [ngClass]=\"{plusBarAnime: isOpen}\" (click)=\"toggle()\"></div>\n<div *ngIf=\"isOpen\" class=\"closeMe\" (click)=\"toggle()\"></div>\n\n<div class=\"container\" *ngIf=\"isOpen && (iAm === 'food')\" [ngClass]=\"{containerFull: createFood || createMenu || pasteMenu}\">\n  <div *ngIf=\"listOptions\" class=\"plusBar_menuButtons\">\n\n    <div class=\"plusBar_list1Btn\" (click)=\"createFoodToggle()\">\n      <div class=\"plusBar_listItem plusBar_createFoodButton\"></div>\n      <div class=\"plusBar_listName\">\n        {{'create.food' | translate}}\n      </div>\n    </div>\n\n    <div class=\"plusBar_list2Btn\" (click)=\"createMenuToggle()\">\n      <div class=\"plusBar_listItem plusBar_createMenuButton\"></div>\n      <div class=\"plusBar_listName\">\n        {{'create.menu' | translate}}\n      </div>\n    </div>\n\n    <div class=\"plusBar_list3Btn\" (click)=\"pasteMenuToggle()\">\n      <div class=\" plusBar_listItem plusBar_pasteMenuButton\"></div>\n      <div class=\"plusBar_listName\">\n        {{'choose.menu' | translate}}\n      </div>\n    </div>\n  </div>\n\n  <!-- \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0431\u043B\u044E\u0434\u043E -->\n  <div *ngIf=\"createFood\">\n    <form class=\"food_form\">\n      <div class=\"food_inputFoodName\">{{'meals.name' | translate}}</div>\n      <input class=\"food_inputFood\" required [(ngModel)]=\"model.name\" #name>\n\n      <div class=\"food_inputFoodNameNutritions\">{{'calories' | translate}}</div>\n      <input class=\"food_inputFoodNutritions\" type=\"number\" min=\"0\" required [(ngModel)]=\"model.calories\">\n\n      <div class=\"food_inputFoodNameNutritions\">{{'protein' | translate}}</div>\n      <input class=\"food_inputFoodNutritions\" type=\"number\" min=\"0\" required [(ngModel)]=\"model.protein\">\n\n      <div class=\"food_inputFoodNameNutritions\">{{'fat' | translate}}</div>\n      <input class=\"food_inputFoodNutritions\" type=\"number\" min=\"0\" required [(ngModel)]=\"model.fat\">\n\n      <div class=\"food_inputFoodNameNutritions\">{{'carbohydrates' | translate}}</div>\n      <input class=\"food_inputFoodNutritions\" type=\"number\" min=\"0\" required [(ngModel)]=\"model.carbohydrates\">\n\n      <div class=\"food_inputFoodNameNutritions food_inputButtonName \">{{'done' | translate}}</div>\n      <button type=\"submit\" [ngClass]=\"{food_inputButton_off: !checkForm(name.value), food_inputButton_on: checkForm(name.value) }\" [disabled]=\"!checkForm(name.value)\" (click)=\"onSubmit(name)\"></button>\n    </form>\n    <div class=\"listItemName\">{{'added.meals' | translate}}</div>\n    <div class=\"list foodListMove\">\n      <div *ngFor=\"#item of customFood\" class=\"listItemContainer\" (fmSwipeDeleteSide)=\"removeFood(item)\">\n        <div class=\"listItem\">{{item.name[language]}} </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u043E\u0435 \u043C\u0435\u043D\u044E -->\n  <div *ngIf=\"createMenu\">\n\n    <form class=\"create_form\" (ngSubmit)=\"onSubmitMenu()\">\n\n      <input class=\"create_inputMenuName\" required [placeholder]=\"('menuName'|translate) + '...'\" [(ngModel)]=\"modelMenu.menuName\" #menuName (input)=\"searchMenu(menuName.value)\">\n      <label for=\"foodName\"></label>\n      <input class=\"create_inputFood\" required [placeholder]=\"('search'|translate) + '...'\" [(ngModel)]=\"modelMenu.name\" #name (input)=\"pickFoodMenuInput(modelMenu.name)\">\n\n      <label for=\"foodWeight\"></label>\n      <input class=\"create_inputWeight\" type=\"number\" [min]=\"1\" [placeholder]=\"('weight'|translate) + '...'\" required [(ngModel)]=\"modelMenu.weight\" #weight>\n\n      <button #subBtn type=\"submit\" [ngClass]=\"{create_inputButton_off: subBtn['disabled'], create_inputButton_on: !subBtn['disabled']}\" [disabled]=\"!correctFood || !weight.value || !menuName.value\"></button>\n      <div *ngIf=\"name.value && !correctFood\" class=\"create_serchContainer\">\n        <div class=\"create_searchListItem\" *ngFor=\"#item of foodContainer  | simpleSearch :'name':language : name.value; #i = index;\" (click)=\"pickFoodMenu(item);\">\n          {{item?.name[language]}}\n        </div>\n      </div>\n    </form>\n    <div *ngIf=\"createMenu\" class=\"create_listItemName\">\n      {{modelMenu.menuName}}\n    </div>\n    <div class=\"create_list\">\n      <div *ngFor=\"#item of foodMenuContainer; #i = index\" (fmSwipeDeleteSide)=\"removeFoodMenu(modelMenu.menuName,i)\">\n        <div class=\"create_listItem\">{{item?.name[language]}} </div>\n        <input class=\"create_listWeight\" type=\"number\" min=\"0\" required [(ngModel)]=\"item.weight\" (blur)=\"changeFoodWeight(modelMenu.menuName, i, item.weight)\">\n      </div>\n    </div>\n  </div>\n\n  <!-- \u0421\u043F\u0438\u0441\u043E\u043A \u0441\u043E\u0437\u0434\u0430\u043D\u043D\u044B\u0445 \u043C\u0435\u043D\u044E -->\n  <div *ngIf=\"pasteMenu\">\n\n  <div class=\"listItemName\">{{'choose.menu' | translate}}</div>\n    <div class=\"paste_list\">\n    <div *ngFor=\"#item of allMenus\" (fmSwipeDeleteSide)=\"removeMenu(item['name'])\">\n      <!-- <div class=\"paste_listItemName\"> -->\n        <div class=\"paste_listItem\">{{item['name']}}</div>\n        <span class=\"paste_vievIcon\" (click)=\"viewMenuDetail(item)\"></span>\n        <span class=\"paste_goIcon\" (click)=\"pasteMenuToDay(item)\">GO</span>\n      <!-- </div> -->\n    </div>\n  </div>\n\n    </div>\n</div>\n\n<!-- ******************** -->\n<!-- \u0442\u0443\u0442 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u0441\u043F\u043E\u0440\u0442 -->\n<!-- ******************** -->\n\n\n<!-- \u041F\u043B\u044E\u0441\u0431\u0430\u0440 \u0432 Sport -->\n<div class=\"container\" *ngIf=\"isOpen && (iAm === 'sport')\" [ngClass]=\"{containerFull: createExercise || createTrain || pasteTrain}\">\n  <div *ngIf=\"listOptions\" class=\"plusBar_menuButtons\">\n\n    <div class=\"plusBar_list1Btn\" (click)=\"createExerciseToggle()\">\n      <div class=\"plusBar_listItem plusBar_createExercise \"></div>\n      <div class=\"plusBar_listName\">\n        {{'create.exercise' | translate}}\n      </div>\n    </div>\n\n    <div class=\"plusBar_list2Btn\" (click)=\"createTrainToggle()\">\n      <div class=\"plusBar_listItem plusBar_createTraining\"></div>\n      <div class=\"plusBar_listName \">\n        {{'create.training.plan' | translate}}\n      </div>\n    </div>\n\n    <div class=\"plusBar_list3Btn\" (click)=\"pasteTrainToggle()\">\n      <div class=\"plusBar_listItem plusBar_pasteMenuButton\"></div>\n      <div class=\"plusBar_listName\">\n        paste train\n      </div>\n    </div>\n  </div>\n\n  <!-- \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0443\u043F\u0440\u0430\u0436\u043D\u0435\u043D\u0438\u0435 -->\n  <div *ngIf=\"createExercise\">\n\n    <form class=\"food_form\">\n      <label class=\"sport_inputSportName\" for=\"name\">{{'name' | translate}}:</label>\n      <input class=\"sport_inputSport\" required [(ngModel)]=\"modelSport.name\" #name>\n      <div class=\"anomaliya food_inputButtonName \">{{'done' | translate}}</div>\n      <button type=\"submit\" [ngClass]=\"{food_inputButton_off: !checkForm(name.value), food_inputButton_on: checkForm(name.value) }\" [disabled]=\"!checkForm(name.value)\" (touchend)=\"onSubmitSport(name)\"></button>\n    </form>\n\n<div class=\"createExercise_listItemName\">{{'added.exercise' | translate}}</div>\n    <div class=\"sportListMove\">\n            <div *ngFor=\"#item of customSport\" class=\"listItemContainer\" (fmSwipeDeleteSide)=\"removeSport(item)\">\n        <div class=\"listItem\">{{item.name.ru}} </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0443 -->\n  <div *ngIf=\"createTrain\">\n\n    <form class=\"create_form\" (ngSubmit)=\"onSubmitTrain()\">\n\n      <input class=\"create_inputMenuName\" required [placeholder]=\"('trainingName'|translate) + '...'\" [(ngModel)]=\"modelTrain.trainName\" #trainName (input)=\"searchTrain(trainName.value)\">\n\n\n      <label for=\"sportName\"></label>\n      <input class=\"createTrain_inputSport\" required [placeholder]=\"('search'|translate) + '...'\" [(ngModel)]=\"modelTrain.name\" #name (input)=\"pickSportTrainInput(name.value)\">\n\n      <button #subBtn type=\"submit\" [ngClass]=\"{create_inputButton_off: subBtn['disabled'], create_inputButton_on: !subBtn['disabled']}\" [disabled]=\"!correctSport || !trainName.value\"></button>\n      <div *ngIf=\"name.value && !correctSport\" class=\"createTrain_serchContainer\">\n        <div class=\"createTrain_searchListItem\" *ngFor=\"#item of sportContainer  | simpleSearch :'name':language : name.value; #i = index;\" (click)=\"pickSportTrain(item)\">\n          {{item?.name[language]}}\n        </div>\n      </div>\n    </form>\n\n\n  <div *ngIf=\"createTrain\" class=\"createTrain_listItemName\">  {{modelTrain.trainName}}</div>\n    <div class=\"list createListMove\">\n      <div *ngFor=\"#item of sportTrainContainer; #i = index\" (fmSwipeDeleteSide)=\"removeSportTrain(modelTrain.trainName,i)\">\n        <div class=\"createTrain_listItem\">{{item?.name[language]}} </div>\n      </div>\n    </div>\n\n  </div>\n\n\n  <!-- \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0443-->\n  <div *ngIf=\"pasteTrain\">\n  <div class=\"listItemName\">{{'choose.training' | translate}}</div>\n    <div class=\"paste_list\">\n        <div *ngFor=\"#item of allTrains\" (fmSwipeDeleteSide)=\"removeTrain(item['name'])\">\n      <div class=\"paste_listItemName\">\n        <div class=\"paste_listItem\">{{item['name']}} </div>\n        <span class=\"paste_vievIcon\" (click)=\"viewTrainDetail(item)\"></span>\n         <span class=\"paste_goIcon\" (click)=\"pasteTrainToDay(item)\">GO</span>\n      </div>\n    </div>\n    </div>\n  </div>\n</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [food_service_1.FoodService, sport_service_1.SportService, translate_service_3.TranslateService, user_service_3.UserService, calendar_service_1.CalendarService])
                ], PlusComponent);
                return PlusComponent;
            }());
            exports_13("PlusComponent", PlusComponent);
        }
    }
});
System.register("components/food-page/food.component", ['angular2/core', "shared/services/translate/translate.service", "shared/components/progress-bar/progress-bar.component", "components/plus-bar/plus-bar.component", "services/food/food.service", "shared/pipes/simple-search/simple-search.pipe", "services/calenadar/calendar.service", "services/user/user.service", "shared/directives/swipe-delete-side/swipe-delete-side.directive"], function(exports_14, context_14) {
    "use strict";
    var __moduleName = context_14 && context_14.id;
    var core_13, translate_service_4, progress_bar_component_1, plus_bar_component_1, food_service_2, simple_search_pipe_2, calendar_service_2, user_service_4, swipe_delete_side_directive_2;
    var FoodComponent;
    return {
        setters:[
            function (core_13_1) {
                core_13 = core_13_1;
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
            function (calendar_service_2_1) {
                calendar_service_2 = calendar_service_2_1;
            },
            function (user_service_4_1) {
                user_service_4 = user_service_4_1;
            },
            function (swipe_delete_side_directive_2_1) {
                swipe_delete_side_directive_2 = swipe_delete_side_directive_2_1;
            }],
        execute: function() {
            FoodComponent = (function () {
                function FoodComponent(_foodServe, _calendarService, _userServe) {
                    this._foodServe = _foodServe;
                    this._calendarService = _calendarService;
                    this._userServe = _userServe;
                    this.model = {};
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
                    this.currentDate = this._calendarService.getCurrentDate();
                    this.language = this._userServe.getLanguage();
                    this.userSets = this._userServe.getUserSets()['foodSets'];
                    this.foodContainer = this._foodServe.getAllFood();
                    this.pickedFoodContainer = this._calendarService.getDailyFood(this.currentDate);
                    //4 calculate progress-bar
                    for (var _i = 0, _a = this.pickedFoodContainer; _i < _a.length; _i++) {
                        var food = _a[_i];
                        this.calculateFood(food);
                    }
                };
                FoodComponent.prototype.onSubmit = function (food) {
                    var _this = this;
                    this.pickedFood['weight'] = food.value.weight;
                    this.pickedFood['picked'] = true;
                    this._calendarService.setDailyFood(this.pickedFood, this.currentDate);
                    this.calculateFood(this.pickedFood);
                    this.pickedFood = {};
                    setTimeout(function () {
                        _this.model = {};
                    }, 0);
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
                    setTimeout(function () {
                        if (isNaN(food['weight'])) {
                            food['weight'] = 0;
                        }
                        _this._calendarService.changeDailyFood(index, _this.currentDate, food);
                        _this.calculateFoodRefresh();
                        for (var _i = 0, _a = _this.pickedFoodContainer; _i < _a.length; _i++) {
                            var variable = _a[_i];
                            _this.calculateFood(variable);
                        }
                    }, 500);
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
                    core_13.Component({
                        selector: 'op-food',
                        directives: [progress_bar_component_1.ProgressBar, plus_bar_component_1.PlusComponent, swipe_delete_side_directive_2.SwipeDeleteSideDirective],
                        providers: [],
                        pipes: [translate_service_4.TranslatePipe, simple_search_pipe_2.SimpleSearch],
                        styles: ["\n\n  .food_form {\n    position: relative;\n    margin: 5vw;\n    height: 10vw;\n  }\n  input {\n    padding-left: 1vw;\n  }\n  .food_inputFood {\n    position: absolute;\n    height: 12vw;\n    width: 60vw;\n    background-color: rgba(49, 51, 61, 0.3);\n    box-sizing: border-box;\n    border: 2px solid #0C1017;\n    border-radius: 7px;\n    font-size: 6vw;\n    color: #D0D9D9;\n  }\n  .food_inputWeight {\n    position: absolute;\n    height: 12vw;\n    width: 16vw;\n    left: 61vw;\n    background-color: rgba(49, 51, 61, 0.3);\n    box-sizing: border-box;\n    border: 2px solid #0C1017;\n    border-radius: 7px;\n    font-size: 6vw;\n    color: #D0D9D9;\n  }\n  .food_inputButton_off {\n    position: absolute;\n    right: 0;\n    height: 12vw;\n    width: 12vw;\n    background: url('./src/img/check-off.png') no-repeat center center;\n    background-size: cover;\n    box-sizing: border-box;\n    border: 2px solid #ff9d2d;\n    border-radius: 50%;\n    color: #0d0e15;\n    border: 2px solid #0C1017;\n    border-radius: 7px;\n  }\n  .food_inputButton_on {\n    position: absolute;\n    right: 0;\n    height: 11vw;\n    width: 12vw;\n    border: 2px solid #ff9d2d;\n    border-radius: 50%;\n    background: url('./src/img/check-on.png') no-repeat center center;\n    background-size: cover;\n    box-sizing: border-box;\n    color: #0d0e15;\n    border: 2px solid #0C1017;\n    border-radius: 7px;\n  }\n  .food_serchContainer {\n    position: absolute;\n    background-color: #0C1017;\n    border-bottom: 2px solid #0C1017;\n    box-sizing: border-box;\n    width: 60vw;\n    max-height: 30vh;\n    padding-left: 1vw;\n    padding-top: 1vw;\n    left: 0;\n    top: 11vw;\n    overflow-y: scroll;\n    border-radius: 7px;\n    z-index: 3;\n  }\n  .food_searchListItem {\n    float:left;\n    margin-bottom: 1vw;\n    min-height: 12vw;\n    width: 58vw;\n    line-height: 12vw;\n    box-sizing: border-box;\n    background-color: #3f414a;\n    color: #ff9d2d;\n    font-size: 6vw;\n    text-align: center;\n    border-radius: 7px;\n  }\n  .food_list {\n    position: absolute;;\n    top:71vw;\n    padding-left: 5vw;\n    width: 95vw;\n    bottom:1px;\n    overflow-y: scroll;\n    overflow-x: hidden;\n  }\n  .food_listItem {\n    float:left;\n    margin-right: 1vw;\n    margin-top: 2vw;\n    min-height: 12vw;\n    width: 60vw;\n    box-sizing: border-box;\n    background-color: #3f414a;\n    color: #ff9d2d;\n    font-size: 6vw;\n    text-align: center;\n    border-radius: 7px;\n    line-height: 12vw;\n\n  }\n  .food_listWeight {\n    float:left;\n    margin-top: 2vw;\n    margin-right: 2vw;\n    height: 12vw;\n    width: 14vw;\n    line-height: 12vw;\n    background-color: #3f414a;\n    box-sizing: border-box;\n    color: #ff9d2d;\n    font-size: 6vw;\n    text-align: center;\n    border-radius: 7px;\n    border: none;\n    text-align: center;\n  }\n\n  .food_listButton_on {\n    float:left;\n    margin-top: 2vw;\n    height: 12vw;\n    width: 12vw;\n    background: url('./src/img/check-on.png') no-repeat center center;\n    background-color: #3f414a;\n    background-size: cover;\n    box-sizing: border-box;\n    color: #0d0e15;\n    border-radius: 7px;\n  }\n  .food_listButton_off {\n    float:left;\n    margin-top: 2vw;\n    height: 12vw;\n    width: 12vw;\n    background: url('./src/img/check-off.png') no-repeat center center;\n    background-color: #3f414a;\n    background-size: cover;\n    box-sizing: border-box;\n    color: #0d0e15;\n    border-radius: 7px;\n  }\n  .food_listItemContainer{\n    position:relative;\n    min-height: 14vw;\n    width:90vw;\n    overflow: hidden;\n  }\n    "],
                        template: "\n<op-plus [iAm]=\"'food'\" [(isOpen)]=\"plusIsOpen\"></op-plus>\n<fm-progress-bar [goSettings]=\"true\" [name]=\"'calories'|translate\" [mainLine]=\"totalFood.calories.full / userSets.calories.full * 100\" [secondLine]=\"totalFood.calories.maybe / userSets.calories.full * 100\" [minNumber]=\"totalFood.calories.full\" [maxNumber]=\"userSets.calories.full\"></fm-progress-bar>\n<fm-progress-bar [goSettings]=\"true\" [name]=\"'protein'|translate\" [mainLine]=\"totalFood.protein.full / userSets.protein.full * 100\" [secondLine]=\"totalFood.protein.maybe / userSets.protein.full * 100\" [minNumber]=\"totalFood.protein.full\" [maxNumber]=\"userSets.protein.full\"></fm-progress-bar>\n<fm-progress-bar [goSettings]=\"true\" [name]=\"'fat'|translate\" [mainLine]=\"totalFood.fat.full / userSets.fat.full * 100\" [secondLine]=\"totalFood.fat.maybe / userSets.fat.full * 100\" [minNumber]=\"totalFood.fat.full\" [maxNumber]=\"userSets.fat.full\"></fm-progress-bar>\n<fm-progress-bar [goSettings]=\"true\" [name]=\"'carbohydrates'|translate\" [mainLine]=\"totalFood.carbohydrates.full / userSets.carbohydrates.full * 100\" [secondLine]=\"totalFood.carbohydrates.maybe / userSets.carbohydrates.full * 100\" [minNumber]=\"totalFood.carbohydrates.full\" [maxNumber]=\"userSets.carbohydrates.full\"></fm-progress-bar>\n\n<form class=\"food_form\" (ngSubmit)=\"onSubmit(foodForm)\" #foodForm=\"ngForm\">\n\n  <label for=\"foodName\"></label>\n  <input class=\"food_inputFood\" required [placeholder]=\"('search'|translate)\" [(ngModel)]=\"model.name\" ngControl=\"name\" #name=\"ngForm\" (input)=\"pickFoodInput(model.name)\">\n\n  <label for=\"foodWeight\"></label>\n  <input type=\"number\" [min]=\"1\" [placeholder]=\"'0 ' +('weight'|translate) \" class=\"food_inputWeight\" required [(ngModel)]=\"model.weight\" ngControl=\"weight\" #weight=\"ngForm\">\n\n  <button #subBtn type=\"submit\" [ngClass]=\"{food_inputButton_off: subBtn['disabled'], food_inputButton_on: !subBtn['disabled']}\"  [disabled]=\"!foodForm.form.valid || !correctFood\"></button>\n\n  <div *ngIf=\"(name.valid && !correctFood)\" class=\"food_serchContainer\">\n    <div class=\"food_searchListItem\"*ngFor=\"#item of foodContainer  | simpleSearch :'name':language : name.value; #i = index;\" (click)=\"pickFood(item);\">\n      {{item?.name[language]}}\n    </div>\n  </div>\n</form>\n\n<div class=\"food_list\">\n<div class=\"food_listItemContainer\" *ngFor=\"#item of pickedFoodContainer; #i = index\" (fmSwipeDeleteSide)=\"removeFood(i, item)\" >\n\n    <div class=\"food_listItem\" >\n      {{item?.name[language]}}\n    </div>\n    <input class=\"food_listWeight\" type=\"number\" min=\"0\" required [(ngModel)]=\"item.weight\" (blur)=\"changeFoodWeight(i, item)\">\n\n    <div [ngClass]=\"{food_listButton_off: !item.picked, food_listButton_on: item.picked}\" (touchend)=\"checkBoxToggle(i, item)\"></div>\n  </div>\n\n</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [food_service_2.FoodService, calendar_service_2.CalendarService, user_service_4.UserService])
                ], FoodComponent);
                return FoodComponent;
            }());
            exports_14("FoodComponent", FoodComponent);
        }
    }
});
System.register("components/sport-page/sport.component", ['angular2/core', "shared/services/translate/translate.service", "shared/components/progress-bar/progress-bar.component", "components/plus-bar/plus-bar.component", "shared/pipes/simple-search/simple-search.pipe", "services/calenadar/calendar.service", "services/user/user.service", "services/sport/sport.service", "shared/directives/swipe-delete-side/swipe-delete-side.directive"], function(exports_15, context_15) {
    "use strict";
    var __moduleName = context_15 && context_15.id;
    var core_14, translate_service_5, progress_bar_component_2, plus_bar_component_2, simple_search_pipe_3, calendar_service_3, user_service_5, sport_service_2, swipe_delete_side_directive_3;
    var SportComponent;
    return {
        setters:[
            function (core_14_1) {
                core_14 = core_14_1;
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
            function (calendar_service_3_1) {
                calendar_service_3 = calendar_service_3_1;
            },
            function (user_service_5_1) {
                user_service_5 = user_service_5_1;
            },
            function (sport_service_2_1) {
                sport_service_2 = sport_service_2_1;
            },
            function (swipe_delete_side_directive_3_1) {
                swipe_delete_side_directive_3 = swipe_delete_side_directive_3_1;
            }],
        execute: function() {
            SportComponent = (function () {
                function SportComponent(_sportServe, _calendarService, _userServe) {
                    this._sportServe = _sportServe;
                    this._calendarService = _calendarService;
                    this._userServe = _userServe;
                    this.model = {};
                    this.language = 'en';
                    this.pickedSport = {};
                    this.pickedSportContainer = [];
                    this.correctSport = false;
                    this.plusIsOpen = false;
                    this.totalSport = {
                        'done': 0,
                        'procentDone': 0
                    };
                    this.stopwatch = this._sportServe.getTimer();
                    this.stopwatchBussy = this._sportServe.getTimerBussy();
                    console.log(this.stopwatchBussy);
                    if (this.stopwatchBussy) {
                        console.log("12");
                        this.stopwatchToggle();
                        this.stopwatchToggle();
                    }
                }
                SportComponent.prototype.ngOnInit = function () {
                    this.currentDate = this._calendarService.getCurrentDate();
                    this.language = this._userServe.getLanguage();
                    this.userSets = this._userServe.getUserSets()['sport'];
                    this.sportContainer = this._sportServe.getAllSport();
                    this.pickedSportContainer = this._calendarService.getDailySport(this.currentDate);
                    for (var _i = 0, _a = this.pickedSportContainer; _i < _a.length; _i++) {
                        var variable = _a[_i];
                        this.calculateTotalSportInit(variable);
                    }
                };
                SportComponent.prototype.onSubmit = function (sport) {
                    var _this = this;
                    this.pickedSport['picked'] = false;
                    this.pickedSport['setsToggle'] = true;
                    this.pickedSport['sets'] = [{ 'picked': false }];
                    this._calendarService.setDailySport(this.pickedSport, this.currentDate);
                    this.calculateSportRefresh();
                    for (var _i = 0, _a = this.pickedSportContainer; _i < _a.length; _i++) {
                        var variable = _a[_i];
                        this.calculateTotalSportInit(variable);
                    }
                    this.pickedSport = {};
                    setTimeout(function () {
                        _this.model = {};
                    }, 0);
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
                SportComponent.prototype.addSet = function (sport, index) {
                    sport['sets'].push({ 'picked': false });
                    sport['picked'] = false;
                    for (var _i = 0, _a = this.pickedSportContainer; _i < _a.length; _i++) {
                        var variable = _a[_i];
                        this.calculateTotalSportInit(variable);
                    }
                    this.calculateSportRefreshAndCalculate();
                    this._calendarService.changeDailySport(index, this.currentDate, sport);
                };
                SportComponent.prototype.removeSet = function (index, sport, setIndex) {
                    sport['sets'].splice(setIndex, 1);
                    if (sport['sets'].every(function (el) { return el['picked']; })) {
                        sport['picked'] = true;
                    }
                    this.calculateSportRefreshAndCalculate();
                    this._calendarService.changeDailySport(index, this.currentDate, sport);
                };
                SportComponent.prototype.openSets = function (sport, index) {
                    sport['setsToggle'] = !sport['setsToggle'];
                    this._calendarService.changeDailySport(index, this.currentDate, sport);
                };
                SportComponent.prototype.pickSet = function (sport, index, setIndex) {
                    sport['sets'][setIndex]['picked'] = !sport['sets'][setIndex]['picked'];
                    if (sport['sets'].every(function (el) { return el['picked']; })) {
                        sport['picked'] = true;
                    }
                    else {
                        sport['picked'] = false;
                    }
                    this.calculateSportRefreshAndCalculate();
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
                    }
                };
                SportComponent.prototype.calculateSportRefreshAndCalculate = function () {
                    this.calculateSportRefresh();
                    for (var _i = 0, _a = this.pickedSportContainer; _i < _a.length; _i++) {
                        var variable = _a[_i];
                        this.calculateTotalSportInit(variable);
                    }
                };
                SportComponent.prototype.changeSport = function (index, sport) {
                    this._calendarService.changeDailySport(index, this.currentDate, sport);
                };
                //timeromer
                SportComponent.prototype.stopwatchToggle = function () {
                    this._sportServe.startTimer();
                    this.stopwatchBussy = this._sportServe.getTimerBussy();
                };
                SportComponent.prototype.stopwatchReset = function () {
                    this._sportServe.timerReset();
                    this.stopwatchBussy = this._sportServe.getTimerBussy();
                };
                SportComponent.prototype.stopwatchBussyToggle = function () {
                    this._sportServe.timerBussyToggle();
                    this.stopwatchBussy = this._sportServe.getTimerBussy();
                };
                SportComponent = __decorate([
                    core_14.Component({
                        selector: 'op-sport',
                        directives: [progress_bar_component_2.ProgressBar, plus_bar_component_2.PlusComponent, swipe_delete_side_directive_3.SwipeDeleteSideDirective],
                        providers: [],
                        pipes: [translate_service_5.TranslatePipe, simple_search_pipe_3.SimpleSearch],
                        styles: ["\n      .sport_form {\n        position: absolute;;\n        left: 5vw;\n        top: 46vw;\n        height: 5vw;\n        width: 90vw;\n      }\n      .sport_inputSport {\n        position: absolute;\n        height: 12vw;\n        width: 72vw;\n        color: #D0D9D9;\n        font-size: 6vw;\n        background-color: rgba(49, 51, 61, 0.3);\n        box-sizing: border-box;\n        border: 2px solid #0C1017;\n        border-radius: 7px;\n        padding-left: 1vw;\n      }\n    .sport_inputButton_off {\n        position: absolute;\n        right: 0;\n        height: 12vw;\n        width: 14vw;\n        background: url('./src/img/check-off.png') no-repeat center center;\n        background-size: cover;\n        box-sizing: border-box;\n        color: #0d0e15;\n        border: 2px solid #0C1017;\n        border-radius: 7px;\n      }\n      .sport_inputButton_on {\n        position: absolute;\n        right: 0;\n        height: 12vw;\n        width: 14vw;\n        background: url('./src/img/check-on.png') no-repeat center center;\n        background-size: cover;\n        box-sizing: border-box;\n        color: #0d0e15;\n        border: 2px solid #0C1017;\n        border-radius: 7px;\n      }\n\n      .sport_serchContainer {\n        position: absolute;\n        background-color: #0C1017;\n        width: 70vw;\n        max-height: 30vh;\n        padding: 1vw;\n        left: 0;\n        right: 2vw;\n        top: 9vw;\n        overflow-y: scroll;\n        border-radius: 7px;\n        z-index: 3;\n        border-bottom: 2px solid #0C1017;\n      }\n      .sport_searchListItem {\n        float:left;\n        margin-bottom: 1vw;\n        min-height: 15vw;\n        width: 70vw;\n        line-height: 15vw;\n        box-sizing: border-box;\n        background-color: #3f414a;\n        color: #ff9d2d;\n        font-size: 6vw;\n        text-align: center;\n        border-radius: 7px;\n      }\n\n      .sport_list {\n        position: absolute;;\n        top:60vw;\n        padding-left: 5vw;\n        width: 95vw;\n        bottom:1px;\n        overflow-y: scroll;\n        overflow-x: hidden;\n      }\n      .sport_listItem {\n        float:left;\n        margin-right: 3vw;\n        margin-top: 2vw;\n        min-height: 15vw;\n        padding-left: 5vw;\n        width: 72vw;\n        box-sizing: border-box;\n        background-color: #3f414a;\n        color: #de5200;\n        font-size: 6vw;\n        text-align: center;\n        border-radius: 7px;\n        line-height: 15vw;\n      }\n      .sport_listSet {\n        float:left;\n        margin-right: 2vw;\n        margin-top: 1vh;\n        min-height: 15vw;\n        width: 27vw;\n        line-height: 15vw;\n        background-color: #3f414a;\n        box-sizing: border-box;\n        color: #ff9d2d;\n        font-size: 6vw;\n        text-align: center;\n        border-radius: 7px;\n        border: none;\n      }\n      .sport_listWeight {\n        float:left;\n        height: 15vw;\n        width: 21vw;\n        line-height: 15vw;\n        margin-top: 1vh;\n        background-color: #3f414a;\n        box-sizing: border-box;\n        color: #ff9d2d;\n        font-size: 6vw;\n        text-align: center;\n        border-radius: 7px;\n        border: none;\n      }\n      .sport_listNumbers {\n        float:left;\n        margin-left: 2vw;\n        margin-right: 3vw;\n        height: 15vw;\n        width: 20vw;\n        margin-top: 1vh;\n        line-height: 15vw;\n        background-color: #3f414a;\n        box-sizing: border-box;\n        color: #ff9d2d;\n        font-size: 6vw;\n        text-align: center;\n        border-radius: 7px;\n        border: none;\n      }\n      .sport_dropdownButton {\n        float: left;\n        margin-top: 3vw;\n        width: 10vw;\n        height: 10vw;\n        background: url('./src/img/dropdown.png') no-repeat center center;\n        background-size: cover;\n        box-sizing: border-box;\n        border: 2px solid #de5200;\n        border-radius: 50%;\n      }\n\n    .sport_dropdownButonAnime{\n      transform:rotate(180deg)\n    }\n    .sport_listButton_on {\n      float: left;\n      height: 14vw;\n      width: 14vw;\n      background: url('./src/img/check-on.png') no-repeat center center;\n      background-color: #3f414a;\n      background-size: cover;\n      box-sizing: border-box;\n      color: #0d0e15;\n      border-radius: 7px;\n      margin-top: 1vh;\n    }\n  .sport_listButton_on_exrc {\n    float: left;\n    height: 14vw;\n    width: 14vw;\n    margin-top: 2vw;\n    background: url('./src/img/exrc_check-on.png') no-repeat center center;\n    background-color: #3f414a;\n    background-size: cover;\n    box-sizing: border-box;\n    color: #0d0e15;\n    border-radius: 7px;\n  }\n  .sport_listButton_off {\n    float: left;\n    height: 14vw;\n    width: 14vw;\n    margin-top: 2vw;\n    background: url('./src/img/check-off.png') no-repeat center center;\n    background-color: #3f414a;\n    background-size: cover;\n    box-sizing: border-box;\n    color: #0d0e15;\n    border-radius: 7px;\n  }\n  .sport_timer {\n    position: absolute;;\n    margin-left: 5vw;\n    top: 30vw;\n    width: 90vw;\n    height: 12vw;\n    text-align: center;\n    background-color: #3f414a;\n    border: 3px solid #0d0e15;\n    box-sizing: border-box;\n    border-radius: 3vw;\n    line-height: 10vw;\n\n  }\n  .sport_timerButtons {\n    float: left;\n    width: 23vw;\n    height: 10vw;\n    border-radius: 3vw;\n    color: #ff9d2d;\n    /*font-weight: bold;*/\n  }\n  .clockFace {\n    float: left;\n    width: 39vw;\n    height: 11vw;\n    font-size: 6vw;\n    color: #de5200;\n    border-right: 3px solid #0d0e15;\n    border-left: 3px solid #0d0e15;\n  }\n  .clockFace_numbers {\n    float: left;\n    width: 8vw;\n  }\n  .clockFace_hours {\n    width: 12vw;\n    text-align: right;\n  }\n  /*.clockFace_mseconds {\n    font-size: 5vw;\n    padding-top: 1px;\n  }*/\n\n  .sport_listItemContainer{\n    position:relative;\n    min-height: 16vw;\n    width:90vw;\n    overflow:hidden;\n  }\n      "],
                        template: "\n<op-plus [iAm]=\"'sport'\" [(isOpen)]=\"plusIsOpen\"></op-plus>\n\n<fm-progress-bar [name]=\"'progress'|translate\" [mainLine]=\"totalSport.procentDone\" [secondLine]=\"\" [minNumber]=\"totalSport.done\" [maxNumber]=\"pickedSportContainer.length\"></fm-progress-bar>\n\n<div class=\"sport_timer\">\n  <div class=\"sport_timerButtons\" (click)=\"stopwatchReset()\">{{'reset'| translate}}</div>\n  <div class=\"clockFace\">\n      <div class=\"clockFace_numbers clockFace_hours\">{{(stopwatch['hours'] < 10)?'0'+ stopwatch['hours']:''+ stopwatch['hours']}}:</div>\n      <div class=\"clockFace_numbers\">{{(stopwatch['minutes'] < 10)?'0'+ stopwatch['minutes']:''+ stopwatch['minutes']}}:</div>\n      <div class=\"clockFace_numbers\">{{(stopwatch['seconds'] < 10)?'0'+ stopwatch['seconds']:''+ stopwatch['seconds'] }}:</div>\n\n      <div class=\"clockFace_numbers\">{{(stopwatch['mseconds'] < 10)?'0'+ stopwatch['mseconds']:''+ stopwatch['mseconds'] }}</div>\n\n  </div>\n  <div *ngIf=\"(!stopwatchBussy && !(stopwatch['seconds'] || stopwatch['minutes'] || stopwatch['hours']))\" class=\"sport_timerButtons\" (click)=\"stopwatchToggle(timer)\">{{'start'| translate}}</div>\n  <div *ngIf=\"stopwatchBussy\" class=\"sport_timerButtons\" (click)=\"stopwatchToggle(timer)\">{{'stop'| translate}}</div>\n  <div *ngIf=\"(!stopwatchBussy && (stopwatch['seconds'] || stopwatch['minutes'] || stopwatch['hours']))\" class=\"sport_timerButtons\" (click)=\"stopwatchToggle(timer)\">{{'resume'| translate}}</div>\n</div>\n\n<form class=\"sport_form\" (ngSubmit)=\"onSubmit(sportForm)\" #sportForm=\"ngForm\">\n\n  <label for=\"sportName\"></label>\n  <input class=\"sport_inputSport\" required [placeholder]=\"('search'|translate) + '...'\" [(ngModel)]=\"model.name\" ngControl=\"name\" #name=\"ngForm\" (input)=\"pickSportInput(model.name)\">\n\n  <button #subBtn type=\"submit\" [ngClass]=\"{sport_inputButton_off: subBtn['disabled'], sport_inputButton_on: !subBtn['disabled']}\" [disabled]=\"!sportForm.form.valid || !correctSport\"></button>\n\n  <div *ngIf=\"(name.valid && !correctSport)\" class=\"sport_serchContainer\">\n    <div class=\"sport_searchListItem\" *ngFor=\"#item of sportContainer  | simpleSearch :'name':language : name.value; #i = index;\" (click)=\"pickSport(item);\">\n\n      {{item?.name[language]}}\n    </div>\n  </div>\n</form>\n\n<div class=\"sport_list\">\n  <div   *ngFor=\"#item of pickedSportContainer; #i = index\">\n<div class=\"sport_listItemContainer\" (fmSwipeDeleteSide)=\"removeSport(i, item)\">\n<div class=\"sport_listItem\" >\n<div class=\"sport_dropdownButton\" [ngClass]=\"{sport_dropdownButonAnime:!item['setsToggle']}\" (touchend)=\"openSets(item,i)\"></div>\n  {{item?.name[language]}}\n</div>\n<div [ngClass]=\"{sport_listButton_off: !item.picked, sport_listButton_on_exrc: item.picked}\" (touchend)=\"checkBoxToggle(i, item)\"></div>\n</div>\n\n    <div *ngIf=\"item['setsToggle']\">\n      <div  class=\"sport_listItemContainer\" *ngFor=\"#it of item.sets; #setIndex = index\" (fmSwipeDeleteSide)=\"removeSet(i, item, setIndex)\">\n        <div class=\"sport_listSet\" >{{'set'| translate}} {{setIndex+1}}</div>\n        <input class=\"sport_listWeight\" type=\"number\" min=\"0\" [(ngModel)]=\"item['sets'][setIndex].weight\" (blur)=\"changeSport(i, item)\" placeholder=\"{{'kg'| translate}}\">\n        <input class=\"sport_listNumbers\" type=\"number\" min=\"0\" [(ngModel)]=\"item['sets'][setIndex].numbers\" (blur)=\"changeSport(i, item)\" placeholder=\"{{'resp'| translate}}\">\n        <div [ngClass]=\"{sport_listButton_off: !it.picked, sport_listButton_on: it.picked}\" (click)=\"pickSet(item, i, setIndex)\"></div>\n      </div>\n      <div class=\"sport_listSet\" (click)=\"addSet(item, i)\">{{'+set'| translate}}</div>\n    </div>\n  </div>\n</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [sport_service_2.SportService, calendar_service_3.CalendarService, user_service_5.UserService])
                ], SportComponent);
                return SportComponent;
            }());
            exports_15("SportComponent", SportComponent);
        }
    }
});
System.register("components/rest-page/rest.component", ['angular2/core'], function(exports_16, context_16) {
    "use strict";
    var __moduleName = context_16 && context_16.id;
    var core_15;
    var RestComponent;
    return {
        setters:[
            function (core_15_1) {
                core_15 = core_15_1;
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
                    core_15.Component({
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
            exports_16("RestComponent", RestComponent);
        }
    }
});
System.register("components/calendar-page/calendar.component", ['angular2/core', "services/calenadar/calendar.service", "shared/services/translate/translate.service"], function(exports_17, context_17) {
    "use strict";
    var __moduleName = context_17 && context_17.id;
    var core_16, calendar_service_4, translate_service_6;
    var CalendarComponent;
    return {
        setters:[
            function (core_16_1) {
                core_16 = core_16_1;
            },
            function (calendar_service_4_1) {
                calendar_service_4 = calendar_service_4_1;
            },
            function (translate_service_6_1) {
                translate_service_6 = translate_service_6_1;
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
                    core_16.Component({
                        selector: 'op-calendar',
                        directives: [],
                        providers: [],
                        pipes: [translate_service_6.TranslatePipe],
                        styles: ["\n.calendar{\n  position:absolute;\n  top:20vw;\n  left:13vw;\n  width:74vw;\n  background:#3f414a;\n  text-align: center;\n  color: #ff9d2d;\n  overflow:hidden;\n  line-height: 10vw;\n}\n.year{\n  height:10vw;\n  width:100%;\n  overflow:hidden;\n  font-size: 7vw;\n\n}\n.month{\n  height:10vw;\n  width: 100%;\n  font-size: 6vw;\n}\n\n.date {\n  float: left;\n  width: 10vw;\n  height: 10vw;\n  border: 0.5vw solid #ff9d2d;\n}\n.currentDate {\n  background-color: #0d0e15;\n  color: #de5200;\n}\n.toggleLeft {\n  float: left;\n  width: 25vw;\n}\n.toggleRight {\n  float: left;\n  width: 20vw;\n}\n.calendar_buttons {\n  position: absolute;\n  top: 117vw;\n  left: 13vw;\n  width: 74vw;\n  height: 50vw;\n  font-size: 5vw;\n  color: #ff9d2d;\n  float: left;\n}\n.calendar_todayButton {\n  position: relative;\n  float: left;\n  height: 12vw;\n  width: 50vw;\n  margin-bottom: 3vw;\n}\n.calendar_todayIcon {\n  position: relative;\n  height: 12vw;\n  width: 12vw;\n  float: left;\n  background: url('./src/img/today.png') no-repeat center center;\n  background-size: cover;\n  box-sizing: border-box;\n  border: 2px solid #ff9d2d;\n  border-radius: 50%;\n}\n.calendar_todayText {\n  position: relative;\n  width: 20vw;\n  float: left;\n  line-height: 12vw;\n  height: 12vw;\n  left: 3vw;\n}\n      "],
                        template: "\n  <div class=\"container\">\n  <div class=\"calendar\">\n    <div class=\"year\">\n\n      <div class=\"toggleLeft\" (click)=\"switchViewYearMinus()\">\n        <</div>\n          <div class=\"toggleLeft\">\n            {{clMonth[0]['date'].getFullYear()}}\n          </div>\n          <div class=\"toggleRight\" (click)=\"switchViewYearPlus()\">></div>\n      </div>\n\n      <div class=\"month\" [ngSwitch]=\"clMonth[0]['date'].getMonth()\">\n        <div class=\"toggleLeft\" (click)=\"switchViewMonthMinus()\"> <</div>\n\n            <div class=\"toggleLeft\" *ngSwitchWhen=\"0\"> {{'January'|translate}} </div>\n            <div class=\"toggleLeft\" *ngSwitchWhen=\"1\"> {{'February'|translate}} </div>\n            <div class=\"toggleLeft\" *ngSwitchWhen=\"2\"> {{'March'|translate}} </div>\n            <div class=\"toggleLeft\" *ngSwitchWhen=\"3\"> {{'April'|translate}} </div>\n            <div class=\"toggleLeft\" *ngSwitchWhen=\"4\"> {{'May'|translate}} </div>\n            <div class=\"toggleLeft\" *ngSwitchWhen=\"5\">{{'June'|translate}} </div>\n            <div class=\"toggleLeft\" *ngSwitchWhen=\"6\">{{'July'|translate}} </div>\n            <div class=\"toggleLeft\" *ngSwitchWhen=\"7\"> {{'August'|translate}} </div>\n            <div class=\"toggleLeft\" *ngSwitchWhen=\"8\">{{'September'|translate}} </div>\n            <div class=\"toggleLeft\" *ngSwitchWhen=\"9\">{{'October'|translate}} </div>\n            <div class=\"toggleLeft\" *ngSwitchWhen=\"10\"> {{'November'|translate}} </div>\n            <div class=\"toggleLeft\" *ngSwitchWhen=\"11\"> {{'December'|translate}} </div>\n\n            <div class=\"toggleRight\" (click)=\"switchViewMonthPlus()\">></div>\n\n        </div>\n\n        <div class=\"date\">{{'Sun'|translate}}  </div>\n        <div class=\"date\">{{'Mon'|translate}} </div>\n        <div class=\"date\">{{'Tue'|translate}} </div>\n        <div class=\"date\">{{'Wed'|translate}} </div>\n        <div class=\"date\">{{'Thu'|translate}} </div>\n        <div class=\"date\">{{'Fri'|translate}} </div>\n        <div class=\"date\">{{'Sat'|translate}} </div>\n\n        <div class=\"date\" *ngFor=\"#item of pushDays\"></div>\n        <div class=\"date\" [ngClass]=\"{currentDate: marker(item)}\" *ngFor=\"#item of clMonth\" (click)=\"pickDate(item, marker);\">{{item['date'].getDate()}}</div>\n        <div class=\"date\" *ngFor=\"#item of pushDaysEnd\"></div>\n      </div>\n\n      <div class=\"calendar_buttons\">\n        <div class=\"calendar_todayButton\" (touchend)=\"goToday()\">\n          <div class=\"calendar_todayIcon\"></div>\n          <div class=\"calendar_todayText\" >{{'today'|translate}} </div>\n        </div>\n      </div>\n\n    </div>\n\n"
                    }), 
                    __metadata('design:paramtypes', [calendar_service_4.CalendarService])
                ], CalendarComponent);
                return CalendarComponent;
            }());
            exports_17("CalendarComponent", CalendarComponent);
        }
    }
});
System.register("components/user-calculator/user-calculator.component", ['angular2/core', "shared/services/translate/translate.service", "services/user/user.service"], function(exports_18, context_18) {
    "use strict";
    var __moduleName = context_18 && context_18.id;
    var core_17, translate_service_7, user_service_6;
    var UserCalculatorComponent;
    return {
        setters:[
            function (core_17_1) {
                core_17 = core_17_1;
            },
            function (translate_service_7_1) {
                translate_service_7 = translate_service_7_1;
            },
            function (user_service_6_1) {
                user_service_6 = user_service_6_1;
            }],
        execute: function() {
            UserCalculatorComponent = (function () {
                function UserCalculatorComponent(_userServe) {
                    this._userServe = _userServe;
                    this.model = {
                        'sex': 'male',
                        'age': '',
                        'weight': '',
                        'height': '',
                        'activity': {
                            'lvl': '',
                            'multi': ''
                        },
                        'goal': {
                            'lvl': '',
                            'multi': ''
                        }
                    };
                }
                UserCalculatorComponent.prototype.ngOnInit = function () {
                    this.model = this._userServe.getUserSets();
                };
                UserCalculatorComponent.prototype.changeSex = function () {
                    if (this.model.sex === 'male') {
                        this._userServe.setUserSex('female');
                    }
                    else {
                        this._userServe.setUserSex('male');
                    }
                };
                UserCalculatorComponent.prototype.changeActivity = function (lvl) {
                    this._userServe.setUserActivity(lvl);
                };
                UserCalculatorComponent.prototype.changeGoal = function (lvl) {
                    this._userServe.setUserGoal(lvl);
                };
                UserCalculatorComponent.prototype.calculate = function () {
                    this._userServe.calculateUserDailyRate(this.model.sex, this.model.age, this.model.weight, this.model.height, this.model.activity.lvl, this.model.goal.lvl);
                };
                UserCalculatorComponent = __decorate([
                    core_17.Component({
                        selector: 'op-user-calculator',
                        directives: [],
                        providers: [],
                        pipes: [translate_service_7.TranslatePipe],
                        styles: ["\n\n  .calculator {\n    position: absolute;\n    top: 12vw;\n    left: 0vw;\n    width: 90vw;\n    height: 150vw;\n    margin: 5vw;\n    overflow-x: hidden;\n    overflow-y: hidden;\n\n  }\n  .calculator_buttons {\n    position: relative;\n    width: 90vw;\n    height: 65vw;\n    line-height: 10vw;\n  }\n  .calculator_sexIcon {\n    position: relative;\n    height: 14vw;\n    width: 14vw;\n    float: left;\n    background: url('./src/img/maleOn.png') no-repeat center center;\n    background-size: cover;\n    box-sizing: border-box;\n    border-radius: 50%;\n    margin-bottom: 4vw;\n    margin-right: 2vw;\n\n  }\n  .calculator_sexMale_on {\n    background: url('./src/img/maleOn.png') no-repeat center center;\n    background-size: cover;\n    box-sizing: border-box;\n    border: 2px solid #ff9d2d;\n  }\n  .calculator_sexMale_off {\n    background: url('./src/img/maleOff.png') no-repeat center center;\n    background-size: cover;\n    border: 2px solid #3c3f49;\n  }\n  .calculator_sexFemale_on {\n    background: url('./src/img/femaleOn.png') no-repeat center center;\n    background-size: cover;\n    border: 2px solid #ff9d2d;\n  }\n  .calculator_sexFemale_off {\n    background: url('./src/img/femaleOff.png') no-repeat center center;\n    background-size: cover;\n    border: 2px solid #3c3f49;\n  }\n  .calculator_nameInput {\n    position: relative;\n    width: 46vw;\n    float: left;\n    left: 11vw;\n    margin-bottom: 2vw;\n    color: #ff9d2d;\n    font-size: 7vw;\n  }\n  .calculator_input {\n    position: relative;\n    float: left;\n    height: 11vw;\n    width: 30vw;\n    background-color: rgba(49, 51, 61, 0.3);\n    box-sizing: border-box;\n    border: 2px solid #0C1017;\n    border-radius: 7px;\n    font-size: 6vw;\n    color: #D0D9D9;\n    margin-bottom: 4vw;\n    text-align: center;\n  }\n  .calculator_sex {\n    line-height: 14vw;\n  }\n  .calculator_headerBig {\n    font-size: 6vw;\n    width: 90vw;\n    text-align: center;\n    margin-top: 3vw;\n    font-weight: bolder;\n    color: #ff9d2d;\n  }\n  .calculator_headerSmall {\n    font-size: 6vw;\n    width: 90vw;\n    text-align: center;\n    margin-top: 3vw;\n    margin-bottom: 1vw;\n    color: #ff9d2d;\n  }\n.toggleBar {\n  margin-top: 2vw;\n  width: 90vw;\n  height: 6.2vw;\n  background: #0C1017;\n  box-sizing: border-box;\n  border: 3px solid #0C1017;\n  border-radius: 7px;\n}\n.activityToggle {\n  position: relative;\n  float: left;\n  height: 4.5vw;\n  width: 12.7vw;\n  margin-right: 1vw;\n  margin-left: 1vw;\n  border-radius: 1vw;\n}\n.activityToggle_off {\n  background: #3f414a;\n}\n.activityToggle_on {\n  background: #ff9d2d;\n}\n.pointToggle {\n  position: relative;\n  float: left;\n  height: 4.5vw;\n  width: 20vw;\n  margin-right: 1vw;\n  margin-left: 1vw;\n  border-radius: 1vw;\n}\n.pointToggle_off {\n  background: #3f414a;\n}\n.pointToggle_on {\n  background: #ff9d2d;\n}\n.calculator_result {\nfloat: left;\n  height: 13vw;\n  line-height: 11vw;\n  width: 40vw;\n  margin-left: 15vw;\n  margin-top: 7vw;\n  background-color: rgba(49, 51, 61, 0.3);\n  box-sizing: border-box;\n  border: 3px solid #0C1017;\n  border-radius: 7px;\n  font-size: 6vw;\n  font-weight: bold;\n  color: #ff9d2d;\n  margin-bottom: 4vw;\n  text-align: center;\n}\n.calculator_resultApply {\nfloat: left;\n  height: 13vw;\n  line-height: 11vw;\n  width: 12vw;\n  margin-top: 7vw;\n  margin-left: 2vw;\n  background-size: cover;\n  box-sizing: border-box;\n  color: #ff9d2d;\n  border: 3px solid #0C1017;\n  border-radius: 7px;\n  text-align: center;\n  font-weight: bold;\n}\n.opapa {\n  position: relative;\n  width: 80vw;\n}\n    "],
                        template: "\n<div class=\"calculator\">\n  <div class=\"calculator_buttons\">\n\n    <div class=\"calculator_nameInput calculator_sex \">{{'sex'|translate}}:</div>\n    <div class=\"calculator_sexIcon\" [ngClass]=\"{calculator_sexMale_on: model.sex === 'male', calculator_sexMale_off: model.sex === 'female'}\" (click)=\"changeSex()\"></div>\n    <div class=\"calculator_sexIcon\"  [ngClass]=\"{calculator_sexFemale_on: model.sex === 'female', calculator_sexFemale_off: model.sex === 'male'}\" (click)=\"changeSex()\"></div>\n\n    <div class=\"calculator_nameInput\">{{'age'|translate}}:</div>\n    <input class=\"calculator_input\" type=\"number\" min=\"0\" placeholder=\"{{'years'|translate}}\" [(ngModel)]=\"model.age\">\n\n\n    <div class=\"calculator_nameInput\">{{'height'|translate}}:</div>\n    <input class=\"calculator_input\" type=\"number\" min=\"0\" placeholder=\"{{'cm'|translate}}\" [(ngModel)]=\"model.height\">\n\n    <div class=\"calculator_nameInput\">{{'mass'|translate}}:</div>\n    <input class=\"calculator_input\" type=\"number\" min=\"0\" placeholder=\"{{'kg'|translate}}\" [(ngModel)]=\"model.weight\">\n\n    </div>\n\n    <div class=\"calculator_headerBig\">\n        {{'activity.level'|translate}}:\n    </div>\n    <div class=\"calculator_headerSmall\" [ngSwitch]=\"model.activity.lvl\">\n    <div *ngSwitchWhen=\"1\">  {{'minimum'|translate}}</div>\n  <div *ngSwitchWhen=\"2\">{{'3times'|translate}}</div>\n  <div *ngSwitchWhen=\"3\">{{'5times'|translate}}</div>\n  <div *ngSwitchWhen=\"4\">{{'5times.intensity'|translate}}</div>\n  <div *ngSwitchWhen=\"5\">{{'every.day'|translate}}</div>\n  <div *ngSwitchWhen=\"6\">{{'every.day.intensity'|translate}}</div>\n    </div>\n\n    <div class=\"toggleBar\">\n      <div class=\"activityToggle\" [ngClass]=\"{ activityToggle_off:!(model.activity.lvl == '1'), activityToggle_on:model.activity.lvl == '1'}\" (click)=\"changeActivity(1)\"></div>\n      <div class=\"activityToggle\" [ngClass]=\"{ activityToggle_off:!(model.activity.lvl == '2'), activityToggle_on:model.activity.lvl == '2'}\" (click)=\"changeActivity(2)\"></div>\n      <div class=\"activityToggle\" [ngClass]=\"{ activityToggle_off:!(model.activity.lvl == '3'), activityToggle_on:model.activity.lvl == '3'}\" (click)=\"changeActivity(3)\"></div>\n      <div class=\"activityToggle\" [ngClass]=\"{ activityToggle_off:!(model.activity.lvl == '4'), activityToggle_on:model.activity.lvl == '4'}\" (click)=\"changeActivity(4)\"></div>\n      <div class=\"activityToggle\" [ngClass]=\"{ activityToggle_off:!(model.activity.lvl == '5'), activityToggle_on:model.activity.lvl == '5'}\" (click)=\"changeActivity(5)\"></div>\n      <div class=\"activityToggle\" [ngClass]=\"{ activityToggle_off:!(model.activity.lvl == '6'), activityToggle_on:model.activity.lvl == '6'}\" (click)=\"changeActivity(6)\"></div>\n    </div>\n\n\n    <div class=\"calculator_headerBig\">\n        {{'point'|translate}}:\n    </div>\n    <div class=\"calculator_headerSmall\" [ngSwitch]=\"model.goal.lvl\">\n    <div *ngSwitchWhen=\"8\">{{'lose.weight.intensity'|translate}}</div>\n  <div *ngSwitchWhen=\"9\">{{'lose.weight'|translate}}</div>\n  <div *ngSwitchWhen=\"10\">{{'keep.weight'|translate}}</div>\n  <div *ngSwitchWhen=\"11\">{{'gain.weight'|translate}}</div>\n    </div>\n    <div class=\"toggleBar\">\n      <div class=\"pointToggle\"  [ngClass]=\"{ pointToggle_off:!(model.goal.lvl == '8'), pointToggle_on:model.goal.lvl == '8'}\" (click)=\"changeGoal(8)\"></div>\n      <div class=\"pointToggle\" [ngClass]=\"{ pointToggle_off:!(model.goal.lvl == '9'), pointToggle_on:model.goal.lvl == '9'}\"  (click)=\"changeGoal(9)\"></div>\n      <div class=\"pointToggle\" [ngClass]=\"{ pointToggle_off:!(model.goal.lvl == '10'), pointToggle_on:model.goal.lvl == '10'}\"  (click)=\"changeGoal(10)\"></div>\n      <div class=\"pointToggle\" [ngClass]=\"{ pointToggle_off:!(model.goal.lvl == '11'), pointToggle_on:model.goal.lvl == '11'}\"  (click)=\"changeGoal(11)\"></div>\n    </div>\n\n<div class=\"opapa\">\n  <div class=\"calculator_result\">{{model.foodSets.calories.full}} {{'ccal'|translate}}</div>\n    <div (click)=\"calculate()\" class=\"calculator_resultApply\">OK</div>\n  </div>\n\n  </div>\n\n\n" }), 
                    __metadata('design:paramtypes', [user_service_6.UserService])
                ], UserCalculatorComponent);
                return UserCalculatorComponent;
            }());
            exports_18("UserCalculatorComponent", UserCalculatorComponent);
        }
    }
});
System.register("components/user-details/user-details.component", ['angular2/core', "services/user/user.service", "shared/services/translate/translate.service", 'angular2/router'], function(exports_19, context_19) {
    "use strict";
    var __moduleName = context_19 && context_19.id;
    var core_18, user_service_7, translate_service_8, router_3;
    var UserDetailsComponent;
    return {
        setters:[
            function (core_18_1) {
                core_18 = core_18_1;
            },
            function (user_service_7_1) {
                user_service_7 = user_service_7_1;
            },
            function (translate_service_8_1) {
                translate_service_8 = translate_service_8_1;
            },
            function (router_3_1) {
                router_3 = router_3_1;
            }],
        execute: function() {
            UserDetailsComponent = (function () {
                function UserDetailsComponent(_userServe, _translator) {
                    this._userServe = _userServe;
                    this._translator = _translator;
                }
                UserDetailsComponent.prototype.ngOnInit = function () {
                    this.sets = this._userServe.getUserSets();
                };
                UserDetailsComponent.prototype.changeLang = function (lang) {
                    this._userServe.setLanguage(lang);
                    this._translator.setCurrentLanguage(this._userServe.getLanguage());
                };
                UserDetailsComponent.prototype.changeSets = function () {
                    var _this = this;
                    setTimeout(function () {
                        _this._userServe.refreshUser();
                    }, 500);
                };
                UserDetailsComponent = __decorate([
                    core_18.Component({
                        selector: 'op-user-details',
                        directives: [router_3.ROUTER_DIRECTIVES],
                        providers: [],
                        pipes: [translate_service_8.TranslatePipe],
                        styles: ["\n\n    .container {\n      position: relative;;\n      margin: 5vw;\n      margin-left: 10vw;\n      height: 100vw;\n      width: 80vw;\n    }\n\n    .user_firstHeader {\n      font-size: 6vw;\n      width: 80vw;\n      text-align: center;\n      margin-bottom: 5vw;\n      font-weight: bolder;\n      color: #ff9d2d;\n    }\n    .user_nameInput {\n      position: relative;\n      font-size: 6vw;\n      width: 52vw;\n      float: left;\n      left: 8vw;\n      margin-bottom: 2vw;\n      color: #ff9d2d;\n      line-height: 10vw;\n    }\n    .user_input {\n      position: relative;\n      float: left;\n      height: 11vw;\n      width: 20vw;\n      background-color: rgba(49, 51, 61, 0.3);\n      box-sizing: border-box;\n      border: 2px solid #0C1017;\n      border-radius: 7px;\n      line-height: 10vw;\n      font-size: 6vw;\n      color: #D0D9D9;\n      margin-bottom: 2vw;\n      text-align: center;\n    }\n    .user_secondHeader {\n      position: absolute;\n      top: 66vw;\n      font-size: 5vw;\n      min-height: 8vw;\n      line-height: 8vw;\n      width: 80vw;\n      text-align: center;\n      font-weight: bolder;\n      color: #ff9d2d;\n      border: 2px solid #ff9d2d;\n      border-radius: 3vw;\n    }\n    .user_lang {\n      position: absolute;\n      top: 83vw;\n      width: 60vw;\n      font-size: 5vw;\n      color: #ff9d2d;\n      float: left;\n    }\n    .user_langName {\n      position: relative;\n      float: left;\n      height: 10vw;\n      width: 50vw;\n      margin: 2vw;\n    }\n    .user_langEnIcon {\n      position: relative;\n      height: 10vw;\n      width: 10vw;\n      float: left;\n      background: url('./src/img/en.png') no-repeat center center;\n      box-sizing: border-box;\n      border: 2px solid #ff9d2d;\n      border-radius: 50%;\n      background-size: cover;\n      left: 4vw;\n    }\n    .user_langRuIcon {\n      position: relative;\n      height: 10vw;\n      width: 10vw;\n      float: left;\n      background: url('./src/img/ru.png') no-repeat center center;\n      box-sizing: border-box;\n      border: 2px solid #ff9d2d;\n      border-radius: 50%;\n      background-size: cover;\n      left: 4vw;\n    }\n    .user_langText {\n      position: relative;\n      width: 20vw;\n      float: left;\n      line-height: 10vw;\n      left: 6vw;\n    }\n\n    "],
                        template: "\n  <div class=\"container\">\n  <div class=\"user_firstHeader\">\n      {{'daily.rate'|translate}}\n  </div>\n  <div class=\"user_nameInput\">\n    {{'calories'|translate}}\n  </div>\n  <input #calories class=\"user_input\" type=\"number\" min=\"0\" [(ngModel)]=\"sets?.foodSets?.calories['full']\" (blur)=\"changeSets()\">\n  <div class=\"user_nameInput\">\n    {{'protein'|translate}}\n  </div>\n  <input #protein class=\"user_input\" type=\"number\" min=\"0\" [(ngModel)]=\"sets?.foodSets?.protein['full']\" (blur)=\"changeSets()\">\n  <div class=\"user_nameInput\">\n    {{'fat'|translate}}\n  </div>\n  <input #fat class=\"user_input\" type=\"number\" min=\"0\" [(ngModel)]=\"sets?.foodSets?.fat['full']\" (blur)=\"changeSets()\">\n  <div class=\"user_nameInput\">\n    {{'carbohydrates'|translate}}\n  </div>\n  <input #carbohydrates class=\"user_input\" type=\"number\" min=\"0\" [(ngModel)]=\"sets?.foodSets?.carbohydrates['full']\" (blur)=\"changeSets()\">\n\n\n  <a [routerLink]=\"['UserCalculator']\">\n  <div class=\"user_secondHeader\">\n      {{'determine.daily.rate'|translate}}\n  </div>\n</a>\n\n  <div class=\"user_lang\">\n    <div class=\"user_nameInput\">\n      {{'language'|translate}}\n    </div>\n    <div (touchend)=\"changeLang('en')\" class=\"user_langName\">\n      <div class=\"user_langEnIcon\"></div>\n      <div class=\"user_langText\">English</div>\n    </div>\n    <div (touchend)=\"changeLang('ru')\" class=\"user_langName\">\n      <div class=\"user_langRuIcon\"></div>\n      <div class=\"user_langText\">Russian</div>\n    </div>\n  </div>\n</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [user_service_7.UserService, translate_service_8.TranslateService])
                ], UserDetailsComponent);
                return UserDetailsComponent;
            }());
            exports_19("UserDetailsComponent", UserDetailsComponent);
        }
    }
});
System.register("components/user-page/user.component", ['angular2/core', "components/user-calculator/user-calculator.component", "components/user-details/user-details.component", "shared/services/translate/translate.service", 'angular2/router'], function(exports_20, context_20) {
    "use strict";
    var __moduleName = context_20 && context_20.id;
    var core_19, user_calculator_component_1, user_details_component_1, translate_service_9, router_4;
    var UserComponent;
    return {
        setters:[
            function (core_19_1) {
                core_19 = core_19_1;
            },
            function (user_calculator_component_1_1) {
                user_calculator_component_1 = user_calculator_component_1_1;
            },
            function (user_details_component_1_1) {
                user_details_component_1 = user_details_component_1_1;
            },
            function (translate_service_9_1) {
                translate_service_9 = translate_service_9_1;
            },
            function (router_4_1) {
                router_4 = router_4_1;
            }],
        execute: function() {
            UserComponent = (function () {
                function UserComponent() {
                }
                UserComponent.prototype.ngOnInit = function () {
                };
                UserComponent = __decorate([
                    core_19.Component({
                        selector: 'op-user',
                        directives: [router_4.ROUTER_DIRECTIVES],
                        providers: [],
                        pipes: [translate_service_9.TranslatePipe],
                        styles: ["\n    "],
                        template: "\n<router-outlet></router-outlet>\n    "
                    }),
                    router_4.RouteConfig([
                        { path: '/details', name: 'UserDetailsComponent', component: user_details_component_1.UserDetailsComponent, useAsDefault: true },
                        { path: '/calculator', name: 'UserCalculator', component: user_calculator_component_1.UserCalculatorComponent },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], UserComponent);
                return UserComponent;
            }());
            exports_20("UserComponent", UserComponent);
        }
    }
});
System.register("components/start-page/start.component", ['angular2/core', 'angular2/router'], function(exports_21, context_21) {
    "use strict";
    var __moduleName = context_21 && context_21.id;
    var core_20, router_5;
    var StartComponent;
    return {
        setters:[
            function (core_20_1) {
                core_20 = core_20_1;
            },
            function (router_5_1) {
                router_5 = router_5_1;
            }],
        execute: function() {
            StartComponent = (function () {
                function StartComponent(_router) {
                    this._router = _router;
                }
                StartComponent.prototype.toggle = function (route) {
                    this._router.navigate([route]);
                };
                StartComponent = __decorate([
                    core_20.Component({
                        selector: 'op-start',
                        directives: [router_5.ROUTER_DIRECTIVES],
                        providers: [],
                        pipes: [],
                        styles: ["\n  .startPage_navigator {\n    position: absolute;\n  width: 30vw;\n  display: flex;\n  top: 0;\n  justify-content: center;\n  flex-direction: column;\n  height: 100vh;\n  left: 35vw;\n  overflow: hidden;\n  }\n  .startPage_Buttons {\n    position: relative;\n  width: 27vw;\n  height: 27vw;\n  margin: auto;\n  margin-top: 5vw;\n  margin-bottom: 5vw;\n  box-sizing: border-box;\n  border: 2px solid #ff9d2d;\n  border-radius: 50%;\n  }\n  .startPage_food {\n    background: url('./src/img/food.png') no-repeat center center;\n    background-size: cover;\n  }\n  .startPage_sport {\n    background: url('./src/img/sport.png') no-repeat center center;\n    background-size: cover;\n  }\n  .startPage_rest {\n    background: url('./src/img/rest.png') no-repeat center center;\n    background-size: cover;\n  }\n  .startPage_user {\n    background: url('./src/img/user.png') no-repeat center center;\n    background-size: cover;\n  }\n      "],
                        template: "\n    <nav class=\"startPage_navigator\">\n      <div (touchend)=\"toggle('Food')\">\n        <div class=\"startPage_food startPage_Buttons\"></div>\n      </div>\n      <div (touchend)=\"toggle('Sport')\">\n        <div class=\"startPage_Buttons startPage_sport\"></div>\n      </div>\n      <!-- <div (touchend)=\"toggle('Rest')\">\n        <div class=\"startPage_Buttons startPage_rest\"></div>\n      </div> -->\n      <div (touchend)=\"toggle('User')\">\n        <div class=\"startPage_Buttons startPage_user\"></div>\n      </div>\n    </nav>\n    "
                    }), 
                    __metadata('design:paramtypes', [router_5.Router])
                ], StartComponent);
                return StartComponent;
            }());
            exports_21("StartComponent", StartComponent);
        }
    }
});
System.register("shared/components/side-bar/side-bar.component", ['angular2/core', 'angular2/router', "shared/services/translate/translate.service"], function(exports_22, context_22) {
    "use strict";
    var __moduleName = context_22 && context_22.id;
    var core_21, router_6, translate_service_10;
    var SideBar;
    return {
        setters:[
            function (core_21_1) {
                core_21 = core_21_1;
            },
            function (router_6_1) {
                router_6 = router_6_1;
            },
            function (translate_service_10_1) {
                translate_service_10 = translate_service_10_1;
            }],
        execute: function() {
            SideBar = (function () {
                function SideBar(_router) {
                    this._router = _router;
                    this.isOpenChange = new core_21.EventEmitter();
                    this.pusherTarget = 250;
                    this.middle = this.pusherTarget / 2;
                    this.shadowOpacity = 0;
                    this.shadowOpacityTarget = 0.5;
                    this.lastTouch = 0;
                    this.pushClass = false;
                    this.pullClass = true;
                }
                SideBar.prototype.toggle = function (route, toggle) {
                    if (toggle === void 0) { toggle = true; }
                    if (route) {
                        this._router.navigate([route]);
                    }
                    var evt = { 'type': 'touchend' };
                    if (this.isOpen) {
                        this.lastTouch = 0;
                    }
                    else {
                        this.lastTouch = this.pusherTarget;
                    }
                    this.swipe({ 'type': 'touchend' }, toggle);
                };
                SideBar.prototype.swipe = function (evt, toggle) {
                    if (toggle === void 0) { toggle = false; }
                    if (!toggle) {
                        evt.preventDefault();
                    }
                    this.isOpen = true;
                    this.pushClass = false;
                    this.pullClass = false;
                    if (evt.type === 'touchmove' && evt.touches[0].clientX < this.pusherTarget) {
                        if (this.lastTouch < evt.touches[0].clientX && this.shadowOpacity < this.shadowOpacityTarget) {
                            this.shadowOpacity = this.shadowOpacity + 0.01;
                        }
                        else if (this.shadowOpacity > 0) {
                            this.shadowOpacity = this.shadowOpacity - 0.01;
                        }
                        this.lastTouch = evt.touches[0].clientX;
                    }
                    if (evt.type === 'touchend') {
                        if (this.lastTouch > this.middle) {
                            this.pullClass = false;
                            this.pushClass = true;
                            this.shadowOpacity = this.shadowOpacityTarget;
                            this.isOpen = true;
                        }
                        if (this.lastTouch < this.middle) {
                            this.pushClass = false;
                            this.pullClass = true;
                            this.shadowOpacity = 0;
                            this.lastTouch = 0;
                            this.isOpen = false;
                        }
                    }
                };
                __decorate([
                    core_21.Input(), 
                    __metadata('design:type', Boolean)
                ], SideBar.prototype, "isOpen", void 0);
                __decorate([
                    core_21.Output(), 
                    __metadata('design:type', Object)
                ], SideBar.prototype, "isOpenChange", void 0);
                SideBar = __decorate([
                    core_21.Component({
                        selector: 'fm-side-bar',
                        directives: [router_6.ROUTER_DIRECTIVES],
                        providers: [],
                        pipes: [translate_service_10.TranslatePipe],
                        styles: ["\n    .sideBarContainer {\n      position: absolute;\n      display: flex;\n      flex-flow: column nowrap;\n      justify-content: center;\n      align-items: center;\n      height: 100vh;\n      width: 250px;\n      top: 0;\n      z-index: 999;\n      background-color: #3f414a;\n      overflow-x: hidden;\n      overflow-y: scroll;\n      left:-250px;\n      user-select: none;\n     -webkit-user-select: none;\n\n  }\n  .sideBarAnime{\n    transition-duration: 500ms;\n    -webkit-transition-duration: 500ms;\n    transform: translate3d(250px,0,0);\n    -webkit-transform: translate3d(250px,0,0);\n  }\n  .sideBarAnimeBack{\n    transition-duration: 500ms;\n    -webkit-transition-duration: 500ms;\n    transform: translate3d(-250px,0,0);\n    -webkit-transform: translate3d(-250px,0,0);\n  }\n  .sideBar_toggle {\n    position: absolute;\n    top:1vw;\n    left:5vw;\n    background: url('./src/img/newMenu.png') no-repeat center center;\n    background-size: cover;\n    box-sizing: border-box;\n    border: 2px solid #ff9d2d;\n    border-radius: 50%;\n    width: 14vw;\n    height: 14vw;\n    z-index: 999;\n  }\n  .sideBarSwipePlace {\n    position: fixed;\n    top:0;\n    left:0;\n    background-color: black;\n    height:100vh;\n    width:10vw;\n    z-index: 997;\n\n  }\n\n  p {\n    position: absolute;\n    margin-top: 23vw;\n    left: 9%;\n    right: 9%;\n    color: #ff9d2d;\n    font-size: 6vw;\n    overflow: hidden;\n  }\n\n  .sidebar_button {\n    background-size: cover;\n    box-sizing: border-box;\n    width: 22vw;\n    height: 22vw;\n    text-align: center;\n    text-decoration: none;\n    margin-top: 7vw;\n    margin-bottom: 11vw;\n    box-sizing: border-box;\n    border: 2px solid #ff9d2d;\n    border-radius: 50%;\n  }\n  .sidebar_foodButton {\n    background: url('./src/img/food.png') no-repeat center center;\n    background-size: cover;\n  }\n  .sidebar_sportButton {\n    background: url('./src/img/sport.png') no-repeat center center;\n    background-size: cover;\n  }\n  .sidebar_restButton {\n    background: url('./src/img/rest.png') no-repeat center center;\n    background-size: cover;\n  }\n  .sidebar_calendarButton {\n    background: url('./src/img/calendar.png') no-repeat center center;\n    background-size: cover;\n  }\n  .sidebar_userButton {\n    background: url('./src/img/user.png') no-repeat center center;\n    background-size: cover;\n  }\n.sideBarSwipePlaceBig{\n  width:100vw;\n}\n.sideBar_close{\n  position:absolute;\n  left:0;\n  top:0;\n  width:100vw;\n  height:100vh;\n  z-index:998;\n}\n  "],
                        template: "\n<div *ngIf=\"!isOpen\" class=\"sideBar_toggle\" (click)=\"toggle()\"></div>\n\n<div class=\"sideBarContainer\" [ngClass]=\"{sideBarAnime:pushClass, sideBarAnimeBack:pullClass}\" [style.transform]=\"pushClass?'':'translate3d('+lastTouch+'px,0,0)'\" [style.-webkit-transform]=\"pushClass?'':'translate3d('+lastTouch+'px,0,0)'\" (touchmove)=\"swipe($event)\" (touchend)=\"swipe($event)\">\n  <div class=\"sidebar_foodButton sidebar_button\" (touchend)=\"toggle('Food')\">\n    <p>{{'food' | translate}}</p>\n  </div>\n  <div class=\"sidebar_sportButton sidebar_button\" (touchend)=\"toggle('Sport')\">\n    <p>{{'sport' | translate}}</p>\n  </div>\n  <!-- <div class=\"sidebar_restButton sidebar_button\" (touchend)=\"toggle('Rest')\">\n    <p>{{'rest' | translate}}</p>\n  </div> -->\n  <div class=\"sidebar_calendarButton sidebar_button\" (touchend)=\"toggle('Calendar')\">\n    <p>{{'calendar' | translate}}</p>\n  </div>\n  <div class=\"sidebar_userButton sidebar_button\" (touchend)=\"toggle('User')\">\n    <p>{{'settings' | translate}}</p>\n  </div>\n</div>\n<div class=\"sideBarSwipePlace\" #swipePlace [style.opacity]=\"shadowOpacity\" [ngClass]=\"{sideBarSwipePlaceBig: isOpen}\" (touchmove)=\"swipe($event)\" (touchend)=\"swipe($event)\"></div>\n\n<div *ngIf=\"isOpen\" class=\"sideBar_close\" (click)=\"toggle()\"></div>\n  "
                    }), 
                    __metadata('design:paramtypes', [router_6.Router])
                ], SideBar);
                return SideBar;
            }());
            exports_22("SideBar", SideBar);
        }
    }
});
System.register("services/refresh-date/refresh-date.service", ['angular2/core'], function(exports_23, context_23) {
    "use strict";
    var __moduleName = context_23 && context_23.id;
    var core_22;
    var RefreshDateService;
    return {
        setters:[
            function (core_22_1) {
                core_22 = core_22_1;
            }],
        execute: function() {
            RefreshDateService = (function () {
                function RefreshDateService() {
                    var _this = this;
                    this.today = new Date();
                    this.timerMaker();
                    this.refresher();
                    document.addEventListener("deviceready", function () {
                        cordova.plugins.backgroundMode.onactivate = function () {
                            clearTimeout(_this.go);
                            _this.refresher();
                        };
                        cordova.plugins.backgroundMode.ondeactivate = function () {
                            clearTimeout(_this.go);
                            _this.refresher();
                        };
                    }, false);
                }
                RefreshDateService.prototype.timerMaker = function () {
                    this.today = new Date();
                    this.tomorrow = new Date();
                    this.tomorrow.setHours(0, 0, 0, 0);
                    this.tomorrow.setDate(this.today.getDate() + 1);
                    this.timer = this.tomorrow.getTime() - this.today.getTime();
                    console.log("timer " + Math.floor(this.timer / 1000 / 60 / 60) + " hours " + Math.floor(this.timer / 1000 / 60 % 60) + " minutes " + Math.floor(this.timer / 1000 - Math.floor(this.timer / 1000 / 60) * 60) + " seconds");
                };
                RefreshDateService.prototype.refresher = function () {
                    this.go = setTimeout(function () {
                        location.reload();
                    }, this.timer);
                };
                RefreshDateService = __decorate([
                    core_22.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], RefreshDateService);
                return RefreshDateService;
            }());
            exports_23("RefreshDateService", RefreshDateService);
        }
    }
});
System.register("services/admob/admob.service", ['angular2/core'], function(exports_24, context_24) {
    "use strict";
    var __moduleName = context_24 && context_24.id;
    var core_23;
    var AdMobService;
    return {
        setters:[
            function (core_23_1) {
                core_23 = core_23_1;
            }],
        execute: function() {
            AdMobService = (function () {
                function AdMobService() {
                    this.admobidFirst = {};
                    this.admobidInterstitialFirst = {};
                }
                AdMobService.prototype.createBottomBanerFirst = function () {
                    if (/(android)/i.test(navigator.userAgent)) {
                        this.admobidFirst = {
                            banner: 'ca-app-pub-1213024579337881/6216360857' // or DFP format "/6253334/dfp_example_ad"
                        };
                    }
                    else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
                        this.admobidFirst = {
                            banner: 'ca-app-pub-1213024579337881/6216360857' // or DFP format "/6253334/dfp_example_ad"
                        };
                    }
                    else {
                        this.admobidFirst = {
                            banner: 'ca-app-pub-1213024579337881/6216360857' // or DFP format "/6253334/dfp_example_ad"
                        };
                    }
                };
                AdMobService.prototype.addBottomBanerFirst = function () {
                    if (AdMob)
                        AdMob.createBanner({
                            adId: this.admobidFirst['banner'],
                            position: AdMob.AD_POSITION.BOTTOM_CENTER,
                            autoShow: true
                        });
                };
                AdMobService.prototype.createInterstitialFirst = function () {
                    if (/(android)/i.test(navigator.userAgent)) {
                        this.admobidInterstitialFirst = {
                            interstitial: 'ca-app-pub-1213024579337881/1752684853'
                        };
                    }
                    else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
                        this.admobidInterstitialFirst = {
                            interstitial: 'ca-app-pub-1213024579337881/1752684853'
                        };
                    }
                    else {
                        this.admobidInterstitialFirst = {
                            interstitial: 'ca-app-pub-1213024579337881/1752684853'
                        };
                    }
                };
                AdMobService.prototype.prepareInterstitialFirst = function () {
                    if (AdMob)
                        AdMob.prepareInterstitial({ adId: this.admobidInterstitialFirst['interstitial'], autoShow: false });
                };
                AdMobService.prototype.showInterstitialFirst = function () {
                    if (AdMob)
                        AdMob.showInterstitial();
                };
                AdMobService = __decorate([
                    core_23.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], AdMobService);
                return AdMobService;
            }());
            exports_24("AdMobService", AdMobService);
        }
    }
});
System.register("components/opanas/opanas.component", ['angular2/core', 'angular2/router', "components/food-page/food.component", "components/sport-page/sport.component", "components/rest-page/rest.component", "components/calendar-page/calendar.component", "components/user-page/user.component", "components/start-page/start.component", "shared/components/side-bar/side-bar.component", "shared/services/translate/translate.service", "services/food/food.service", "services/sport/sport.service", "services/calenadar/calendar.service", "services/refresh-date/refresh-date.service", "shared/services/storage/storage.service", "services/user/user.service", "services/admob/admob.service"], function(exports_25, context_25) {
    "use strict";
    var __moduleName = context_25 && context_25.id;
    var core_24, router_7, food_component_1, sport_component_1, rest_component_1, calendar_component_1, user_component_1, start_component_1, side_bar_component_1, translate_service_11, food_service_3, sport_service_3, calendar_service_5, refresh_date_service_1, storage_service_5, user_service_8, admob_service_1;
    var OpanasComponent, languages, keysVendor;
    return {
        setters:[
            function (core_24_1) {
                core_24 = core_24_1;
            },
            function (router_7_1) {
                router_7 = router_7_1;
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
            function (calendar_component_1_1) {
                calendar_component_1 = calendar_component_1_1;
            },
            function (user_component_1_1) {
                user_component_1 = user_component_1_1;
            },
            function (start_component_1_1) {
                start_component_1 = start_component_1_1;
            },
            function (side_bar_component_1_1) {
                side_bar_component_1 = side_bar_component_1_1;
            },
            function (translate_service_11_1) {
                translate_service_11 = translate_service_11_1;
            },
            function (food_service_3_1) {
                food_service_3 = food_service_3_1;
            },
            function (sport_service_3_1) {
                sport_service_3 = sport_service_3_1;
            },
            function (calendar_service_5_1) {
                calendar_service_5 = calendar_service_5_1;
            },
            function (refresh_date_service_1_1) {
                refresh_date_service_1 = refresh_date_service_1_1;
            },
            function (storage_service_5_1) {
                storage_service_5 = storage_service_5_1;
            },
            function (user_service_8_1) {
                user_service_8 = user_service_8_1;
            },
            function (admob_service_1_1) {
                admob_service_1 = admob_service_1_1;
            }],
        execute: function() {
            OpanasComponent = (function () {
                function OpanasComponent(_translator, _calendarService, _refreshDateService, _userServe, _AdMobServe, _router) {
                    this._translator = _translator;
                    this._calendarService = _calendarService;
                    this._refreshDateService = _refreshDateService;
                    this._userServe = _userServe;
                    this._AdMobServe = _AdMobServe;
                    this._router = _router;
                    this.sideBarIsOpen = false;
                }
                //config app
                OpanasComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    //cordova plugins setup
                    var onDeviceReady = function () {
                        //keepAwake screen
                        window.plugins.insomnia.keepAwake();
                        //backgound mode
                        cordova.plugins.backgroundMode.enable();
                        cordova.plugins.backgroundMode.setDefaults({ text: 'waiting for you :-)' });
                        //AdMob
                        _this._AdMobServe.createInterstitialFirst();
                        _this._AdMobServe.prepareInterstitialFirst();
                        setTimeout(function () { return _this._AdMobServe.showInterstitialFirst(); }, 20000);
                    };
                    var onBackKeyDown = function () {
                        _this._router.navigate(['Start']);
                    };
                    document.addEventListener("deviceready", onDeviceReady, false);
                    document.addEventListener("backbutton", onBackKeyDown, true);
                    //translator config
                    this._translator.setSupportLanguages(languages);
                    this._translator.setKeys(keysVendor);
                    //basic language of application
                    if (this._userServe.getFirstEnter()) {
                        if (navigator.language.startsWith('ru')) {
                            this._userServe.setLanguage('ru');
                        }
                    }
                    this._translator.setCurrentLanguage(this._userServe.getLanguage());
                    //default language will be use if current language dont has key. it's an optional.
                    this._translator.setDefaultLanguage('en');
                    //check first enter
                    this._userServe.setFirstEnter();
                    this.date = this._calendarService.getCurrentDate();
                };
                OpanasComponent.prototype.ngAfterContentChecked = function () {
                    this.date = this._calendarService.getCurrentDate();
                };
                OpanasComponent.prototype.goCalendar = function () {
                    this._router.navigate(['Calendar']);
                };
                OpanasComponent = __decorate([
                    core_24.Component({
                        selector: 'opanas-app',
                        directives: [router_7.ROUTER_DIRECTIVES, side_bar_component_1.SideBar],
                        providers: [router_7.ROUTER_PROVIDERS, core_24.provide(router_7.LocationStrategy, { useClass: router_7.HashLocationStrategy }), translate_service_11.TranslateService, food_service_3.FoodService, sport_service_3.SportService, calendar_service_5.CalendarService, refresh_date_service_1.RefreshDateService, storage_service_5.StorageService, user_service_8.UserService, admob_service_1.AdMobService],
                        pipes: [translate_service_11.TranslatePipe],
                        styles: ["\n    .header {\n      height: 15vw;\n      width: 100vw;\n    }\n    .container {\n      background: url(./src/img/tempBackground.png) no-repeat center center;\n      width: 100vw;\n      height: 100vh;\n      overflow: hidden;\n    }\n    .calendar {\n      position: absolute;\n      width: 24vw;\n      height: 6vw;\n      left: 38vw;\n      margin-top: 2.5vw;\n      color: #ff9d2d;\n      font-size: 19px;\n      z-index: 10;\n      // border-top: 2px solid #ff9d2d;\n    // border-bottom: 2px solid #ff9d2d;\n      text-align: center;\n    }\n    .line{\n      position: absolute;\n      width:40vw;\n      height: 3px;\n      left:30vw;\n      background: -webkit-linear-gradient(left,rgba(255,0,0,0),rgba(255, 157, 45, 1),rgba(255,0,0,0));\n     background: linear-gradient(to right, rgba(255,0,0,0), rgba(255, 157, 45, 1),rgba(255,0,0,0));\n       z-index: 10;\n    }\n    .line_up {\n      position: absolute;\n      top:2vw;\n    }\n    .line_down {\n      position: absolute;\n      top:8vw;\n    }\n  "],
                        template: "\n<div class=\"container\">\n\n  <div class=\"header\">\n<div class=\"line line_up\"></div>\n  <div *ngIf=\"_userServe.getLanguage()==='en'\" class=\"calendar\" (touchend)=\"goCalendar()\">{{date.getMonth()+1}}/{{date.getDate()}}/{{date.getFullYear()}}</div>\n  <div *ngIf=\"_userServe.getLanguage()==='ru'\" class=\"calendar\" (touchend)=\"goCalendar()\">{{date.getDate()}}/{{date.getMonth()+1}}/{{date.getFullYear()}}</div>\n<div class=\"line line_down\"></div>\n  </div>\n\n  <fm-side-bar [(isOpen)]=\"sideBarIsOpen\"></fm-side-bar>\n  <router-outlet></router-outlet>\n</div>\n\n" }),
                    router_7.RouteConfig([
                        { path: '/', name: 'Start', component: start_component_1.StartComponent, useAsDefault: true },
                        { path: '/food', name: 'Food', component: food_component_1.FoodComponent },
                        { path: '/sport', name: 'Sport', component: sport_component_1.SportComponent },
                        { path: '/rest', name: 'Rest', component: rest_component_1.RestComponent },
                        { path: '/calendar', name: 'Calendar', component: calendar_component_1.CalendarComponent },
                        { path: '/user/...', name: 'User', component: user_component_1.UserComponent },
                        { path: '/*path', redirectTo: ['Start'] }
                    ]), 
                    __metadata('design:paramtypes', [translate_service_11.TranslateService, calendar_service_5.CalendarService, refresh_date_service_1.RefreshDateService, user_service_8.UserService, admob_service_1.AdMobService, router_7.Router])
                ], OpanasComponent);
                return OpanasComponent;
            }());
            exports_25("OpanasComponent", OpanasComponent);
            languages = {
                'en': 'english',
                'ru': 'russian'
            };
            keysVendor = {
                'en': {
                    'food': 'Food',
                    'sport': 'Sport',
                    'rest': 'Rest',
                    'calendar': 'Calendar',
                    'settings': 'Settings',
                    'progress': 'progress',
                    'search': 'search',
                    'weight': 'g',
                    'sport.weight': 'weight',
                    'sport.numbers': 'numbers',
                    'sport.time': 'time',
                    'calories': 'Calories',
                    'protein': 'Protein',
                    'carbohydrates': 'Carbohydrates',
                    'fat': 'Fat',
                    'done': 'Done',
                    'language': 'Language',
                    'create.food': 'Create food',
                    'create.menu': 'Create menu',
                    'choose.menu': 'Choose menu',
                    'choose.training': 'Choose training',
                    'menuName': 'menu name',
                    'trainingName': 'training name',
                    'set': 'set',
                    '+set': '+set',
                    'kg': 'kg',
                    'cm': 'cm',
                    'resp': 'resp',
                    'daily.rate': 'Daily rate',
                    'determine.daily.rate': 'Determine my daily rate',
                    'added.meals': 'Added meals',
                    'meals.name': 'Meals name',
                    'create.exercise': 'Add exercise',
                    'added.exercise': 'Added exercise',
                    'create.training.plan': 'Create training plan',
                    'reset': 'RESET',
                    'stop': 'STOP',
                    'resume': 'RESUME',
                    'start': 'START',
                    'sex': 'Sex',
                    'age': 'Age',
                    'height': 'Height',
                    'mass': 'Weight',
                    'years': 'years',
                    'activity.level': 'Activity level',
                    'point': 'Point',
                    'ccal': 'ccal',
                    'name': 'Name',
                    'menu': 'menu',
                    'minimum': 'minimum or abscence',
                    '3times': '3 times a week',
                    '5times': '5 times a week',
                    '5times.intensity': '5 times a week high intensity',
                    'every.day': 'every day',
                    'every.day.intensity': 'every day intensity or 2 times a day',
                    'lose.weight.intensity': 'lose weight intensity',
                    'lose.weight': 'lose weight',
                    'keep.weight': 'keep weight',
                    'gain.weight': 'gain weight',
                    'January': 'January',
                    'February': 'February',
                    'March': 'March',
                    'April': 'April',
                    'May': 'May',
                    'June': 'June',
                    'July': 'July',
                    'August': 'August',
                    'September': 'September',
                    'October': 'October',
                    'November': 'November',
                    'December': 'December',
                    'Sun': 'Sun',
                    'Mon': 'Mon',
                    'Tue': 'Tue',
                    'Wed': 'Wed',
                    'Thu': 'Thu',
                    'Fri': 'Fri',
                    'Sat': 'Sat',
                    'today': 'Today'
                },
                'ru': {
                    'food': 'Питание',
                    'sport': 'Тренировки',
                    'rest': 'Отдых',
                    'calendar': 'Календарь',
                    'settings': 'Настройки',
                    'progress': 'Прогресс',
                    'search': 'поиск',
                    'weight': 'г',
                    'sport.weight': 'какой вес',
                    'sport.numbers': 'сколько раз',
                    'sport.time': 'время',
                    'calories': 'Калории',
                    'protein': 'Белки',
                    'carbohydrates': 'Углеводы',
                    'fat': 'Жиры',
                    'language': 'Язык',
                    'done': 'Готово',
                    'create.food': 'Добавить блюдо',
                    'create.menu': 'Создать новое меню',
                    'choose.menu': 'Выбрать меню',
                    'choose.training': 'Выбрать тренировку',
                    'menuName': 'название меню',
                    'trainingName': 'название тренировки',
                    'set': 'сет',
                    '+set': '+сет',
                    'kg': 'кг',
                    'cm': 'см',
                    'resp': 'повт',
                    'daily.rate': 'Cуточная норма',
                    'determine.daily.rate': 'Определить мою суточную норму',
                    'added.meals': 'Добавленные блюда',
                    'meals.name': 'Название',
                    'create.exercise': 'Добавить упражнение',
                    'added.exercise': 'Добавленные упражнения',
                    'create.training.plan': 'Создать программу',
                    'reset': 'СБРОС',
                    'stop': 'СТОП',
                    'resume': 'ПУСК',
                    'start': 'ПУСК',
                    'sex': 'Пол',
                    'age': 'Возраст',
                    'height': 'Рост',
                    'mass': 'Вес',
                    'years': 'лет',
                    'activity.level': 'Уровень активности',
                    'point': 'Цель',
                    'ccal': 'ккал',
                    'name': 'Название',
                    'menu': 'меню',
                    'minimum': 'минимум или отсутствие',
                    '3times': '3 раза в неделю',
                    '5times': '5 раз в неделю',
                    '5times.intensity': 'интенсивно 5 раз в неделю',
                    'every.day': 'каждый день',
                    'every.day.intensity': 'интенсивно каждый день или 2 раза в день',
                    'lose.weight.intensity': 'интенсивно худеть',
                    'lose.weight': 'худеть',
                    'keep.weight': 'сохранять текущий вес',
                    'gain.weight': 'набирать',
                    'January': 'Январь',
                    'February': 'Февраль',
                    'March': 'Март',
                    'April': 'Апрель',
                    'May': 'Май',
                    'June': 'Июнь',
                    'July': 'Июль',
                    'August': 'Август',
                    'September': 'Сентябрь',
                    'October': 'Октябрь',
                    'November': 'Ноябрь',
                    'December': 'Декабрь',
                    'Sun': 'Вс',
                    'Mon': 'Пн',
                    'Tue': 'Вт',
                    'Wed': 'Ср',
                    'Thu': 'Чт',
                    'Fri': 'Пт',
                    'Sat': 'Сб',
                    'today': 'Сегодня'
                }
            };
        }
    }
});
System.register("main", ['angular2/platform/browser', "components/opanas/opanas.component"], function(exports_26, context_26) {
    "use strict";
    var __moduleName = context_26 && context_26.id;
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
System.register("shared/pipes/round/round.pipe", ['angular2/core'], function(exports_27, context_27) {
    "use strict";
    var __moduleName = context_27 && context_27.id;
    var core_25;
    var RoundPipe;
    return {
        setters:[
            function (core_25_1) {
                core_25 = core_25_1;
            }],
        execute: function() {
            RoundPipe = (function () {
                function RoundPipe() {
                }
                RoundPipe.prototype.transform = function (value) {
                    if (value) {
                        return Math.round(value);
                    }
                };
                RoundPipe = __decorate([
                    core_25.Pipe({
                        name: 'round',
                        pure: false
                    }), 
                    __metadata('design:paramtypes', [])
                ], RoundPipe);
                return RoundPipe;
            }());
            exports_27("RoundPipe", RoundPipe);
        }
    }
});
//# sourceMappingURL=main.js.map