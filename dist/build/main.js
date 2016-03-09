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
                }
                UserService.prototype.getLanguage = function () {
                    return this.language;
                };
                UserService.prototype.setLanguage = function (language) {
                    this.language = language;
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
                                    var rem = this.food.indexOf(itemContainer);
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
                    "calories": 10,
                    "protein": 10,
                    "fat": 10,
                    "carbohydrates": 10
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
System.register("shared/pipes/simple-search/simple-search.pipe", ['angular2/core'], function(exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var core_7;
    var SimpleSearch;
    return {
        setters:[
            function (core_7_1) {
                core_7 = core_7_1;
            }],
        execute: function() {
            SimpleSearch = (function () {
                function SimpleSearch() {
                }
                SimpleSearch.prototype.transform = function (value, _a) {
                    var field = _a[0], field2 = _a[1], letter = _a[2];
                    if (field2) {
                        return value.filter(function (item) { return item[field][field2].toLowerCase().includes(letter.toLowerCase()); });
                    }
                    else {
                        return value.filter(function (item) { return item[field].toLowerCase().includes(letter.toLowerCase()); });
                    }
                };
                SimpleSearch = __decorate([
                    core_7.Pipe({
                        name: 'simpleSearch',
                        pure: false
                    }), 
                    __metadata('design:paramtypes', [])
                ], SimpleSearch);
                return SimpleSearch;
            }());
            exports_8("SimpleSearch", SimpleSearch);
        }
    }
});
System.register("components/plus-bar/plus-bar.component", ['angular2/core', "services/food/food.service", "shared/pipes/simple-search/simple-search.pipe", "shared/services/translate/translate.service"], function(exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var core_8, food_service_1, simple_search_pipe_1, translate_service_4;
    var PlusComponent;
    return {
        setters:[
            function (core_8_1) {
                core_8 = core_8_1;
            },
            function (food_service_1_1) {
                food_service_1 = food_service_1_1;
            },
            function (simple_search_pipe_1_1) {
                simple_search_pipe_1 = simple_search_pipe_1_1;
            },
            function (translate_service_4_1) {
                translate_service_4 = translate_service_4_1;
            }],
        execute: function() {
            PlusComponent = (function () {
                function PlusComponent(_foodServe, _translateService) {
                    this._foodServe = _foodServe;
                    this._translateService = _translateService;
                    this.isOpen = true;
                    this.isOpenChange = new core_8.EventEmitter();
                    this.item = this._foodServe.getUserFood();
                    this.model = {};
                }
                PlusComponent.prototype.ngOnInit = function () {
                    this.refreshModel();
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
                PlusComponent.prototype.getFood = function () {
                    console.log(this._foodServe.getUserFood());
                };
                PlusComponent.prototype.setFood = function (food) {
                    this._foodServe.setUserFood(food);
                    this.item = this._foodServe.getUserFood();
                };
                PlusComponent.prototype.removeFood = function () {
                    this.item = this._foodServe.getUserFood();
                    console.log(this.item);
                };
                __decorate([
                    core_8.Input(), 
                    __metadata('design:type', Boolean)
                ], PlusComponent.prototype, "isOpen", void 0);
                __decorate([
                    core_8.Output(), 
                    __metadata('design:type', Object)
                ], PlusComponent.prototype, "isOpenChange", void 0);
                PlusComponent = __decorate([
                    core_8.Component({
                        selector: 'op-plus',
                        directives: [],
                        providers: [],
                        pipes: [translate_service_4.TranslatePipe, simple_search_pipe_1.SimpleSearch],
                        styles: ["\n.container {\n  position: fixed;\n  left: 5vw;\n  top: 15vw;\n  background-color: silver;\n  width:90vw;\n  height: 87vh;\n  z-index: 10;\n}\n.plusBar{\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 20vw;\n  height: 15vw;\n  background-color: blue;\n  overflow: hidden;\n}\n.closeMe{\n  position: fixed;\n  left: 0;\n  top: 0;\n  background-color: black;\n  opacity: 0.5;\n  width: 100vw;\n  height: 100vh;\n  z-index: 9;\n\n}\n.food_form {\n  position: relative;\n  margin: 5vw;\n  height: 10vw;\n}\n.food_inputFood {\n  position: absolute;\n  height: 10vw;\n  width: 60vw;\n  left: 20vw;\n  background-color: rgba(49, 51, 61, 0.3);\n  box-sizing: border-box;\n  border: 1.5vw solid #0C1017;\n  border-radius: 2vw;\n}\n.food_inputCalories {\n  position: absolute;\n  height: 10vw;\n  width: 16vw;\n  left: 50vw;\n  top:11vw;\n  background-color: rgba(49, 51, 61, 0.3);\n  box-sizing: border-box;\n  color: #0d0e15;\n  border: 1.5vw solid #0C1017;\n  border-radius: 2vw;\n}\n.food_inputProtein {\n  position: absolute;\n  height: 10vw;\n  width: 16vw;\n  left: 50vw;\n  top:22vw;\n  background-color: rgba(49, 51, 61, 0.3);\n  box-sizing: border-box;\n  color: #0d0e15;\n  border: 1.5vw solid #0C1017;\n  border-radius: 2vw;\n}\n.food_inputFat {\n  position: absolute;\n  height: 10vw;\n  width: 16vw;\n  left: 50vw;\n  top:33vw;\n  background-color: rgba(49, 51, 61, 0.3);\n  box-sizing: border-box;\n  color: #0d0e15;\n  border: 1.5vw solid #0C1017;\n  border-radius: 2vw;\n}\n.food_inputCarbohydrates {\n  position: absolute;\n  height: 10vw;\n  width: 16vw;\n  left: 50vw;\n  top:44vw;\n  background-color: rgba(49, 51, 61, 0.3);\n  box-sizing: border-box;\n  color: #0d0e15;\n  border: 1.5vw solid #0C1017;\n  border-radius: 2vw;\n}\n.food_inputButton_off {\n  position: absolute;\n  top: 28vh;\n  right: 0;\n  height: 10vw;\n  width: 12vw;\n  background: url('./src/img/check-off.png') no-repeat center center;\n  background-size: cover;\n  box-sizing: border-box;\n  color: #0d0e15;\n  border: 1.5vw solid #0C1017;\n  border-radius: 2vw;\n}\n.food_inputButton_on {\n  position: absolute;\n  top:28vh;\n  right: 0;\n  height: 10vw;\n  width: 12vw;\n  background: url('./src/img/check-on.png') no-repeat center center;\n  background-size: cover;\n  box-sizing: border-box;\n  color: #0d0e15;\n  border: 1.5vw solid #0C1017;\n  border-radius: 2vw;\n}\n.tmp{\n  background-color: green;\n  width: 100%;\n}\n    "],
                        template: "\n<div class=\"plusBar\" (click)=\"toggle()\">PLUS</div>\n<div class=\"container\" *ngIf=\"isOpen\">\n  <div>{{item?.name}}</div>\n  <div class=\"tmp\" (click)=\"removeFood()\">remove</div>\n  <form class=\"food_form\" (ngSubmit)=\"onSubmit(foodForm)\" #foodForm=\"ngForm\">\n\n    <label style=\"left:0; border:none;\" class=\"food_inputFood\" for=\"name\">foodName</label>\n    <input class=\"food_inputFood\" required [(ngModel)]=\"model.name\" ngControl=\"name\" #name=\"ngForm\">\n\n    <label style=\"left:0; border:none;\" class=\"food_inputCalories\" for=\"calories\">calories</label>\n    <input type=\"number\" min=\"0\" class=\"food_inputCalories\" required [(ngModel)]=\"model.calories\" ngControl=\"calories\" #calories=\"ngForm\">\n\n    <label style=\"left:0; border:none;\" class=\"food_inputProtein\" for=\"protein\">protein</label>\n    <input type=\"number\" min=\"0\" class=\"food_inputProtein\" required [(ngModel)]=\"model.protein\" ngControl=\"protein\" #protein=\"ngForm\">\n\n    <label style=\"left:0; border:none;\" class=\"food_inputFat\" for=\"fat\">fat</label>\n    <input type=\"number\" min=\"0\" class=\"food_inputFat\" required [(ngModel)]=\"model.fat\" ngControl=\"fat\" #fat=\"ngForm\">\n\n    <label style=\"left:0; border:none;\" class=\"food_inputCarbohydrates\" for=\"carbohydrates\">carbohydrates</label>\n    <input type=\"number\" min=\"0\" class=\"food_inputCarbohydrates\" required [(ngModel)]=\"model.carbohydrates\" ngControl=\"carbohydrates\" #carbohydrates=\"ngForm\">\n\n    <button type=\"submit\" [ngClass]=\"{food_inputButton_off: !checkForm(name.value), food_inputButton_on: checkForm(name.value) }\" [disabled]=\"!checkForm(name.value)\"></button>\n\n  </form>\n</div>\n<div *ngIf=\"isOpen\" class=\"closeMe\" (click)=\"toggle()\"></div>\n    "
                    }), 
                    __metadata('design:paramtypes', [food_service_1.FoodService, translate_service_4.TranslateService])
                ], PlusComponent);
                return PlusComponent;
            }());
            exports_9("PlusComponent", PlusComponent);
        }
    }
});
System.register("services/calenadar/calendar.service", ['angular2/core', "shared/services/storage/storage.service"], function(exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var core_9, storage_service_2;
    var CalendarService;
    return {
        setters:[
            function (core_9_1) {
                core_9 = core_9_1;
            },
            function (storage_service_2_1) {
                storage_service_2 = storage_service_2_1;
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
                    core_9.Injectable(), 
                    __metadata('design:paramtypes', [storage_service_2.StorageService])
                ], CalendarService);
                return CalendarService;
            }());
            exports_10("CalendarService", CalendarService);
        }
    }
});
System.register("shared/directives/swipeHolder/swipe-holder.directive", ['angular2/core'], function(exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    var core_10;
    var SwipeHoldertDirective;
    return {
        setters:[
            function (core_10_1) {
                core_10 = core_10_1;
            }],
        execute: function() {
            SwipeHoldertDirective = (function () {
                function SwipeHoldertDirective(el) {
                    this.fmSwipe = new core_10.EventEmitter();
                    this.fmSwipeRight = new core_10.EventEmitter();
                    this.fmSwipeLeft = new core_10.EventEmitter();
                    this.fmSwipeDown = new core_10.EventEmitter();
                    this.fmSwipeUp = new core_10.EventEmitter();
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
                    core_10.Output(), 
                    __metadata('design:type', Object)
                ], SwipeHoldertDirective.prototype, "fmSwipe", void 0);
                __decorate([
                    core_10.Output(), 
                    __metadata('design:type', Object)
                ], SwipeHoldertDirective.prototype, "fmSwipeRight", void 0);
                __decorate([
                    core_10.Output(), 
                    __metadata('design:type', Object)
                ], SwipeHoldertDirective.prototype, "fmSwipeLeft", void 0);
                __decorate([
                    core_10.Output(), 
                    __metadata('design:type', Object)
                ], SwipeHoldertDirective.prototype, "fmSwipeDown", void 0);
                __decorate([
                    core_10.Output(), 
                    __metadata('design:type', Object)
                ], SwipeHoldertDirective.prototype, "fmSwipeUp", void 0);
                SwipeHoldertDirective = __decorate([
                    core_10.Directive({
                        selector: '[fmSwipe]',
                        host: {
                            '(touchstart)': 'start($event)',
                            '(touchmove)': 'move($event)',
                            '(touchend)': 'end($event)'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_10.ElementRef])
                ], SwipeHoldertDirective);
                return SwipeHoldertDirective;
            }());
            exports_11("SwipeHoldertDirective", SwipeHoldertDirective);
        }
    }
});
System.register("components/food-page/food.component", ['angular2/core', "shared/services/translate/translate.service", "shared/components/progress-bar/progress-bar.component", "components/plus-bar/plus-bar.component", "services/food/food.service", "shared/pipes/simple-search/simple-search.pipe", "services/calenadar/calendar.service", "services/user/user.service", "shared/directives/swipeHolder/swipe-holder.directive"], function(exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    var core_11, translate_service_5, progress_bar_component_1, plus_bar_component_1, food_service_2, simple_search_pipe_2, calendar_service_1, user_service_2, swipe_holder_directive_1;
    var FoodComponent;
    return {
        setters:[
            function (core_11_1) {
                core_11 = core_11_1;
            },
            function (translate_service_5_1) {
                translate_service_5 = translate_service_5_1;
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
            function (user_service_2_1) {
                user_service_2 = user_service_2_1;
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
                    this.language = this._userServe.getLanguage();
                    this.foodContainer = this._foodServe.getAllFood();
                    this.pickedFoodContainer = this._calendarService.getDailyFood(this.currentDate);
                    //4 calculate progress-bar
                    for (var _i = 0, _a = this.pickedFoodContainer; _i < _a.length; _i++) {
                        var food = _a[_i];
                        this.calculateFood(food);
                    }
                    console.log(this.pickedFoodContainer);
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
                    this.pickedFood = Object.assign({}, food);
                    this.model['name'] = food.name[this.language];
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
                    core_11.Component({
                        selector: 'op-food',
                        directives: [progress_bar_component_1.ProgressBar, plus_bar_component_1.PlusComponent, swipe_holder_directive_1.SwipeHoldertDirective],
                        providers: [],
                        pipes: [translate_service_5.TranslatePipe, simple_search_pipe_2.SimpleSearch],
                        styles: ["\n\n  .food_form {\n    position: relative;\n    margin: 5vw;\n    height: 10vw;\n  }\n  .food_inputFood {\n    position: absolute;\n    height: 10vw;\n    width: 60vw;\n    background-color: rgba(49, 51, 61, 0.3);\n    box-sizing: border-box;\n    border: 1.5vw solid #0C1017;\n    border-radius: 2vw;\n  }\n  .food_inputWeight {\n    position: absolute;\n    height: 10vw;\n    width: 16vw;\n    left: 61vw;\n    background-color: rgba(49, 51, 61, 0.3);\n    box-sizing: border-box;\n    color: #0d0e15;\n    border: 1.5vw solid #0C1017;\n    border-radius: 2vw;\n  }\n  .food_inputButton_off {\n    position: absolute;\n    right: 0;\n    height: 10vw;\n    width: 12vw;\n    background: url('./src/img/check-off.png') no-repeat center center;\n    background-size: cover;\n    box-sizing: border-box;\n    color: #0d0e15;\n    border: 1.5vw solid #0C1017;\n    border-radius: 2vw;\n  }\n  .food_inputButton_on {\n    position: absolute;\n    right: 0;\n    height: 10vw;\n    width: 12vw;\n    background: url('./src/img/check-on.png') no-repeat center center;\n    background-size: cover;\n    box-sizing: border-box;\n    color: #0d0e15;\n    border: 1.5vw solid #0C1017;\n    border-radius: 2vw;\n  }\n\n  .food_serchContainer {\n    position: absolute;\n    background-color: #aaa;\n    width: 60vw;\n    left: 0;\n    right: 10px;\n    height: 200px;\n    top: 27px;\n    overflow-y: scroll;\n  }\n  .food_list {\n    margin: 5vw;\n    width: 90vw;\n    height: 60vw;\n    overflow-y: scroll;\n  }\n  .food_listItem {\n    float:left;\n    margin-bottom: 2vw;\n    height: 12vw;\n    width: 55vw;\n    line-height: 12vw;\n    box-sizing: border-box;\n    background-color: #3f414a;\n    color: #ff9d2d;\n    font-size: 6vw;\n    text-align: center;\n    border-radius: 2vw;\n    line-height: 12vw;\n\n  }\n  .food_listWeight {\n    float:left;\n    margin-left: 2vw;\n    margin-right: 2vw;\n    height: 12vw;\n    width: 15vw;\n    line-height: 12vw;\n    background-color: #3f414a;\n    box-sizing: border-box;\n    color: #ff9d2d;\n    font-size: 6vw;\n    text-align: center;\n    border-radius: 2vw;\n    border: none;\n  }\n\n  .food_listButton_on {\n    float:left;\n    height: 12vw;\n    width: 12vw;\n    background: url('./src/img/check-on.png') no-repeat center center;\n    background-color: #3f414a;\n    background-size: cover;\n    box-sizing: border-box;\n    color: #0d0e15;\n    border-radius: 2vw;\n  }\n  .food_listButton_off {\n    float:left;\n    height: 12vw;\n    width: 12vw;\n    background: url('./src/img/check-off.png') no-repeat center center;\n    background-color: #3f414a;\n    background-size: cover;\n    box-sizing: border-box;\n    color: #0d0e15;\n    border-radius: 2vw;\n  }\n    "],
                        template: "\n<op-plus [(isOpen)]=\"plusIsOpen\"></op-plus>\n<fm-progress-bar [name]=\"'calories'\" [mainLine]=\"totalFood.calories.full\" [secondLine]=\"totalFood.calories.maybe\"></fm-progress-bar>\n<fm-progress-bar [name]=\"'protein'\" [mainLine]=\"totalFood.protein.full\" [secondLine]=\"totalFood.protein.maybe\"></fm-progress-bar>\n<fm-progress-bar [name]=\"'fat'\" [mainLine]=\"totalFood.fat.full\" [secondLine]=\"totalFood.fat.maybe\"></fm-progress-bar>\n<fm-progress-bar [name]=\"'carbohydrates'\" [mainLine]=\"totalFood.carbohydrates.full\" [secondLine]=\"totalFood.carbohydrates.maybe\"></fm-progress-bar>\n\n<form class=\"food_form\" (ngSubmit)=\"onSubmit(foodForm)\" #foodForm=\"ngForm\">\n\n  <label for=\"foodName\"></label>\n  <input class=\"food_inputFood\" required [(ngModel)]=\"model.name\" ngControl=\"name\" #name=\"ngForm\" (keyup)=\"pickFoodInput(model.name)\">\n\n  <label for=\"foodWeight\"></label>\n  <input type=\"number\" min=\"1\" class=\"food_inputWeight\" required [(ngModel)]=\"model.weight\" ngControl=\"weight\" #weight=\"ngForm\">\n\n  <button type=\"submit\" [ngClass]=\"{food_inputButton_off: (!foodForm.form.valid || !correctFood || !weight.value), food_inputButton_on: (foodForm.form.valid && correctFood && weight.value )}\" [disabled]=\"!foodForm.form.valid || !correctFood\"></button>\n\n  <div *ngIf=\"name.valid\" class=\"food_serchContainer\">\n    <div class=\"food_listItem\" *ngFor=\"#item of foodContainer  | simpleSearch :'name':language : name.value; #i = index;\" (click)=\"pickFood(item);\">\n      {{item?.name[language]}}\n    </div>\n  </div>\n</form>\n\n<div class=\"food_list\">\n  <div *ngFor=\"#item of pickedFoodContainer; #i = index\" fmSwipe (fmSwipeLeft)=\"removeFodd(i, item)\" (fmSwipeRight)=\"removeFodd(i, item)\">\n\n    <div class=\"food_listItem\">\n      {{item?.name[language]}}\n    </div>\n    <input class=\"food_listWeight\" type=\"number\" min=\"1\" [(ngModel)]=\"item.weight\">\n\n    <div [ngClass]=\"{food_listButton_off: !item.picked, food_listButton_on: item.picked}\" (click)=\"checkBoxToggle(item)\"></div>\n\n  </div>\n</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [food_service_2.FoodService, calendar_service_1.CalendarService, user_service_2.UserService])
                ], FoodComponent);
                return FoodComponent;
            }());
            exports_12("FoodComponent", FoodComponent);
        }
    }
});
System.register("components/sport-page/sport.component", ['angular2/core', "shared/services/translate/translate.service"], function(exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    var core_12, translate_service_6;
    var SportComponent;
    return {
        setters:[
            function (core_12_1) {
                core_12 = core_12_1;
            },
            function (translate_service_6_1) {
                translate_service_6 = translate_service_6_1;
            }],
        execute: function() {
            SportComponent = (function () {
                function SportComponent() {
                }
                SportComponent = __decorate([
                    core_12.Component({
                        selector: 'op-sport',
                        directives: [],
                        providers: [],
                        pipes: [translate_service_6.TranslatePipe],
                        styles: [],
                        template: "\n    <h1 class=\"primary\">{{\"sport-page.title\" | translate}}</h1>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], SportComponent);
                return SportComponent;
            }());
            exports_13("SportComponent", SportComponent);
        }
    }
});
System.register("components/rest-page/rest.component", ['angular2/core'], function(exports_14, context_14) {
    "use strict";
    var __moduleName = context_14 && context_14.id;
    var core_13;
    var RestComponent;
    return {
        setters:[
            function (core_13_1) {
                core_13 = core_13_1;
            }],
        execute: function() {
            RestComponent = (function () {
                function RestComponent() {
                }
                RestComponent = __decorate([
                    core_13.Component({
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
            exports_14("RestComponent", RestComponent);
        }
    }
});
System.register("components/start-page/start.component", ['angular2/core', 'angular2/router'], function(exports_15, context_15) {
    "use strict";
    var __moduleName = context_15 && context_15.id;
    var core_14, router_1;
    var StartComponent;
    return {
        setters:[
            function (core_14_1) {
                core_14 = core_14_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            StartComponent = (function () {
                function StartComponent() {
                }
                StartComponent = __decorate([
                    core_14.Component({
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
            exports_15("StartComponent", StartComponent);
        }
    }
});
System.register("shared/components/side-bar/side-bar.component", ['angular2/core', 'angular2/router', "shared/directives/swipeHolder/swipe-holder.directive"], function(exports_16, context_16) {
    "use strict";
    var __moduleName = context_16 && context_16.id;
    var core_15, router_2, swipe_holder_directive_2;
    var SideBar;
    return {
        setters:[
            function (core_15_1) {
                core_15 = core_15_1;
            },
            function (router_2_1) {
                router_2 = router_2_1;
            },
            function (swipe_holder_directive_2_1) {
                swipe_holder_directive_2 = swipe_holder_directive_2_1;
            }],
        execute: function() {
            SideBar = (function () {
                function SideBar() {
                    this.isOpenChange = new core_15.EventEmitter();
                }
                SideBar.prototype.toggle = function () {
                    this.isOpen = !this.isOpen;
                    this.isOpenChange.emit(this.isOpen);
                };
                __decorate([
                    core_15.Input(), 
                    __metadata('design:type', Boolean)
                ], SideBar.prototype, "isOpen", void 0);
                __decorate([
                    core_15.Output(), 
                    __metadata('design:type', Object)
                ], SideBar.prototype, "isOpenChange", void 0);
                SideBar = __decorate([
                    core_15.Component({
                        selector: 'fm-side-bar',
                        directives: [router_2.ROUTER_DIRECTIVES, swipe_holder_directive_2.SwipeHoldertDirective],
                        providers: [],
                        pipes: [],
                        styles: ["\n    .sideBarContainer {\n    position: absolute;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: space-around;\n    align-items: center;\n    height: 100vh;\n    width: 70vw;\n    left: 0;\n    top: 0;\n    z-index: 999;\n    background-color: gray;\n  }\n  .sideBar_toggle {\n    position: absolute;\n    top:0;\n    left:5vw;\n    background: url('./src/img/menu-icon.png') no-repeat center center;\n    background-size: cover;\n    box-sizing: border-box;\n    width: 15vw;\n    height: 15vw;\n  }\n  .sideBarSwipePlace {\n    position: fixed;\n    top:0;\n    left:0;\n    // background-color: silver;\n    // opacity:0.5;\n    height:100vh;\n    width:10vw;\n    z-index: 999;\n  }\n  .sideBarShadow {\n    position: absolute;\n    height: 100vh;\n    width: 30vw;\n    left: 70vw;\n    top: 0;\n    background-color: black;\n    opacity: 0.5;\n    z-index:998;\n  }\n  "], template: "\n<div class=\"sideBar_toggle\" (click)=\"toggle()\"></div>\n\n<div class=\"sideBarContainer\" *ngIf=\"isOpen\" fmSwipe (fmSwipeLeft)=\"toggle()\" (fmSwipeRight)=\"toggle()\">\n  <a [routerLink]=\"['Food']\">\n     {{\"opanas.router.food\"}}\n  </a>\n  <a [routerLink]=\"['Sport']\">\n     {{\"opanas.router.sport\"}}\n  </a> <a [routerLink]=\"['Rest']\">\n     {{\"opanas.router.rest\"}}\n  </a>\n  <div class=\"sideBarShadow\" (click)=\"toggle()\"></div>\n</div>\n\n<div *ngIf=\"!isOpen\" class=\"sideBarSwipePlace\" fmSwipe (fmSwipeLeft)=\"toggle()\" (fmSwipeRight)=\"toggle()\"></div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], SideBar);
                return SideBar;
            }());
            exports_16("SideBar", SideBar);
        }
    }
});
System.register("services/refresh-date/refresh-date.service", ['angular2/core'], function(exports_17, context_17) {
    "use strict";
    var __moduleName = context_17 && context_17.id;
    var core_16;
    var RefreshDateService;
    return {
        setters:[
            function (core_16_1) {
                core_16 = core_16_1;
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
                    core_16.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], RefreshDateService);
                return RefreshDateService;
            }());
            exports_17("RefreshDateService", RefreshDateService);
        }
    }
});
System.register("components/opanas/opanas.component", ['angular2/core', 'angular2/router', "components/food-page/food.component", "components/sport-page/sport.component", "components/rest-page/rest.component", "components/start-page/start.component", "shared/components/side-bar/side-bar.component", "shared/services/translate/translate.service", "services/food/food.service", "services/calenadar/calendar.service", "services/refresh-date/refresh-date.service", "shared/services/storage/storage.service", "services/user/user.service"], function(exports_18, context_18) {
    "use strict";
    var __moduleName = context_18 && context_18.id;
    var core_17, router_3, food_component_1, sport_component_1, rest_component_1, start_component_1, side_bar_component_1, translate_service_7, food_service_3, calendar_service_2, refresh_date_service_1, storage_service_3, user_service_3;
    var OpanasComponent, languages, keysVendor;
    return {
        setters:[
            function (core_17_1) {
                core_17 = core_17_1;
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
            function (translate_service_7_1) {
                translate_service_7 = translate_service_7_1;
            },
            function (food_service_3_1) {
                food_service_3 = food_service_3_1;
            },
            function (calendar_service_2_1) {
                calendar_service_2 = calendar_service_2_1;
            },
            function (refresh_date_service_1_1) {
                refresh_date_service_1 = refresh_date_service_1_1;
            },
            function (storage_service_3_1) {
                storage_service_3 = storage_service_3_1;
            },
            function (user_service_3_1) {
                user_service_3 = user_service_3_1;
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
                    core_17.Component({
                        selector: 'opanas-app',
                        directives: [router_3.ROUTER_DIRECTIVES, side_bar_component_1.SideBar],
                        providers: [router_3.ROUTER_PROVIDERS, core_17.provide(router_3.LocationStrategy, { useClass: router_3.HashLocationStrategy }), translate_service_7.TranslateService, food_service_3.FoodService, calendar_service_2.CalendarService, refresh_date_service_1.RefreshDateService, storage_service_3.StorageService, user_service_3.UserService],
                        pipes: [translate_service_7.TranslatePipe],
                        styles: ["\n    .header{\n    height: 15vw;\n    width: 100vw;\n    }\n\t\t.container {\n      background: url(./src/img/tempBackground.png) no-repeat center center;\n      width: 100%;\n      height: 100%;\n      overflow: hidden;\n    }\n\n  .temporary {\n    position: absolute;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: center;\n    align-items: center;\n    background-color: green;\n    right: 40vw;\n    top: 40;\n    height: 50px;\n    width: 100px;\n    opacity: 0.3;\n  }\n  "],
                        template: "\n<div class=\"container\">\n\n  <div class=\"header\">\n    <div class=\"temporary\">\n      <div (click)=\"goEn()\">english</div>\n      <div (click)=\"goRu()\">russian</div>\n      <div (click)=\"bla()\">reload</div>\n\n    </div>\n  </div>\n\n  <fm-side-bar [(isOpen)]=\"sideBarIsOpen\"></fm-side-bar>\n  <router-outlet></router-outlet>\n</div>\n\n" }),
                    router_3.RouteConfig([
                        { path: '/', name: 'Start', component: start_component_1.StartComponent, useAsDefault: true },
                        { path: '/food', name: 'Food', component: food_component_1.FoodComponent },
                        { path: '/sport', name: 'Sport', component: sport_component_1.SportComponent },
                        { path: '/rest', name: 'Rest', component: rest_component_1.RestComponent },
                        { path: '/*path', redirectTo: ['Start'] }
                    ]), 
                    __metadata('design:paramtypes', [translate_service_7.TranslateService, calendar_service_2.CalendarService, refresh_date_service_1.RefreshDateService])
                ], OpanasComponent);
                return OpanasComponent;
            }());
            exports_18("OpanasComponent", OpanasComponent);
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
System.register("main", ['angular2/platform/browser', "components/opanas/opanas.component"], function(exports_19, context_19) {
    "use strict";
    var __moduleName = context_19 && context_19.id;
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