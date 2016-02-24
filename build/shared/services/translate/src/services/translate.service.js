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
//# sourceMappingURL=translate.service.js.map