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
                        styles: ["\n\n    "],
                        template: "\naaaaaaaaaaaaaaaaaaaaaaaaa\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], UserCalculatorComponent);
                return UserCalculatorComponent;
            }());
            exports_1("UserCalculatorComponent", UserCalculatorComponent);
        }
    }
});
//# sourceMappingURL=user-calculator.component.js.map