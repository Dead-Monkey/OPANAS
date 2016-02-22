System.register(['angular2/core'], function(exports_1) {
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
    var TranslateService, keysVendor;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TranslateService = (function () {
                function TranslateService() {
                    this.defaultLenguage = 'en';
                    this.language = 'en';
                    this.keys = keysVendor;
                }
                TranslateService.prototype.setLanguage = function (lang) {
                    this.language = lang;
                    return this.language;
                };
                TranslateService.prototype.getTranslate = function (word) {
                    var res = '';
                    for (var key in this.keys[this.language]) {
                        if (this.keys[this.language].hasOwnProperty(word)) {
                            res = this.keys[this.language][word];
                        }
                    }
                    return "" + res;
                };
                TranslateService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], TranslateService);
                return TranslateService;
            })();
            exports_1("TranslateService", TranslateService);
            keysVendor = {
                'en': {
                    'opanas.router.food': 'food',
                    'opanas.router.sport': 'sport',
                    'opanas.router.rest': 'food'
                },
                'ru': {
                    'opanas.router.food': 'еда',
                    'opanas.router.sport': 'спорт',
                    'opanas.router.rest': 'отдых'
                }
            };
        }
    }
});
//# sourceMappingURL=translate.service.js.map