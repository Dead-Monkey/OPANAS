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
    var SportService, sportVendor;
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
                            for (var _b = 0, container_1 = container; _b < container_1.length; _b++) {
                                var itemContainer = container_1[_b];
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
                SportService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [storage_service_1.StorageService, user_service_1.UserService])
                ], SportService);
                return SportService;
            }());
            exports_1("SportService", SportService);
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
//# sourceMappingURL=sport.service.js.map