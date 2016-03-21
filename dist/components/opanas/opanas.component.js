System.register(['angular2/core', 'angular2/router', '../food-page/food.component', '../sport-page/sport.component', '../rest-page/rest.component', '../calendar-page/calendar.component', '../user-page/user.component', '../start-page/start.component', '../../shared/components/side-bar/side-bar.component', '../../shared/services/translate/translate.service', '../../services/food/food.service', '../../services/sport/sport.service', '../../services/calenadar/calendar.service', '../../services/refresh-date/refresh-date.service', '../../shared/services/storage/storage.service', '../../services/user/user.service', '../../services/admob/admob.service'], function(exports_1, context_1) {
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
    var core_1, router_1, food_component_1, sport_component_1, rest_component_1, calendar_component_1, user_component_1, start_component_1, side_bar_component_1, translate_service_1, food_service_1, sport_service_1, calendar_service_1, refresh_date_service_1, storage_service_1, user_service_1, admob_service_1;
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
            function (calendar_component_1_1) {
                calendar_component_1 = calendar_component_1_1;
            },
            function (user_component_1_1) {
                user_component_1 = user_component_1_1;
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
            function (sport_service_1_1) {
                sport_service_1 = sport_service_1_1;
            },
            function (calendar_service_1_1) {
                calendar_service_1 = calendar_service_1_1;
            },
            function (refresh_date_service_1_1) {
                refresh_date_service_1 = refresh_date_service_1_1;
            },
            function (storage_service_1_1) {
                storage_service_1 = storage_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (admob_service_1_1) {
                admob_service_1 = admob_service_1_1;
            }],
        execute: function() {
            OpanasComponent = (function () {
                function OpanasComponent(_translator, _calendarService, _refreshDateService, _userServe) {
                    this._translator = _translator;
                    this._calendarService = _calendarService;
                    this._refreshDateService = _refreshDateService;
                    this._userServe = _userServe;
                    this.sideBarIsOpen = false;
                }
                OpanasComponent.prototype.bla = function () {
                    location.reload();
                };
                //config app
                OpanasComponent.prototype.ngOnInit = function () {
                    //cordova plugins setup
                    var onDeviceReady = function () {
                        //keepAwake screen
                        window.plugins.insomnia.keepAwake();
                    };
                    document.addEventListener("deviceready", onDeviceReady, false);
                    //refresh-date
                    this._refreshDateService.refresher();
                    //translator config
                    this._translator.setSupportLanguages(languages);
                    this._translator.setKeys(keysVendor);
                    //basic language of application
                    this._translator.setCurrentLanguage(this._userServe.getLanguage());
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
                        providers: [router_1.ROUTER_PROVIDERS, core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy }), translate_service_1.TranslateService, food_service_1.FoodService, sport_service_1.SportService, calendar_service_1.CalendarService, refresh_date_service_1.RefreshDateService, storage_service_1.StorageService, user_service_1.UserService, admob_service_1.AdMobService],
                        pipes: [translate_service_1.TranslatePipe],
                        styles: ["\n    .header{\n    height: 15vw;\n    width: 100vw;\n    }\n\t\t.container {\n      background: url(./src/img/tempBackground.png) no-repeat center center;\n      width: 100vw;\n      height: 100vh;\n      overflow: hidden;\n    }\n\n  .temporary {\n    position: absolute;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: center;\n    align-items: center;\n    background-color: green;\n    right: 40vw;\n    top: 40;\n    height: 50px;\n    width: 100px;\n    opacity: 0.3;\n  }\n  "],
                        template: "\n<div class=\"container\">\n\n  <div class=\"header\">\n    <div class=\"temporary\">\n\n      <div (click)=\"bla()\">reload</div>\n\n    </div>\n  </div>\n\n  <fm-side-bar [(isOpen)]=\"sideBarIsOpen\"></fm-side-bar>\n  <router-outlet></router-outlet>\n</div>\n\n" }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Start', component: start_component_1.StartComponent, useAsDefault: true },
                        { path: '/food', name: 'Food', component: food_component_1.FoodComponent },
                        { path: '/sport', name: 'Sport', component: sport_component_1.SportComponent },
                        { path: '/rest', name: 'Rest', component: rest_component_1.RestComponent },
                        { path: '/calendar', name: 'Calendar', component: calendar_component_1.CalendarComponent },
                        { path: '/user', name: 'User', component: user_component_1.UserComponent },
                        { path: '/*path', redirectTo: ['Start'] }
                    ]), 
                    __metadata('design:paramtypes', [translate_service_1.TranslateService, calendar_service_1.CalendarService, refresh_date_service_1.RefreshDateService, user_service_1.UserService])
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
                    'progress': 'progress',
                    'search': 'search',
                    'weight': 'g',
                    'sport.weight': 'weight',
                    'sport.numbers': 'numbers',
                    'sport.time': 'time',
                    'calories': 'Calories',
                    'protein': 'Protein',
                    'carbohydrates': 'Carbohydrates',
                    'fat': 'Fat',
                    'language': 'Language',
                    'create.food': 'Create food',
                    'create.menu': 'Create menu',
                    'paste.menu': 'Paste menu',
                    'menuName': 'menu name',
                    'set': 'set',
                    'add set': '+set',
                    'kg': 'kg',
                    'resp': 'resp',
                    'daily.rate': 'Daily rate',
                    'determine.daily.rate': 'Determine my daily rate'
                },
                'ru': {
                    'progress': 'Прогресс',
                    'search': 'поиск',
                    'weight': 'г',
                    'sport.weight': 'какой вес',
                    'sport.numbers': 'сколько раз',
                    'sport.time': 'время',
                    'calories': 'Калории',
                    'protein': 'Белки',
                    'carbohydrates': 'Углеводы',
                    'fat': 'Жиры',
                    'language': 'Язык',
                    'create.food': 'Добавить блюдо',
                    'create.menu': 'Создать новое меню',
                    'paste.menu': 'Выбрать готовое меню',
                    'menuName': 'название меню',
                    'set': 'сет',
                    '+set': '+сет',
                    'kg': 'кг',
                    'resp': 'повт',
                    'daily.rate': 'Cуточная норма',
                    'determine.daily.rate': 'Определить мою суточную норму'
                }
            };
        }
    }
});
//# sourceMappingURL=opanas.component.js.map