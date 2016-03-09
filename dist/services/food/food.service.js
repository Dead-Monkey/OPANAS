System.register(['angular2/core', '../../shared/services/storage/storage.service', '../user/user.service'], function(exports_1, context_1) {
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
    var core_1, storage_service_1, user_service_1;
    var FoodService, foodVendor;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
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
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [storage_service_1.StorageService, user_service_1.UserService])
                ], FoodService);
                return FoodService;
            }());
            exports_1("FoodService", FoodService);
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
//# sourceMappingURL=food.service.js.map