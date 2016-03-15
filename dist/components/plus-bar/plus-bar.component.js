System.register(['angular2/core', '../../services/food/food.service', '../../services/sport/sport.service', '../../shared/pipes/simple-search/simple-search.pipe', '../../shared/services/translate/translate.service'], function(exports_1, context_1) {
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
    var core_1, food_service_1, sport_service_1, simple_search_pipe_1, translate_service_1;
    var PlusComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (food_service_1_1) {
                food_service_1 = food_service_1_1;
            },
            function (sport_service_1_1) {
                sport_service_1 = sport_service_1_1;
            },
            function (simple_search_pipe_1_1) {
                simple_search_pipe_1 = simple_search_pipe_1_1;
            },
            function (translate_service_1_1) {
                translate_service_1 = translate_service_1_1;
            }],
        execute: function() {
            PlusComponent = (function () {
                function PlusComponent(_foodServe, _sportServe, _translateService) {
                    this._foodServe = _foodServe;
                    this._sportServe = _sportServe;
                    this._translateService = _translateService;
                    this.isOpen = false;
                    this.isOpenChange = new core_1.EventEmitter();
                    this.listOptions = false;
                    this.createFood = false;
                    this.createMenu = false;
                    this.pasteMenu = false;
                    this.createExercise = false;
                    this.createTrain = false;
                    this.pasteTrain = false;
                    this.model = {};
                    this.modelSport = {};
                }
                PlusComponent.prototype.ngOnInit = function () {
                    this.customFood = this._foodServe.getUserFood();
                    this.refreshModel();
                    this.customSport = this._sportServe.getUserSport();
                };
                PlusComponent.prototype.toggle = function () {
                    this.isOpen = !this.isOpen;
                    this.listOptions = true;
                    this.createFood = false;
                    this.createMenu = false;
                    this.pasteMenu = false;
                    this.createExercise = false;
                    this.createTrain = false;
                    this.pasteTrain = false;
                    this.isOpenChange.emit(this.isOpen);
                };
                PlusComponent.prototype.createFoodToggle = function () {
                    this.createFood = !this.createFood;
                    this.listOptions = !this.listOptions;
                };
                PlusComponent.prototype.createMenuToggle = function () {
                    this.createMenu = !this.createMenu;
                    this.listOptions = !this.listOptions;
                };
                PlusComponent.prototype.pasteMenuToggle = function () {
                    this.pasteMenu = !this.pasteMenu;
                    this.listOptions = !this.listOptions;
                };
                PlusComponent.prototype.createExerciseToggle = function () {
                    this.createExercise = !this.createExercise;
                    this.listOptions = !this.listOptions;
                };
                PlusComponent.prototype.createTrainToggle = function () {
                    this.createTrain = !this.createTrain;
                    this.listOptions = !this.listOptions;
                };
                PlusComponent.prototype.pasteTrainToggle = function () {
                    this.pasteTrain = !this.pasteTrain;
                    this.listOptions = !this.listOptions;
                };
                PlusComponent.prototype.checkForm = function (value) {
                    if (value) {
                        if (value.trim()) {
                            return true;
                        }
                    }
                    return false;
                };
                //4 food
                PlusComponent.prototype.onSubmit = function (food) {
                    if (food.value.name.trim()) {
                        var name_1 = food.value.name.trim();
                        food.value['name'] = {};
                        for (var key in this._translateService.getSupportLanguages()) {
                            food.value['name'][key] = name_1;
                        }
                        food.value['custom'] = true;
                        this.setFood(food.value);
                        this.refreshModel();
                    }
                };
                PlusComponent.prototype.refreshModel = function () {
                    this.model['name'] = '';
                    this.model['calories'] = 0;
                    this.model['protein'] = 0;
                    this.model['fat'] = 0;
                    this.model['carbohydrates'] = 0;
                };
                PlusComponent.prototype.setFood = function (food) {
                    this._foodServe.setUserFood(food);
                    this.customFood = this._foodServe.getUserFood();
                };
                //4 sport
                PlusComponent.prototype.onSubmitSport = function (sport) {
                    if (sport.value.name.trim()) {
                        var name_2 = sport.value.name.trim();
                        sport.value['name'] = {};
                        for (var key in this._translateService.getSupportLanguages()) {
                            sport.value['name'][key] = name_2;
                        }
                        sport.value['custom'] = true;
                        this.setSport(sport.value);
                        this.modelSport['name'] = '';
                    }
                };
                PlusComponent.prototype.setSport = function (sport) {
                    this._sportServe.setUserSport(sport);
                    this.customSport = this._sportServe.getUserSport();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], PlusComponent.prototype, "isOpen", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], PlusComponent.prototype, "iAm", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], PlusComponent.prototype, "isOpenChange", void 0);
                PlusComponent = __decorate([
                    core_1.Component({
                        selector: 'op-plus',
                        directives: [],
                        providers: [],
                        pipes: [translate_service_1.TranslatePipe, simple_search_pipe_1.SimpleSearch],
                        styles: ["\n\n.container {\n  position: fixed;\n  left: 5vw;\n  top: 15vw;\n  overflow: hidden;\n\n  background-color: silver;\n  width:90vw;\n  height: 87vh;\n  z-index: 10;\n}\n.plusBar {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 15vw;\n  height: 15vw;\n  background: url('./src/img/addfood_simple.png') no-repeat center center;\n  background-size: cover;\n  overflow: hidden;\n  z-index: 10;\n}\n\n.plusBarAnime {\n  transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n}\n\n.closeMe {\n  position: fixed;\n  left: 0;\n  top: 0;\n  background-color: black;\n  opacity: 0.5;\n  width: 100vw;\n  height: 100vh;\n  z-index: 9;\n\n}\n\n.list {\n  margin: 5vw;\n  width: 90vw;\n  height: 80vw;\n  overflow-y: scroll;\n}\n.listItem {\n  float:left;\n  margin-bottom: 2vw;\n  height: 12vw;\n  width: 55vw;\n  line-height: 12vw;\n  box-sizing: border-box;\n  background-color: #3f414a;\n  color: #ff9d2d;\n  font-size: 6vw;\n  text-align: center;\n  border-radius: 2vw;\n  line-height: 12vw;\n\n}\n.food_form {\n  position: relative;\n  margin: 5vw;\n  height: 10vw;\n}\n.food_inputFood {\n  position: absolute;\n  height: 10vw;\n  width: 60vw;\n  left: 20vw;\n  background-color: rgba(49, 51, 61, 0.3);\n  box-sizing: border-box;\n  border: 1.5vw solid #0C1017;\n  border-radius: 2vw;\n}\n.food_inputCalories {\n  position: absolute;\n  height: 10vw;\n  width: 16vw;\n  left: 50vw;\n  top:11vw;\n  background-color: rgba(49, 51, 61, 0.3);\n  box-sizing: border-box;\n  color: #0d0e15;\n  border: 1.5vw solid #0C1017;\n  border-radius: 2vw;\n}\n.food_inputProtein {\n  position: absolute;\n  height: 10vw;\n  width: 16vw;\n  left: 50vw;\n  top:22vw;\n  background-color: rgba(49, 51, 61, 0.3);\n  box-sizing: border-box;\n  color: #0d0e15;\n  border: 1.5vw solid #0C1017;\n  border-radius: 2vw;\n}\n.food_inputFat {\n  position: absolute;\n  height: 10vw;\n  width: 16vw;\n  left: 50vw;\n  top:33vw;\n  background-color: rgba(49, 51, 61, 0.3);\n  box-sizing: border-box;\n  color: #0d0e15;\n  border: 1.5vw solid #0C1017;\n  border-radius: 2vw;\n}\n.food_inputCarbohydrates {\n  position: absolute;\n  height: 10vw;\n  width: 16vw;\n  left: 50vw;\n  top:44vw;\n  background-color: rgba(49, 51, 61, 0.3);\n  box-sizing: border-box;\n  color: #0d0e15;\n  border: 1.5vw solid #0C1017;\n  border-radius: 2vw;\n}\n.food_inputButton_off {\n  position: absolute;\n  top: 28vh;\n  right: 0;\n  height: 10vw;\n  width: 12vw;\n  background: url('./src/img/check-off.png') no-repeat center center;\n  background-size: cover;\n  box-sizing: border-box;\n  color: #0d0e15;\n  border: 1.5vw solid #0C1017;\n  border-radius: 2vw;\n}\n.food_inputButton_on {\n  position: absolute;\n  top:28vh;\n  right: 0;\n  height: 10vw;\n  width: 12vw;\n  background: url('./src/img/check-on.png') no-repeat center center;\n  background-size: cover;\n  box-sizing: border-box;\n  color: #0d0e15;\n  border: 1.5vw solid #0C1017;\n  border-radius: 2vw;\n}\n.foodListMove{\n  position: relative;\n  top:30vh;\n}\n.createExercise{\n  width: 100%;\n  height: 100%\n}\n.sport_inputSport{\n  position: absolute;\n  height: 10vw;\n  width: 55vw;\n  left: 11vw;\n  background-color: rgba(49, 51, 61, 0.3);\n  box-sizing: border-box;\n  border: 1.5vw solid #0C1017;\n  border-radius: 2vw;\n}\n.sportBtnMove{\n  top:0;\n  right:0;\n}\n    "],
                        template: "\n<div class=\"plusBar\" [ngClass]=\"{plusBarAnime: isOpen}\"(click)=\"toggle()\"></div>\n<div class=\"container\" *ngIf=\"isOpen && (iAm === 'food')\">\n\n  <div *ngIf=\"listOptions\">\n    <div (click)=\"createFoodToggle()\">create food</div>\n    <br>\n    <div (click)=\"createMenuToggle()\">create menu</div>\n    <br>\n    <div (click)=\"pasteMenuToggle()\">paste menu</div>\n    <br>\n  </div>\n  <div *ngIf=\"createFood\">\n    <form class=\"food_form\" (ngSubmit)=\"onSubmit(foodForm)\" #foodForm=\"ngForm\">\n\n      <label style=\"left:0; border:none;\" class=\"food_inputFood\" for=\"name\">foodName</label>\n      <input class=\"food_inputFood\" required [(ngModel)]=\"model.name\" ngControl=\"name\" #name=\"ngForm\">\n\n      <label style=\"left:0; border:none;\" class=\"food_inputCalories\" for=\"calories\">calories</label>\n      <input type=\"number\" min=\"0\" class=\"food_inputCalories\" required [(ngModel)]=\"model.calories\" ngControl=\"calories\" #calories=\"ngForm\">\n\n      <label style=\"left:0; border:none;\" class=\"food_inputProtein\" for=\"protein\">protein</label>\n      <input type=\"number\" min=\"0\" class=\"food_inputProtein\" required [(ngModel)]=\"model.protein\" ngControl=\"protein\" #protein=\"ngForm\">\n\n      <label style=\"left:0; border:none;\" class=\"food_inputFat\" for=\"fat\">fat</label>\n      <input type=\"number\" min=\"0\" class=\"food_inputFat\" required [(ngModel)]=\"model.fat\" ngControl=\"fat\" #fat=\"ngForm\">\n\n      <label style=\"left:0; border:none;\" class=\"food_inputCarbohydrates\" for=\"carbohydrates\">carbohydrates</label>\n      <input type=\"number\" min=\"0\" class=\"food_inputCarbohydrates\" required [(ngModel)]=\"model.carbohydrates\" ngControl=\"carbohydrates\" #carbohydrates=\"ngForm\">\n\n      <button type=\"submit\" [ngClass]=\"{food_inputButton_off: !checkForm(name.value), food_inputButton_on: checkForm(name.value) }\" [disabled]=\"!checkForm(name.value)\"></button>\n\n    </form>\n    <div class=\"list foodListMove\">\n      <div *ngFor=\"#item of customFood\">\n        <div class=\"listItem\">{{item.name.ru}} </div>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"createMenu\">\n    create menu\n  </div>\n\n  <div *ngIf=\"pasteMenu\">\n    paste meun\n  </div>\n</div>\n<div class=\"container\" *ngIf=\"isOpen && (iAm === 'sport')\">\n  <div *ngIf=\"listOptions\">\n    <div (click)=\"createExerciseToggle()\">create exercise</div>\n    <br>\n    <div (click)=\"createTrainToggle()\">create train</div>\n    <br>\n    <div (click)=\"pasteTrainToggle()\">paste train</div>\n    <br>\n  </div>\n\n\n  <div *ngIf=\"createExercise\">\n    <form class=\"food_form\" (ngSubmit)=\"onSubmitSport(sportForm)\" #sportForm=\"ngForm\">\n\n      <label style=\"left:0; border:none;width:10vw;\" class=\"sport_inputSport\" for=\"name\">name</label>\n      <input class=\"sport_inputSport\" required [(ngModel)]=\"modelSport.name\" ngControl=\"name\" #name=\"ngForm\">\n\n      <button type=\"submit\" class=\"sportBtnMove\" [ngClass]=\"{food_inputButton_off: !checkForm(name.value), food_inputButton_on: checkForm(name.value) }\" [disabled]=\"!checkForm(name.value)\"></button>\n\n    </form>\n    <div class=\"list\">\n      <div *ngFor=\"#item of customSport\">\n        <div class=\"listItem\">{{item.name.ru}} </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"createTrain\">\n    create train\n  </div>\n\n  <div *ngIf=\"pasteTrain\">\n    paste train\n  </div>\n</div>\n<div *ngIf=\"isOpen\" class=\"closeMe\" (click)=\"toggle()\"></div>\n    "
                    }), 
                    __metadata('design:paramtypes', [food_service_1.FoodService, sport_service_1.SportService, translate_service_1.TranslateService])
                ], PlusComponent);
                return PlusComponent;
            }());
            exports_1("PlusComponent", PlusComponent);
        }
    }
});
//# sourceMappingURL=plus-bar.component.js.map