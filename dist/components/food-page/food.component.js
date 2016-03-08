System.register(['angular2/core', '../../shared/services/translate/translate.service', '../../shared/components/progress-bar/progress-bar.component', '../add-food/add-food.component', '../../services/food/food.service', '../../shared/pipes/simple-search/simple-search.pipe', '../../services/calenadar/calendar.service', '../../services/user/user.service'], function(exports_1, context_1) {
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
    var core_1, translate_service_1, progress_bar_component_1, add_food_component_1, food_service_1, simple_search_pipe_1, calendar_service_1, user_service_1;
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
            function (add_food_component_1_1) {
                add_food_component_1 = add_food_component_1_1;
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
            }],
        execute: function() {
            FoodComponent = (function () {
                function FoodComponent(_foodServe, _calendarService, _userServe) {
                    this._foodServe = _foodServe;
                    this._calendarService = _calendarService;
                    this._userServe = _userServe;
                    this.model = {};
                    this.currentDate = new Date();
                    this.language = 'en';
                    this.pickedFood = {};
                    this.pickedFoodContainer = [];
                    this.correctFood = false;
                    this.addFoodToggle = false;
                    this.totalFood = {
                        "calories": {
                            "full": 0,
                            "maybe": 0
                        },
                        "protein": {
                            "full": 0,
                            "maybe": 0
                        },
                        "carbohydrates": {
                            "full": 0,
                            "maybe": 0
                        },
                        "fat": {
                            "full": 0,
                            "maybe": 0
                        }
                    };
                }
                FoodComponent.prototype.ngOnInit = function () {
                    this.language = this._userServe.getLanguage();
                    this.foodContainer = this._foodServe.getAllFood();
                    this.pickedFoodContainer = this._calendarService.getDailyFood(this.currentDate);
                    //4 calculate progress-bar
                    for (var _i = 0, _a = this.pickedFoodContainer; _i < _a.length; _i++) {
                        var food = _a[_i];
                        this.calculateFood(food);
                    }
                    console.log(this.pickedFoodContainer);
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
                FoodComponent.prototype.removeFodd = function (index, food) {
                    this._calendarService.removeDailyFood(index, this.currentDate);
                    this.calculateFoodMinus(food);
                };
                FoodComponent.prototype.pickFoodInput = function (name) {
                    for (var _i = 0, _a = this.foodContainer; _i < _a.length; _i++) {
                        var obj = _a[_i];
                        if (obj['name'] === name) {
                            return this.pickFood(obj);
                        }
                        else {
                            this.correctFood = false;
                            console.log("unCorrectFood");
                        }
                    }
                };
                FoodComponent.prototype.pickFood = function (food) {
                    this.pickedFood = Object.assign({}, food);
                    this.model['name'] = food.name;
                    this.correctFood = true;
                };
                FoodComponent.prototype.checkBoxToggle = function (food) {
                    if (food['picked']) {
                        this.calculateFullMinus(food);
                    }
                    else {
                        this.calculateFull(food);
                    }
                    food['picked'] = !food['picked'];
                };
                FoodComponent.prototype.calculateFood = function (food) {
                    this.calculateFull(food);
                    this.calculateMayBe(food);
                };
                FoodComponent.prototype.calculateFoodMinus = function (food) {
                    this.calculateFullMinus(food);
                    this.calculateMayBeMinus(food);
                };
                FoodComponent.prototype.calculateFoodRefresh = function () {
                    this.totalFood.calories.full = 0;
                    this.totalFood.protein.full = 0;
                    this.totalFood.carbohydrates.full = 0;
                    this.totalFood.fat.full = 0;
                    this.totalFood.calories.maybe = 0;
                    this.totalFood.protein.maybe = 0;
                    this.totalFood.carbohydrates.maybe = 0;
                    this.totalFood.fat.maybe = 0;
                };
                FoodComponent.prototype.calculateFull = function (food) {
                    this.totalFood.calories.full = this.totalFood.calories.full + food.calories;
                    this.totalFood.protein.full = this.totalFood.protein.full + food.protein;
                    this.totalFood.carbohydrates.full = this.totalFood.carbohydrates.full + food.carbohydrates;
                    this.totalFood.fat.full = this.totalFood.fat.full + food.fat;
                };
                FoodComponent.prototype.calculateMayBe = function (food) {
                    this.totalFood.calories.maybe = this.totalFood.calories.maybe + food.calories;
                    this.totalFood.protein.maybe = this.totalFood.protein.maybe + food.protein;
                    this.totalFood.carbohydrates.maybe = this.totalFood.carbohydrates.maybe + food.carbohydrates;
                    this.totalFood.fat.maybe = this.totalFood.fat.maybe + food.fat;
                };
                FoodComponent.prototype.calculateFullMinus = function (food) {
                    this.totalFood.calories.full = this.totalFood.calories.full - food.calories;
                    this.totalFood.protein.full = this.totalFood.protein.full - food.protein;
                    this.totalFood.carbohydrates.full = this.totalFood.carbohydrates.full - food.carbohydrates;
                    this.totalFood.fat.full = this.totalFood.fat.full - food.fat;
                };
                FoodComponent.prototype.calculateMayBeMinus = function (food) {
                    this.totalFood.calories.maybe = this.totalFood.calories.maybe - food.calories;
                    this.totalFood.protein.maybe = this.totalFood.protein.maybe - food.protein;
                    this.totalFood.carbohydrates.maybe = this.totalFood.carbohydrates.maybe - food.carbohydrates;
                    this.totalFood.fat.maybe = this.totalFood.fat.maybe - food.fat;
                };
                FoodComponent = __decorate([
                    core_1.Component({
                        selector: 'op-food',
                        directives: [progress_bar_component_1.ProgressBar, add_food_component_1.AddFoodComponent],
                        providers: [],
                        pipes: [translate_service_1.TranslatePipe, simple_search_pipe_1.SimpleSearch],
                        styles: ["\n\n  .food_form {\n    position: relative;\n    margin: 5vw;\n    height: 10vw;\n  }\n  .food_inputFood {\n    position: absolute;\n    height: 10vw;\n    width: 60vw;\n    background-color: rgba(49, 51, 61, 0.3);\n    box-sizing: border-box;\n    border: 1.5vw solid #0C1017;\n    border-radius: 2vw;\n  }\n  .food_inputWeight {\n    position: absolute;\n    height: 10vw;\n    width: 16vw;\n    left: 61vw;\n    background-color: rgba(49, 51, 61, 0.3);\n    box-sizing: border-box;\n    color: #0d0e15;\n    border: 1.5vw solid #0C1017;\n    border-radius: 2vw;\n  }\n  .food_inputButton_off {\n    position: absolute;\n    right: 0;\n    height: 10vw;\n    width: 12vw;\n    background: url('./src/img/check-off.png') no-repeat center center;\n    background-size: cover;\n    box-sizing: border-box;\n    color: #0d0e15;\n    border: 1.5vw solid #0C1017;\n    border-radius: 2vw;\n  }\n  .food_inputButton_on {\n    position: absolute;\n    right: 0;\n    height: 10vw;\n    width: 12vw;\n    background: url('./src/img/check-on.png') no-repeat center center;\n    background-size: cover;\n    box-sizing: border-box;\n    color: #0d0e15;\n    border: 1.5vw solid #0C1017;\n    border-radius: 2vw;\n  }\n\n  .food_serchContainer {\n    position: absolute;\n    background-color: #aaa;\n    width: 60vw;\n    left: 0;\n    right: 10px;\n    height: 200px;\n    top: 27px;\n    overflow-y: scroll;\n  }\n  .food_list {\n    margin: 5vw;\n    width: 90vw;\n    height: 60vw;\n    overflow-y: scroll;\n  }\n  .food_listItem {\n    float:left;\n    margin-bottom: 2vw;\n    height: 12vw;\n    width: 55vw;\n    line-height: 12vw;\n    box-sizing: border-box;\n    background-color: #3f414a;\n    color: #ff9d2d;\n    font-size: 6vw;\n    text-align: center;\n    border-radius: 2vw;\n    line-height: 12vw;\n\n  }\n  .food_listWeight {\n    float:left;\n    margin-left: 2vw;\n    margin-right: 2vw;\n    height: 12vw;\n    width: 15vw;\n    line-height: 12vw;\n    background-color: #3f414a;\n    box-sizing: border-box;\n    color: #ff9d2d;\n    font-size: 6vw;\n    text-align: center;\n    border-radius: 2vw;\n    border: none;\n  }\n\n  .food_listButton_on {\n    float:left;\n    height: 12vw;\n    width: 12vw;\n    background: url('./src/img/check-on.png') no-repeat center center;\n    background-color: #3f414a;\n    background-size: cover;\n    box-sizing: border-box;\n    color: #0d0e15;\n    border-radius: 2vw;\n  }\n  .food_listButton_off {\n    float:left;\n    height: 12vw;\n    width: 12vw;\n    background: url('./src/img/check-off.png') no-repeat center center;\n    background-color: #3f414a;\n    background-size: cover;\n    box-sizing: border-box;\n    color: #0d0e15;\n    border-radius: 2vw;\n  }\n    "],
                        template: "\n<op-add-food *ngIf=\"addFoodToggle\"></op-add-food>\n<fm-progress-bar [name]=\"'calories'\" [mainLine]=\"totalFood.calories.full\" [secondLine]=\"totalFood.calories.maybe\"></fm-progress-bar>\n<fm-progress-bar [name]=\"'protein'\" [mainLine]=\"totalFood.protein.full\" [secondLine]=\"totalFood.protein.maybe\"></fm-progress-bar>\n<fm-progress-bar [name]=\"'fat'\" [mainLine]=\"totalFood.fat.full\" [secondLine]=\"totalFood.fat.maybe\"></fm-progress-bar>\n<fm-progress-bar [name]=\"'carbohydrates'\" [mainLine]=\"totalFood.carbohydrates.full\" [secondLine]=\"totalFood.carbohydrates.maybe\"></fm-progress-bar>\n\n<form class=\"food_form\" (ngSubmit)=\"onSubmit(foodForm)\" #foodForm=\"ngForm\">\n\n  <label for=\"foodName\"></label>\n  <input class=\"food_inputFood\" required [(ngModel)]=\"model.name\" ngControl=\"name\" #name=\"ngForm\" (keyup)=\"pickFoodInput(model.name)\">\n\n  <label for=\"foodWeight\"></label>\n  <input type=\"number\" min=\"1\" class=\"food_inputWeight\" required [(ngModel)]=\"model.weight\" ngControl=\"weight\" #weight=\"ngForm\">\n\n  <button type=\"submit\" [ngClass]=\"{food_inputButton_off: (!foodForm.form.valid || !correctFood || !weight.value), food_inputButton_on: (foodForm.form.valid && correctFood && weight.value )}\" [disabled]=\"!foodForm.form.valid || !correctFood\"></button>\n\n  <div *ngIf=\"name.valid\" class=\"food_serchContainer\">\n    <div class=\"food_listItem\" *ngFor=\"#item of foodContainer  | simpleSearch :'name':language : name.value; #i = index;\" (click)=\"pickFood(item);\">\n      {{item?.name[language]}}\n    </div>\n  </div>\n</form>\n\n<div class=\"food_list\">\n  <div *ngFor=\"#item of pickedFoodContainer; #i = index\">\n\n    <div class=\"food_listItem\">\n      {{item?.name}}\n    </div>\n    <input class=\"food_listWeight\" type=\"number\" min=\"1\" [(ngModel)]=\"item.weight\">\n\n    <button (click)=\"removeFodd(i, item)\">minus</button>\n    <div [ngClass]=\"{food_listButton_off: !item.picked, food_listButton_on: item.picked}\" (click)=\"checkBoxToggle(item)\"></div>\n\n  </div>\n</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [food_service_1.FoodService, calendar_service_1.CalendarService, user_service_1.UserService])
                ], FoodComponent);
                return FoodComponent;
            }());
            exports_1("FoodComponent", FoodComponent);
        }
    }
});
//# sourceMappingURL=food.component.js.map