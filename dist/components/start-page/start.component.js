System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var StartComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            StartComponent = (function () {
                function StartComponent() {
                }
                StartComponent = __decorate([
                    core_1.Component({
                        selector: 'op-start',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [],
                        pipes: [],
                        styles: ["\n      .startPage_navigator {\n        display: flex;\n        flex-flow: column nowrap;\n        position: absolute;\n        justify-content: space-around;\n        width: 30vw;\n        height: 100vh;\n        bottom: 0;\n        left: 35vw;\n        overflow: hidden;\n        background-color: silver;\n      }\n      .startPage_foodButton {\n      background: url('./src/img/food.png') no-repeat center center;\n      background-size: cover;\n      box-sizing: border-box;\n      width: 27vw;\n      height: 27vw;\n      margin: auto;\n    }\n    .startPage_sportButton {\n      background: url('./src/img/sport.png') no-repeat center center;\n      background-size: cover;\n      box-sizing: border-box;\n      width: 27vw;\n      height: 27vw;\n      margin: auto;\n\n    }\n    .startPage_restButton {\n      background: url('./src/img/rest.png') no-repeat center center;\n      background-size: cover;\n      box-sizing: border-box;\n      width: 27vw;\n      height: 27vw;\n      margin: auto;\n\n    }\n      "],
                        template: "\n    <nav class=\"startPage_navigator\">\n      <a [routerLink]=\"['Food']\">\n        <div class=\"startPage_foodButton\"></div>\n      </a>\n      <a [routerLink]=\"['Sport']\">\n        <div class=\"startPage_sportButton\"></div>\n      </a>\n      <a [routerLink]=\"['Rest']\">\n        <div class=\"startPage_restButton\"></div>\n      </a>\n    </nav>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], StartComponent);
                return StartComponent;
            }());
            exports_1("StartComponent", StartComponent);
        }
    }
});
//# sourceMappingURL=start.component.js.map