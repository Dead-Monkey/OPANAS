System.register(['angular2/core', 'angular2/router', '../food-page/food.component', '../sport-page/sport.component', '../rest-page/rest.component', '../start-page/start.component', '../../shared/components/side-bar/side-bar.component', '../../shared/services/translate/translate.service', '../../services/food/food.service', '../../services/calenadar/calendar.service', '../../services/refresh-date/refresh-date.service', '../../shared/services/storage/storage.service'], function(exports_1, context_1) {
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
    var core_1, router_1, food_component_1, sport_component_1, rest_component_1, start_component_1, side_bar_component_1, translate_service_1, food_service_1, calendar_service_1, refresh_date_service_1, storage_service_1;
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
            },
            function (food_service_1_1) {
                food_service_1 = food_service_1_1;
            },
            function (calendar_service_1_1) {
                calendar_service_1 = calendar_service_1_1;
            },
            function (refresh_date_service_1_1) {
                refresh_date_service_1 = refresh_date_service_1_1;
            },
            function (storage_service_1_1) {
                storage_service_1 = storage_service_1_1;
            }],
        execute: function() {
            OpanasComponent = (function () {
                function OpanasComponent(_translator, _calendarService, _refreshDateService) {
                    this._translator = _translator;
                    this._calendarService = _calendarService;
                    this._refreshDateService = _refreshDateService;
                    this.sideBarIsOpen = false;
                }
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
                        providers: [router_1.ROUTER_PROVIDERS, core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy }), translate_service_1.TranslateService, food_service_1.FoodService, calendar_service_1.CalendarService, refresh_date_service_1.RefreshDateService, storage_service_1.StorageService],
                        pipes: [translate_service_1.TranslatePipe],
                        styles: ["\n    .header{\n    height: 50px;\n    width: 100vw;\n    }\n\t\t.container {\n      background: url(./src/img/tempBackground.png) no-repeat center center;\n      width: 100%;\n      height: 100%;\n    }\n\n  .temporary {\n    position: absolute;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: center;\n    align-items: center;\n    background-color: green;\n    right: 0;\n    top: 0;\n    height: 50px;\n    width: 100px;\n    opacity: 0.3;\n  }\n  "],
                        template: "\n<div class=\"container\">\n\n  <div class=\"header\">\n    <div class=\"temporary\">\n      <div (click)=\"goEn()\">english</div>\n      <div (click)=\"goRu()\">russian</div>\n    </div>\n  </div>\n\n  <fm-side-bar [(isOpen)]=\"sideBarIsOpen\"></fm-side-bar>\n\n  <router-outlet></router-outlet>\n</div>\n\n" }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Start', component: start_component_1.StartComponent, useAsDefault: true },
                        { path: '/food', name: 'Food', component: food_component_1.FoodComponent },
                        { path: '/sport', name: 'Sport', component: sport_component_1.SportComponent },
                        { path: '/rest', name: 'Rest', component: rest_component_1.RestComponent },
                        { path: '/*path', redirectTo: ['Start'] }
                    ]), 
                    __metadata('design:paramtypes', [translate_service_1.TranslateService, calendar_service_1.CalendarService, refresh_date_service_1.RefreshDateService])
                ], OpanasComponent);
                return OpanasComponent;
            }());
            exports_1("OpanasComponent", OpanasComponent);
            languages = {
                'en': 'english',
                'ru': 'russian'
            };
            keysVendor = {
                'en': {
                    'sport-page.title': 'sport pagie',
                    'calories': 'calories',
                    'protein': 'protein',
                    'carbohydrates': 'carbohydrates',
                    'fat': 'fat'
                },
                'ru': {
                    'sport-page.title': 'спорт страничга',
                    'calories': 'калории',
                    'protein': 'белки',
                    'carbohydrates': 'углеводы',
                    'fat': 'жиры'
                }
            };
        }
    }
});
//# sourceMappingURL=opanas.component.js.map