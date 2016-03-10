System.register(['angular2/core', '../../services/food/food.service', '../../shared/pipes/simple-search/simple-search.pipe', '../../shared/services/translate/translate.service'], function(exports_1, context_1) {
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
    var core_1, food_service_1, simple_search_pipe_1, translate_service_1;
    var PlusComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (food_service_1_1) {
                food_service_1 = food_service_1_1;
            },
            function (simple_search_pipe_1_1) {
                simple_search_pipe_1 = simple_search_pipe_1_1;
            },
            function (translate_service_1_1) {
                translate_service_1 = translate_service_1_1;
            }],
        execute: function() {
            PlusComponent = (function () {
                function PlusComponent(_foodServe, _translateService) {
                    this._foodServe = _foodServe;
                    this._translateService = _translateService;
                    this.isOpen = true;
                    this.isOpenChange = new core_1.EventEmitter();
                    this.model = {};
                }
                PlusComponent.prototype.ngOnInit = function () {
                    this.customFood = this._foodServe.getUserFood();
                    this.refreshModel();
                };
                PlusComponent.prototype.toggle = function () {
                    this.isOpen = !this.isOpen;
                    this.isOpenChange.emit(this.isOpen);
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
                PlusComponent.prototype.getFood = function () {
                    console.log(this._foodServe.getUserFood());
                };
                PlusComponent.prototype.setFood = function (food) {
                    this._foodServe.setUserFood(food);
                    this.customFood = this._foodServe.getUserFood();
                };
                PlusComponent.prototype.removeFood = function () {
                    this.customFood = this._foodServe.getUserFood();
                    console.log(this.customFood);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], PlusComponent.prototype, "isOpen", void 0);
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
                        styles: ["\n.container {\n  position: fixed;\n  left: 5vw;\n  top: 15vw;\n  background-color: silver;\n  width:90vw;\n  height: 87vh;\n  z-index: 10;\n}\n.plusBar{\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 20vw;\n  height: 15vw;\n  background-color: blue;\n  overflow: hidden;\n}\n.closeMe{\n  position: fixed;\n  left: 0;\n  top: 0;\n  background-color: black;\n  opacity: 0.5;\n  width: 100vw;\n  height: 100vh;\n  z-index: 9;\n\n}\n.food_form {\n  position: relative;\n  margin: 5vw;\n  height: 10vw;\n}\n.food_inputFood {\n  position: absolute;\n  height: 10vw;\n  width: 60vw;\n  left: 20vw;\n  background-color: rgba(49, 51, 61, 0.3);\n  box-sizing: border-box;\n  border: 1.5vw solid #0C1017;\n  border-radius: 2vw;\n}\n.food_inputCalories {\n  position: absolute;\n  height: 10vw;\n  width: 16vw;\n  left: 50vw;\n  top:11vw;\n  background-color: rgba(49, 51, 61, 0.3);\n  box-sizing: border-box;\n  color: #0d0e15;\n  border: 1.5vw solid #0C1017;\n  border-radius: 2vw;\n}\n.food_inputProtein {\n  position: absolute;\n  height: 10vw;\n  width: 16vw;\n  left: 50vw;\n  top:22vw;\n  background-color: rgba(49, 51, 61, 0.3);\n  box-sizing: border-box;\n  color: #0d0e15;\n  border: 1.5vw solid #0C1017;\n  border-radius: 2vw;\n}\n.food_inputFat {\n  position: absolute;\n  height: 10vw;\n  width: 16vw;\n  left: 50vw;\n  top:33vw;\n  background-color: rgba(49, 51, 61, 0.3);\n  box-sizing: border-box;\n  color: #0d0e15;\n  border: 1.5vw solid #0C1017;\n  border-radius: 2vw;\n}\n.food_inputCarbohydrates {\n  position: absolute;\n  height: 10vw;\n  width: 16vw;\n  left: 50vw;\n  top:44vw;\n  background-color: rgba(49, 51, 61, 0.3);\n  box-sizing: border-box;\n  color: #0d0e15;\n  border: 1.5vw solid #0C1017;\n  border-radius: 2vw;\n}\n.food_inputButton_off {\n  position: absolute;\n  top: 28vh;\n  right: 0;\n  height: 10vw;\n  width: 12vw;\n  background: url('./src/img/check-off.png') no-repeat center center;\n  background-size: cover;\n  box-sizing: border-box;\n  color: #0d0e15;\n  border: 1.5vw solid #0C1017;\n  border-radius: 2vw;\n}\n.food_inputButton_on {\n  position: absolute;\n  top:28vh;\n  right: 0;\n  height: 10vw;\n  width: 12vw;\n  background: url('./src/img/check-on.png') no-repeat center center;\n  background-size: cover;\n  box-sizing: border-box;\n  color: #0d0e15;\n  border: 1.5vw solid #0C1017;\n  border-radius: 2vw;\n}\n.tmp{\n  width: 80vw;\n  position: relative;\n  top:50%;\n}\n.tmp2{\n  height: 12vw;\n  width: 80vw;\n  line-height: 12vw;\n  box-sizing: border-box;\n  font-size: 6vw;\n  text-align: center;\n  line-height: 12vw;\n}\n    "],
                        template: "\n<div class=\"plusBar\" (click)=\"toggle()\">PLUS</div>\n<div class=\"container\" *ngIf=\"isOpen\">\n  <form class=\"food_form\" (ngSubmit)=\"onSubmit(foodForm)\" #foodForm=\"ngForm\">\n\n    <label style=\"left:0; border:none;\" class=\"food_inputFood\" for=\"name\">foodName</label>\n    <input class=\"food_inputFood\" required [(ngModel)]=\"model.name\" ngControl=\"name\" #name=\"ngForm\">\n\n    <label style=\"left:0; border:none;\" class=\"food_inputCalories\" for=\"calories\">calories</label>\n    <input type=\"number\" min=\"0\" class=\"food_inputCalories\" required [(ngModel)]=\"model.calories\" ngControl=\"calories\" #calories=\"ngForm\">\n\n    <label style=\"left:0; border:none;\" class=\"food_inputProtein\" for=\"protein\">protein</label>\n    <input type=\"number\" min=\"0\" class=\"food_inputProtein\" required [(ngModel)]=\"model.protein\" ngControl=\"protein\" #protein=\"ngForm\">\n\n    <label style=\"left:0; border:none;\" class=\"food_inputFat\" for=\"fat\">fat</label>\n    <input type=\"number\" min=\"0\" class=\"food_inputFat\" required [(ngModel)]=\"model.fat\" ngControl=\"fat\" #fat=\"ngForm\">\n\n    <label style=\"left:0; border:none;\" class=\"food_inputCarbohydrates\" for=\"carbohydrates\">carbohydrates</label>\n    <input type=\"number\" min=\"0\" class=\"food_inputCarbohydrates\" required [(ngModel)]=\"model.carbohydrates\" ngControl=\"carbohydrates\" #carbohydrates=\"ngForm\">\n\n    <button type=\"submit\" [ngClass]=\"{food_inputButton_off: !checkForm(name.value), food_inputButton_on: checkForm(name.value) }\" [disabled]=\"!checkForm(name.value)\"></button>\n\n  </form>\n  <div class=\"tmp\" *ngFor=\"#item of customFood\">\n    <div class=\"tmp2\">name: {{item.name.ru}} calories: {{item.calories}}</div>\n  </div>\n</div>\n<div *ngIf=\"isOpen\" class=\"closeMe\" (click)=\"toggle()\"></div>\n    "
                    }), 
                    __metadata('design:paramtypes', [food_service_1.FoodService, translate_service_1.TranslateService])
                ], PlusComponent);
                return PlusComponent;
            }());
            exports_1("PlusComponent", PlusComponent);
        }
    }
});
//# sourceMappingURL=plus-bar.component.js.map