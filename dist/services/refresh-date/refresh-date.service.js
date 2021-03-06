System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var RefreshDateService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
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
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], RefreshDateService);
                return RefreshDateService;
            }());
            exports_1("RefreshDateService", RefreshDateService);
        }
    }
});
//# sourceMappingURL=refresh-date.service.js.map