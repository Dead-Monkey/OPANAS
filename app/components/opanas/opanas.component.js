System.register(['angular2/core', 'angular2/router', '../food-page/food.component', '../sport-page/sport.component', '../rest-page/rest.component', '../start-page/start.component', '../../shared/components/side-bar/side-bar.component', '../../shared/services/translate/translate.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, food_component_1, sport_component_1, rest_component_1, start_component_1, side_bar_component_1, translate_service_1;
    var OpanasComponent, languages, keysVendor;
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
            },
            function (side_bar_component_1_1) {
                side_bar_component_1 = side_bar_component_1_1;
            },
            function (translate_service_1_1) {
                translate_service_1 = translate_service_1_1;
            }],
        execute: function() {
            OpanasComponent = (function () {
                function OpanasComponent(_translator) {
                    this._translator = _translator;
                    this.sideBarIsOpen = false;
                }
                OpanasComponent.prototype.sideBarToggle = function () {
                    this.sideBarIsOpen = !this.sideBarIsOpen;
                };
                //config app
                OpanasComponent.prototype.ngOnInit = function () {
                    //translator config
                    this._translator.setSupportLanguages(languages);
                    this._translator.setKeys(keysVendor);
                    //basic language of application
                    this._translator.setCurrentLanguage('ru');
                    //default language will be use if current language dont has key. it's an optional.
                    this._translator.setDefaultLanguage('en');
                };
                //replace this 2 userPage;
                OpanasComponent.prototype.goEn = function () {
                    this._translator.setCurrentLanguage('en');
                };
                OpanasComponent.prototype.goRu = function () {
                    this._translator.setCurrentLanguage('ru');
                };
                OpanasComponent = __decorate([
                    core_1.Component({
                        selector: 'opanas-app',
                        directives: [router_1.ROUTER_DIRECTIVES, side_bar_component_1.SideBar],
                        providers: [router_1.ROUTER_PROVIDERS, translate_service_1.TranslateService],
                        pipes: [translate_service_1.TranslatePipe],
                        styles: ["\n      .sideBar {\n    color: red;\n  }\n      "],
                        template: "\n<fm-side-bar [isOpen]=\"sideBarIsOpen\"></fm-side-bar>\n<div (click)=\"goEn()\">english</div>\n<div (click)=\"goRu()\">russian</div>\n<div (click)=\"sideBarToggle()\">sideBar</div>\n<router-outlet></router-outlet>\n<nav>\n  <a [routerLink]=\"['Food']\">{{\"opanas.router.food\" | translate}}</a>\n  <a [routerLink]=\"['Sport']\">{{\"opanas.router.sport\" | translate}}</a>\n  <a [routerLink]=\"['Rest']\">{{\"opanas.router.rest\" | translate}}</a>\n</nav>\n    "
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Start', component: start_component_1.StartComponent, useAsDefault: true },
                        { path: '/food', name: 'Food', component: food_component_1.FoodComponent },
                        { path: '/sport', name: 'Sport', component: sport_component_1.SportComponent },
                        { path: '/rest', name: 'Rest', component: rest_component_1.RestComponent },
                        { path: '/*path', redirectTo: ['Start'] }
                    ]), 
                    __metadata('design:paramtypes', [translate_service_1.TranslateService])
                ], OpanasComponent);
                return OpanasComponent;
            })();
            exports_1("OpanasComponent", OpanasComponent);
            languages = {
                'en': 'english',
                'ru': 'russian'
            };
            keysVendor = {
                'en': {
                    'opanas.router.food': 'food',
                    'opanas.router.sport': 'sport',
                    'opanas.router.rest': 'rest'
                },
                'ru': {
                    'opanas.router.food': 'еда',
                    'opanas.router.sport': 'спорт',
                    'opanas.router.rest': 'отдых'
                }
            };
        }
    }
});
//# sourceMappingURL=opanas.component.js.map