System.register(['angular2/core', '../../shared/services/storage/storage.service', '../user/user.service'], function(exports_1, context_1) {
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
    var core_1, storage_service_1, user_service_1;
    var FoodService, foodVendor;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (storage_service_1_1) {
                storage_service_1 = storage_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            FoodService = (function () {
                function FoodService(_storageService, _userServe) {
                    this._storageService = _storageService;
                    this._userServe = _userServe;
                    this.food = foodVendor;
                    this.userFood = [];
                    this.allFood = [];
                    this.userMenu = [];
                    this.storageKeys = {
                        'userFood': 'userFood',
                        'userMenu': 'userMenu'
                    };
                    if (this._storageService.getItem(this.storageKeys.userFood)) {
                        this.userFood = this._storageService.getItem(this.storageKeys.userFood);
                    }
                    if (this._storageService.getItem(this.storageKeys.userMenu)) {
                        this.userMenu = this._storageService.getItem(this.storageKeys.userMenu);
                    }
                    this.prepareFood();
                    console.log(this.userMenu);
                }
                FoodService.prototype.getAllFood = function () {
                    this.prepareFood();
                    return this.allFood;
                };
                FoodService.prototype.refreshUserFood = function () {
                    this._storageService.setItem(this.storageKeys.userFood, this.userFood);
                };
                FoodService.prototype.prepareFood = function () {
                    this.allFood.length = 0;
                    var container = this.food.slice();
                    if (this.userFood.length) {
                        for (var _i = 0, _a = this.userFood; _i < _a.length; _i++) {
                            var itemUser = _a[_i];
                            for (var _b = 0, container_1 = container; _b < container_1.length; _b++) {
                                var itemContainer = container_1[_b];
                                if (itemUser.name[this._userServe.getLanguage()].trim() === itemContainer.name[this._userServe.getLanguage()].trim()) {
                                    var rem = container.indexOf(itemContainer);
                                    container.splice(rem, 1);
                                }
                            }
                        }
                        (_c = this.allFood).push.apply(_c, container.concat(this.userFood));
                    }
                    else {
                        (_d = this.allFood).push.apply(_d, this.food);
                    }
                    var _c, _d;
                };
                FoodService.prototype.getUserFood = function () {
                    return this.userFood;
                };
                FoodService.prototype.setUserFood = function (food) {
                    for (var _i = 0, _a = this.userFood; _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.name[this._userServe.getLanguage()].trim() === food.name[this._userServe.getLanguage()].trim()) {
                            var rem = this.userFood.indexOf(item);
                            this.userFood.splice(rem, 1);
                        }
                    }
                    this.userFood.push(food);
                    this.refreshUserFood();
                    this.prepareFood();
                };
                FoodService.prototype.removeUserFood = function (food) {
                    for (var _i = 0, _a = this.userFood; _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.name[this._userServe.getLanguage()].trim() === food.name[this._userServe.getLanguage()].trim()) {
                            var rem = this.userFood.indexOf(item);
                            this.userFood.splice(rem, 1);
                        }
                    }
                    this.refreshUserFood();
                    this.prepareFood();
                };
                FoodService.prototype.getUserMenuAll = function () {
                    return this.userMenu;
                };
                FoodService.prototype.getUserMenu = function (name) {
                    for (var _i = 0, _a = this.userMenu; _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.name.trim() === name.trim()) {
                            return item;
                        }
                    }
                };
                FoodService.prototype.setUserMenu = function (name, food) {
                    for (var _i = 0, _a = this.userMenu; _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.name.trim() === name.trim()) {
                            var rem = this.userMenu.indexOf(item);
                            this.userMenu.splice(rem, 1);
                        }
                    }
                    this.userMenu.unshift(this.createUserMenu(name, food));
                    this.refreshUserMenu();
                    console.log(this.userMenu);
                };
                FoodService.prototype.createUserMenu = function (name, food) {
                    var res = {};
                    res['name'] = name;
                    res['food'] = food;
                    return res;
                };
                FoodService.prototype.removeFoodFromMenu = function (name, index) {
                    for (var _i = 0, _a = this.userMenu; _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.name.trim() === name.trim()) {
                            item['food'].splice(index, 1);
                        }
                    }
                    this.refreshUserMenu();
                };
                FoodService.prototype.changeFoodInMenu = function (name, index, weight) {
                    for (var _i = 0, _a = this.userMenu; _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.name.trim() === name.trim()) {
                            item['food'][index]['weight'] = weight;
                        }
                    }
                    this.refreshUserMenu();
                };
                FoodService.prototype.refreshUserMenu = function () {
                    this._storageService.setItem(this.storageKeys.userMenu, this.userMenu);
                };
                FoodService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [storage_service_1.StorageService, user_service_1.UserService])
                ], FoodService);
                return FoodService;
            }());
            exports_1("FoodService", FoodService);
            foodVendor = [
                //1
                {
                    "name": {
                        "en": "Сhicken egg",
                        "ru": "Яйцо куриное"
                    },
                    "custom": false,
                    "calories": 157,
                    "protein": 12.7,
                    "fat": 10.9,
                    "carbohydrates": 0.7
                },
                // 2
                {
                    "name": {
                        "en": "Apricot",
                        "ru": "Абрикос"
                    },
                    "custom": false,
                    "calories": 41,
                    "protein": 0.9,
                    "fat": 0.1,
                    "carbohydrates": 10.8
                },
                // 3
                {
                    "name": {
                        "en": "Adjika",
                        "ru": "Аджика"
                    },
                    "custom": false,
                    "calories": 59,
                    "protein": 1.0,
                    "fat": 3.7,
                    "carbohydrates": 5.8
                },
                // 4
                {
                    "name": {
                        "en": "Quince",
                        "ru": "Айва"
                    },
                    "custom": false,
                    "calories": 40,
                    "protein": 0.6,
                    "fat": 0.5,
                    "carbohydrates": 9.8
                },
                // 5
                {
                    "name": {
                        "en": "Cherry-plum",
                        "ru": "Алыча"
                    },
                    "custom": false,
                    "calories": 27,
                    "protein": 0.2,
                    "fat": 0.0,
                    "carbohydrates": 6.9
                },
                // 6
                {
                    "name": {
                        "en": "Pineapple",
                        "ru": "Ананас"
                    },
                    "custom": false,
                    "calories": 49,
                    "protein": 0.4,
                    "fat": 0.2,
                    "carbohydrates": 10.6
                },
                // 7
                {
                    "name": {
                        "en": "Curd 9% bold",
                        "ru": "Творог 9% полужирный"
                    },
                    "custom": false,
                    "calories": 159,
                    "protein": 16.7,
                    "fat": 9.0,
                    "carbohydrates": 2.0
                },
                // 8
                {
                    "name": {
                        "en": "Curd 0% cheese",
                        "ru": "Творог 0% обезжиренный"
                    },
                    "custom": false,
                    "calories": 71,
                    "protein": 16.5,
                    "fat": 0.0,
                    "carbohydrates": 1.3
                },
                // 9
                {
                    "name": {
                        "en": "Chicken cutlet",
                        "ru": "Куриная котлета"
                    },
                    "custom": false,
                    "calories": 108.2,
                    "protein": 17,
                    "fat": 3.7,
                    "carbohydrates": 1.8
                },
                // 10
                {
                    "name": {
                        "en": "Chicken cue",
                        "ru": "Куриный биток"
                    },
                    "custom": false,
                    "calories": 128.7,
                    "protein": 21.3,
                    "fat": 3.1,
                    "carbohydrates": 2.4
                },
                // 11
                {
                    "name": {
                        "en": "Fried chicken",
                        "ru": "Курица жареная"
                    },
                    "custom": false,
                    "calories": 210,
                    "protein": 26.0,
                    "fat": 12.0,
                    "carbohydrates": 0.0
                },
                // 12
                {
                    "name": {
                        "en": "Boiled chicken",
                        "ru": "Курица вареная"
                    },
                    "custom": false,
                    "calories": 170,
                    "protein": 25.2,
                    "fat": 7.4,
                    "carbohydrates": 0.0
                },
                // 13
                {
                    "name": {
                        "en": "White rice",
                        "ru": "Рис белый"
                    },
                    "custom": false,
                    "calories": 116,
                    "protein": 2.2,
                    "fat": 0.5,
                    "carbohydrates": 24.9
                },
                // 14
                {
                    "name": {
                        "en": "Oatmeal with water",
                        "ru": "Овсяная каша на воде"
                    },
                    "custom": false,
                    "calories": 88,
                    "protein": 3.0,
                    "fat": 1.7,
                    "carbohydrates": 15.0
                },
                // 15
                {
                    "name": {
                        "en": "Semolina with milk",
                        "ru": "Манная каша на молоке"
                    },
                    "custom": false,
                    "calories": 98,
                    "protein": 3.0,
                    "fat": 3.2,
                    "carbohydrates": 15.3
                },
                // 16
                {
                    "name": {
                        "en": "Semolina water",
                        "ru": "Манная каша на воде"
                    },
                    "custom": false,
                    "calories": 80,
                    "protein": 2.5,
                    "fat": 0.2,
                    "carbohydrates": 16.8
                },
                // 17
                {
                    "name": {
                        "en": "Buckwheat porridge with milk",
                        "ru": "Гречневая каша на молоке"
                    },
                    "custom": false,
                    "calories": 118,
                    "protein": 4.2,
                    "fat": 2.3,
                    "carbohydrates": 21.6
                },
                // 18
                {
                    "name": {
                        "en": "Buckwheat",
                        "ru": "Гречневая каша"
                    },
                    "custom": false,
                    "calories": 132,
                    "protein": 4.5,
                    "fat": 2.3,
                    "carbohydrates": 25.0
                },
                // 19
                {
                    "name": {
                        "en": "Pearl barley porridge",
                        "ru": "Перловая каша"
                    },
                    "custom": false,
                    "calories": 106,
                    "protein": 3.1,
                    "fat": 0.4,
                    "carbohydrates": 23.0
                },
                // 20
                {
                    "name": {
                        "en": "Millet porridge",
                        "ru": "Пшенная каша"
                    },
                    "custom": false,
                    "calories": 135,
                    "protein": 4.7,
                    "fat": 1.1,
                    "carbohydrates": 26.1
                },
                // 21
                {
                    "name": {
                        "en": "Rice brown",
                        "ru": "Рис бурый"
                    },
                    "custom": false,
                    "calories": 337,
                    "protein": 7.4,
                    "fat": 1.8,
                    "carbohydrates": 72.9
                },
                // 22
                {
                    "name": {
                        "en": "Barley porridge",
                        "ru": "Ячменная каша"
                    },
                    "custom": false,
                    "calories": 310,
                    "protein": 11.5,
                    "fat": 2.0,
                    "carbohydrates": 65.8
                },
                // 23
                {
                    "name": {
                        "en": "Milk",
                        "ru": "Молоко"
                    },
                    "custom": false,
                    "calories": 64,
                    "protein": 3.2,
                    "fat": 3.6,
                    "carbohydrates": 4.8
                },
                // 24
                {
                    "name": {
                        "en": "Borscht",
                        "ru": "Борщ"
                    },
                    "custom": false,
                    "calories": 49,
                    "protein": 1.1,
                    "fat": 2.2,
                    "carbohydrates": 6.7
                },
                // 25
                {
                    "name": {
                        "en": "Chicken broth",
                        "ru": "Бульон куриный"
                    },
                    "custom": false,
                    "calories": 15,
                    "protein": 2.0,
                    "fat": 0.5,
                    "carbohydrates": 0.3
                },
                // 26
                {
                    "name": {
                        "en": "Pickle",
                        "ru": "Рассольник"
                    },
                    "custom": false,
                    "calories": 42,
                    "protein": 1.4,
                    "fat": 2.0,
                    "carbohydrates": 5.0
                },
                // 27
                {
                    "name": {
                        "en": "Meat solyanka",
                        "ru": "Солянка мясная"
                    },
                    "custom": false,
                    "calories": 69,
                    "protein": 5.2,
                    "fat": 4.6,
                    "carbohydrates": 1.7
                },
                // 28
                {
                    "name": {
                        "en": "Mushroom soup",
                        "ru": "Суп грибной"
                    },
                    "custom": false,
                    "calories": 50,
                    "protein": 1.9,
                    "fat": 2.4,
                    "carbohydrates": 5.7
                },
                // 29
                {
                    "name": {
                        "en": "Vegetable soup",
                        "ru": "Суп овощной"
                    },
                    "custom": false,
                    "calories": 43,
                    "protein": 1.7,
                    "fat": 1.8,
                    "carbohydrates": 6.2
                },
                // 30
                {
                    "name": {
                        "en": "Fish soup",
                        "ru": "Уха"
                    },
                    "custom": false,
                    "calories": 46,
                    "protein": 3.4,
                    "fat": 1.0,
                    "carbohydrates": 5.5
                },
                // 31
                {
                    "name": {
                        "en": "Dutch cheese",
                        "ru": "Сыр Голландский"
                    },
                    "custom": false,
                    "calories": 352,
                    "protein": 26.0,
                    "fat": 26.8,
                    "carbohydrates": 0.0
                },
                // 32
                {
                    "name": {
                        "en": "Cheese Russian",
                        "ru": "Сыр Российский"
                    },
                    "custom": false,
                    "calories": 363,
                    "protein": 24.1,
                    "fat": 29.5,
                    "carbohydrates": 0.3
                },
                // 33
                {
                    "name": {
                        "en": "Sulguni cheese",
                        "ru": "Сыр сулугуни"
                    },
                    "custom": false,
                    "calories": 290,
                    "protein": 20.0,
                    "fat": 24.0,
                    "carbohydrates": 0.0
                },
                // 34
                {
                    "name": {
                        "en": "Chees feta",
                        "ru": "Сыр фета"
                    },
                    "custom": false,
                    "calories": 290,
                    "protein": 17.0,
                    "fat": 24.0,
                    "carbohydrates": 0.0
                },
                // 35
                {
                    "name": {
                        "en": "Boiled chicken fillet",
                        "ru": "Куриное филе вареное"
                    },
                    "custom": false,
                    "calories": 137,
                    "protein": 29.8,
                    "fat": 1.8,
                    "carbohydrates": 0.5
                },
                // 36
                {
                    "name": {
                        "en": "Pork chops",
                        "ru": "Свинные отбивные"
                    },
                    "custom": false,
                    "calories": 470,
                    "protein": 17.5,
                    "fat": 40.3,
                    "carbohydrates": 8.8
                },
                // 37
                {
                    "name": {
                        "en": "Beef Cutlets",
                        "ru": "Котлеты из говядины"
                    },
                    "custom": false,
                    "calories": 260,
                    "protein": 18.0,
                    "fat": 20.0,
                    "carbohydrates": 0.0
                },
                // 38
                {
                    "name": {
                        "en": "Cooked turkey",
                        "ru": "Индейка вареная"
                    },
                    "custom": false,
                    "calories": 195,
                    "protein": 25.3,
                    "fat": 10.4,
                    "carbohydrates": 0.0
                },
                // 39
                {
                    "name": {
                        "en": "Roasted turkey",
                        "ru": "Индейка жареная"
                    },
                    "custom": false,
                    "calories": 165,
                    "protein": 28.0,
                    "fat": 6.0,
                    "carbohydrates": 0
                },
                // 40
                {
                    "name": {
                        "en": "Beef liver fried",
                        "ru": "Говяжья печень жареная"
                    },
                    "custom": false,
                    "calories": 199,
                    "protein": 22.9,
                    "fat": 10.2,
                    "carbohydrates": 3.9
                },
                // 41
                {
                    "name": {
                        "en": "Beef stew",
                        "ru": "Говядина тушеная"
                    },
                    "custom": false,
                    "calories": 232,
                    "protein": 16.8,
                    "fat": 18.3,
                    "carbohydrates": 0.0
                },
                // 42
                {
                    "name": {
                        "en": "Boiled beef",
                        "ru": "Говядина вареная"
                    },
                    "custom": false,
                    "calories": 254,
                    "protein": 25.8,
                    "fat": 16.8,
                    "carbohydrates": 0.0
                },
                // 43
                {
                    "name": {
                        "en": "Ham",
                        "ru": "Ветчина"
                    },
                    "custom": false,
                    "calories": 270,
                    "protein": 14.0,
                    "fat": 24.0,
                    "carbohydrates": 0.0
                },
                // 44
                {
                    "name": {
                        "en": "Fat",
                        "ru": "Cало"
                    },
                    "custom": false,
                    "calories": 797,
                    "protein": 2.4,
                    "fat": 89.0,
                    "carbohydrates": 0.0
                },
                // 45
                {
                    "name": {
                        "en": "Canned meat",
                        "ru": "Паштет мясной"
                    },
                    "custom": false,
                    "calories": 170,
                    "protein": 15.0,
                    "fat": 11.0,
                    "carbohydrates": 0.0
                },
                // 46
                {
                    "name": {
                        "en": "Boiled chicken",
                        "ru": "Курица вареная"
                    },
                    "custom": false,
                    "calories": 170,
                    "protein": 25.2,
                    "fat": 7.4,
                    "carbohydrates": 0.0
                },
                // 47
                {
                    "name": {
                        "en": "Fried chicken",
                        "ru": "Курица жареная"
                    },
                    "custom": false,
                    "calories": 210,
                    "protein": 26.0,
                    "fat": 12.0,
                    "carbohydrates": 0.0
                },
                // 48
                {
                    "name": {
                        "en": "French fries",
                        "ru": "Картофель фри"
                    },
                    "custom": false,
                    "calories": 170.1,
                    "protein": 1.8,
                    "fat": 11.4,
                    "carbohydrates": 16
                },
                // 49
                {
                    "name": {
                        "en": "Potatoes baked with herbs",
                        "ru": "Картофель печеный с травами"
                    },
                    "custom": false,
                    "calories": 87.2,
                    "protein": 2.1,
                    "fat": 1.4,
                    "carbohydrates": 17.7
                },
                // 50
                {
                    "name": {
                        "en": "Pumpkin pancakes",
                        "ru": "Кабачковые оладьи"
                    },
                    "custom": false,
                    "calories": 55.8,
                    "protein": 1.6,
                    "fat": 1.7,
                    "carbohydrates": 8.5
                },
                // 51
                {
                    "name": {
                        "en": "Pizza Margarita",
                        "ru": "Пицца Маргарита"
                    },
                    "custom": false,
                    "calories": 208,
                    "protein": 10.5,
                    "fat": 9,
                    "carbohydrates": 24
                },
                // 52
                {
                    "name": {
                        "en": "Coffee",
                        "ru": "Кофе"
                    },
                    "custom": false,
                    "calories": 0,
                    "protein": 0.1,
                    "fat": 0,
                    "carbohydrates": 0
                },
                // 53
                {
                    "name": {
                        "en": "Roast pork with potatoes",
                        "ru": "Жаркое из свинины с картошкой"
                    },
                    "custom": false,
                    "calories": 76.4,
                    "protein": 2.1,
                    "fat": 2.6,
                    "carbohydrates": 12
                },
                // 54
                {
                    "name": {
                        "en": "Pilaf",
                        "ru": "плов"
                    },
                    "custom": false,
                    "calories": 193.8,
                    "protein": 8.1,
                    "fat": 7.6,
                    "carbohydrates": 24
                },
                // 55
                {
                    "name": {
                        "en": "Pelmeni",
                        "ru": "Пельмени"
                    },
                    "custom": false,
                    "calories": 275,
                    "protein": 11.9,
                    "fat": 12.4,
                    "carbohydrates": 29.0
                },
                // 56
                {
                    "name": {
                        "en": "Black tea",
                        "ru": "Чай черный"
                    },
                    "custom": false,
                    "calories": 0,
                    "protein": 0.1,
                    "fat": 0.0,
                    "carbohydrates": 0.0
                },
                // 57
                {
                    "name": {
                        "en": "Butter",
                        "ru": "масло сливочное"
                    },
                    "custom": false,
                    "calories": 748,
                    "protein": 0.5,
                    "fat": 82.5,
                    "carbohydrates": 0.8
                },
                // 58
                {
                    "name": {
                        "en": "Bread",
                        "ru": "Хлеб"
                    },
                    "custom": false,
                    "calories": 198,
                    "protein": 6.6,
                    "fat": 1.2,
                    "carbohydrates": 39.6
                },
                // 59
                {
                    "name": {
                        "en": "Spaghetti",
                        "ru": "Спагетти"
                    },
                    "custom": false,
                    "calories": 344,
                    "protein": 10.4,
                    "fat": 1.1,
                    "carbohydrates": 71.5
                },
                // 60
                {
                    "name": {
                        "en": "Pasta carbonara",
                        "ru": "Паста карбонара"
                    },
                    "custom": false,
                    "calories": 346.5,
                    "protein": 16.4,
                    "fat": 18.7,
                    "carbohydrates": 26.8
                },
                // 61
                {
                    "name": {
                        "en": "Сabbage rolls",
                        "ru": "Голубцы"
                    },
                    "custom": false,
                    "calories": 93.2,
                    "protein": 4.7,
                    "fat": 5.2,
                    "carbohydrates": 8
                },
                // 62
                {
                    "name": {
                        "en": "Greek salad",
                        "ru": "Греческий салат"
                    },
                    "custom": false,
                    "calories": 91,
                    "protein": 2.8,
                    "fat": 6.7,
                    "carbohydrates": 4.1
                },
                // 63
                {
                    "name": {
                        "en": "Fish steak",
                        "ru": "Рыбный стейк"
                    },
                    "custom": false,
                    "calories": 155,
                    "protein": 12.8,
                    "fat": 6.0,
                    "carbohydrates": 12.0
                },
                // 64
                {
                    "name": {
                        "en": "Pork steak",
                        "ru": "Стейк из свинины"
                    },
                    "custom": false,
                    "calories": 343,
                    "protein": 13.6,
                    "fat": 31.9,
                    "carbohydrates": 0
                },
                // 65
                {
                    "name": {
                        "en": "Rabbit stewed in cream",
                        "ru": "Кролик тушеный в сметане"
                    },
                    "custom": false,
                    "calories": 122.2,
                    "protein": 12.2,
                    "fat": 7.3,
                    "carbohydrates": 1.9
                },
                // 66
                {
                    "name": {
                        "en": "Potato pancakes",
                        "ru": "Деруны"
                    },
                    "custom": false,
                    "calories": 105.7,
                    "protein": 2.8,
                    "fat": 2.7,
                    "carbohydrates": 18.5
                },
                // 67
                {
                    "name": {
                        "en": "Sausage",
                        "ru": "Сосиски"
                    },
                    "custom": false,
                    "calories": 304,
                    "protein": 9.0,
                    "fat": 29.5,
                    "carbohydrates": 0.7
                },
                // 68
                {
                    "name": {
                        "en": "Omelette",
                        "ru": "Яичница"
                    },
                    "custom": false,
                    "calories": 170.3,
                    "protein": 12.5,
                    "fat": 12.5,
                    "carbohydrates": 0.7
                },
                // 69
                {
                    "name": {
                        "en": "Herring",
                        "ru": "Сельдь"
                    },
                    "custom": false,
                    "calories": 217,
                    "protein": 19.8,
                    "fat": 15.4,
                    "carbohydrates": 0.0
                },
                // 70
                {
                    "name": {
                        "en": "Braised cabbage",
                        "ru": "Тушеная капуста"
                    },
                    "custom": false,
                    "calories": 68.3,
                    "protein": 1.8,
                    "fat": 4.7,
                    "carbohydrates": 4.6
                },
                // 71
                {
                    "name": {
                        "en": "Mashed potatoes",
                        "ru": "Картофельное пюре"
                    },
                    "custom": false,
                    "calories": 106,
                    "protein": 2.5,
                    "fat": 4.2,
                    "carbohydrates": 14.7
                },
                // 72
                {
                    "name": {
                        "en": "Fried potato",
                        "ru": "Картофель жареный"
                    },
                    "custom": false,
                    "calories": 192,
                    "protein": 2.8,
                    "fat": 9.5,
                    "carbohydrates": 23.4
                },
                // 73
                {
                    "name": {
                        "en": "Fishcake",
                        "ru": "Рыбные котлеты"
                    },
                    "custom": false,
                    "calories": 85.5,
                    "protein": 12.1,
                    "fat": 1.1,
                    "carbohydrates": 6.6
                },
                //74
                {
                    "name": {
                        "en": "Pork cutlets",
                        "ru": "Котлеты свиные"
                    },
                    "custom": false,
                    "calories": 233.3,
                    "protein": 12.4,
                    "fat": 18.5,
                    "carbohydrates": 3.5
                },
                // 75
                {
                    "name": {
                        "en": "Chicken liver fried",
                        "ru": "Куриная печень жареная"
                    },
                    "custom": false,
                    "calories": 120.5,
                    "protein": 13.1,
                    "fat": 6.5,
                    "carbohydrates": 2.6
                },
                // 76
                {
                    "name": {
                        "en": "Liver pork roast",
                        "ru": "Печень свиная жареная"
                    },
                    "custom": false,
                    "calories": 218.5,
                    "protein": 18.9,
                    "fat": 12.9,
                    "carbohydrates": 6.6
                },
                // 77
                {
                    "name": {
                        "en": "Julienne with chicken and mushrooms",
                        "ru": "Жульен с курицей и грибами"
                    },
                    "custom": false,
                    "calories": 150.6,
                    "protein": 13,
                    "fat": 9,
                    "carbohydrates": 3.8
                },
                // 78
                {
                    "name": {
                        "en": "Turkey breast",
                        "ru": "Филе индейки"
                    },
                    "custom": false,
                    "calories": 84,
                    "protein": 19.2,
                    "fat": 0.7,
                    "carbohydrates": 0
                },
                // 79
                {
                    "name": {
                        "en": "Turkey stuffing",
                        "ru": "Фарш индейки"
                    },
                    "custom": false,
                    "calories": 161,
                    "protein": 20,
                    "fat": 8,
                    "carbohydrates": 0.5
                },
                // 80
                {
                    "name": {
                        "en": " Belarus bread",
                        "ru": "Хлеб беларусский"
                    },
                    "custom": false,
                    "calories": 226,
                    "protein": 6.3,
                    "fat": 1.2,
                    "carbohydrates": 47.5
                },
                // 81
                {
                    "name": {
                        "en": "Pasta",
                        "ru": "Макароны"
                    },
                    "custom": false,
                    "calories": 371,
                    "protein": 13,
                    "fat": 1.5,
                    "carbohydrates": 75
                },
                // 82
                {
                    "name": {
                        "en": "Sour cream 20%",
                        "ru": "Cметана 20%"
                    },
                    "custom": false,
                    "calories": 206,
                    "protein": 2.8,
                    "fat": 20,
                    "carbohydrates": 3.2
                },
                // 83
                {
                    "name": {
                        "en": "Sour cream 15%",
                        "ru": "Cметана 15%"
                    },
                    "custom": false,
                    "calories": 158,
                    "protein": 2.6,
                    "fat": 15,
                    "carbohydrates": 3.0
                },
                // 84
                {
                    "name": {
                        "en": "Sour cream 10%",
                        "ru": "Cметана 10%"
                    },
                    "custom": false,
                    "calories": 115,
                    "protein": 3.0,
                    "fat": 10,
                    "carbohydrates": 2.9
                },
                // 85
                {
                    "name": {
                        "en": "Sugar",
                        "ru": "Сахар"
                    },
                    "custom": false,
                    "calories": 387,
                    "protein": 0,
                    "fat": 0,
                    "carbohydrates": 100
                },
                // 86
                {
                    "name": {
                        "en": "Peanut",
                        "ru": "Арахис"
                    },
                    "custom": false,
                    "calories": 567,
                    "protein": 26,
                    "fat": 49,
                    "carbohydrates": 16
                },
                // 86
                {
                    "name": {
                        "en": "Сashew",
                        "ru": "Кешью"
                    },
                    "custom": false,
                    "calories": 553,
                    "protein": 18,
                    "fat": 44,
                    "carbohydrates": 30
                },
                // 86
                {
                    "name": {
                        "en": "Almond",
                        "ru": "Миндаль"
                    },
                    "custom": false,
                    "calories": 576,
                    "protein": 21,
                    "fat": 49,
                    "carbohydrates": 22
                },
                // 87
                {
                    "name": {
                        "en": "Walnut",
                        "ru": "Грецкий орех"
                    },
                    "custom": false,
                    "calories": 654,
                    "protein": 15,
                    "fat": 65,
                    "carbohydrates": 14
                },
                // 88
                {
                    "name": {
                        "en": "Hazelnut",
                        "ru": "Фундук"
                    },
                    "custom": false,
                    "calories": 628,
                    "protein": 15,
                    "fat": 61,
                    "carbohydrates": 17
                },
                // 89
                {
                    "name": {
                        "en": "Honey",
                        "ru": "Мед"
                    },
                    "custom": false,
                    "calories": 304,
                    "protein": 0.3,
                    "fat": 0,
                    "carbohydrates": 82
                },
                // 90
                {
                    "name": {
                        "en": "Salmon",
                        "ru": "Семга (Лосось)"
                    },
                    "custom": false,
                    "calories": 304,
                    "protein": 25,
                    "fat": 14,
                    "carbohydrates": 0
                },
                // 91
                {
                    "name": {
                        "en": "Tuna",
                        "ru": "Тунец"
                    },
                    "custom": false,
                    "calories": 101,
                    "protein": 23,
                    "fat": 1,
                    "carbohydrates": 0
                },
                //92
                {
                    "name": {
                        "en": "Water",
                        "ru": "Вода"
                    },
                    "custom": false,
                    "calories": 0,
                    "protein": 0,
                    "fat": 0,
                    "carbohydrates": 0
                },
                //93
                {
                    "name": {
                        "en": "Oats",
                        "ru": "Oвес"
                    },
                    "custom": false,
                    "calories": 342,
                    "protein": 12.3,
                    "fat": 6.1,
                    "carbohydrates": 59.5
                }
            ];
        }
    }
});
//# sourceMappingURL=food.service.js.map