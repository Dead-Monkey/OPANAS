System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var FoodService, food;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FoodService = (function () {
                function FoodService() {
                }
                FoodService.prototype.getAllFood = function () {
                    return food;
                };
                FoodService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], FoodService);
                return FoodService;
            }());
            exports_1("FoodService", FoodService);
            food = [
                {
                    "id": 1,
                    "name": "pizza",
                    "calories": 10,
                    "protein": 10,
                    "carbohydrates": 10,
                    "fat": 10
                },
                {
                    "id": 2,
                    "name": "meet",
                    "calories": 5,
                    "protein": 5,
                    "carbohydrates": 5,
                    "fat": 5
                },
                {
                    "id": 3,
                    "name": "patato",
                    "calories": 20,
                    "protein": 20,
                    "carbohydrates": 20,
                    "fat": 20
                },
                {
                    "id": 4,
                    "name": "tomato",
                    "calories": 20,
                    "protein": 20,
                    "carbohydrates": 20,
                    "fat": 20
                },
                {
                    "id": 5,
                    "name": "apple",
                    "calories": 12,
                    "protein": 12,
                    "carbohydrates": 11,
                    "fat": 10
                }
            ];
        }
    }
});
//# sourceMappingURL=food.service.js.map