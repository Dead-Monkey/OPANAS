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
                function OpanasComponent(_translator, _calendarService, _refreshDateService, _userServe, _AdMobServe, _router) {
                    this._translator = _translator;
                    this._calendarService = _calendarService;
                    this._refreshDateService = _refreshDateService;
                    this._userServe = _userServe;
                    this._AdMobServe = _AdMobServe;
                    this._router = _router;
                    this.sideBarIsOpen = false;
                }
                //config app
                OpanasComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    //cordova plugins setup
                    var onDeviceReady = function () {
                        //keepAwake screen
                        window.plugins.insomnia.keepAwake();
                        //backgound mode
                        cordova.plugins.backgroundMode.enable();
                        cordova.plugins.backgroundMode.setDefaults({ text: 'waiting for you :-)' });
                        //AdMob
                        _this._AdMobServe.createInterstitialFirst();
                        _this._AdMobServe.prepareInterstitialFirst();
                        setTimeout(function () { return _this._AdMobServe.showInterstitialFirst(); }, 20000);
                    };
                    var onBackKeyDown = function () {
                        _this._router.navigate(['Start']);
                    };
                    document.addEventListener("deviceready", onDeviceReady, false);
                    document.addEventListener("backbutton", onBackKeyDown, true);
                    //translator config
                    this._translator.setSupportLanguages(languages);
                    this._translator.setKeys(keysVendor);
                    //basic language of application
                    if (this._userServe.getFirstEnter()) {
                        if (navigator.language.startsWith('ru')) {
                            this._userServe.setLanguage('ru');
                        }
                    }
                    this._translator.setCurrentLanguage(this._userServe.getLanguage());
                    //default language will be use if current language dont has key. it's an optional.
                    this._translator.setDefaultLanguage('en');
                    //check first enter
                    this._userServe.setFirstEnter();
                    this.date = this._calendarService.getCurrentDate();
                };
                OpanasComponent.prototype.ngAfterContentChecked = function () {
                    this.date = this._calendarService.getCurrentDate();
                };
                OpanasComponent.prototype.goCalendar = function () {
                    this._router.navigate(['Calendar']);
                };
                OpanasComponent = __decorate([
                    core_1.Component({
                        selector: 'opanas-app',
                        directives: [router_1.ROUTER_DIRECTIVES, side_bar_component_1.SideBar],
                        providers: [router_1.ROUTER_PROVIDERS, core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy }), translate_service_1.TranslateService, food_service_1.FoodService, sport_service_1.SportService, calendar_service_1.CalendarService, refresh_date_service_1.RefreshDateService, storage_service_1.StorageService, user_service_1.UserService, admob_service_1.AdMobService],
                        pipes: [translate_service_1.TranslatePipe],
                        styles: ["\n    .header {\n      height: 15vw;\n      width: 100vw;\n    }\n    .container {\n      background: url(./src/img/tempBackground.png) no-repeat center center;\n      width: 100vw;\n      height: 100vh;\n      overflow: hidden;\n    }\n    .calendar {\n      position: absolute;\n      width: 24vw;\n      height: 6vw;\n      left: 38vw;\n      margin-top: 2.5vw;\n      color: #ff9d2d;\n      font-size: 19px;\n      z-index: 10;\n      // border-top: 2px solid #ff9d2d;\n    // border-bottom: 2px solid #ff9d2d;\n      text-align: center;\n    }\n    .line{\n      position: absolute;\n      width:40vw;\n      height: 3px;\n      left:30vw;\n      background: -webkit-linear-gradient(left,rgba(255,0,0,0),rgba(255, 157, 45, 1),rgba(255,0,0,0));\n     background: linear-gradient(to right, rgba(255,0,0,0), rgba(255, 157, 45, 1),rgba(255,0,0,0));\n       z-index: 10;\n    }\n    .line_up {\n      position: absolute;\n      top:2vw;\n    }\n    .line_down {\n      position: absolute;\n      top:8vw;\n    }\n  "],
                        template: "\n<div class=\"container\">\n\n  <div class=\"header\">\n<div class=\"line line_up\"></div>\n  <div *ngIf=\"_userServe.getLanguage()==='en'\" class=\"calendar\" (touchend)=\"goCalendar()\">{{date.getMonth()+1}}/{{date.getDate()}}/{{date.getFullYear()}}</div>\n  <div *ngIf=\"_userServe.getLanguage()==='ru'\" class=\"calendar\" (touchend)=\"goCalendar()\">{{date.getDate()}}/{{date.getMonth()+1}}/{{date.getFullYear()}}</div>\n<div class=\"line line_down\"></div>\n  </div>\n\n  <fm-side-bar [(isOpen)]=\"sideBarIsOpen\"></fm-side-bar>\n  <router-outlet></router-outlet>\n</div>\n\n" }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Start', component: start_component_1.StartComponent, useAsDefault: true },
                        { path: '/food', name: 'Food', component: food_component_1.FoodComponent },
                        { path: '/sport', name: 'Sport', component: sport_component_1.SportComponent },
                        { path: '/rest', name: 'Rest', component: rest_component_1.RestComponent },
                        { path: '/calendar', name: 'Calendar', component: calendar_component_1.CalendarComponent },
                        { path: '/user/...', name: 'User', component: user_component_1.UserComponent },
                        { path: '/*path', redirectTo: ['Start'] }
                    ]), 
                    __metadata('design:paramtypes', [translate_service_1.TranslateService, calendar_service_1.CalendarService, refresh_date_service_1.RefreshDateService, user_service_1.UserService, admob_service_1.AdMobService, router_1.Router])
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
                    'food': 'Food',
                    'sport': 'Sport',
                    'rest': 'Rest',
                    'calendar': 'Calendar',
                    'settings': 'Settings',
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
                    'done': 'Done',
                    'language': 'Language',
                    'create.food': 'Create food',
                    'create.menu': 'Create menu',
                    'choose.menu': 'Choose menu',
                    'choose.training': 'Choose training',
                    'menuName': 'menu name',
                    'trainingName': 'training name',
                    'set': 'set',
                    '+set': '+set',
                    'kg': 'kg',
                    'cm': 'cm',
                    'resp': 'resp',
                    'daily.rate': 'Daily rate',
                    'determine.daily.rate': 'Determine my daily rate',
                    'added.meals': 'Added meals',
                    'meals.name': 'Meals name',
                    'create.exercise': 'Add exercise',
                    'added.exercise': 'Added exercise',
                    'create.training.plan': 'Create training plan',
                    'reset': 'RESET',
                    'stop': 'STOP',
                    'resume': 'RESUME',
                    'start': 'START',
                    'sex': 'Sex',
                    'age': 'Age',
                    'height': 'Height',
                    'mass': 'Weight',
                    'years': 'years',
                    'activity.level': 'Activity level',
                    'point': 'Point',
                    'ccal': 'ccal',
                    'name': 'Name',
                    'menu': 'menu',
                    'minimum': 'minimum or abscence',
                    '3times': '3 times a week',
                    '5times': '5 times a week',
                    '5times.intensity': '5 times a week high intensity',
                    'every.day': 'every day',
                    'every.day.intensity': 'every day intensity or 2 times a day',
                    'lose.weight.intensity': 'lose weight intensity',
                    'lose.weight': 'lose weight',
                    'keep.weight': 'keep weight',
                    'gain.weight': 'gain weight',
                    'January': 'January',
                    'February': 'February',
                    'March': 'March',
                    'April': 'April',
                    'May': 'May',
                    'June': 'June',
                    'July': 'July',
                    'August': 'August',
                    'September': 'September',
                    'October': 'October',
                    'November': 'November',
                    'December': 'December',
                    'Sun': 'Sun',
                    'Mon': 'Mon',
                    'Tue': 'Tue',
                    'Wed': 'Wed',
                    'Thu': 'Thu',
                    'Fri': 'Fri',
                    'Sat': 'Sat',
                    'today': 'Today'
                },
                'ru': {
                    'food': 'Питание',
                    'sport': 'Тренировки',
                    'rest': 'Отдых',
                    'calendar': 'Календарь',
                    'settings': 'Настройки',
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
                    'done': 'Готово',
                    'create.food': 'Добавить блюдо',
                    'create.menu': 'Создать новое меню',
                    'choose.menu': 'Выбрать меню',
                    'choose.training': 'Выбрать тренировку',
                    'menuName': 'название меню',
                    'trainingName': 'название тренировки',
                    'set': 'сет',
                    '+set': '+сет',
                    'kg': 'кг',
                    'cm': 'см',
                    'resp': 'повт',
                    'daily.rate': 'Cуточная норма',
                    'determine.daily.rate': 'Определить мою суточную норму',
                    'added.meals': 'Добавленные блюда',
                    'meals.name': 'Название',
                    'create.exercise': 'Добавить упражнение',
                    'added.exercise': 'Добавленные упражнения',
                    'create.training.plan': 'Создать программу',
                    'reset': 'СБРОС',
                    'stop': 'СТОП',
                    'resume': 'ПУСК',
                    'start': 'ПУСК',
                    'sex': 'Пол',
                    'age': 'Возраст',
                    'height': 'Рост',
                    'mass': 'Вес',
                    'years': 'лет',
                    'activity.level': 'Уровень активности',
                    'point': 'Цель',
                    'ccal': 'ккал',
                    'name': 'Название',
                    'menu': 'меню',
                    'minimum': 'минимум или отсутствие',
                    '3times': '3 раза в неделю',
                    '5times': '5 раз в неделю',
                    '5times.intensity': 'интенсивно 5 раз в неделю',
                    'every.day': 'каждый день',
                    'every.day.intensity': 'интенсивно каждый день или 2 раза в день',
                    'lose.weight.intensity': 'интенсивно худеть',
                    'lose.weight': 'худеть',
                    'keep.weight': 'сохранять текущий вес',
                    'gain.weight': 'набирать',
                    'January': 'Январь',
                    'February': 'Февраль',
                    'March': 'Март',
                    'April': 'Апрель',
                    'May': 'Май',
                    'June': 'Июнь',
                    'July': 'Июль',
                    'August': 'Август',
                    'September': 'Сентябрь',
                    'October': 'Октябрь',
                    'November': 'Ноябрь',
                    'December': 'Декабрь',
                    'Sun': 'Вс',
                    'Mon': 'Пн',
                    'Tue': 'Вт',
                    'Wed': 'Ср',
                    'Thu': 'Чт',
                    'Fri': 'Пт',
                    'Sat': 'Сб',
                    'today': 'Сегодня'
                }
            };
        }
    }
});
//# sourceMappingURL=opanas.component.js.map