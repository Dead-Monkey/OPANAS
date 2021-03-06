System.register(['angular2/core', '../../services/food/food.service', '../../services/sport/sport.service', '../../shared/pipes/simple-search/simple-search.pipe', '../../shared/services/translate/translate.service', '../../services/user/user.service', '../../shared/directives/swipe-holder/swipe-holder.directive', '../../shared/directives/swipe-delete-side/swipe-delete-side.directive', '../../services/calenadar/calendar.service'], function(exports_1, context_1) {
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
    var core_1, food_service_1, sport_service_1, simple_search_pipe_1, translate_service_1, user_service_1, swipe_holder_directive_1, swipe_delete_side_directive_1, calendar_service_1;
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
            function (calendar_service_1_1) {
                calendar_service_1 = calendar_service_1_1;
            }],
        execute: function() {
            PlusComponent = (function () {
                function PlusComponent(_foodServe, _sportServe, _translateService, _userServe, _calendarServe) {
                    this._foodServe = _foodServe;
                    this._sportServe = _sportServe;
                    this._translateService = _translateService;
                    this._userServe = _userServe;
                    this._calendarServe = _calendarServe;
                    this.isOpen = false;
                    this.isOpenChange = new core_1.EventEmitter();
                    this.language = 'en';
                    this.listOptions = false;
                    this.createFood = false;
                    this.createMenu = false;
                    this.pasteMenu = false;
                    this.createExercise = false;
                    this.createTrain = false;
                    this.pasteTrain = false;
                    this.model = {};
                    this.modelSport = {};
                    this.pickedFoodMenu = {};
                    this.pickedSportTrain = {};
                    this.allMenus = [];
                    this.allTrains = [];
                    this.foodMenuContainer = [];
                    this.sportTrainContainer = [];
                    this.modelMenu = {};
                    this.modelTrain = {};
                    this.correctFood = false;
                    this.correctSport = false;
                }
                PlusComponent.prototype.ngOnInit = function () {
                    this.language = this._userServe.getLanguage();
                    this.customFood = this._foodServe.getUserFood();
                    this.refreshModel();
                    this.foodContainer = this._foodServe.getAllFood();
                    this.allMenus = this._foodServe.getUserMenuAll();
                    this.allTrains = this._sportServe.getUserTrainAll();
                    this.sportContainer = this._sportServe.getAllSport();
                    this.customSport = this._sportServe.getUserSport();
                };
                PlusComponent.prototype.checkForm = function (value) {
                    if (value) {
                        return true;
                    }
                    return false;
                };
                //train
                PlusComponent.prototype.searchTrain = function (name) {
                    if (name) {
                        this.sportTrainContainer = [];
                        if (this._sportServe.getUserTrain(name)) {
                            this.sportTrainContainer = this._sportServe.getUserTrain(name)['sport'];
                        }
                    }
                };
                PlusComponent.prototype.pickSportTrainInput = function (name) {
                    for (var _i = 0, _a = this.sportContainer; _i < _a.length; _i++) {
                        var obj = _a[_i];
                        if (obj['name'][this.language] === name) {
                            return this.pickSportTrain(obj);
                        }
                        else {
                            this.correctSport = false;
                        }
                    }
                };
                PlusComponent.prototype.pickSportTrain = function (sport) {
                    var _this = this;
                    this.pickedSportTrain = Object.assign({}, sport);
                    setTimeout(function () { return _this.modelTrain['name'] = sport.name[_this.language]; }, 0);
                    this.correctSport = true;
                };
                PlusComponent.prototype.onSubmitTrain = function () {
                    this.pickedSportTrain['picked'] = false;
                    this.pickedSportTrain['setsToggle'] = true;
                    this.pickedSportTrain['sets'] = [{ 'picked': false }];
                    this.sportTrainContainer.unshift(this.pickedSportTrain);
                    this._sportServe.setUserTrain(this.modelTrain['trainName'], this.sportTrainContainer);
                    this.pickedSportTrain = {};
                    for (var item in this.modelTrain) {
                        if (!(item === 'trainName')) {
                            this.modelTrain[item] = undefined;
                        }
                    }
                    this.searchTrain(this.modelTrain['trainName']);
                    this.correctSport = false;
                };
                PlusComponent.prototype.removeSportTrain = function (trainName, item) {
                    this._sportServe.removeSportFromTrain(trainName, item);
                };
                PlusComponent.prototype.removeTrain = function (name) {
                    this._sportServe.removeTrain(name);
                };
                PlusComponent.prototype.pasteTrainToDay = function (item) {
                    for (var _i = 0, _a = item['sport']; _i < _a.length; _i++) {
                        var variable = _a[_i];
                        this._calendarServe.setDailySport(variable);
                    }
                    this.toggle();
                };
                PlusComponent.prototype.viewTrainDetail = function (item) {
                    this.pasteTrainToggle();
                    this.createTrainToggle();
                    this.searchTrain(item['name']);
                    this.modelTrain['trainName'] = item['name'];
                };
                //4menu
                PlusComponent.prototype.searchMenu = function (name) {
                    if (name) {
                        this.foodMenuContainer = [];
                        if (this._foodServe.getUserMenu(name)) {
                            this.foodMenuContainer = this._foodServe.getUserMenu(name)['food'];
                        }
                    }
                };
                PlusComponent.prototype.pickFoodMenuInput = function (name) {
                    for (var _i = 0, _a = this.foodContainer; _i < _a.length; _i++) {
                        var obj = _a[_i];
                        if (obj['name'][this.language] === name) {
                            return this.pickFoodMenu(obj);
                        }
                        else {
                            this.correctFood = false;
                        }
                    }
                };
                PlusComponent.prototype.pickFoodMenu = function (food) {
                    var _this = this;
                    this.pickedFoodMenu = Object.assign({}, food);
                    setTimeout(function () { return _this.modelMenu['name'] = food.name[_this.language]; }, 0);
                    this.correctFood = true;
                };
                PlusComponent.prototype.onSubmitMenu = function () {
                    this.pickedFoodMenu['weight'] = this.modelMenu['weight'];
                    this.pickedFoodMenu['picked'] = false;
                    this.foodMenuContainer.unshift(this.pickedFoodMenu);
                    this._foodServe.setUserMenu(this.modelMenu['menuName'], this.foodMenuContainer);
                    this.pickedFoodMenu = {};
                    for (var item in this.modelMenu) {
                        if (!(item === 'menuName')) {
                            this.modelMenu[item] = undefined;
                        }
                    }
                    this.searchMenu(this.modelMenu['menuName']);
                    this.correctFood = false;
                };
                PlusComponent.prototype.changeFoodWeight = function (menuName, item, weight) {
                    this._foodServe.changeFoodInMenu(menuName, item, weight);
                };
                PlusComponent.prototype.removeMenu = function (name) {
                    this._foodServe.removeMenu(name);
                };
                PlusComponent.prototype.removeFoodMenu = function (menuName, item) {
                    this._foodServe.removeFoodFromMenu(menuName, item);
                };
                PlusComponent.prototype.pasteMenuToDay = function (item) {
                    for (var _i = 0, _a = item['food']; _i < _a.length; _i++) {
                        var variable = _a[_i];
                        this._calendarServe.setDailyFood(variable);
                    }
                    this.toggle();
                };
                PlusComponent.prototype.viewMenuDetail = function (item) {
                    this.pasteMenuToggle();
                    this.createMenuToggle();
                    this.searchMenu(item['name']);
                    this.modelMenu['menuName'] = item['name'];
                };
                //4 food
                PlusComponent.prototype.onSubmit = function (food) {
                    if (food.value.trim()) {
                        var name_1 = food.value.trim();
                        food = { 'value': {} };
                        food.value['name'] = {};
                        for (var key in this._translateService.getSupportLanguages()) {
                            food.value['name'][key] = name_1;
                        }
                        food.value['custom'] = true;
                        food.value['calories'] = this.model['calories'];
                        food.value['protein'] = this.model['protein'];
                        food.value['fat'] = this.model['fat'];
                        food.value['carbohydrates'] = this.model['carbohydrates'];
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
                PlusComponent.prototype.removeFood = function (food) {
                    this._foodServe.removeUserFood(food);
                };
                //4 sport
                PlusComponent.prototype.onSubmitSport = function (sport) {
                    if (sport.value.trim()) {
                        var name_2 = sport.value.trim();
                        sport = { 'value': {} };
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
                PlusComponent.prototype.removeSport = function (sport) {
                    this._sportServe.removeUserSport(sport);
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
                        directives: [swipe_holder_directive_1.SwipeHoldertDirective, swipe_delete_side_directive_1.SwipeDeleteSideDirective],
                        providers: [],
                        pipes: [translate_service_1.TranslatePipe, simple_search_pipe_1.SimpleSearch],
                        styles: ["\n\n.container {\n  position: fixed;\n  top: 16vw;\n  overflow: hidden;\n  width:100vw;\n  height: 50vw;\n  z-index: 10;\n}\n.closeMe {\n  position: fixed;\n  left: 0;\n  top: 0;\n  background-color: #3f414a;\n  opacity: 0.95;\n  width: 100vw;\n  height: 100vh;\n  z-index: 9;\n}\n.plusBar {\n  position: absolute;\n  right: 5vw;\n  top: 1vw;\n  width: 14vw;\n  height: 14vw;\n  background: url('./src/img/newPlus.png') no-repeat center center;\n  background-size: cover;\n  box-sizing: border-box;\n  border: 2px solid #ff9d2d;\n  border-radius: 50%;\n  overflow: hidden;\n  z-index: 10;\n  transition: 0.3s;\n}\n.plusBarAnime {\n  transition: transform 0.5s;\n  transform: rotate(135deg);\n  -ms-transform: rotate(135deg);\n  -webkit-transform: rotate(135deg);\n}\n.list {\n  width: 90vw;\n  overflow-y: scroll;\n}\n.listItem {\n  float:left;\n  margin-bottom: 2vw;\n  min-height: 10vw;\n  width: 80vw;\n  line-height: 8vw;\n  box-sizing: border-box;\n  background-color: #3f414a;\n  color: #ff9d2d;\n  font-size: 6vw;\n  text-align: center;\n  border-radius: 7px;\n  border: 2px solid #ff9d2d;\n  overflow-x: hidden;\n}\n.foodListMove{\n  position: fixed;\n      width: 100vw;\n      padding-left: 10vw;\n      top: 101vw;\n      overflow-y: scroll;\n      overflow-x: hidden;\n      bottom: 1px;\n}\n.listItemName {\n  float: left;\n      margin-top: 2vw;\n  padding-left: 10vw;\n    width: 80vw;\n  height: 10vw;\n  text-align: center;\n  font-size: 6vw;\n  color: #ff9d2d;\n  font-weight: bold;\n  margin-bottom: 2vw;\n}\n.food_form {\n  position: relative;\n  margin: 5vw;\n  height: 10vw;\n}\n.food_inputFoodName {\n  font-size: 6.5vw;\n  width: 40vw;\n  height: 10vw;\n  float: left;\n  margin-left: 5vw;\n  margin-bottom: 2vw;\n  color: #ff9d2d;\n  line-height: 10vw;\n  font-weight: bold;\n}\n.food_inputFood {\n  position: relative;\n  float: left;\n  height: 10vw;\n  width: 40vw;\n  background-color: rgba(49, 51, 61, 0.3);\n  box-sizing: border-box;\n  border: 2px solid #0C1017;\n  border-radius: 7px;\n  font-size: 7vw;\n  color: #ff9d2d;\n  margin-bottom: 2vw;\n}\n.food_inputFoodNameNutritions {\n  font-size: 6vw;\n  width: 40vw;\n  height: 9vw;\n  float: left;\n  margin-left: 5vw;\n  margin-bottom: 2vw;\n  color: #ff9d2d;\n  line-height: 8vw;\n}\n.food_inputFoodNutritions {\n  float: left;\n  height: 9vw;\n  width: 20vw;\n  background-color: rgba(49, 51, 61, 0.3);\n  box-sizing: border-box;\n  border: 2px solid #0C1017;\n  border-radius: 7px;\n  font-size: 6vw;\n  color: #ff9d2d;\n  margin-bottom: 2vw;\n  line-height: 8vw;\n}\n.food_inputButtonName {\n  margin-top: 2vw;\n  font-size: 6.5vw;\n}\n.food_inputButton_off {\n  position: relative;\n  float: left;\n  height: 10vw;\n  width: 10vw;\n  background: url('./src/img/ok_off.png') no-repeat center center;\n  background-size: cover;\n  box-sizing: border-box;\n  border: 2px solid #0C1017;\n  border-radius: 7px;\n}\n.food_inputButton_on {\n  position: relative;\n  float: left;\n  height: 10vw;\n  width: 10vw;\n  background: url('./src/img/ok_on.png') no-repeat center center;\n  background-size: cover;\n  box-sizing: border-box;\n  border: 2px solid #0C1017;\n  border-radius: 7px;\n}\n.sport_inputButton_off {\n  position: relative;\n  float: left;\n  height: 10vw;\n  width: 10vw;\n  background: url('./src/img/ok_off.png') no-repeat center center;\n  background-size: cover;\n  box-sizing: border-box;\n  border: 2px solid #0C1017;\n  border-radius: 7px;\n}\n\n.sport_inputButton_on {\n  position: relative;\n  float: left;\n  height: 10vw;\n  width: 10vw;\n  background: url('./src/img/ok_on.png') no-repeat center center;\n  background-size: cover;\n  box-sizing: border-box;\n  border: 2px solid #0C1017;\n  border-radius: 7px;\n}\n.sport_inputSportName {\n  font-size: 6.5vw;\n  width: 40vw;\n  height: 12vw;\n  float: left;\n  margin-left: 5vw;\n  margin-bottom: 2vw;\n  color: #ff9d2d;\n  line-height: 10vw;\n  font-weight: bold;\n}\n.sport_inputSport{\n  position: relative;\n  float: left;\n  height: 10vw;\n  width: 40vw;\n  background-color: rgba(49, 51, 61, 0.3);\n  box-sizing: border-box;\n  border: 2px solid #0C1017;\n  border-radius: 7px;\n  font-size: 7vw;\n  color: #ff9d2d;\n  margin-bottom: 2vw;\n}\n.sportListMove {\n  position: fixed;;;\n  width: 100vw;\n  top: 58vw;\n  bottom: 1px;\n  padding-left: 10vw;\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n\n.createExercise{\n  width: 100%;\n  height: 100%\n}\n.plusBar_menuButtons {\n  position: absolute;\n  height: 50vw;\n  width: 90vw;\n  right: 5vw;\n  color: #ff9d2d;\n  font-size: 5.5vw;\n  overflow: hidden;\n}\n.plusBar_listItem {\n  width: 14vw;\n  height: 14vw;\n  position: absolute;\n  right: 0;\n  overflow: hidden;\n  box-sizing: border-box;\n  border: 2px solid #ff9d2d;\n  border-radius: 50%;\n}\n.plusBar_createFoodButton {\n  background: url('./src/img/addfood.png') no-repeat center center;\n  background-size: cover;\n\n}\n.plusBar_createMenuButton {\n  background: url('./src/img/createMenuButton.png') no-repeat center center;\n  background-size: cover;\n}\n.plusBar_pasteMenuButton {\n  background: url('./src/img/pasteMenuButton.png') no-repeat center center;\n  background-size: cover;\n}\n.plusBar_createExercise {\n  background: url('./src/img/exercise.png') no-repeat center center;\n  background-size: cover;\n}\n.plusBar_createTraining{\n  background: url('./src/img/trainingPlan.png') no-repeat center center;\n  background-size: cover;\n}\n.plusBar_listName {\n  position: absolute;\n  right: 16vw;\n  text-align: right;\n  height: 15vw;\n  width: 90vw;\n  line-height: 15vw;\n  margin-bottom: 1vw;\n\n}\n.plusBar_list1Btn{\n  position: absolute;\n  right:0;\n}\n.plusBar_list2Btn{\n  position: absolute;\n  right:0;\n  top: 30%;\n  animation:  mainList2Btn 300ms linear;\n}\n.plusBar_list3Btn{\n  position: absolute;\n  top: 60%;\n  right:0;\n  animation:  mainList3Btn 300ms linear;\n}\n@keyframes mainList2Btn {\n    0%   {top:0px;}\n    100% {top:30%;}\n}\n@keyframes mainList3Btn {\n    0%   {top:0;}\n    100% {top:60%;}\n}\n.containerFull {\n  height: 165vw;\n  width: 100vw;\n}\n.listItemContainer{\n  position:relative;\n  min-height: 13vw;\n  width:80vw;\n  overflow:hidden;\n}\n\n/*\u0422\u0443\u0442 \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0442\u0441\u044F \u043A\u043B\u0430\u0441\u0441\u044B \u0434\u043B\u044F \u043A\u043D\u043E\u043F\u043A\u0438 Create Menu*/\n\n.create_inputMenuName {\n  position: relative;\nheight: 10vw;\nmargin-left: 5vw;\nwidth: 80vw;\npadding-left: 1vw;\nbackground-color: rgba(49, 51, 61, 0.3);\nbox-sizing: border-box;\nborder: 2px solid #0C1017;\nborder-radius: 7px;\nfont-size: 7vw;\ncolor: #ff9d2d;\nmargin-bottom: 2vw;\n}\n.create_inputFood {\n  position: absolute;\n  height: 10vw;\n  width: 52vw;\n  background-color: rgba(49, 51, 61, 0.3);\n  box-sizing: border-box;\n  border: 2px solid #0C1017;\n  border-radius: 7px;\n  font-size: 6vw;\n  color: #ff9d2d;\n  top: 12vw;\n  left: 5vw;\n}\n.create_inputWeight {\n  position: absolute;\n  height: 10vw;\n  width: 16vw;\n  left: 58vw;\n  top: 12vw;\n  background-color: rgba(49, 51, 61, 0.3);\n  box-sizing: border-box;\n  border: 2px solid #0C1017;\n  border-radius: 7px;\n  font-size: 6vw;\n  color: #ff9d2d;\n}\n.create_inputButton_off {\n  position: absolute;\n  right: 5vw;\n  height: 10vw;\n  width: 10vw;\n  background: url('./src/img/ok_off.png') no-repeat center center;\n  background-size: cover;\n  box-sizing: border-box;\n  color: #0d0e15;\n  border: 2px solid #0C1017;\n  border-radius: 7px;\n  top: 12vw;\n}\n.create_inputButton_on {\n  position: absolute;\n  right: 5vw;\n  height: 10vw;\n  width: 10vw;\n  background: url('./src/img/ok_on.png') no-repeat center center;\n  background-size: cover;\n  box-sizing: border-box;\n  color: #0d0e15;\n  border: 2px solid #0C1017;\n  border-radius: 7px;\n  top: 12vw;\n}\n.create_serchContainer {\n  position: absolute;\n  background-color: #0C1017;\n  border-bottom: 2px solid #0C1017;\n  box-sizing: border-box;\n  width: 52vw;\n  max-height: 30vh;\n  padding-left: 1vw;\n  padding-top: 1vw;\n  left: 5vw;\n  top: 22vw;\n  overflow-y: scroll;\n  border-radius: 7px;\n  z-index: 3;\n}\n.create_searchListItem {\n  float: left;\n  margin-bottom: 1vw;\n  min-height: 12vw;\n  width: 50vw;\n  line-height: 12vw;\n  box-sizing: border-box;\n  background-color: #3f414a;\n  color: #ff9d2d;\n  font-size: 6vw;\n  text-align: center;\n  border-radius: 7px;\n}\n.create_list {\n  position: fixed;\n      top: 61vw;\n      padding-left: 10vw;\n      width: 95vw;\n      bottom: 1px;\n      overflow-y: scroll;\n      overflow-x: hidden;\n}\n.create_listItem {\n  float: left;\n  margin-right: 1vw;\n  margin-top: 2vw;\n  min-height: 10vw;\n  width: 65vw;\n  box-sizing: border-box;\n  background-color: #3f414a;\n  color: #ff9d2d;\n  font-size: 6vw;\n  text-align: center;\n  border-radius: 7px;\n  line-height: 10vw;\n  border: 2px solid #ff9d2d;\n}\n.create_listWeight {\n  float: left;\n  margin-top: 2vw;\n  margin-right: 2vw;\n  height: 11vw;\n  width: 14vw;\n  line-height: 10vw;\n  background-color: #3f414a;\n  box-sizing: border-box;\n  color: #ff9d2d;\n  font-size: 6vw;\n  border-radius: 7px;\n  text-align: center;\n  border: 2px solid #ff9d2d;\n}\n.create_form {\n  position: relative;\n  margin: 5vw;\n  height: 20vw;\n}\n.createListMove {\n  position: fixed;\n  width: 100vw;\n  padding-left: 10vw;\n  top: 59vw;\n  bottom: 1px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n.create_listItemName {\n  width: 80vw;\n  float: left;\n  height: 14vw;\n  text-align: center;\n  font-size: 6vw;\n  color: #ff9d2d;\n  font-weight: bold;\n  margin-left: 10vw;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.pasteListMove {\n  position: relative;\n  width: 100vw;\n  padding-left: 10vw;\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n.createTrain_inputSport {\n  position: relative;\nfloat: left;\nheight: 10vw;\nwidth: 68vw;\npadding-left: 1vw;\nbackground-color: rgba(49, 51, 61, 0.3);\nbox-sizing: border-box;\nborder: 2px solid #0C1017;\nborder-radius: 7px;\nfont-size: 7vw;\ncolor: #ff9d2d;\nmargin-left: 5vw;\nmargin-bottom: 2vw;\n}\n.createExercise_listItemName {\n  position: absolute;\n  top: 33vw;\n  padding-left: 10vw;\n  width: 80vw;\n  height: 10vw;\n  text-align: center;\n  font-size: 6vw;\n  color: #ff9d2d;\n  font-weight: bold;\n  margin-bottom: 2vw;\n}\n.createTrain_serchContainer {\n  position: absolute;\n  background-color: #0C1017;\n  border-bottom: 2px solid #0C1017;\n  box-sizing: border-box;\n  width: 68vw;\n  max-height: 30vh;\n  padding-left: 1vw;\n  padding-top: 1vw;\n  left: 5vw;\n  top: 22vw;\n  overflow-y: scroll;\n  border-radius: 7px;\n  z-index: 3;\n}\n.createTrain_searchListItem {\n  float: left;\n  margin-bottom: 1vw;\n  min-height: 12vw;\n  width: 66vw;\n  line-height: 12vw;\n  box-sizing: border-box;\n  background-color: #3f414a;\n  color: #ff9d2d;\n  font-size: 6vw;\n  text-align: center;\n  border-radius: 7px;\n  overflow: hidden;\n}\n.createTrain_listItemName {\n  position: absolute;\n    padding-left: 10vw;\n    width: 80vw;\n    height: 14vw;\n    text-align: center;\n    font-size: 6vw;\n    color: #ff9d2d;\n    font-weight: bold;\n    margin-bottom: 2vw;\n    overflow-x: hidden;\n    overflow-y: scroll;\n}\n.createTrain_listItem{\n  float: left;\n    margin-right: 1vw;\n    margin-top: 2vw;\n    min-height: 10vw;\n    width: 80vw;\n    box-sizing: border-box;\n    background-color: #3f414a;\n    color: #ff9d2d;\n    font-size: 6vw;\n    text-align: center;\n    border-radius: 7px;\n    line-height: 10vw;\n    border: 2px solid #ff9d2d;\n}\n.anomaliya {\n  font-size: 6vw;\nwidth: 40vw;\nheight: 9vw;\nmargin-left: 5vw;\ncolor: #ff9d2d;\nline-height: 8vw;\n}\n.paste_list {\n  position: fixed;\n top: 27vw;\n width: 100vw;\n bottom: 1px;\n overflow-x: hidden;\n overflow-y: scroll;\n}\n.paste_listItem {\n  float: left;\n  min-height: 10vw;\n  margin-left: 10vw;\nmargin-bottom: 2vw;\nwidth: 57vw;\nline-height: 8vw;\nbox-sizing: border-box;\nbackground-color: #3f414a;\ncolor: #ff9d2d;\nfont-size: 6vw;\ntext-align: center;\nborder-radius: 7px;\nborder: 2px solid #ff9d2d;\noverflow-x: hidden;\n}\n.paste_vievIcon {\n    width: 10vw;\n    height: 10vw;\n    float: left;\n    overflow: hidden;\n    margin-left: 2vw;\n    background: url('./src/img/wrench.png') no-repeat center center;\n    background-size: cover;\n    box-sizing: border-box;\n    border: 2px solid #ff9d2d;\n    border-radius: 50%;\n}\n.paste_goIcon {\n  width: 10vw;\n  height: 10vw;\n  float: left;\n  overflow: hidden;\n  margin-left: 2vw;\n  border: 2px solid #ff9d2d;\n  border-radius: 50%;\n  box-sizing: border-box;\n  background: url('./src/img/ok_on.png') no-repeat center center;\n  background-size: cover;\n  line-height: 9vw;\n}\n.toRight {\n  float: right;\n}\n    "],
                        template: "\n\n<!-- \u041F\u043B\u044E\u0441\u0431\u0430\u0440 \u0432 Food -->\n<div class=\"plusBar\" [ngClass]=\"{plusBarAnime: isOpen}\" (click)=\"toggle()\"></div>\n<div *ngIf=\"isOpen\" class=\"closeMe\" (click)=\"toggle()\"></div>\n\n<div class=\"container\" *ngIf=\"isOpen && (iAm === 'food')\" [ngClass]=\"{containerFull: createFood || createMenu || pasteMenu}\">\n  <div *ngIf=\"listOptions\" class=\"plusBar_menuButtons\">\n\n    <div class=\"plusBar_list1Btn\" (click)=\"createFoodToggle()\">\n      <div class=\"plusBar_listItem plusBar_createFoodButton\"></div>\n      <div class=\"plusBar_listName\">\n        {{'create.food' | translate}}\n      </div>\n    </div>\n\n    <div class=\"plusBar_list2Btn\" (click)=\"createMenuToggle()\">\n      <div class=\"plusBar_listItem plusBar_createMenuButton\"></div>\n      <div class=\"plusBar_listName\">\n        {{'create.menu' | translate}}\n      </div>\n    </div>\n\n    <div class=\"plusBar_list3Btn\" (click)=\"pasteMenuToggle()\">\n      <div class=\" plusBar_listItem plusBar_pasteMenuButton\"></div>\n      <div class=\"plusBar_listName\">\n        {{'choose.menu' | translate}}\n      </div>\n    </div>\n  </div>\n\n  <!-- \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0431\u043B\u044E\u0434\u043E -->\n  <div *ngIf=\"createFood\">\n    <form class=\"food_form\">\n      <div class=\"food_inputFoodName\">{{'meals.name' | translate}}</div>\n      <input class=\"food_inputFood\" required [(ngModel)]=\"model.name\" #name>\n\n      <div class=\"food_inputFoodNameNutritions\">{{'calories' | translate}}</div>\n      <input class=\"food_inputFoodNutritions\" type=\"number\" min=\"0\" required [(ngModel)]=\"model.calories\">\n\n      <div class=\"food_inputFoodNameNutritions\">{{'protein' | translate}}</div>\n      <input class=\"food_inputFoodNutritions\" type=\"number\" min=\"0\" required [(ngModel)]=\"model.protein\">\n\n      <div class=\"food_inputFoodNameNutritions\">{{'fat' | translate}}</div>\n      <input class=\"food_inputFoodNutritions\" type=\"number\" min=\"0\" required [(ngModel)]=\"model.fat\">\n\n      <div class=\"food_inputFoodNameNutritions\">{{'carbohydrates' | translate}}</div>\n      <input class=\"food_inputFoodNutritions\" type=\"number\" min=\"0\" required [(ngModel)]=\"model.carbohydrates\">\n\n      <div class=\"food_inputFoodNameNutritions food_inputButtonName \">{{'done' | translate}}</div>\n      <button type=\"submit\" [ngClass]=\"{food_inputButton_off: !checkForm(name.value), food_inputButton_on: checkForm(name.value) }\" [disabled]=\"!checkForm(name.value)\" (click)=\"onSubmit(name)\"></button>\n    </form>\n    <div class=\"listItemName\">{{'added.meals' | translate}}</div>\n    <div class=\"list foodListMove\">\n      <div *ngFor=\"#item of customFood\" class=\"listItemContainer\" (fmSwipeDeleteSide)=\"removeFood(item)\">\n        <div class=\"listItem\">{{item.name[language]}} </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u043E\u0435 \u043C\u0435\u043D\u044E -->\n  <div *ngIf=\"createMenu\">\n\n    <form class=\"create_form\" (ngSubmit)=\"onSubmitMenu()\">\n\n      <input class=\"create_inputMenuName\" required [placeholder]=\"('menuName'|translate) + '...'\" [(ngModel)]=\"modelMenu.menuName\" #menuName (input)=\"searchMenu(menuName.value)\">\n      <label for=\"foodName\"></label>\n      <input class=\"create_inputFood\" required [placeholder]=\"('search'|translate) + '...'\" [(ngModel)]=\"modelMenu.name\" #name (input)=\"pickFoodMenuInput(modelMenu.name)\">\n\n      <label for=\"foodWeight\"></label>\n      <input class=\"create_inputWeight\" type=\"number\" [min]=\"1\" [placeholder]=\"('weight'|translate) + '...'\" required [(ngModel)]=\"modelMenu.weight\" #weight>\n\n      <button #subBtn type=\"submit\" [ngClass]=\"{create_inputButton_off: subBtn['disabled'], create_inputButton_on: !subBtn['disabled']}\" [disabled]=\"!correctFood || !weight.value || !menuName.value\"></button>\n      <div *ngIf=\"name.value && !correctFood\" class=\"create_serchContainer\">\n        <div class=\"create_searchListItem\" *ngFor=\"#item of foodContainer  | simpleSearch :'name':language : name.value; #i = index;\" (click)=\"pickFoodMenu(item);\">\n          {{item?.name[language]}}\n        </div>\n      </div>\n    </form>\n    <div *ngIf=\"createMenu\" class=\"create_listItemName\">\n      {{modelMenu.menuName}}\n    </div>\n    <div class=\"create_list\">\n      <div *ngFor=\"#item of foodMenuContainer; #i = index\" (fmSwipeDeleteSide)=\"removeFoodMenu(modelMenu.menuName,i)\">\n        <div class=\"create_listItem\">{{item?.name[language]}} </div>\n        <input class=\"create_listWeight\" type=\"number\" min=\"0\" required [(ngModel)]=\"item.weight\" (blur)=\"changeFoodWeight(modelMenu.menuName, i, item.weight)\">\n      </div>\n    </div>\n  </div>\n\n  <!-- \u0421\u043F\u0438\u0441\u043E\u043A \u0441\u043E\u0437\u0434\u0430\u043D\u043D\u044B\u0445 \u043C\u0435\u043D\u044E -->\n  <div *ngIf=\"pasteMenu\">\n\n  <div class=\"listItemName\">{{'choose.menu' | translate}}</div>\n    <div class=\"paste_list\">\n    <div *ngFor=\"#item of allMenus\" (fmSwipeDeleteSide)=\"removeMenu(item['name'])\">\n      <!-- <div class=\"paste_listItemName\"> -->\n        <div class=\"paste_listItem\">{{item['name']}}</div>\n        <span class=\"paste_vievIcon\" (click)=\"viewMenuDetail(item)\"></span>\n        <span class=\"paste_goIcon\" (click)=\"pasteMenuToDay(item)\"></span>\n      <!-- </div> -->\n    </div>\n  </div>\n\n    </div>\n</div>\n\n<!-- ******************** -->\n<!-- \u0442\u0443\u0442 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u0441\u043F\u043E\u0440\u0442 -->\n<!-- ******************** -->\n\n\n<!-- \u041F\u043B\u044E\u0441\u0431\u0430\u0440 \u0432 Sport -->\n<div class=\"container\" *ngIf=\"isOpen && (iAm === 'sport')\" [ngClass]=\"{containerFull: createExercise || createTrain || pasteTrain}\">\n  <div *ngIf=\"listOptions\" class=\"plusBar_menuButtons\">\n\n    <div class=\"plusBar_list1Btn\" (click)=\"createExerciseToggle()\">\n      <div class=\"plusBar_listItem plusBar_createExercise \"></div>\n      <div class=\"plusBar_listName\">\n        {{'create.exercise' | translate}}\n      </div>\n    </div>\n\n    <div class=\"plusBar_list2Btn\" (click)=\"createTrainToggle()\">\n      <div class=\"plusBar_listItem plusBar_createTraining\"></div>\n      <div class=\"plusBar_listName \">\n        {{'create.training.plan' | translate}}\n      </div>\n    </div>\n\n    <div class=\"plusBar_list3Btn\" (click)=\"pasteTrainToggle()\">\n      <div class=\"plusBar_listItem plusBar_pasteMenuButton\"></div>\n      <div class=\"plusBar_listName\">\n        {{'choose.training' | translate}}\n      </div>\n    </div>\n  </div>\n\n  <!-- \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0443\u043F\u0440\u0430\u0436\u043D\u0435\u043D\u0438\u0435 -->\n  <div *ngIf=\"createExercise\">\n\n    <form class=\"food_form\">\n      <label class=\"sport_inputSportName\" for=\"name\">{{'name' | translate}}:</label>\n      <input class=\"sport_inputSport\" required [(ngModel)]=\"modelSport.name\" #name>\n      <div class=\"anomaliya food_inputButtonName \">{{'done' | translate}}</div>\n      <button type=\"submit\" [ngClass]=\"{food_inputButton_off: !checkForm(name.value), food_inputButton_on: checkForm(name.value) }\" [disabled]=\"!checkForm(name.value)\" (touchend)=\"onSubmitSport(name)\"></button>\n    </form>\n\n<div class=\"createExercise_listItemName\">{{'added.exercise' | translate}}</div>\n    <div class=\"sportListMove\">\n            <div *ngFor=\"#item of customSport\" class=\"listItemContainer\" (fmSwipeDeleteSide)=\"removeSport(item)\">\n        <div class=\"listItem\">{{item.name.ru}} </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0443 -->\n  <div *ngIf=\"createTrain\">\n\n    <form class=\"create_form\" (ngSubmit)=\"onSubmitTrain()\">\n\n      <input class=\"create_inputMenuName\" required [placeholder]=\"('trainingName'|translate) + '...'\" [(ngModel)]=\"modelTrain.trainName\" #trainName (input)=\"searchTrain(trainName.value)\">\n\n\n      <label for=\"sportName\"></label>\n      <input class=\"createTrain_inputSport\" required [placeholder]=\"('search'|translate) + '...'\" [(ngModel)]=\"modelTrain.name\" #name (input)=\"pickSportTrainInput(name.value)\">\n\n      <button #subBtn type=\"submit\" [ngClass]=\"{create_inputButton_off: subBtn['disabled'], create_inputButton_on: !subBtn['disabled']}\" [disabled]=\"!correctSport || !trainName.value\"></button>\n      <div *ngIf=\"name.value && !correctSport\" class=\"createTrain_serchContainer\">\n        <div class=\"createTrain_searchListItem\" *ngFor=\"#item of sportContainer  | simpleSearch :'name':language : name.value; #i = index;\" (click)=\"pickSportTrain(item)\">\n          {{item?.name[language]}}\n        </div>\n      </div>\n    </form>\n\n\n  <div *ngIf=\"createTrain\" class=\"createTrain_listItemName\">  {{modelTrain.trainName}}</div>\n    <div class=\"list createListMove\">\n      <div *ngFor=\"#item of sportTrainContainer; #i = index\" (fmSwipeDeleteSide)=\"removeSportTrain(modelTrain.trainName,i)\">\n        <div class=\"createTrain_listItem\">{{item?.name[language]}} </div>\n      </div>\n    </div>\n\n  </div>\n\n\n  <!-- \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0443-->\n  <div *ngIf=\"pasteTrain\">\n  <div class=\"listItemName\">{{'choose.training' | translate}}</div>\n    <div class=\"paste_list\">\n        <div *ngFor=\"#item of allTrains\" (fmSwipeDeleteSide)=\"removeTrain(item['name'])\">\n      <div class=\"paste_listItemName\">\n        <div class=\"paste_listItem\">{{item['name']}} </div>\n        <span class=\"paste_vievIcon\" (click)=\"viewTrainDetail(item)\"></span>\n         <span class=\"paste_goIcon\" (click)=\"pasteTrainToDay(item)\"></span>\n      </div>\n    </div>\n    </div>\n  </div>\n</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [food_service_1.FoodService, sport_service_1.SportService, translate_service_1.TranslateService, user_service_1.UserService, calendar_service_1.CalendarService])
                ], PlusComponent);
                return PlusComponent;
            }());
            exports_1("PlusComponent", PlusComponent);
        }
    }
});
//# sourceMappingURL=plus-bar.component.js.map