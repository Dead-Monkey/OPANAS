System.register(['angular2/core', '../../shared/services/translate/translate.service', '../../shared/components/progress-bar/progress-bar.component', '../../services/food/food.service', '../../shared/pipes/simple-search/simple-search.pipe', '../../services/calenadar/calendar.service'], function(exports_1, context_1) {
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
    var core_1, translate_service_1, progress_bar_component_1, food_service_1, simple_search_pipe_1, calendar_service_1;
    var AddFoodComponent;
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
            function (food_service_1_1) {
                food_service_1 = food_service_1_1;
            },
            function (simple_search_pipe_1_1) {
                simple_search_pipe_1 = simple_search_pipe_1_1;
            },
            function (calendar_service_1_1) {
                calendar_service_1 = calendar_service_1_1;
            }],
        execute: function() {
            AddFoodComponent = (function () {
                function AddFoodComponent(_foodServe, _calendarService) {
                    this._foodServe = _foodServe;
                    this._calendarService = _calendarService;
                    this.model = {};
                    this.currentDate = new Date();
                    this.pickedFood = {};
                    this.pickedFoodContainer = [];
                    this.correctFood = false;
                    this.item = this._foodServe.getUserFood();
                }
                AddFoodComponent.prototype.ngOnInit = function () {
                };
                AddFoodComponent.prototype.setFood = function () {
                    this._foodServe.setUserFood({
                        "id": 1,
                        "name": {
                            "en": "pizza",
                            "ru": "пицца"
                        },
                        "custom": false,
                        "calories": 999,
                        "protein": 10,
                        "carbohydrates": 10,
                        "fat": 10
                    });
                    // console.log(this._foodServe.getUserFood());
                    this.item = this._foodServe.getUserFood();
                };
                AddFoodComponent.prototype.removeFood = function () {
                    this._foodServe.removeUserFood({
                        "id": 99,
                        "name": "pizza",
                        "custom": true,
                        "calories": 2,
                        "protein": 1,
                        "carbohydrates": 10,
                        "fat": 3
                    });
                    this.item = this._foodServe.getUserFood();
                };
                AddFoodComponent = __decorate([
                    core_1.Component({
                        selector: 'op-add-food',
                        directives: [progress_bar_component_1.ProgressBar],
                        providers: [],
                        pipes: [translate_service_1.TranslatePipe, simple_search_pipe_1.SimpleSearch],
                        styles: ["\n.container {\n  position: fixed;\n  left: 5vw;\n  top: 15vw;\n  background-color: silver;\n  width:90vw;\n  height: 90vh;\n  z-index:10;\n}\n.tmp{\n  background-color: green;\n  width: 100%;\n}\n    "],
                        template: "\n<div class=\"container\">\n  <div>{{item?.name}}</div>\n  <div class=\"tmp\" (click)=\"setFood()\">set</div>\n  <div class=\"tmp\" (click)=\"removeFood()\">remove</div>\n</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [food_service_1.FoodService, calendar_service_1.CalendarService])
                ], AddFoodComponent);
                return AddFoodComponent;
            }());
            exports_1("AddFoodComponent", AddFoodComponent);
        }
    }
});
//# sourceMappingURL=add-food.component.js.map