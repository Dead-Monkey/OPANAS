System.register(['angular2/core', '../../services/food/food.service', '../../services/sport/sport.service', '../../shared/pipes/simple-search/simple-search.pipe', '../../shared/services/translate/translate.service', '../../services/user/user.service', '../../shared/directives/swipe-holder/swipe-holder.directive'], function(exports_1, context_1) {
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
    var core_1, food_service_1, sport_service_1, simple_search_pipe_1, translate_service_1, user_service_1, swipe_holder_directive_1;
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
            }],
        execute: function() {
            PlusComponent = (function () {
                function PlusComponent(_foodServe, _sportServe, _translateService, _userServe) {
                    this._foodServe = _foodServe;
                    this._sportServe = _sportServe;
                    this._translateService = _translateService;
                    this._userServe = _userServe;
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
                    this.foodMenuContainer = [];
                    this.modelMenu = {};
                    this.correctFood = false;
                }
                PlusComponent.prototype.ngOnInit = function () {
                    this.language = this._userServe.getLanguage();
                    this.customFood = this._foodServe.getUserFood();
                    this.refreshModel();
                    this.customSport = this._sportServe.getUserSport();
                    this.foodContainer = this._foodServe.getAllFood();
                };
                PlusComponent.prototype.checkForm = function (value) {
                    if (value) {
                        return true;
                    }
                    return false;
                };
                //4menu
                PlusComponent.prototype.searchMenu = function (name) {
                    if (name) {
                        this.foodMenuContainer = [];
                        if (this._foodServe.getUserMenu(name)) {
                            this.foodMenuContainer = this._foodServe.getUserMenu(name)['food'];
                            console.log(this.foodMenuContainer);
                        }
                    }
                };
                PlusComponent.prototype.pickFoodMenuInput = function (name) {
                    console.log(name);
                    for (var _i = 0, _a = this.foodContainer; _i < _a.length; _i++) {
                        var obj = _a[_i];
                        if (obj['name'][this.language] === name) {
                            return this.pickFoodMenu(obj);
                        }
                        else {
                            this.correctFood = false;
                            console.log("unCorrectFood");
                        }
                    }
                };
                PlusComponent.prototype.pickFoodMenu = function (food) {
                    var _this = this;
                    this.pickedFoodMenu = Object.assign({}, food);
                    setTimeout(function () { return _this.modelMenu['name'] = food.name[_this.language]; }, 0);
                    this.correctFood = true;
                };
                PlusComponent.prototype.onSubmitMenu = function (food) {
                    this.pickedFoodMenu['weight'] = food.value.weight;
                    this.pickedFoodMenu['picked'] = false;
                    this.foodMenuContainer.unshift(this.pickedFoodMenu);
                    this._foodServe.setUserMenu(food.value.menuName, this.foodMenuContainer);
                    this.pickedFoodMenu = {};
                    for (var item in this.modelMenu) {
                        if (!(item === 'menuName')) {
                            console.log(item);
                            this.modelMenu[item] = undefined;
                        }
                    }
                    this.searchMenu(this.modelMenu['menuName']);
                    this.correctFood = false;
                };
                PlusComponent.prototype.changeFoodWeight = function (menuName, item, weight) {
                    this._foodServe.changeFoodInMenu(menuName, item, weight);
                };
                PlusComponent.prototype.removeFoodMenu = function (menuName, item) {
                    this._foodServe.removeFoodFromMenu(menuName, item);
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
                        directives: [swipe_holder_directive_1.SwipeHoldertDirective],
                        providers: [],
                        pipes: [translate_service_1.TranslatePipe, simple_search_pipe_1.SimpleSearch],
                        styles: ["\n\n.container {\n  position: fixed;\n  left: 5vw;\n  top: 15vw;\n  overflow: hidden;\n  width:90vw;\n  height: 50vw;\n  z-index: 10;\n}\n.closeMe {\n  position: fixed;\n  left: 0;\n  top: 0;\n  background-color: #3f414a;\n  opacity: 0.95;\n  width: 100vw;\n  height: 100vh;\n  z-index: 9;\n}\n.plusBar {\n  position: absolute;\n  right: 5vw;\n  top: 0;\n  width: 15vw;\n  height: 15vw;\n  background: url('./src/img/newPlus.png') no-repeat center center;\n  background-size: cover;\n  overflow: hidden;\n  z-index: 10;\n  transition: 0.3s;\n}\n.plusBarAnime {\n  transition: transform 0.5s;\n  transform: rotate(135deg);\n  -ms-transform: rotate(135deg);\n  -webkit-transform: rotate(135deg);\n}\n.list {\n  width: 90vw;\n  height: 80vw;\n  overflow-y: scroll;\n}\n.listItem {\n  float:left;\n  margin-bottom: 2vw;\n  height: 12vw;\n  width: 50vw;\n  line-height: 11vw;\n  box-sizing: border-box;\n  background-color: #3f414a;\n  color: #ff9d2d;\n  font-size: 6vw;\n  text-align: center;\n  border-radius: 2vw;\n  border: 2px solid #ff9d2d;\n}\n.listItemEditing {\n  margin-bottom: 2vw;\n  margin-left: 3vw;\n  float: left;\n  width: 12vw;\n  height: 12vw;\n  background: url('./src/img/wrench.png') no-repeat center center;\n  background-size: cover;\n}\n.listItemDelete {\n  margin-bottom: 2vw;\n  margin-left: 3vw;\n  float: left;\n  width: 12vw;\n  height: 12vw;\n  background: url('./src/img/delete.png') no-repeat center center;\n  background-size: cover;\n}\n.foodListMove{\n  position: absolute;;\n  width: 80vw;\n  top: 80vw;\n  left: 4vw;\n  overflow-y: scroll;\n}\n.listItemName {\n  width: 80vw;\n  float:left;\n  height: 10vw;\n  text-align: center;\n  font-size: 6vw;\n  color: #ff9d2d;\n  font-weight: bold;\n  margin-bottom: 2vw;\n}\n.food_form {\n  position: relative;\n  margin: 5vw;\n  height: 10vw;\n}\n.food_inputFoodName {\n  font-size: 6.5vw;\n  width: 40vw;\n  height: 10vw;\n  float: left;\n  margin-bottom: 2vw;\n  color: #ff9d2d;\n  line-height: 10vw;\n  font-weight: bold;\n}\n.food_inputFood {\n  position: relative;\n  float: left;\n  height: 10vw;\n  width: 40vw;\n  background-color: rgba(49, 51, 61, 0.3);\n  box-sizing: border-box;\n  border: 3px solid #0C1017;\n  border-radius: 2vw;\n  font-size: 7vw;\n  color: #ff9d2d;\n  margin-bottom: 2vw;\n}\n.food_inputFoodNameNutritions {\n  position: relative;\n  font-size: 6vw;\n  width: 40vw;\n  height: 9vw;\n  float: left;\n  margin-bottom: 2vw;\n  color: #ff9d2d;\n  line-height: 8vw;\n}\n.food_inputFoodNutritions {\n  position: relative;\n  float: left;\n  height: 9vw;\n  width: 20vw;\n  background-color: rgba(49, 51, 61, 0.3);\n  box-sizing: border-box;\n  border: 3px solid #0C1017;\n  border-radius: 2vw;\n  font-size: 6vw;\n  color: #ff9d2d;\n  margin-bottom: 2vw;\n  line-height: 8vw;\n}\n.food_inputButtonName {\n  margin-top: 2vw;\n  font-size: 6.5vw;\n}\n.food_inputButton_off {\n  position: relative;\n  float: left;\n  height: 12vw;\n  width: 12vw;\n  background: url('./src/img/check-off.png') no-repeat center center;\n  background-size: cover;\n  box-sizing: border-box;\n  border: 3px solid #0C1017;\n  border-radius: 2vw;\n}\n.food_inputButton_on {\n  position: relative;\n  float: left;\n  height: 12vw;\n  width: 12vw;\n  background: url('./src/img/check-on.png') no-repeat center center;\n  background-size: cover;\n  box-sizing: border-box;\n  border: 3px solid #0C1017;\n  border-radius: 2vw;\n}\n.sport_inputButton_off {\n  position: relative;\n  float: right;\n  height: 12vw;\n  width: 12vw;\n  background: url('./src/img/check-off.png') no-repeat center center;\n  background-size: cover;\n  box-sizing: border-box;\n  border: 3px solid #0C1017;\n  border-radius: 2vw;\n}\n\n.sport_inputButton_on {\n  position: relative;\n  float: right;\n  height: 12vw;\n  width: 12vw;\n  background: url('./src/img/check-on.png') no-repeat center center;\n  background-size: cover;\n  box-sizing: border-box;\n  border: 3px solid #0C1017;\n  border-radius: 2vw;\n}\n.sport_inputSportName {\n  font-size: 6.5vw;\n  width: 40vw;\n  height: 12vw;\n  float: left;\n  margin-bottom: 2vw;\n  color: #ff9d2d;\n  line-height: 10vw;\n  font-weight: bold;\n}\n.sport_inputSport{\n  position: relative;\n  float: left;\n  height: 12vw;\n  width: 40vw;\n  background-color: rgba(49, 51, 61, 0.3);\n  box-sizing: border-box;\n  border: 3px solid #0C1017;\n  border-radius: 2vw;\n  font-size: 7vw;\n  color: #ff9d2d;\n  margin-bottom: 2vw;\n}\n.sportListMove {\n  position: absolute;;\n  width: 80vw;\n  top: 40vw;\n  left: 4vw;\n  overflow-y: scroll;\n}\n\n.createExercise{\n  width: 100%;\n  height: 100%\n}\n.sportBtnMove{\n  top:0;\n  right:0;\n}\n.plusBar_menuButtons {\n  position: absolute;\n  height: 50vw;\n  width: 90vw;\n  right: 0;\n  color: #ff9d2d;\n  font-size: 5.5vw;\n  overflow: hidden;\n}\n.plusBar_listItem {\n  width: 15vw;\n  height: 15vw;\n  position: absolute;\n  right: 0;\n  overflow: hidden;\n}\n.plusBar_createFoodButton {\n  background: url('./src/img/addfood.png') no-repeat center center;\n  background-size: cover;\n}\n.plusBar_createMenuButton {\n  background: url('./src/img/createMenuButton.png') no-repeat center center;\n  background-size: cover;\n}\n.plusBar_pasteMenuButton {\n  background: url('./src/img/pasteMenuButton.png') no-repeat center center;\n  background-size: cover;\n}\n.plusBar_createExercise {\n  background: url('./src/img/exercise.png') no-repeat center center;\n  background-size: cover;\n}\n.plusBar_createTraining{\n  background: url('./src/img/trainingPlan.png') no-repeat center center;\n  background-size: cover;\n}\n.plusBar_listName {\n  position: absolute;\n  right: 16vw;\n  text-align: right;\n  height: 15vw;\n  width: 90vw;\n  line-height: 15vw;\n  margin-bottom: 1vw;\n\n}\n.plusBar_list1Btn{\n  position: absolute;\n  right:0;\n}\n.plusBar_list2Btn{\n  position: absolute;\n  right:0;\n  top: 30%;\n  animation:  mainList2Btn 300ms linear;\n}\n.plusBar_list3Btn{\n  position: absolute;\n  top: 60%;\n  right:0;\n  animation:  mainList3Btn 300ms linear;\n}\n@keyframes mainList2Btn {\n    0%   {top:0px;}\n    100% {top:30%;}\n}\n@keyframes mainList3Btn {\n    0%   {top:0;}\n    100% {top:60%;}\n}\n.containerFull {\n  height: 165vw;\n  width: 90vw;\n}\n    "],
                        template: "\n<div class=\"plusBar\" [ngClass]=\"{plusBarAnime: isOpen}\" (click)=\"toggle()\"></div>\n<div *ngIf=\"isOpen\" class=\"closeMe\" (click)=\"toggle()\"></div>\n\n<div class=\"container\" *ngIf=\"isOpen && (iAm === 'food')\" [ngClass]=\"{containerFull: createFood || createMenu}\">\n  <div *ngIf=\"listOptions\" class=\"plusBar_menuButtons\">\n\n    <div class=\"plusBar_list1Btn\" (click)=\"createFoodToggle()\">\n      <div class=\"plusBar_listItem plusBar_createFoodButton\"></div>\n      <div class=\"plusBar_listName\">\n        {{'create.food' | translate}}\n      </div>\n    </div>\n\n    <div class=\"plusBar_list2Btn\" (click)=\"createMenuToggle()\">\n      <div class=\"plusBar_listItem plusBar_createMenuButton\"></div>\n      <div class=\"plusBar_listName\">\n        {{'create.menu' | translate}}\n      </div>\n    </div>\n\n    <!-- <div class=\"plusBar_list3Btn\" (click)=\"pasteMenuToggle()\">\n      <div class=\" plusBar_listItem plusBar_pasteMenuButton\"></div>\n      <div class=\"plusBar_listName\">\n        {{'paste.menu' | translate}}\n      </div>\n    </div> -->\n  </div>\n\n  <!-- \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0431\u043B\u044E\u0434\u043E -->\n  <div *ngIf=\"createFood\">\n    <form class=\"food_form\" >\n      <div class=\"food_inputFoodName\">{{'meals.name' | translate}}</div>\n      <input class=\"food_inputFood\" required [(ngModel)]=\"model.name\"  #name>\n\n      <div class=\"food_inputFoodNameNutritions\">{{'calories' | translate}}</div>\n      <input class=\"food_inputFoodNutritions\" type=\"number\" min=\"0\" required [(ngModel)]=\"model.calories\">\n\n      <div class=\"food_inputFoodNameNutritions\">{{'protein' | translate}}</div>\n      <input class=\"food_inputFoodNutritions\" type=\"number\" min=\"0\" required [(ngModel)]=\"model.protein\">\n\n      <div class=\"food_inputFoodNameNutritions\">{{'fat' | translate}}</div>\n      <input class=\"food_inputFoodNutritions\" type=\"number\" min=\"0\" required [(ngModel)]=\"model.fat\">\n\n      <div class=\"food_inputFoodNameNutritions\">{{'carbohydrates' | translate}}</div>\n      <input class=\"food_inputFoodNutritions\" type=\"number\" min=\"0\" required [(ngModel)]=\"model.carbohydrates\">\n\n      <div class=\"food_inputFoodNameNutritions food_inputButtonName \">{{'done' | translate}}</div>\n      <button type=\"submit\" [ngClass]=\"{food_inputButton_off: !checkForm(name.value), food_inputButton_on: checkForm(name.value) }\" [disabled]=\"!checkForm(name.value)\" (click)=\"onSubmit(name)\"></button>\n    </form>\n    <div class=\"list foodListMove\">\n      <div class=\"listItemName\">{{'added.meals' | translate}}</div>\n      <div *ngFor=\"#item of customFood\">\n        <div class=\"listItem\">{{item.name[language]}} </div>\n        <div class=\"listItemEditing\"></div>\n        <div class=\"listItemDelete\"></div>\n      </div>\n    </div>\n  </div>\n\n  <!-- \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u043E\u0435 \u043C\u0435\u043D\u044E -->\n  <div *ngIf=\"createMenu\">\n\n    <form class=\"food_form\" (ngSubmit)=\"onSubmitMenu(foodForm)\" #foodForm=\"ngForm\">\n\n      <label for=\"menuName\"></label>\n      <input class=\"\" required [placeholder]=\"('menuName'|translate) + '...'\" [(ngModel)]=\"modelMenu.menuName\" ngControl=\"menuName\" #menuName=\"ngForm\" #menuNameMain (input)=\"searchMenu(menuNameMain.value)\">\n\n      <label for=\"foodName\"></label>\n      <input class=\"\" required [placeholder]=\"('search'|translate) + '...'\" [(ngModel)]=\"modelMenu.name\" ngControl=\"name\" #name=\"ngForm\" (input)=\"pickFoodMenuInput(modelMenu.name)\">\n\n      <label for=\"foodWeight\"></label>\n      <input type=\"number\" [min]=\"1\" [placeholder]=\"('weight'|translate) + '...'\" class=\"\" required [(ngModel)]=\"modelMenu.weight\" ngControl=\"weight\" #weight=\"ngForm\">\n\n      <button #subBtn type=\"submit\" [ngClass]=\"{food_inputButton_off: subBtn['disabled'], food_inputButton_on: !subBtn['disabled']}\" [disabled]=\"!foodForm.form.valid || !correctFood\"></button>\n\n      <div *ngIf=\"(name.valid && !correctFood)\" class=\"food_serchContainer\">\n        <div class=\"food_searchListItem\" *ngFor=\"#item of foodContainer  | simpleSearch :'name':language : name.value; #i = index;\" (click)=\"pickFoodMenu(item);\">\n          {{item?.name[language]}}\n        </div>\n      </div>\n    </form>\n    <div class=\"list foodListMove\">\n      <div *ngFor=\"#item of foodMenuContainer; #i = index\" fmSwipe (fmSwipeLeft)=\"removeFoodMenu(modelMenu.menuName,i)\" (fmSwipeRight)=\"removeFoodMenu(modelMenu.menuName, i)\">\n        <div class=\"listItem\">{{item?.name[language]}} </div>\n        <input class=\"food_listWeight\" type=\"number\" min=\"0\" required [(ngModel)]=\"item.weight\" (blur)=\"changeFoodWeight(modelMenu.menuName, i, item.weight)\">\n      </div>\n    </div>\n    <div *ngIf=\"createMenu\">\n      {{'create.menu' | translate}}\n    </div>\n\n    <div *ngIf=\"pasteMenu\">\n    {{'paste.menu' | translate}}\n  </div>\n</div>\n</div>\n    <!-- \u0442\u0443\u0442 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u0441\u043F\u043E\u0440\u0442 -->\n\n    <div class=\"container\" *ngIf=\"isOpen && (iAm === 'sport')\" [ngClass]=\"{containerFull: createExercise || createTrain}\">\n  <div *ngIf=\"listOptions\" class=\"plusBar_menuButtons\">\n\n    <div class=\"plusBar_list1Btn\" (click)=\"createExerciseToggle()\">\n      <div class=\"plusBar_listItem plusBar_createExercise \"></div>\n      <div class=\"plusBar_listName\">\n        {{'create.exercise' | translate}}\n      </div>\n    </div>\n\n    <div class=\"plusBar_list2Btn\" (click)=\"createTrainToggle()\">\n      <div class=\"plusBar_listItem plusBar_createTraining\"></div>\n      <div class=\"plusBar_listName \">\n        {{'create.training.plan' | translate}}\n      </div>\n    </div>\n\n    <div class=\"plusBar_list3Btn\" (click)=\"pasteTrainToggle()\">\n      <div class=\"plusBar_listItem plusBar_pasteMenuButton\"></div>\n      <div class=\"plusBar_listName\">\n        paste train\n      </div>\n    </div>\n  </div>\n\n\n  <div *ngIf=\"createExercise\">\n\n    <form class=\"food_form\">\n      <label class=\"sport_inputSportName\" for=\"name\">{{'name' | translate}}:</label>\n      <input class=\"sport_inputSport\" required [(ngModel)]=\"modelSport.name\" #name>\n      <button type=\"submit\" class=\"sportBtnMove\" [ngClass]=\"{sport_inputButton_off: !checkForm(name.value), sport_inputButton_on: checkForm(name.value) }\" [disabled]=\"!checkForm(name.value)\" (click)=\"onSubmitSport(name)\"></button>\n    </form>\n\n    <div class=\"sportListMove\">\n      <div *ngFor=\"#item of customSport\">\n        <div class=\"listItemName\">{{'added.exercise' | translate}}</div>\n        <div class=\"listItem\">{{item.name.ru}} </div>\n        <div class=\"listItemEditing\"></div>\n        <div class=\"listItemDelete\"></div>\n      </div>\n    </div>\n  </div>\n\n\n  <div *ngIf=\"createTrain\">\n    create train\n  </div>\n\n  <div *ngIf=\"pasteTrain\">\n    paste train\n  </div>\n</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [food_service_1.FoodService, sport_service_1.SportService, translate_service_1.TranslateService, user_service_1.UserService])
                ], PlusComponent);
                return PlusComponent;
            }());
            exports_1("PlusComponent", PlusComponent);
        }
    }
});
//# sourceMappingURL=plus-bar.component.js.map