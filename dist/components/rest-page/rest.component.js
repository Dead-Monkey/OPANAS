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
    var RestComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            RestComponent = (function () {
                function RestComponent() {
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
                RestComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    setTimeout(function () { return _this.test3 = "timeout constructor 10sec"; }, 10000);
                    setInterval(function () { return _this.test4++; }, 1000);
                };
                RestComponent.prototype.timerMaker = function () {
                    this.today = new Date();
                    this.tomorrow = new Date();
                    this.tomorrow.setHours(0, 0, 0, 0);
                    this.tomorrow.setDate(this.today.getDate() + 1);
                    this.timer = (this.tomorrow.getTime() - this.today.getTime()) / 1000 / 60 / 60;
                };
                RestComponent = __decorate([
                    core_1.Component({
                        selector: 'op-rest',
                        directives: [],
                        providers: [],
                        pipes: [],
                        styles: [],
                        template: "\n    <h1 class=\"primary\">REST</h1>\n    <div>constructor timeout 5sec: {{test1}}</div>\n    <hr>\n    <div>constructor: {{test2}}</div>\n    <hr>\n    <div>onInit timeout 10sec: {{test3}}</div>\n    <hr>\n    <div>onInit: {{test4}}</div>\n    <hr>\n    <div> time is: {{date}}:{{dateM}}</div>\n    <hr>\n    <div>{{dateBig}}</div>\n    <hr>\n    <div>time 2 reload: {{timer}} hours</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], RestComponent);
                return RestComponent;
            }());
            exports_1("RestComponent", RestComponent);
        }
    }
});
//# sourceMappingURL=rest.component.js.map