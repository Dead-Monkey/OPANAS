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
                    this.stopwatch = 0;
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
                    this.pickedSport['picked'] = false;
                    this.pickedSport['setsToggle'] = true;
                    this.pickedSport['sets'] = [{ 'picked': false }];
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
                SportComponent.prototype.stopwatchStart = function () {
                    var _this = this;
                    if (!this.stopwatchBussy) {
                        this.stopwatchVendor = setInterval(function () { return _this.stopwatch++; }, 1000);
                        this.stopwatchBussyToggle();
                    }
                };
                SportComponent.prototype.stopwatchStop = function () {
                    if (this.stopwatchBussy) {
                        clearInterval(this.stopwatchVendor);
                        this.stopwatchBussyToggle();
                    }
                };
                SportComponent.prototype.stopwatchReset = function () {
                    this.stopwatch = 0;
                };
                SportComponent.prototype.stopwatchBussyToggle = function () {
                    this.stopwatchBussy = !this.stopwatchBussy;
                };
                SportComponent = __decorate([
                    core_1.Component({
                        selector: 'op-sport',
                        directives: [progress_bar_component_1.ProgressBar, plus_bar_component_1.PlusComponent, swipe_holder_directive_1.SwipeHoldertDirective],
                        providers: [],
                        pipes: [translate_service_1.TranslatePipe, simple_search_pipe_1.SimpleSearch],
                        styles: ["\n      .sport_form {\n        position: relative;\n        margin: 5vw;\n        height: 5vw;\n        width: 90vw;\n      }\n      .sport_inputSport {\n        position: absolute;\n        height: 12vw;\n        width: 70vw;\n        color: #0d0e15;\n        font-size: 7vw;\n        background-color: rgba(49, 51, 61, 0.3);\n        box-sizing: border-box;\n        border: 5px solid #0C1017;\n        border-radius: 2vw;\n      }\n    .sport_inputButton_off {\n        position: absolute;\n        right: 3vw;\n        height: 12vw;\n        width: 15vw;\n        background: url('./src/img/check-off.png') no-repeat center center;\n        background-size: cover;\n        box-sizing: border-box;\n        color: #0d0e15;\n        border: 5px solid #0C1017;\n        border-radius: 2vw;\n      }\n      .sport_inputButton_on {\n        position: absolute;\n        right: 0;\n        height: 12vw;\n        width: 15vw;\n        background: url('./src/img/check-on.png') no-repeat center center;\n        background-size: cover;\n        box-sizing: border-box;\n        color: #0d0e15;\n        border: 5px solid #0C1017;\n        border-radius: 2vw;\n      }\n\n      .sport_serchContainer {\n        position: absolute;\n        background-color: #0C1017;\n        width: 70vw;\n        max-height: 30vh;\n        padding: 2vw;\n        left: 0;\n        right: 2vw;\n        top: 9vw;\n        overflow-y: scroll;\n        border-radius: 2vw;\n        z-index: 3\n      }\n      .sport_searchListItem {\n        float:left;\n        margin-bottom: 1vw;\n        height: 15vw;\n        width: 70vw;\n        line-height: 15vw;\n        box-sizing: border-box;\n        background-color: #3f414a;\n        color: #ff9d2d;\n        font-size: 6vw;\n        text-align: center;\n        border-radius: 2vw;\n      }\n\n      .sport_list {\n        position:relative;\n        top:5vh;\n        margin-left: 5vw;\n        margin-right: 5vw;\n        width: 90vw;\n        height: 57vh;\n        overflow-y: scroll;\n        overflow-x: hidden;\n      }\n      .sport_listItem {\n        float:left;\n        margin-right: 3vw;\n        margin-top: 2vw;\n        height: 15vw;\n        width: 70vw;\n        box-sizing: border-box;\n        background-color: #3f414a;\n        color: #de5200;\n        font-size: 6vw;\n        text-align: center;\n        border-radius: 2vw;\n        line-height: 15vw;\n      }\n      .sport_listWeight {\n        float:left;\n        height: 15vw;\n        width: 20vw;\n        line-height: 15vw;\n        margin-top: 1vh;\n        background-color: #3f414a;\n        box-sizing: border-box;\n        color: #ff9d2d;\n        font-size: 6vw;\n        text-align: center;\n        border-radius: 2vw;\n        border: none;\n      }\n      .sport_listNumbers {\n        float:left;\n        margin-left: 2vw;\n        margin-right: 3vw;\n        height: 15vw;\n        width: 20vw;\n        margin-top: 1vh;\n        line-height: 15vw;\n        background-color: #3f414a;\n        box-sizing: border-box;\n        color: #ff9d2d;\n        font-size: 6vw;\n        text-align: center;\n        border-radius: 2vw;\n        border: none;\n      }\n      .sport_listSet {\n        float:left;\n        margin-right: 2vw;\n        margin-top: 1vh;\n        height: 15vw;\n        width: 26vw;\n        line-height: 15vw;\n        background-color: #3f414a;\n        box-sizing: border-box;\n        color: #ff9d2d;\n        font-size: 6vw;\n        text-align: center;\n        border-radius: 2vw;\n        border: none;\n      }\n      .sport_dropdownButton {\n        float: left;\n        margin-left: 8vw;\n        margin-top: 3vw;\n        width: 10vw;\n        height: 10vw;\n        background: url('./src/img/dropdown.png') no-repeat center center;\n        background-size: cover;\n        box-sizing: border-box;\n      }\n\n      .sport_dropdownButonAnime{\n        transform:rotate(180deg)\n      }\n      .sport_listButton_on {\n      float: left;\n      height: 15vw;\n      width: 15vw;\n      background: url('./src/img/check-on.png') no-repeat center center;\n      background-color: #3f414a;\n      background-size: cover;\n      box-sizing: border-box;\n      color: #0d0e15;\n      border-radius: 2vw;\n      margin-top: 1vh;\n    }\n    .sport_listButton_on_exrc {\n    float: left;\n    height: 15vw;\n    width: 15vw;\n    margin-top: 2vw;\n    background: url('./src/img/exrc_check-on.png') no-repeat center center;\n    background-color: #3f414a;\n    background-size: cover;\n    box-sizing: border-box;\n    color: #0d0e15;\n    border-radius: 2vw;\n  }\n    .sport_listButton_off {\n      float: left;\n      height: 15vw;\n      width: 15vw;\n      background: url('./src/img/check-off.png') no-repeat center center;\n      background-color: #3f414a;\n      background-size: cover;\n      box-sizing: border-box;\n      color: #0d0e15;\n      border-radius: 2vw;\n    }\n    .sport_timer {\n      position: relative;\n      margin-left: 10vw;\n      top:2vw;\n      width: 90vw;\n      height: 6vh;\n      text-align: center;\n    }\n    .tmp{\n      float:left;\n      width: 20vw;\n      height:10vw;\n      background-color: gray;\n      border: 3px solid black;\n    }\n      "],
                        template: "\n<op-plus [iAm]=\"'sport'\" [(isOpen)]=\"plusIsOpen\"></op-plus>\n\n<fm-progress-bar [name]=\"'progress'|translate\" [mainLine]=\"totalSport.procentDone\" [secondLine]=\"\" [minNumber]=\"totalSport.done\" [maxNumber]=\"pickedSportContainer.length\"></fm-progress-bar>\n\n<div class=\"sport_timer\">\n<div class=\"tmp\">stopwatch {{stopwatch}}</div>\n<div class=\"tmp\"(click)=\"stopwatchStart()\">START/RESTART</div>\n<div class=\"tmp\" (click)=\"stopwatchStop()\">STOP</div>\n<div class=\"tmp\" (click)=\"stopwatchReset()\">RESET</div>\n</div>\n\n<form class=\"sport_form\" (ngSubmit)=\"onSubmit(sportForm)\" #sportForm=\"ngForm\">\n\n  <label for=\"sportName\"></label>\n  <input class=\"sport_inputSport\" required [placeholder]=\"('search'|translate) + '...'\" [(ngModel)]=\"model.name\" ngControl=\"name\" #name=\"ngForm\" (input)=\"pickSportInput(model.name)\">\n\n  <button #subBtn type=\"submit\" [ngClass]=\"{sport_inputButton_off: subBtn['disabled'], sport_inputButton_on: !subBtn['disabled']}\" [disabled]=\"!sportForm.form.valid || !correctSport\"></button>\n\n  <div *ngIf=\"(name.valid && !correctSport)\" class=\"sport_serchContainer\">\n    <div class=\"sport_listItem\" *ngFor=\"#item of sportContainer  | simpleSearch :'name':language : name.value; #i = index;\" (click)=\"pickSport(item);\">\n\n      {{item?.name[language]}}\n    </div>\n  </div>\n</form>\n\n<div class=\"sport_list\">\n  <div *ngFor=\"#item of pickedSportContainer; #i = index\">\n\n    <div class=\"sport_listItem\" fmSwipe (fmSwipeLeft)=\"removeSport(i, item)\" (fmSwipeRight)=\"removeSport(i, item)\" (click)=\"openSets(item,i)\">\n      {{item?.name[language]}}\n      <div class=\"sport_dropdownButton\" [ngClass]=\"{sport_dropdownButonAnime:!item['setsToggle']}\"></div>\n    </div>\n    <div [ngClass]=\"{sport_listButton_off: !item.picked, sport_listButton_on_exrc: item.picked}\" (click)=\"checkBoxToggle(i, item)\"></div>\n\n    <div *ngIf=\"item['setsToggle']\">\n      <div *ngFor=\"#it of item.sets; #setIndex = index\" fmSwipe (fmSwipeLeft)=\"removeSet(i, item, setIndex)\" (fmSwipeRight)=\"removeSet(i, item, setIndex)\">\n        <div class=\"sport_listSet\" >set {{setIndex+1}}</div>\n        <input class=\"sport_listWeight\" type=\"number\" min=\"0\" [(ngModel)]=\"item['sets'][setIndex].weight\" (blur)=\"changeSport(i, item)\" placeholder=\"kg\">\n        <input class=\"sport_listNumbers\" type=\"number\" min=\"0\" [(ngModel)]=\"item['sets'][setIndex].numbers\" (blur)=\"changeSport(i, item)\" placeholder=\"reps\">\n        <div [ngClass]=\"{sport_listButton_off: !it.picked, sport_listButton_on: it.picked}\" (click)=\"pickSet(item, i, setIndex)\"></div>\n      </div>\n      <div class=\"sport_listSet\" (click)=\"addSet(item, i)\">add set</div>\n    </div>\n  </div>\n</div>\n    "
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