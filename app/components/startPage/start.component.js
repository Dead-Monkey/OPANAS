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
    var StartComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            StartComponent = (function () {
                function StartComponent() {
                }
                StartComponent = __decorate([
                    core_1.Component({
                        selector: 'op-start',
                        directives: [],
                        providers: [],
                        pipes: [],
                        styles: ['.primary{color:blue}'],
                        template: "\n    <h1 class=\"primary\">\u041A\u0430\u0440\u0442\u0438\u043D\u043A\u043E \u0438 \u043B\u043E\u0433\u043E\u0442\u0438\u043F</h1>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], StartComponent);
                return StartComponent;
            })();
            exports_1("StartComponent", StartComponent);
        }
    }
});
//# sourceMappingURL=start.component.js.map