System.register(['angular2/core', 'angular2/router', '../foodPage/food.component', '../sportPage/sport.component', '../restPage/rest.component', '../startPage/start.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, food_component_1, sport_component_1, rest_component_1, start_component_1;
    var OpanasComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (food_component_1_1) {
                food_component_1 = food_component_1_1;
            },
            function (sport_component_1_1) {
                sport_component_1 = sport_component_1_1;
            },
            function (rest_component_1_1) {
                rest_component_1 = rest_component_1_1;
            },
            function (start_component_1_1) {
                start_component_1 = start_component_1_1;
            }],
        execute: function() {
            OpanasComponent = (function () {
                function OpanasComponent() {
                }
                OpanasComponent = __decorate([
                    core_1.Component({
                        selector: 'opanas-app',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [router_1.ROUTER_PROVIDERS],
                        pipes: [],
                        styles: ['.primary{color:red}'],
                        template: "\n      <router-outlet></router-outlet>\n  <nav>\n     <a [routerLink]=\"['Food']\">FOOD</a>\n     <a [routerLink]=\"['Sport']\">SPORT</a>\n     <a [routerLink]=\"['Rest']\">REST</a>\n  </nav>\n    "
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Start', component: start_component_1.StartComponent, useAsDefault: true },
                        { path: '/food', name: 'Food', component: food_component_1.FoodComponent },
                        { path: '/sport', name: 'Sport', component: sport_component_1.SportComponent },
                        { path: '/rest', name: 'Rest', component: rest_component_1.RestComponent },
                        { path: '/*path', redirectTo: ['Start'] }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], OpanasComponent);
                return OpanasComponent;
            })();
            exports_1("OpanasComponent", OpanasComponent);
        }
    }
});
//# sourceMappingURL=opanas.component.js.map