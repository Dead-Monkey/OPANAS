System.register(['angular2/core', '../../shared/services/storage/storage.service', '../user/user.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, storage_service_1, user_service_1, router_1;
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
            },
            function (router_1_1) {
                router_1 = router_1_1;
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
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [storage_service_1.StorageService, user_service_1.UserService, router_1.Router])
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
//# sourceMappingURL=sport.service.js.map