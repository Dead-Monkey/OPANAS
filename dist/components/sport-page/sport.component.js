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
    var SportComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (translate_service_1_1) {
                translate_service_1 = translate_service_1_1;
            }],
        execute: function() {
            SportComponent = (function () {
                function SportComponent() {
                    var _this = this;
                    this.test2 = 1;
                    this.test4 = 1;
                    this.date = new Date().getHours();
                    this.dateM = new Date().getMinutes();
                    this.dateBig = new Date();
                    setTimeout(function () { return _this.test1 = "timeout constructor 5sec"; }, 5000);
                    setInterval(function () { return _this.test2++; }, 1000);
                    this.timerMaker();
                }
                SportComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    setTimeout(function () { return _this.test3 = "timeout constructor 10sec"; }, 10000);
                    setInterval(function () { return _this.test4++; }, 1000);
                };
                SportComponent.prototype.timerMaker = function () {
                    this.today = new Date();
                    this.tomorrow = new Date();
                    this.tomorrow.setHours(0, 0, 0, 0);
                    this.tomorrow.setDate(this.today.getDate() + 1);
                    this.timer = (this.tomorrow.getTime() - this.today.getTime()) / 1000 / 60 / 60;
                };
                SportComponent = __decorate([
                    core_1.Component({
                        selector: 'op-sport',
                        directives: [],
                        providers: [],
                        pipes: [translate_service_1.TranslatePipe],
                        styles: [],
                        template: "\n    <h1 class=\"primary\">{{\"sport-page.title\" | translate}}</h1>\n    <div>constructor timeout 5sec: {{test1}}</div>\n    <hr>\n    <div>constructor: {{test2}}</div>\n    <hr>\n    <div>onInit timeout 10sec: {{test3}}</div>\n    <hr>\n    <div>onInit: {{test4}}</div>\n    <hr>\n    <div> time is: {{date}}:{{dateM}}</div>\n    <hr>\n    <div>{{dateBig}}</div>\n    <hr>\n    <div>time 2 reload: {{timer}} hours</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], SportComponent);
                return SportComponent;
            }());
            exports_1("SportComponent", SportComponent);
        }
    }
});
//# sourceMappingURL=sport.component.js.map