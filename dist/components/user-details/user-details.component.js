System.register(['angular2/core', '../../services/user/user.service', '../../shared/services/translate/translate.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, user_service_1, translate_service_1, router_1;
    var UserDetailsComponent;
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
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            UserDetailsComponent = (function () {
                function UserDetailsComponent(_userServe, _translator) {
                    this._userServe = _userServe;
                    this._translator = _translator;
                }
                UserDetailsComponent.prototype.ngOnInit = function () {
                    this.sets = this._userServe.getUserSets();
                };
                UserDetailsComponent.prototype.changeLang = function (lang) {
                    this._userServe.setLanguage(lang);
                    this._translator.setCurrentLanguage(this._userServe.getLanguage());
                    location.reload();
                };
                UserDetailsComponent.prototype.changeSets = function () {
                    var _this = this;
                    setTimeout(function () {
                        _this._userServe.refreshUser();
                    }, 500);
                };
                UserDetailsComponent = __decorate([
                    core_1.Component({
                        selector: 'op-user-details',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [],
                        pipes: [translate_service_1.TranslatePipe],
                        styles: ["\n\n    .container {\n      position: relative;;\n      margin: 5vw;\n      margin-left: 10vw;\n      height: 100vw;\n      width: 80vw;\n    }\n\n    .user_firstHeader {\n      font-size: 6vw;\n      width: 80vw;\n      text-align: center;\n      margin-bottom: 5vw;\n      font-weight: bolder;\n      color: #ff9d2d;\n    }\n    .user_nameInput {\n      position: relative;\n      font-size: 6vw;\n      width: 52vw;\n      float: left;\n      left: 8vw;\n      margin-bottom: 2vw;\n      color: #ff9d2d;\n      line-height: 10vw;\n    }\n    .user_input {\n      position: relative;\n      float: left;\n      height: 11vw;\n      width: 20vw;\n      background-color: rgba(49, 51, 61, 0.3);\n      box-sizing: border-box;\n      border: 2px solid #0C1017;\n      border-radius: 2vw;\n      line-height: 10vw;\n      font-size: 6vw;\n      color: #D0D9D9;\n      margin-bottom: 2vw;\n      text-align: center;\n    }\n    .user_secondHeader {\n      position: absolute;\n      top: 64vw;\n      font-size: 5vw;\n      min-height: 8vw;\n      line-height: 8vw;\n      width: 80vw;\n      text-align: center;\n      font-weight: bolder;\n      color: #ff9d2d;\n      border: 2px solid #ff9d2d;\n      border-radius: 3vw;\n    }\n    .user_lang {\n      position: absolute;\n      top: 83vw;\n      width: 60vw;\n      font-size: 5vw;\n      color: #ff9d2d;\n      float: left;\n    }\n    .user_langName {\n      position: relative;\n      float: left;\n      height: 10vw;\n      width: 50vw;\n      margin: 2vw;\n    }\n    .user_langEnIcon {\n      position: relative;\n      height: 10vw;\n      width: 10vw;\n      float: left;\n      background: url('./src/img/en.png') no-repeat center center;\n      background-size: cover;\n      left: 4vw;\n    }\n    .user_langRuIcon {\n      position: relative;\n      height: 10vw;\n      width: 10vw;\n      float: left;\n      background: url('./src/img/ru.png') no-repeat center center;\n      background-size: cover;\n      left: 4vw;\n    }\n    .user_langText {\n      position: relative;\n      width: 20vw;\n      float: left;\n      line-height: 10vw;\n      left: 6vw;\n    }\n\n    "],
                        template: "\n  <div class=\"container\">\n  <div class=\"user_firstHeader\">\n      {{'daily.rate'|translate}}\n  </div>\n  <div class=\"user_nameInput\">\n    {{'calories'|translate}}\n  </div>\n  <input #calories class=\"user_input\" type=\"number\" min=\"0\" [(ngModel)]=\"sets?.foodSets?.calories['full']\" (blur)=\"changeSets()\">\n  <div class=\"user_nameInput\">\n    {{'protein'|translate}}\n  </div>\n  <input #protein class=\"user_input\" type=\"number\" min=\"0\" [(ngModel)]=\"sets?.foodSets?.protein['full']\" (blur)=\"changeSets()\">\n  <div class=\"user_nameInput\">\n    {{'fat'|translate}}\n  </div>\n  <input #fat class=\"user_input\" type=\"number\" min=\"0\" [(ngModel)]=\"sets?.foodSets?.fat['full']\" (blur)=\"changeSets()\">\n  <div class=\"user_nameInput\">\n    {{'carbohydrates'|translate}}\n  </div>\n  <input #carbohydrates class=\"user_input\" type=\"number\" min=\"0\" [(ngModel)]=\"sets?.foodSets?.carbohydrates['full']\" (blur)=\"changeSets()\">\n\n\n  <a [routerLink]=\"['UserCalculator']\">\n  <div class=\"user_secondHeader\">\n      {{'determine.daily.rate'|translate}}\n  </div>\n</a>\n\n  <div class=\"user_lang\">\n    <div class=\"user_nameInput\">\n      {{'language'|translate}}\n    </div>\n    <div (click)=\"changeLang('en')\" class=\"user_langName\">\n      <div class=\"user_langEnIcon\"></div>\n      <div class=\"user_langText\">English</div>\n    </div>\n    <div (click)=\"changeLang('ru')\" class=\"user_langName\">\n      <div class=\"user_langRuIcon\"></div>\n      <div class=\"user_langText\">Russian</div>\n    </div>\n  </div>\n</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, translate_service_1.TranslateService])
                ], UserDetailsComponent);
                return UserDetailsComponent;
            }());
            exports_1("UserDetailsComponent", UserDetailsComponent);
        }
    }
});
//# sourceMappingURL=user-details.component.js.map