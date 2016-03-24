System.register(['angular2/core', '../../shared/services/translate/translate.service', '../../shared/components/progress-bar/progress-bar.component', '../plus-bar/plus-bar.component', '../../services/food/food.service', '../../shared/pipes/simple-search/simple-search.pipe', '../../services/calenadar/calendar.service', '../../services/user/user.service', '../../shared/directives/swipe-holder/swipe-holder.directive', '../../shared/directives/swipe-delete-side/swipe-delete-side.directive', '../../services/admob/admob.service'], function(exports_1, context_1) {
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
    var core_1, translate_service_1, progress_bar_component_1, plus_bar_component_1, food_service_1, simple_search_pipe_1, calendar_service_1, user_service_1, swipe_holder_directive_1, swipe_delete_side_directive_1, admob_service_1;
    var FoodComponent;
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
            function (food_service_1_1) {
                food_service_1 = food_service_1_1;
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
            function (swipe_delete_side_directive_1_1) {
                swipe_delete_side_directive_1 = swipe_delete_side_directive_1_1;
            },
            function (admob_service_1_1) {
                admob_service_1 = admob_service_1_1;
            }],
        execute: function() {
            FoodComponent = (function () {
                function FoodComponent(_foodServe, _calendarService, _userServe, _AdMobServe) {
                    this._foodServe = _foodServe;
                    this._calendarService = _calendarService;
                    this._userServe = _userServe;
                    this._AdMobServe = _AdMobServe;
                    this.model = {};
                    this.language = 'en';
                    this.pickedFood = {};
                    this.pickedFoodContainer = [];
                    this.correctFood = false;
                    this.plusIsOpen = false;
                    this.totalFood = {
                        "calories": {
                            "full": 0,
                            "maybe": 0
                        },
                        "protein": {
                            "full": 0,
                            "maybe": 0
                        },
                        "fat": {
                            "full": 0,
                            "maybe": 0
                        },
                        "carbohydrates": {
                            "full": 0,
                            "maybe": 0
                        }
                    };
                }
                FoodComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.currentDate = this._calendarService.getCurrentDate();
                    this.language = this._userServe.getLanguage();
                    this.userSets = this._userServe.getUserSets()['foodSets'];
                    this.foodContainer = this._foodServe.getAllFood();
                    this.pickedFoodContainer = this._calendarService.getDailyFood(this.currentDate);
                    //4 calculate progress-bar
                    for (var _i = 0, _a = this.pickedFoodContainer; _i < _a.length; _i++) {
                        var food = _a[_i];
                        this.calculateFood(food);
                    }
                    //AdMob
                    var onDeviceReady = function () {
                        //AdMob
                        _this._AdMobServe.addBottomBanerFirst();
                    };
                    document.addEventListener("deviceready", onDeviceReady, false);
                };
                FoodComponent.prototype.onSubmit = function (food) {
                    this.pickedFood['weight'] = food.value.weight;
                    this.pickedFood['picked'] = true;
                    this._calendarService.setDailyFood(this.pickedFood, this.currentDate);
                    this.calculateFood(this.pickedFood);
                    this.pickedFood = {};
                    this.model = {};
                    this.correctFood = false;
                };
                FoodComponent.prototype.pickFoodInput = function (name) {
                    for (var _i = 0, _a = this.foodContainer; _i < _a.length; _i++) {
                        var obj = _a[_i];
                        if (obj['name'][this.language] === name) {
                            return this.pickFood(obj);
                        }
                        else {
                            this.correctFood = false;
                        }
                    }
                };
                FoodComponent.prototype.pickFood = function (food) {
                    var _this = this;
                    this.pickedFood = Object.assign({}, food);
                    setTimeout(function () { return _this.model['name'] = food.name[_this.language]; }, 0);
                    this.correctFood = true;
                };
                FoodComponent.prototype.checkBoxToggle = function (index, food) {
                    if (food['picked']) {
                        this.calculateFullMinus(food);
                    }
                    else {
                        this.calculateFull(food);
                    }
                    food['picked'] = !food['picked'];
                    this._calendarService.changeDailyFood(index, this.currentDate, food);
                };
                FoodComponent.prototype.removeFood = function (index, food) {
                    this._calendarService.removeDailyFood(index, this.currentDate);
                    this.calculateFoodRefresh();
                    for (var _i = 0, _a = this.pickedFoodContainer; _i < _a.length; _i++) {
                        var food_1 = _a[_i];
                        this.calculateFood(food_1);
                    }
                };
                FoodComponent.prototype.changeFoodWeight = function (index, food) {
                    var _this = this;
                    setTimeout(function () {
                        if (isNaN(food['weight'])) {
                            food['weight'] = 0;
                        }
                        _this._calendarService.changeDailyFood(index, _this.currentDate, food);
                        _this.calculateFoodRefresh();
                        for (var _i = 0, _a = _this.pickedFoodContainer; _i < _a.length; _i++) {
                            var variable = _a[_i];
                            _this.calculateFood(variable);
                        }
                    }, 500);
                };
                FoodComponent.prototype.calculateFood = function (food) {
                    if (food['picked']) {
                        this.calculateFull(food);
                        this.calculateMayBe(food);
                    }
                    else {
                        this.calculateMayBe(food);
                    }
                };
                FoodComponent.prototype.calculateFoodMinus = function (food) {
                    this.calculateFullMinus(food);
                    this.calculateMayBeMinus(food);
                };
                FoodComponent.prototype.calculateFoodRefresh = function () {
                    for (var prop in this.totalFood) {
                        for (var key in this.totalFood[prop]) {
                            this.totalFood[prop][key] = 0;
                            this.totalFood[prop][key] = 0;
                        }
                    }
                };
                FoodComponent.prototype.calculateFull = function (food) {
                    for (var prop in this.totalFood) {
                        this.totalFood[prop]['full'] = this.totalFood[prop]['full'] + Math.round((food[prop] * food['weight'] / 100));
                    }
                };
                FoodComponent.prototype.calculateMayBe = function (food) {
                    for (var prop in this.totalFood) {
                        this.totalFood[prop]['maybe'] = this.totalFood[prop]['maybe'] + Math.round((food[prop] * food['weight'] / 100));
                    }
                };
                FoodComponent.prototype.calculateFullMinus = function (food) {
                    for (var prop in this.totalFood) {
                        this.totalFood[prop]['full'] = this.totalFood[prop]['full'] - Math.round((food[prop] * food['weight'] / 100));
                    }
                };
                FoodComponent.prototype.calculateMayBeMinus = function (food) {
                    for (var prop in this.totalFood) {
                        this.totalFood[prop]['maybe'] = this.totalFood[prop]['maybe'] - Math.round((food[prop] * food['weight'] / 100));
                    }
                };
                FoodComponent = __decorate([
                    core_1.Component({
                        selector: 'op-food',
                        directives: [progress_bar_component_1.ProgressBar, plus_bar_component_1.PlusComponent, swipe_holder_directive_1.SwipeHoldertDirective, swipe_delete_side_directive_1.SwipeDeleteSideDirective],
                        providers: [],
                        pipes: [translate_service_1.TranslatePipe, simple_search_pipe_1.SimpleSearch],
                        styles: ["\n\n  .food_form {\n    position: relative;\n    margin: 5vw;\n    height: 10vw;\n  }\n  input {\n    padding-left: 1vw;\n  }\n  .food_inputFood {\n    position: absolute;\n    height: 10vw;\n    width: 60vw;\n    background-color: rgba(49, 51, 61, 0.3);\n    box-sizing: border-box;\n    border: 5px solid #0C1017;\n    border-radius: 2vw;\n    font-size: 5vw;\n    color: #D0D9D9;\n  }\n  .food_inputWeight {\n    position: absolute;\n    height: 10vw;\n    width: 16vw;\n    left: 61vw;\n    background-color: rgba(49, 51, 61, 0.3);\n    box-sizing: border-box;\n    color: #0d0e15;\n    border: 5px solid #0C1017;\n    border-radius: 2vw;\n    font-size: 5vw;\n    color: #0d0e15;\n  }\n  .food_inputButton_off {\n    position: absolute;\n    right: 0;\n    height: 10vw;\n    width: 12vw;\n    background: url('./src/img/check-off.png') no-repeat center center;\n    background-size: cover;\n    box-sizing: border-box;\n    color: #0d0e15;\n    border: 5px solid #0C1017;\n    border-radius: 2vw;\n  }\n  .food_inputButton_on {\n    position: absolute;\n    right: 0;\n    height: 10vw;\n    width: 12vw;\n    background: url('./src/img/check-on.png') no-repeat center center;\n    background-size: cover;\n    box-sizing: border-box;\n    color: #0d0e15;\n    border: 5px solid #0C1017;\n    border-radius: 2vw;\n  }\n  .food_serchContainer {\n    position: absolute;\n    background-color: #0C1017;\n    border-bottom: 6px solid #0C1017;\n    box-sizing: border-box;\n    width: 60vw;\n    max-height: 30vh;\n    padding-left: 2vw;\n    padding-top: 2vw;\n    left: 0;\n    top: 10vw;\n    overflow-y: scroll;\n    border-radius: 2vw;\n  }\n  .food_searchListItem {\n    float:left;\n    margin-bottom: 1vw;\n    min-height: 12vw;\n    width: 56vw;\n    line-height: 12vw;\n    box-sizing: border-box;\n    background-color: #3f414a;\n    color: #ff9d2d;\n    font-size: 6vw;\n    text-align: center;\n    border-radius: 2vw;\n  }\n  .food_list {\n    margin: 5vw;\n    width: 90vw;\n    height: 80vw;\n    overflow-y: scroll;\n    overflow-x:hidden;\n  }\n  .food_listItemContainer{\n    position:relative;\n  }\n  .food_listItem {\n    float:left;\n    margin-bottom: 2vw;\n    min-height: 12vw;\n    width: 55vw;\n    line-height: 12vw;\n    box-sizing: border-box;\n    background-color: #3f414a;\n    color: #ff9d2d;\n    font-size: 6vw;\n    text-align: center;\n    border-radius: 2vw;\n    line-height: 12vw;\n\n  }\n  .food_listWeight {\n    float:left;\n    margin-left: 2vw;\n    margin-right: 2vw;\n    height: 12vw;\n    width: 15vw;\n    line-height: 12vw;\n    background-color: #3f414a;\n    box-sizing: border-box;\n    color: #ff9d2d;\n    font-size: 6vw;\n    text-align: center;\n    border-radius: 2vw;\n    border: none;\n  }\n\n  .food_listButton_on {\n    float:left;\n    height: 12vw;\n    width: 12vw;\n    background: url('./src/img/check-on.png') no-repeat center center;\n    background-color: #3f414a;\n    background-size: cover;\n    box-sizing: border-box;\n    color: #0d0e15;\n    border-radius: 2vw;\n  }\n  .food_listButton_off {\n    float:left;\n    height: 12vw;\n    width: 12vw;\n    background: url('./src/img/check-off.png') no-repeat center center;\n    background-color: #3f414a;\n    background-size: cover;\n    box-sizing: border-box;\n    color: #0d0e15;\n    border-radius: 2vw;\n  }\n    "],
                        template: "\n<op-plus [iAm]=\"'food'\" [(isOpen)]=\"plusIsOpen\"></op-plus>\n<fm-progress-bar [name]=\"'calories'|translate\" [mainLine]=\"totalFood.calories.full / userSets.calories.full * 100\" [secondLine]=\"totalFood.calories.maybe / userSets.calories.full * 100\" [minNumber]=\"totalFood.calories.full\" [maxNumber]=\"userSets.calories.full\"></fm-progress-bar>\n<fm-progress-bar [name]=\"'protein'|translate\" [mainLine]=\"totalFood.protein.full / userSets.protein.full * 100\" [secondLine]=\"totalFood.protein.maybe / userSets.protein.full * 100\" [minNumber]=\"totalFood.protein.full\" [maxNumber]=\"userSets.protein.full\"></fm-progress-bar>\n<fm-progress-bar [name]=\"'fat'|translate\" [mainLine]=\"totalFood.fat.full / userSets.fat.full * 100\" [secondLine]=\"totalFood.fat.maybe / userSets.fat.full * 100\" [minNumber]=\"totalFood.fat.full\" [maxNumber]=\"userSets.fat.full\"></fm-progress-bar>\n<fm-progress-bar [name]=\"'carbohydrates'|translate\" [mainLine]=\"totalFood.carbohydrates.full / userSets.carbohydrates.full * 100\" [secondLine]=\"totalFood.carbohydrates.maybe / userSets.carbohydrates.full * 100\" [minNumber]=\"totalFood.carbohydrates.full\" [maxNumber]=\"userSets.carbohydrates.full\"></fm-progress-bar>\n\n<form class=\"food_form\" (ngSubmit)=\"onSubmit(foodForm)\" #foodForm=\"ngForm\">\n\n  <label for=\"foodName\"></label>\n  <input class=\"food_inputFood\" required [placeholder]=\"('search'|translate)\" [(ngModel)]=\"model.name\" ngControl=\"name\" #name=\"ngForm\" (input)=\"pickFoodInput(model.name)\">\n\n  <label for=\"foodWeight\"></label>\n  <input type=\"number\" [min]=\"1\" [placeholder]=\"'0 ' +('weight'|translate) \" class=\"food_inputWeight\" required [(ngModel)]=\"model.weight\" ngControl=\"weight\" #weight=\"ngForm\">\n\n  <button #subBtn type=\"submit\" [ngClass]=\"{food_inputButton_off: subBtn['disabled'], food_inputButton_on: !subBtn['disabled']}\"  [disabled]=\"!foodForm.form.valid || !correctFood\"></button>\n\n  <div *ngIf=\"(name.valid && !correctFood)\" class=\"food_serchContainer\">\n    <div class=\"food_searchListItem\" *ngFor=\"#item of foodContainer  | simpleSearch :'name':language : name.value; #i = index;\" (click)=\"pickFood(item);\">\n      {{item?.name[language]}}\n    </div>\n  </div>\n</form>\n\n<div class=\"food_list\">\n<!-- <div *ngFor=\"#item of pickedFoodContainer; #i = index\" fmSwipe (fmSwipeLeft)=\"removeFood(i, item)\" (fmSwipeRight)=\"removeFood(i, item)\" fmSwipeDeleteSide> -->\n  <div  *ngFor=\"#item of pickedFoodContainer; #i = index\" fmSwipeDeleteSide >\n\n    <div class=\"food_listItem\" >\n      {{item?.name[language]}}\n    </div>\n    <input class=\"food_listWeight\" type=\"number\" min=\"0\" required [(ngModel)]=\"item.weight\" (blur)=\"changeFoodWeight(i, item)\">\n\n    <div [ngClass]=\"{food_listButton_off: !item.picked, food_listButton_on: item.picked}\" (click)=\"checkBoxToggle(i, item)\"></div>\n  </div>\n\n</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [food_service_1.FoodService, calendar_service_1.CalendarService, user_service_1.UserService, admob_service_1.AdMobService])
                ], FoodComponent);
                return FoodComponent;
            }());
            exports_1("FoodComponent", FoodComponent);
        }
    }
});
//# sourceMappingURL=food.component.js.map