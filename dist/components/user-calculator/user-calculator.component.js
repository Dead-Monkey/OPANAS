System.register(['angular2/core', '../../shared/services/translate/translate.service', '../../services/user/user.service'], function(exports_1, context_1) {
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
    var core_1, translate_service_1, user_service_1;
    var UserCalculatorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (translate_service_1_1) {
                translate_service_1 = translate_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            UserCalculatorComponent = (function () {
                function UserCalculatorComponent(_userServe) {
                    this._userServe = _userServe;
                    this.model = {
                        'sex': 'male',
                        'age': '',
                        'weight': '',
                        'height': '',
                        'activity': {
                            'lvl': '',
                            'multi': ''
                        },
                        'goal': {
                            'lvl': '',
                            'multi': ''
                        }
                    };
                }
                UserCalculatorComponent.prototype.ngOnInit = function () {
                    this.model = this._userServe.getUserSets();
                };
                UserCalculatorComponent.prototype.changeSex = function () {
                    if (this.model.sex === 'male') {
                        this._userServe.setUserSex('female');
                    }
                    else {
                        this._userServe.setUserSex('male');
                    }
                };
                UserCalculatorComponent.prototype.changeActivity = function (lvl) {
                    this._userServe.setUserActivity(lvl);
                };
                UserCalculatorComponent.prototype.changeGoal = function (lvl) {
                    this._userServe.setUserGoal(lvl);
                };
                UserCalculatorComponent.prototype.calculate = function () {
                    this._userServe.calculateUserDailyRate(this.model.sex, this.model.age, this.model.weight, this.model.height, this.model.activity.lvl, this.model.goal.lvl);
                };
                UserCalculatorComponent = __decorate([
                    core_1.Component({
                        selector: 'op-user-calculator',
                        directives: [],
                        providers: [],
                        pipes: [translate_service_1.TranslatePipe],
                        styles: ["\n\n  .calculator {\n    position: absolute;\n    top: 12vw;\n    left: 0vw;\n    width: 90vw;\n    height: 150vw;\n    margin: 5vw;\n    overflow-x: hidden;\n    overflow-y: scroll;\n\n  }\n  .calculator_buttons {\n    position: relative;\n    width: 90vw;\n    height: 65vw;\n    line-height: 10vw;\n  }\n  .calculator_sexIcon {\n    position: relative;\n    height: 14vw;\n    width: 14vw;\n    float: left;\n    background: url('./src/img/maleOn.png') no-repeat center center;\n    background-size: cover;\n    box-sizing: border-box;\n    margin-bottom: 4vw;\n    margin-right: 2vw;\n  }\n  .calculator_sexMale_on {\n    background: url('./src/img/maleOn.png') no-repeat center center;\n    background-size: cover;\n  }\n  .calculator_sexMale_off {\n    background: url('./src/img/maleOff.png') no-repeat center center;\n    background-size: cover;\n  }\n  .calculator_sexFemale_on {\n    background: url('./src/img/femaleOn.png') no-repeat center center;\n    background-size: cover;\n  }\n  .calculator_sexFemale_off {\n    background: url('./src/img/femaleOff.png') no-repeat center center;\n    background-size: cover;\n  }\n  .calculator_nameInput {\n    position: relative;\n    width: 46vw;\n    float: left;\n    left: 11vw;\n    margin-bottom: 2vw;\n    color: #ff9d2d;\n    font-size: 7vw;\n  }\n  .calculator_input {\n    position: relative;\n    float: left;\n    height: 11vw;\n    width: 30vw;\n    background-color: rgba(49, 51, 61, 0.3);\n    box-sizing: border-box;\n    border: 2px solid #0C1017;\n    border-radius: 2vw;\n    font-size: 6vw;\n    color: #D0D9D9;\n    margin-bottom: 4vw;\n    text-align: center;\n  }\n  .calculator_sex {\n    line-height: 14vw;\n  }\n  .calculator_headerBig {\n    font-size: 6vw;\n    width: 90vw;\n    text-align: center;\n    margin-top: 3vw;\n    font-weight: bolder;\n    color: #ff9d2d;\n  }\n  .calculator_headerSmall {\n    font-size: 6vw;\n    width: 90vw;\n    text-align: center;\n    margin-top: 3vw;\n    margin-bottom: 1vw;\n    color: #ff9d2d;\n  }\n.toggleBar {\n  margin-top: 2vw;\n  width: 90vw;\n  height: 6vw;\n  background: #0C1017;\n  box-sizing: border-box;\n  border: 3px solid #0C1017;\n  border-radius: 2vw;\n}\n.activityToggle {\n  position: relative;\n  float: left;\n  height: 4.5vw;\n  width: 12.7vw;\n  margin-right: 1vw;\n  margin-left: 1vw;\n  border-radius: 1vw;\n}\n.activityToggle_off {\n  background: #3f414a;\n}\n.activityToggle_on {\n  background: #ff9d2d;\n}\n.pointToggle {\n  position: relative;\n  float: left;\n  height: 4.5vw;\n  width: 20vw;\n  margin-right: 1vw;\n  margin-left: 1vw;\n  border-radius: 1vw;\n}\n.pointToggle_off {\n  background: #3f414a;\n}\n.pointToggle_on {\n  background: #ff9d2d;\n}\n.calculator_result {\n  position: relative;\n  height: 13vw;\n  line-height: 11vw;\n  width: 40vw;\n  margin-left: 22.5vw;\n  margin-top: 7vw;\n  background-color: rgba(49, 51, 61, 0.3);\n  box-sizing: border-box;\n  border: 3px solid #0C1017;\n  border-radius: 2vw;\n  font-size: 6vw;\n  font-weight: bold;\n  color: #ff9d2d;\n  margin-bottom: 4vw;\n  text-align: center;\n\n}\n\n    "],
                        template: "\n<div class=\"calculator\">\n  <div class=\"calculator_buttons\">\n\n    <div class=\"calculator_nameInput calculator_sex \">{{'sex'|translate}}:</div>\n    <div class=\"calculator_sexIcon\" [ngClass]=\"{calculator_sexMale_on: model.sex === 'male', calculator_sexMale_off: model.sex === 'female'}\" (click)=\"changeSex()\"></div>\n    <div class=\"calculator_sexIcon\"  [ngClass]=\"{calculator_sexFemale_on: model.sex === 'female', calculator_sexFemale_off: model.sex === 'male'}\" (click)=\"changeSex()\"></div>\n\n    <div class=\"calculator_nameInput\">{{'age'|translate}}:</div>\n    <input class=\"calculator_input\" type=\"number\" min=\"0\" placeholder=\"{{'years'|translate}}\" [(ngModel)]=\"model.age\">\n\n\n    <div class=\"calculator_nameInput\">{{'height'|translate}}:</div>\n    <input class=\"calculator_input\" type=\"number\" min=\"0\" placeholder=\"{{'cm'|translate}}\" [(ngModel)]=\"model.height\">\n\n    <div class=\"calculator_nameInput\">{{'mass'|translate}}:</div>\n    <input class=\"calculator_input\" type=\"number\" min=\"0\" placeholder=\"{{'kg'|translate}}\" [(ngModel)]=\"model.weight\">\n\n    </div>\n\n    <div class=\"calculator_headerBig\">\n        {{'activity.level'|translate}}:\n    </div>\n    <div class=\"calculator_headerSmall\" [ngSwitch]=\"model.activity.lvl\">\n    <div *ngSwitchWhen=\"1\">\u043C\u0438\u043D\u0438\u043C\u0443\u043C \u0438\u043B\u0438 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435</div>\n  <div *ngSwitchWhen=\"2\">3 \u0440. \u0432 \u043D\u0435\u0434\u0435\u043B\u044E</div>\n  <div *ngSwitchWhen=\"3\">5 \u0440. \u0432 \u043D\u0435\u0434\u0435\u043B\u044E</div>\n  <div *ngSwitchWhen=\"4\">\u0438\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u043D\u043E 5 \u0440. \u0432 \u043D\u0435\u0434\u0435\u043B\u044E</div>\n  <div *ngSwitchWhen=\"5\">\u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C</div>\n  <div *ngSwitchWhen=\"6\">\u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C \u0438\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u043D\u043E \u0438\u043B\u0438 2 \u0440. \u0432 \u0434\u0435\u043D\u044C</div>\n    </div>\n\n    <div class=\"toggleBar\">\n      <div class=\"activityToggle\" [ngClass]=\"{ activityToggle_off:!(model.activity.lvl == '1'), activityToggle_on:model.activity.lvl == '1'}\" (click)=\"changeActivity(1)\"></div>\n      <div class=\"activityToggle\" [ngClass]=\"{ activityToggle_off:!(model.activity.lvl == '2'), activityToggle_on:model.activity.lvl == '2'}\" (click)=\"changeActivity(2)\"></div>\n      <div class=\"activityToggle\" [ngClass]=\"{ activityToggle_off:!(model.activity.lvl == '3'), activityToggle_on:model.activity.lvl == '3'}\" (click)=\"changeActivity(3)\"></div>\n      <div class=\"activityToggle\" [ngClass]=\"{ activityToggle_off:!(model.activity.lvl == '4'), activityToggle_on:model.activity.lvl == '4'}\" (click)=\"changeActivity(4)\"></div>\n      <div class=\"activityToggle\" [ngClass]=\"{ activityToggle_off:!(model.activity.lvl == '5'), activityToggle_on:model.activity.lvl == '5'}\" (click)=\"changeActivity(5)\"></div>\n      <div class=\"activityToggle\" [ngClass]=\"{ activityToggle_off:!(model.activity.lvl == '6'), activityToggle_on:model.activity.lvl == '6'}\" (click)=\"changeActivity(6)\"></div>\n    </div>\n\n\n    <div class=\"calculator_headerBig\">\n        {{'point'|translate}}:\n    </div>\n    <div class=\"calculator_headerSmall\" [ngSwitch]=\"model.goal.lvl\">\n    <div *ngSwitchWhen=\"8\">\u043E\u0447\u0435\u043D\u044C \u0445\u0443\u0434\u0435\u0442\u044C</div>\n  <div *ngSwitchWhen=\"9\">\u0445\u0443\u0434\u0435\u0442\u044C</div>\n  <div *ngSwitchWhen=\"10\">\u0434\u0435\u0440\u0436\u0430\u0442\u044C</div>\n  <div *ngSwitchWhen=\"11\">\u043D\u0430\u0431\u043E\u0440</div>\n    </div>\n    <div class=\"toggleBar\">\n      <div class=\"pointToggle\"  [ngClass]=\"{ pointToggle_off:!(model.goal.lvl == '8'), pointToggle_on:model.goal.lvl == '8'}\" (click)=\"changeGoal(8)\"></div>\n      <div class=\"pointToggle\" [ngClass]=\"{ pointToggle_off:!(model.goal.lvl == '9'), pointToggle_on:model.goal.lvl == '9'}\"  (click)=\"changeGoal(9)\"></div>\n      <div class=\"pointToggle\" [ngClass]=\"{ pointToggle_off:!(model.goal.lvl == '10'), pointToggle_on:model.goal.lvl == '10'}\"  (click)=\"changeGoal(10)\"></div>\n      <div class=\"pointToggle\" [ngClass]=\"{ pointToggle_off:!(model.goal.lvl == '11'), pointToggle_on:model.goal.lvl == '11'}\"  (click)=\"changeGoal(11)\"></div>\n    </div>\n\n  <div (click)=\"calculate()\" class=\"calculator_result\">{{model.foodSets.calories.full}} {{'ccal'|translate}}</div>\n\n  </div>\n\n\n" }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], UserCalculatorComponent);
                return UserCalculatorComponent;
            }());
            exports_1("UserCalculatorComponent", UserCalculatorComponent);
        }
    }
});
//# sourceMappingURL=user-calculator.component.js.map