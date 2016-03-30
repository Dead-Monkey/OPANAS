System.register(['angular2/core', '../../shared/services/translate/translate.service', '../../shared/components/progress-bar/progress-bar.component', '../plus-bar/plus-bar.component', '../../shared/pipes/simple-search/simple-search.pipe', '../../services/calenadar/calendar.service', '../../services/user/user.service', '../../services/sport/sport.service', '../../shared/directives/swipe-delete-side/swipe-delete-side.directive'], function(exports_1, context_1) {
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
    var core_1, translate_service_1, progress_bar_component_1, plus_bar_component_1, simple_search_pipe_1, calendar_service_1, user_service_1, sport_service_1, swipe_delete_side_directive_1;
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
            function (sport_service_1_1) {
                sport_service_1 = sport_service_1_1;
            },
            function (swipe_delete_side_directive_1_1) {
                swipe_delete_side_directive_1 = swipe_delete_side_directive_1_1;
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
                    this.stopwatch = {
                        'hours': 0,
                        'minutes': 0,
                        'seconds': 0
                    };
                    this.stopwatchBussy = false;
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
                    var _this = this;
                    this.pickedSport['picked'] = false;
                    this.pickedSport['setsToggle'] = true;
                    this.pickedSport['sets'] = [{ 'picked': false }];
                    this._calendarService.setDailySport(this.pickedSport, this.currentDate);
                    this.calculateSportRefresh();
                    for (var _i = 0, _a = this.pickedSportContainer; _i < _a.length; _i++) {
                        var variable = _a[_i];
                        this.calculateTotalSportInit(variable);
                    }
                    this.pickedSport = {};
                    setTimeout(function () {
                        _this.model = {};
                    }, 0);
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
                SportComponent.prototype.addSet = function (sport, index) {
                    sport['sets'].push({ 'picked': false });
                    sport['picked'] = false;
                    for (var _i = 0, _a = this.pickedSportContainer; _i < _a.length; _i++) {
                        var variable = _a[_i];
                        this.calculateTotalSportInit(variable);
                    }
                    this.calculateSportRefreshAndCalculate();
                    this._calendarService.changeDailySport(index, this.currentDate, sport);
                };
                SportComponent.prototype.removeSet = function (index, sport, setIndex) {
                    sport['sets'].splice(setIndex, 1);
                    if (sport['sets'].every(function (el) { return el['picked']; })) {
                        sport['picked'] = true;
                    }
                    this.calculateSportRefreshAndCalculate();
                    this._calendarService.changeDailySport(index, this.currentDate, sport);
                };
                SportComponent.prototype.openSets = function (sport, index) {
                    sport['setsToggle'] = !sport['setsToggle'];
                    this._calendarService.changeDailySport(index, this.currentDate, sport);
                };
                SportComponent.prototype.pickSet = function (sport, index, setIndex) {
                    sport['sets'][setIndex]['picked'] = !sport['sets'][setIndex]['picked'];
                    if (sport['sets'].every(function (el) { return el['picked']; })) {
                        sport['picked'] = true;
                    }
                    else {
                        sport['picked'] = false;
                    }
                    this.calculateSportRefreshAndCalculate();
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
                    }
                };
                SportComponent.prototype.calculateSportRefreshAndCalculate = function () {
                    this.calculateSportRefresh();
                    for (var _i = 0, _a = this.pickedSportContainer; _i < _a.length; _i++) {
                        var variable = _a[_i];
                        this.calculateTotalSportInit(variable);
                    }
                };
                SportComponent.prototype.changeSport = function (index, sport) {
                    this._calendarService.changeDailySport(index, this.currentDate, sport);
                };
                //timeromer
                SportComponent.prototype.stopwatchToggle = function () {
                    var _this = this;
                    if (!this.stopwatchBussy) {
                        this.stopwatchVendor = setInterval(function () {
                            _this.stopwatch['seconds']++;
                            if (_this.stopwatch['seconds'] === 60) {
                                _this.stopwatch['minutes']++;
                                _this.stopwatch['seconds'] = 0;
                            }
                            if (_this.stopwatch['minutes'] === 60) {
                                _this.stopwatch['hours']++;
                                _this.stopwatch['minutes'] = 0;
                            }
                        }, 1000);
                    }
                    else {
                        clearInterval(this.stopwatchVendor);
                    }
                    this.stopwatchBussyToggle();
                };
                SportComponent.prototype.stopwatchReset = function () {
                    for (var key in this.stopwatch) {
                        this.stopwatch[key] = 0;
                    }
                };
                SportComponent.prototype.stopwatchBussyToggle = function () {
                    this.stopwatchBussy = !this.stopwatchBussy;
                };
                SportComponent = __decorate([
                    core_1.Component({
                        selector: 'op-sport',
                        directives: [progress_bar_component_1.ProgressBar, plus_bar_component_1.PlusComponent, swipe_delete_side_directive_1.SwipeDeleteSideDirective],
                        providers: [],
                        pipes: [translate_service_1.TranslatePipe, simple_search_pipe_1.SimpleSearch],
                        styles: ["\n      .sport_form {\n        position: absolute;;\n        left: 5vw;\n        top: 46vw;\n        height: 5vw;\n        width: 90vw;\n      }\n      .sport_inputSport {\n        position: absolute;\n        height: 12vw;\n        width: 72vw;\n        color: #D0D9D9;\n        font-size: 6vw;\n        background-color: rgba(49, 51, 61, 0.3);\n        box-sizing: border-box;\n        border: 2px solid #0C1017;\n        border-radius: 2vw;\n      }\n    .sport_inputButton_off {\n        position: absolute;\n        right: 0;\n        height: 12vw;\n        width: 15vw;\n        background: url('./src/img/check-off.png') no-repeat center center;\n        background-size: cover;\n        box-sizing: border-box;\n        color: #0d0e15;\n        border: 2px solid #0C1017;\n        border-radius: 2vw;\n      }\n      .sport_inputButton_on {\n        position: absolute;\n        right: 0;\n        height: 12vw;\n        width: 15vw;\n        background: url('./src/img/check-on.png') no-repeat center center;\n        background-size: cover;\n        box-sizing: border-box;\n        color: #0d0e15;\n        border: 2px solid #0C1017;\n        border-radius: 2vw;\n      }\n\n      .sport_serchContainer {\n        position: absolute;\n        background-color: #0C1017;\n        width: 70vw;\n        max-height: 30vh;\n        padding: 1vw;\n        left: 0;\n        right: 2vw;\n        top: 9vw;\n        overflow-y: scroll;\n        border-radius: 2vw;\n        z-index: 3;\n        border-bottom: 2px solid #0C1017;\n      }\n      .sport_searchListItem {\n        float:left;\n        margin-bottom: 1vw;\n        height: 15vw;\n        width: 70vw;\n        line-height: 15vw;\n        box-sizing: border-box;\n        background-color: #3f414a;\n        color: #ff9d2d;\n        font-size: 6vw;\n        text-align: center;\n        border-radius: 2vw;\n      }\n\n      .sport_list {\n        position: absolute;;\n        top:60vw;\n        padding-left: 5vw;\n        width: 95vw;\n        bottom:1px;\n        overflow-y: scroll;\n        overflow-x: hidden;\n      }\n      .sport_listItem {\n        float:left;\n        margin-right: 3vw;\n        margin-top: 2vw;\n        min-height: 15vw;\n        width: 72vw;\n        box-sizing: border-box;\n        background-color: #3f414a;\n        color: #de5200;\n        font-size: 6vw;\n        text-align: center;\n        border-radius: 2vw;\n        line-height: 15vw;\n      }\n      .sport_listSet {\n        float:left;\n        margin-right: 2vw;\n        margin-top: 1vh;\n        min-height: 15vw;\n        width: 27vw;\n        line-height: 15vw;\n        background-color: #3f414a;\n        box-sizing: border-box;\n        color: #ff9d2d;\n        font-size: 6vw;\n        text-align: center;\n        border-radius: 2vw;\n        border: none;\n      }\n      .sport_listWeight {\n        float:left;\n        height: 15vw;\n        width: 21vw;\n        line-height: 15vw;\n        margin-top: 1vh;\n        background-color: #3f414a;\n        box-sizing: border-box;\n        color: #ff9d2d;\n        font-size: 6vw;\n        text-align: center;\n        border-radius: 2vw;\n        border: none;\n      }\n      .sport_listNumbers {\n        float:left;\n        margin-left: 2vw;\n        margin-right: 3vw;\n        height: 15vw;\n        width: 20vw;\n        margin-top: 1vh;\n        line-height: 15vw;\n        background-color: #3f414a;\n        box-sizing: border-box;\n        color: #ff9d2d;\n        font-size: 6vw;\n        text-align: center;\n        border-radius: 2vw;\n        border: none;\n      }\n      .sport_dropdownButton {\n        float: left;\n        margin-left: 8vw;\n        margin-top: 3vw;\n        width: 10vw;\n        height: 10vw;\n        background: url('./src/img/dropdown.png') no-repeat center center;\n        background-size: cover;\n        box-sizing: border-box;\n      }\n\n    .sport_dropdownButonAnime{\n      transform:rotate(180deg)\n    }\n    .sport_listButton_on {\n      float: left;\n      height: 15vw;\n      width: 15vw;\n      background: url('./src/img/check-on.png') no-repeat center center;\n      background-color: #3f414a;\n      background-size: cover;\n      box-sizing: border-box;\n      color: #0d0e15;\n      border-radius: 2vw;\n      margin-top: 1vh;\n    }\n  .sport_listButton_on_exrc {\n    float: left;\n    height: 15vw;\n    width: 15vw;\n    margin-top: 2vw;\n    background: url('./src/img/exrc_check-on.png') no-repeat center center;\n    background-color: #3f414a;\n    background-size: cover;\n    box-sizing: border-box;\n    color: #0d0e15;\n    border-radius: 2vw;\n  }\n  .sport_listButton_off {\n    float: left;\n    height: 15vw;\n    width: 15vw;\n    margin-top: 2vw;\n    background: url('./src/img/check-off.png') no-repeat center center;\n    background-color: #3f414a;\n    background-size: cover;\n    box-sizing: border-box;\n    color: #0d0e15;\n    border-radius: 2vw;\n  }\n  .sport_timer {\n    position: absolute;;\n    margin-left: 5vw;\n    top: 30vw;\n    width: 90vw;\n    height: 12vw;\n    text-align: center;\n    background-color: #3f414a;\n    border: 3px solid #0d0e15;\n    box-sizing: border-box;\n    border-radius: 3vw;\n    line-height: 10vw;\n\n  }\n  .sport_timerButtons {\n    float: left;\n    width: 23vw;\n    height: 10vw;\n    border-radius: 3vw;\n    color: #ff9d2d;\n    /*font-weight: bold;*/\n  }\n  .clockFace {\n    float: left;\n    width: 39vw;\n    height: 11vw;\n    font-size: 6vw;\n    color: #de5200;\n    border-right: 3px solid #0d0e15;\n    border-left: 3px solid #0d0e15;\n  }\n  .clockFace_numbers {\n    float: left;\n    width: 8vw;\n  }\n  .clockFace_hours {\n    /*margin-left: 8vw;*/\n    width: 16vw;\n    text-align: right;\n  }\n  .sport_listItemContainer{\n    position:relative;\n    min-height: 16vw;\n    width:90vw;\n    overflow:hidden;\n  }\n      "],
                        template: "\n<op-plus [iAm]=\"'sport'\" [(isOpen)]=\"plusIsOpen\"></op-plus>\n\n<fm-progress-bar [name]=\"'progress'|translate\" [mainLine]=\"totalSport.procentDone\" [secondLine]=\"\" [minNumber]=\"totalSport.done\" [maxNumber]=\"pickedSportContainer.length\"></fm-progress-bar>\n\n<div class=\"sport_timer\">\n  <div class=\"sport_timerButtons\" (click)=\"stopwatchReset()\">{{'reset'| translate}}</div>\n  <div class=\"clockFace\">\n      <div class=\"clockFace_numbers clockFace_hours\">{{(stopwatch['hours'] < 10)?'0'+ stopwatch['hours']:''+ stopwatch['hours']}}:</div>\n      <div class=\"clockFace_numbers\">{{(stopwatch['minutes'] < 10)?'0'+ stopwatch['minutes']:''+ stopwatch['minutes']}}:</div>\n      <div class=\"clockFace_numbers\">{{(stopwatch['seconds'] < 10)?'0'+ stopwatch['seconds']:''+ stopwatch['seconds'] }}</div>\n  </div>\n  <div *ngIf=\"(!stopwatchBussy && !(stopwatch['seconds'] || stopwatch['minutes'] || stopwatch['hours']))\" class=\"sport_timerButtons\" (click)=\"stopwatchToggle()\">{{'start'| translate}}</div>\n  <div *ngIf=\"stopwatchBussy\" class=\"sport_timerButtons\" (click)=\"stopwatchToggle()\">{{'stop'| translate}}</div>\n  <div *ngIf=\"(!stopwatchBussy && (stopwatch['seconds'] || stopwatch['minutes'] || stopwatch['hours']))\" class=\"sport_timerButtons\" (click)=\"stopwatchToggle()\">{{'resume'| translate}}</div>\n</div>\n\n<form class=\"sport_form\" (ngSubmit)=\"onSubmit(sportForm)\" #sportForm=\"ngForm\">\n\n  <label for=\"sportName\"></label>\n  <input class=\"sport_inputSport\" required [placeholder]=\"('search'|translate) + '...'\" [(ngModel)]=\"model.name\" ngControl=\"name\" #name=\"ngForm\" (input)=\"pickSportInput(model.name)\">\n\n  <button #subBtn type=\"submit\" [ngClass]=\"{sport_inputButton_off: subBtn['disabled'], sport_inputButton_on: !subBtn['disabled']}\" [disabled]=\"!sportForm.form.valid || !correctSport\"></button>\n\n  <div *ngIf=\"(name.valid && !correctSport)\" class=\"sport_serchContainer\">\n    <div class=\"sport_searchListItem\" *ngFor=\"#item of sportContainer  | simpleSearch :'name':language : name.value; #i = index;\" (click)=\"pickSport(item);\">\n\n      {{item?.name[language]}}\n    </div>\n  </div>\n</form>\n\n<div class=\"sport_list\">\n  <div   *ngFor=\"#item of pickedSportContainer; #i = index\">\n<div class=\"sport_listItemContainer\" (fmSwipeDeleteSide)=\"removeSport(i, item)\">\n<div class=\"sport_listItem\" >\n  {{item?.name[language]}}\n  <div class=\"sport_dropdownButton\" [ngClass]=\"{sport_dropdownButonAnime:!item['setsToggle']}\" (touchend)=\"openSets(item,i)\"></div>\n</div>\n<div [ngClass]=\"{sport_listButton_off: !item.picked, sport_listButton_on_exrc: item.picked}\" (touchend)=\"checkBoxToggle(i, item)\"></div>\n</div>\n\n    <div *ngIf=\"item['setsToggle']\">\n      <div  class=\"sport_listItemContainer\" *ngFor=\"#it of item.sets; #setIndex = index\" (fmSwipeDeleteSide)=\"removeSet(i, item, setIndex)\">\n        <div class=\"sport_listSet\" >{{'set'| translate}} {{setIndex+1}}</div>\n        <input class=\"sport_listWeight\" type=\"number\" min=\"0\" [(ngModel)]=\"item['sets'][setIndex].weight\" (blur)=\"changeSport(i, item)\" placeholder=\"{{'kg'| translate}}\">\n        <input class=\"sport_listNumbers\" type=\"number\" min=\"0\" [(ngModel)]=\"item['sets'][setIndex].numbers\" (blur)=\"changeSport(i, item)\" placeholder=\"{{'resp'| translate}}\">\n        <div [ngClass]=\"{sport_listButton_off: !it.picked, sport_listButton_on: it.picked}\" (click)=\"pickSet(item, i, setIndex)\"></div>\n      </div>\n      <div class=\"sport_listSet\" (click)=\"addSet(item, i)\">{{'+set'| translate}}</div>\n    </div>\n  </div>\n</div>\n    "
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