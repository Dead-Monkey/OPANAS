System.register(['angular2/core', '../../services/user/user.service', '../../shared/services/translate/translate.service'], function(exports_1, context_1) {
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
    var core_1, user_service_1, translate_service_1;
    var UserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (translate_service_1_1) {
                translate_service_1 = translate_service_1_1;
            }],
        execute: function() {
            UserComponent = (function () {
                function UserComponent(_userServe, _translator) {
                    this._userServe = _userServe;
                    this._translator = _translator;
                }
                UserComponent.prototype.bla = function (a) {
                    console.log(a);
                };
                UserComponent.prototype.ngOnInit = function () {
                    this.foodSets = this._userServe.getUserFoodSets();
                };
                UserComponent.prototype.goEn = function () {
                    this._translator.setCurrentLanguage('en');
                };
                UserComponent.prototype.goRu = function () {
                    this._translator.setCurrentLanguage('ru');
                };
                UserComponent = __decorate([
                    core_1.Component({
                        selector: 'op-user',
                        directives: [],
                        providers: [],
                        pipes: [translate_service_1.TranslatePipe],
                        styles: ["\n\n      "],
                        template: "\n<div >\n{{'calories'|translate}}\n<input #calories class=\"\" type=\"number\" min=\"0\" [(ngModel)]=\"foodSets?.calories['full']\" (input)=\"bla(calories.value)\">\n<br>\n<br>\n{{'protein'|translate}}\n<input #protein class=\"\" type=\"number\" min=\"0\" [(ngModel)]=\"foodSets?.protein['full']\" (input)=\"bla(protein.value)\">\n\n<br>\n<br>\n{{'fat'|translate}}\n<input #fat class=\"\" type=\"number\" min=\"0\" [(ngModel)]=\"foodSets?.fat['full']\" (input)=\"bla(fat.value)\">\n\n<br>\n<br>\n{{'carbohydrates'|translate}}\n<input #carbohydrates class=\"\" type=\"number\" min=\"0\" [(ngModel)]=\"foodSets?.carbohydrates['full']\" (input)=\"bla(carbohydrates.value)\">\n\n<br>\n<br>\n{{'language'|translate}}\n<div (click)=\"goEn()\">english</div>\n<div (click)=\"goRu()\">russian</div>\n</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, translate_service_1.TranslateService])
                ], UserComponent);
                return UserComponent;
            }());
            exports_1("UserComponent", UserComponent);
        }
    }
});
//# sourceMappingURL=user.component.js.map