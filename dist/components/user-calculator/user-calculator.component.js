System.register(['angular2/core', '../../shared/services/translate/translate.service'], function(exports_1, context_1) {
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
    var core_1, translate_service_1;
    var UserCalculatorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (translate_service_1_1) {
                translate_service_1 = translate_service_1_1;
            }],
        execute: function() {
            UserCalculatorComponent = (function () {
                function UserCalculatorComponent() {
                }
                UserCalculatorComponent.prototype.ngOnInit = function () {
                };
                UserCalculatorComponent = __decorate([
                    core_1.Component({
                        selector: 'op-user-calculator',
                        directives: [],
                        providers: [],
                        pipes: [translate_service_1.TranslatePipe],
                        styles: ["\n\n  .calculator {\n    position: absolute;\n    top: 12vw;\n    left: 0vw;\n    width: 90vw;\n    height: 150vw;\n    margin: 5vw;\n    overflow-x: hidden;\n    overflow-y: scroll;\n\n  }\n  .calculator_buttons {\n    position: relative;\n    width: 90vw;\n    height: 65vw;\n    line-height: 10vw;\n  }\n  .calculator_sexIcon {\n    position: relative;\n    height: 14vw;\n    width: 14vw;\n    float: left;\n    background: url('./src/img/maleOn.png') no-repeat center center;\n    background-size: cover;\n    box-sizing: border-box;\n    margin-bottom: 4vw;\n    margin-right: 2vw;\n  }\n  .calculator_sexMale_on {\n    background: url('./src/img/maleOn.png') no-repeat center center;\n    background-size: cover;\n  }\n  .calculator_sexMale_off {\n    background: url('./src/img/maleOff.png') no-repeat center center;\n    background-size: cover;\n  }\n  .calculator_sexFemale_on {\n    background: url('./src/img/femaleOn.png') no-repeat center center;\n    background-size: cover;\n  }\n  .calculator_sexFemale_off {\n    background: url('./src/img/femaleOff.png') no-repeat center center;\n    background-size: cover;\n  }\n  .calculator_nameInput {\n    position: relative;\n    width: 46vw;\n    float: left;\n    left: 11vw;\n    margin-bottom: 2vw;\n    color: #ff9d2d;\n    font-size: 7vw;\n  }\n  .calculator_input {\n    position: relative;\n    float: left;\n    height: 11vw;\n    width: 30vw;\n    background-color: rgba(49, 51, 61, 0.3);\n    box-sizing: border-box;\n    border: 5px solid #0C1017;\n    border-radius: 2vw;\n    font-size: 6vw;\n    color: #D0D9D9;\n    margin-bottom: 4vw;\n    text-align: center;\n  }\n  .calculator_sex {\n    line-height: 14vw;\n  }\n  .calculator_headerBig {\n    font-size: 6vw;\n    width: 90vw;\n    text-align: center;\n    margin-top: 3vw;\n    font-weight: bolder;\n    color: #ff9d2d;\n  }\n  .calculator_headerSmall {\n    font-size: 6vw;\n    width: 90vw;\n    text-align: center;\n    margin-top: 3vw;\n    margin-bottom: 1vw;\n    color: #ff9d2d;\n  }\n.toggleBar {\n  margin-top: 2vw;\n  width: 90vw;\n  height: 8vw;\n  background: #0C1017;\n  box-sizing: border-box;\n  border: 5px solid #0C1017;\n  border-radius: 2vw;\n}\n.activityToggle {\n  position: relative;\n  float: left;\n  height: 5vw;\n  width: 12.5vw;\n  margin-right: 1vw;\n  margin-left: 1vw;\n  border-radius: 1vw;\n}\n.activityToggle_off {\n  background: #3f414a;\n}\n.activityToggle_on {\n  background: #ff9d2d;\n}\n.pointToggle {\n  position: relative;\n  float: left;\n  height: 5vw;\n  width: 19.7vw;\n  margin-right: 1vw;\n  margin-left: 1vw;\n  border-radius: 1vw;\n}\n.pointToggle_off {\n  background: #3f414a;\n}\n.pointToggle_on {\n  background: #ff9d2d;\n}\n.calculator_result {\n  position: relative;\n  height: 13vw;\n  line-height: 10vw;\n  width: 40vw;\n  margin-left: 22.5vw;\n  margin-top: 7vw;\n  background-color: rgba(49, 51, 61, 0.3);\n  box-sizing: border-box;\n  border: 6px solid #0C1017;\n  border-radius: 2vw;\n  font-size: 6vw;\n  font-weight: bold;\n  color: #ff9d2d;\n  margin-bottom: 4vw;\n  text-align: center;\n\n}\n\n    "],
                        template: "\n<div class=\"calculator\">\n  <div class=\"calculator_buttons\">\n\n    <div class=\"calculator_nameInput calculator_sex \">{{'sex'|translate}}:</div>\n    <div class=\"calculator_sexIcon calculator_sexMale_on\"></div>\n    <div class=\"calculator_sexIcon calculator_sexFemale_off\"></div>\n\n    <div class=\"calculator_nameInput\">{{'age'|translate}}:</div>\n    <input class=\"calculator_input\" type=\"number\" min=\"0\" placeholder=\"{{'years'|translate}}\">\n\n\n    <div class=\"calculator_nameInput\">{{'height'|translate}}:</div>\n    <input class=\"calculator_input\" type=\"number\" min=\"0\" placeholder=\"{{'cm'|translate}}\">\n\n    <div class=\"calculator_nameInput\">{{'mass'|translate}}:</div>\n    <input class=\"calculator_input\" type=\"number\" min=\"0\" placeholder=\"{{'kg'|translate}}\">\n\n    </div>\n\n    <div class=\"calculator_headerBig\">\n        {{'activity.level'|translate}}:\n    </div>\n    <div class=\"calculator_headerSmall\">\n        \u0435\u0431\u0430\u0448\u0443 \u0430\u0436 \u0431\u0438\u0433\u043E\u043C\n    </div>\n\n    <div class=\"toggleBar\">\n      <div class=\"activityToggle activityToggle_off\"></div>\n      <div class=\"activityToggle activityToggle_off\"></div>\n      <div class=\"activityToggle activityToggle_off\"></div>\n      <div class=\"activityToggle activityToggle_off\"></div>\n      <div class=\"activityToggle activityToggle_on\"></div>\n      <div class=\"activityToggle activityToggle_off\"></div>\n    </div>\n\n\n    <div class=\"calculator_headerBig\">\n        {{'point'|translate}}:\n    </div>\n    <div class=\"calculator_headerSmall\">\n        \u0448\u043E\u0431 \u044F \u0442\u043E\u043B\u0441\u0442\u044B\u0439 \u0431\u044B\u043B \u0432\u0430\u0449\u0435\n    </div>\n    <div class=\"toggleBar\">\n      <div class=\"pointToggle pointToggle_off\"></div>\n      <div class=\"pointToggle pointToggle_off\"></div>\n      <div class=\"pointToggle pointToggle_off\"></div>\n      <div class=\"pointToggle pointToggle_on\"></div>\n    </div>\n\n  <div class=\"calculator_result\">1488 {{'ccal'|translate}}</div>\n\n  </div>\n\n\n" }), 
                    __metadata('design:paramtypes', [])
                ], UserCalculatorComponent);
                return UserCalculatorComponent;
            }());
            exports_1("UserCalculatorComponent", UserCalculatorComponent);
        }
    }
});
//# sourceMappingURL=user-calculator.component.js.map