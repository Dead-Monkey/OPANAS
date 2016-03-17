System.register(['angular2/core', '../../shared/services/translate/translate.service', '../../shared/components/progress-bar/progress-bar.component', '../plus-bar/plus-bar.component', '../../shared/pipes/simple-search/simple-search.pipe', '../../services/calenadar/calendar.service', '../../services/user/user.service', '../../shared/directives/swipeHolder/swipe-holder.directive', '../../services/sport/sport.service'], function(exports_1, context_1) {
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
    var core_1, translate_service_1, progress_bar_component_1, plus_bar_component_1, simple_search_pipe_1, calendar_service_1, user_service_1, swipe_holder_directive_1, sport_service_1;
    var SportComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (translate_service_1_1) {
                translate_service_1 = translate_service_1_1;
            },
            function (progress_bar_component_1_1) {
                progress_bar_component_1 = progress_bar_component_1_1;
            },
            function (plus_bar_component_1_1) {
                plus_bar_component_1 = plus_bar_component_1_1;
            },
            function (simple_search_pipe_1_1) {
                simple_search_pipe_1 = simple_search_pipe_1_1;
            },
            function (calendar_service_1_1) {
                calendar_service_1 = calendar_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (swipe_holder_directive_1_1) {
                swipe_holder_directive_1 = swipe_holder_directive_1_1;
            },
            function (sport_service_1_1) {
                sport_service_1 = sport_service_1_1;
            }],
        execute: function() {
            SportComponent = (function () {
                function SportComponent(_sportServe, _calendarService, _userServe) {
                    this._sportServe = _sportServe;
                    this._calendarService = _calendarService;
                    this._userServe = _userServe;
                    this.model = {};
                    this.language = 'en';
                    this.pickedSport = {};
                    this.pickedSportContainer = [];
                    this.correctSport = false;
                    this.plusIsOpen = false;
                    this.totalSport = {
                        'done': 0,
                        'procentDone': 0
                    };
                }
                SportComponent.prototype.ngOnInit = function () {
                    this.currentDate = this._calendarService.getCurrentDate();
                    this.language = this._userServe.getLanguage();
                    this.userSets = this._userServe.getUserSets()['sport'];
                    this.sportContainer = this._sportServe.getAllSport();
                    this.pickedSportContainer = this._calendarService.getDailySport(this.currentDate);
                    for (var _i = 0, _a = this.pickedSportContainer; _i < _a.length; _i++) {
                        var variable = _a[_i];
                        this.calculateTotalSportInit(variable);
                    }
                };
                SportComponent.prototype.onSubmit = function (sport) {
                    if (sport.value['weight']) {
                        this.pickedSport['weight'] = sport.value['weight'];
                    }
                    if (sport.value['numbers']) {
                        this.pickedSport['numbers'] = sport.value['numbers'];
                    }
                    if (sport.value['time']) {
                        this.pickedSport['time'] = sport.value['time'];
                    }
                    this.pickedSport['picked'] = true;
                    this._calendarService.setDailySport(this.pickedSport, this.currentDate);
                    this.calculateTotalSport(this.pickedSport);
                    this.pickedSport = {};
                    this.model = {};
                    this.correctSport = false;
                };
                SportComponent.prototype.pickSportInput = function (name) {
                    for (var _i = 0, _a = this.sportContainer; _i < _a.length; _i++) {
                        var obj = _a[_i];
                        if (obj['name'][this.language] === name) {
                            return this.pickSport(obj);
                        }
                        else {
                            this.correctSport = false;
                            console.log("unCorrectFood");
                        }
                    }
                };
                SportComponent.prototype.pickSport = function (sport) {
                    var _this = this;
                    this.pickedSport = Object.assign({}, sport);
                    setTimeout(function () { return _this.model['name'] = sport.name[_this.language]; }, 0);
                    this.correctSport = true;
                };
                SportComponent.prototype.removeSport = function (index, sport) {
                    this._calendarService.removeDailySport(index, this.currentDate);
                    this.calculateSportRefresh();
                    for (var _i = 0, _a = this.pickedSportContainer; _i < _a.length; _i++) {
                        var variable = _a[_i];
                        this.calculateTotalSportInit(variable);
                    }
                };
                SportComponent.prototype.checkBoxToggle = function (index, sport) {
                    sport['picked'] = !sport['picked'];
                    this.calculateTotalSport(sport);
                    this._calendarService.changeDailySport(index, this.currentDate, sport);
                };
                SportComponent.prototype.calculateTotalSport = function (sport) {
                    if (sport['picked']) {
                        this.totalSport['done']++;
                    }
                    else {
                        this.totalSport['done']--;
                    }
                    if (this.pickedSportContainer.length) {
                        this.totalSport['procentDone'] = this.totalSport['done'] / this.pickedSportContainer.length * 100;
                    }
                };
                SportComponent.prototype.calculateTotalSportInit = function (sport) {
                    if (sport['picked']) {
                        this.totalSport['done']++;
                    }
                    if (this.pickedSportContainer.length) {
                        this.totalSport['procentDone'] = this.totalSport['done'] / this.pickedSportContainer.length * 100;
                    }
                };
                SportComponent.prototype.calculateSportRefresh = function () {
                    for (var prop in this.totalSport) {
                        this.totalSport[prop] = 0;
                        this.totalSport[prop] = 0;
                    }
                };
                SportComponent.prototype.changeSport = function (index, sport) {
                    this._calendarService.changeDailySport(index, this.currentDate, sport);
                };
                SportComponent = __decorate([
                    core_1.Component({
                        selector: 'op-sport',
                        directives: [progress_bar_component_1.ProgressBar, plus_bar_component_1.PlusComponent, swipe_holder_directive_1.SwipeHoldertDirective],
                        providers: [],
                        pipes: [translate_service_1.TranslatePipe, simple_search_pipe_1.SimpleSearch],
                        styles: ["\n      .sport_form {\n        position: relative;\n        margin: 5vw;\n        height: 10vw;\n      }\n      .sport_inputSport {\n        position: absolute;\n        height: 10vw;\n        width: 70vw;\n        background-color: rgba(49, 51, 61, 0.3);\n        box-sizing: border-box;\n        border: 5px solid #0C1017;\n        border-radius: 2vw;\n      }\n      .sport_inputWeight {\n        position: absolute;\n        height: 10vw;\n        width: 30vw;\n        top: 11vw;\n        left: 0;\n        background-color: rgba(49, 51, 61, 0.3);\n        box-sizing: border-box;\n        color: #0d0e15;\n        border: 5px solid #0C1017;\n        border-radius: 2vw;\n      }\n      .sport_inputCount {\n        position: absolute;\n        height: 10vw;\n        width: 30vw;\n        top: 11vw;\n        left: 31vw;\n        background-color: rgba(49, 51, 61, 0.3);\n        box-sizing: border-box;\n        color: #0d0e15;\n        border: 5px solid #0C1017;\n        border-radius: 2vw;\n      }\n      .sport_inputTime {\n        position: absolute;\n        height: 10vw;\n        width: 30vw;\n        top: 11vw;\n        left: 62vw;\n        background-color: rgba(49, 51, 61, 0.3);\n        box-sizing: border-box;\n        color: #0d0e15;\n        border: 5px solid #0C1017;\n        border-radius: 2vw;\n      }\n      .sport_inputButton_off {\n        position: absolute;\n        right: 0;\n        height: 10vw;\n        width: 12vw;\n        background: url('./src/img/check-off.png') no-repeat center center;\n        background-size: cover;\n        box-sizing: border-box;\n        color: #0d0e15;\n        border: 5px solid #0C1017;\n        border-radius: 2vw;\n      }\n      .sport_inputButton_on {\n        position: absolute;\n        right: 0;\n        height: 10vw;\n        width: 12vw;\n        background: url('./src/img/check-on.png') no-repeat center center;\n        background-size: cover;\n        box-sizing: border-box;\n        color: #0d0e15;\n        border: 5px solid #0C1017;\n        border-radius: 2vw;\n      }\n\n      .sport_serchContainer {\n        position: absolute;\n        background-color: #aaa;\n        width: 60vw;\n        left: 0;\n        right: 10px;\n        height: 200px;\n        top: 27px;\n        overflow-y: scroll;\n        z-index: 10;\n      }\n\n      .sport_list {\n        position:relative;\n        top:5vh;\n        margin: 5vw;\n        width: 90vw;\n        height: 55vh;\n        overflow-y: scroll;\n        overflow-x: hidden;\n      }\n      .sport_listItem {\n        float:left;\n        margin-bottom: 2vh;\n        margin-right: 5vw;\n        height: 12vw;\n        width: 70vw;\n        box-sizing: border-box;\n        background-color: #3f414a;\n        color: #ff9d2d;\n        font-size: 6vw;\n        text-align: center;\n        border-radius: 2vw;\n        line-height: 12vw;\n\n      }\n      .sport_listWeight {\n        float:left;\n        height: 12vw;\n        width: 25vw;\n        line-height: 12vw;\n        background-color: #3f414a;\n        box-sizing: border-box;\n        color: #ff9d2d;\n        font-size: 6vw;\n        text-align: center;\n        border-radius: 2vw;\n        border: none;\n      }\n      .sport_listNumbers {\n        float:left;\n\n        margin-left: 5vw;\n        margin-right: 5vw;\n        height: 12vw;\n        width: 25vw;\n        line-height: 12vw;\n        background-color: #3f414a;\n        box-sizing: border-box;\n        color: #ff9d2d;\n        font-size: 6vw;\n        text-align: center;\n        border-radius: 2vw;\n        border: none;\n      }\n      .sport_listTime {\n        float:left;\n        height: 12vw;\n        width: 25vw;\n        line-height: 12vw;\n        background-color: #3f414a;\n        box-sizing: border-box;\n        color: #ff9d2d;\n        font-size: 6vw;\n        text-align: center;\n        border-radius: 2vw;\n        border: none;\n      }\n\n      .sport_listButton_on {\n        float:left;\n        height: 12vw;\n        width: 12vw;\n        background: url('./src/img/check-on.png') no-repeat center center;\n        background-color: #3f414a;\n        background-size: cover;\n        box-sizing: border-box;\n        color: #0d0e15;\n        border-radius: 2vw;\n      }\n      .sport_listButton_off {\n      float: left;\n      height: 12vw;\n      width: 12vw;\n      background: url('./src/img/check-off.png') no-repeat center center;\n      background-color: #3f414a;\n      background-size: cover;\n      box-sizing: border-box;\n      color: #0d0e15;\n      border-radius: 2vw;\n    }\n    .repeatLine {\n      float: left;\n      margin: 1.5vw;\n\n      width: 100%;\n      height: 1.5vw;\n      background-color: #0C1017;\n    }\n    .tmp{\nheight: 2vh;\n    }\n      "],
                        template: "\n<op-plus [iAm]=\"'sport'\" [(isOpen)]=\"plusIsOpen\"></op-plus>\n\n<fm-progress-bar [name]=\"'progress'|translate\" [mainLine]=\"totalSport.procentDone\" [secondLine]=\"\" [minNumber]=\"totalSport.done\" [maxNumber]=\"pickedSportContainer.length\"></fm-progress-bar>\n\n<form class=\"sport_form\" (ngSubmit)=\"onSubmit(sportForm)\" #sportForm=\"ngForm\">\n\n  <label for=\"sportName\"></label>\n  <input class=\"sport_inputSport\" required [placeholder]=\"('search'|translate) + '...'\" [(ngModel)]=\"model.name\" ngControl=\"name\" #name=\"ngForm\" (input)=\"pickSportInput(model.name)\">\n\n  <label for=\"sportWeight\"></label>\n  <input type=\"number\" [min]=\"1\" [placeholder]=\"('sport.weight'|translate) + '...'\" class=\"sport_inputWeight\" [(ngModel)]=\"model.weight\" ngControl=\"weight\" #weight=\"ngForm\">\n\n  <label for=\"sportNumber\"></label>\n  <input type=\"number\" [min]=\"1\" [placeholder]=\"('sport.numbers'|translate) + '...'\" class=\"sport_inputCount\" [(ngModel)]=\"model.numbers\" ngControl=\"numbers\" #numbers=\"ngForm\">\n\n  <label for=\"sportTime\"></label>\n  <input type=\"number\" [min]=\"1\" [placeholder]=\"('sport.time'|translate) + '...'\" class=\"sport_inputTime\" [(ngModel)]=\"model.time\" ngControl=\"time\" #time=\"ngForm\">\n\n  <button #subBtn type=\"submit\" [ngClass]=\"{sport_inputButton_off: subBtn['disabled'], sport_inputButton_on: !subBtn['disabled']}\" [disabled]=\"!sportForm.form.valid || !correctSport\"></button>\n\n  <div *ngIf=\"(name.valid && !correctSport)\" class=\"sport_serchContainer\">\n    <div class=\"sport_listItem\" *ngFor=\"#item of sportContainer  | simpleSearch :'name':language : name.value; #i = index;\" (click)=\"pickSport(item);\">\n\n  {{item?.name[language]}}\n    </div>\n  </div>\n</form>\n\n<div class=\"sport_list\">\n  <div *ngFor=\"#item of pickedSportContainer; #i = index\" fmSwipe (fmSwipeLeft)=\"removeSport(i, item)\" (fmSwipeRight)=\"removeSport(i, item)\">\n\n      <div class=\"sport_listItem\">\n        {{item?.name[language]}}\n      </div>\n      <div [ngClass]=\"{sport_listButton_off: !item.picked, sport_listButton_on: item.picked}\" (click)=\"checkBoxToggle(i, item)\"></div>\n      <input class=\"sport_listWeight\" type=\"number\" min=\"0\" [(ngModel)]=\"item.weight\" (blur)=\"changeSport(i, item)\">\n      <input class=\"sport_listNumbers\" type=\"number\" min=\"0\" [(ngModel)]=\"item.numbers\" (blur)=\"changeSport(i, item)\">\n      <input class=\"sport_listTime\" type=\"number\" min=\"0\" [(ngModel)]=\"item.time\" (blur)=\"changeSport(i, item)\">\n      <div class=\"repeatLine\"></div>\n\n  </div>\n</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [sport_service_1.SportService, calendar_service_1.CalendarService, user_service_1.UserService])
                ], SportComponent);
                return SportComponent;
            }());
            exports_1("SportComponent", SportComponent);
        }
    }
});
//# sourceMappingURL=sport.component.js.map