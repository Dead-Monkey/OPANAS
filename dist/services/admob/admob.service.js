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
    var AdMobService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AdMobService = (function () {
                function AdMobService() {
                    this.admobidFirst = {};
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
                            adId: this.admobidFirst.banner,
                            position: AdMob.AD_POSITION.BOTTOM_CENTER,
                            autoShow: true
                        });
                };
                AdMobService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], AdMobService);
                return AdMobService;
            }());
            exports_1("AdMobService", AdMobService);
        }
    }
});
//# sourceMappingURL=admob.service.js.map