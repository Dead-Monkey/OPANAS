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
    var UserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
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
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [storage_service_1.StorageService])
                ], UserService);
                return UserService;
            }());
            exports_1("UserService", UserService);
        }
    }
});
//# sourceMappingURL=user.service.js.map