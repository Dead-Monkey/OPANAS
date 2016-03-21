import {Component, OnInit, Input, Output, EventEmitter} from 'angular2/core';
import {FoodService, Food, Menu} from '../../services/food/food.service';
import {SportService, Sport} from '../../services/sport/sport.service';
import {SimpleSearch} from '../../shared/pipes/simple-search/simple-search.pipe';
import {TranslateService, TranslatePipe} from '../../shared/services/translate/translate.service';
import {UserService} from '../../services/user/user.service';
import {SwipeHoldertDirective} from '../../shared/directives/swipeHolder/swipe-holder.directive';

@Component({
    selector: 'op-plus',
    directives: [SwipeHoldertDirective],
    providers: [],
    pipes: [TranslatePipe, SimpleSearch],
    styles: [`

.container {
  position: fixed;
  left: 5vw;
  top: 15vw;
  overflow: hidden;
  width:90vw;
  height: 50vw;
  z-index: 10;
}
.closeMe {
  position: fixed;
  left: 0;
  top: 0;
  background-color: #3f414a;
  opacity: 0.9;
  width: 100vw;
  height: 100vh;
  z-index: 9;
}
.plusBar {
  position: absolute;
  right: 5vw;
  top: 0;
  width: 15vw;
  height: 15vw;
  background: url('./src/img/newPlus.png') no-repeat center center;
  background-size: cover;
  overflow: hidden;
  z-index: 10;
  transition: 0.3s;
}
.plusBarAnime {
  transition: transform 0.5s;
  transform: rotate(135deg);
  -ms-transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}
.list {
  width: 90vw;
  height: 80vw;
  overflow-y: scroll;
}
.listItem {
  float:left;
  margin-bottom: 2vw;
  height: 12vw;
  width: 55vw;
  line-height: 12vw;
  box-sizing: border-box;
  background-color: #3f414a;
  color: #ff9d2d;
  font-size: 6vw;
  text-align: center;
  border-radius: 2vw;
  line-height: 12vw;

}
.foodListMove{
  position: relative;
  top:30vh;
}
.food_form {
  position: relative;
  margin: 5vw;
  height: 10vw;
}
.food_inputFood {
  position: absolute;
  height: 10vw;
  width: 60vw;
  left: 20vw;
  background-color: rgba(49, 51, 61, 0.3);
  box-sizing: border-box;
  color: red;
  border: 1.5vw solid red;
  border-radius: 2vw;
}
.food_inputCalories {
  position: absolute;
  height: 10vw;
  width: 16vw;
  left: 50vw;
  top:11vw;
  background-color: rgba(49, 51, 61, 0.3);
  box-sizing: border-box;
  color: red;
  border: 1.5vw solid red;
  border-radius: 2vw;
}
.food_inputProtein {
  position: absolute;
  height: 10vw;
  width: 16vw;
  left: 50vw;
  top:22vw;
  background-color: rgba(49, 51, 61, 0.3);
  box-sizing: border-box;
  color: red;
  border: 1.5vw solid red;
  border-radius: 2vw;
}
.food_inputFat {
  position: absolute;
  height: 10vw;
  width: 16vw;
  left: 50vw;
  top:33vw;
  background-color: rgba(49, 51, 61, 0.3);
  box-sizing: border-box;
  color: red;
  border: 1.5vw solid red;
  border-radius: 2vw;
}
.food_inputCarbohydrates {
  position: absolute;
  height: 10vw;
  width: 16vw;
  left: 50vw;
  top:44vw;
  background-color: rgba(49, 51, 61, 0.3);
  box-sizing: border-box;
  color: red;
  border: 1.5vw solid red;
  border-radius: 2vw;
}
.food_inputButton_off {
  position: absolute;
  top: 28vh;
  right: 0;
  height: 10vw;
  width: 12vw;
  background: url('./src/img/check-off.png') no-repeat center center;
  background-size: cover;
  box-sizing: border-box;
  color: red;
  border: 1.5vw solid red;
  border-radius: 2vw;
}
.food_inputButton_on {
  position: absolute;
  top:28vh;
  right: 0;
  height: 10vw;
  width: 12vw;
  background: url('./src/img/check-on.png') no-repeat center center;
  background-size: cover;
  box-sizing: border-box;
  color: red;
  border: 1.5vw solid red;
  border-radius: 2vw;
}
.createExercise{
  width: 100%;
  height: 100%
}
.sport_inputSport{
  position: absolute;
  height: 10vw;
  width: 55vw;
  left: 11vw;
  background-color: rgba(49, 51, 61, 0.3);
  box-sizing: border-box;
  color: red;
  border: 1.5vw solid red;
  border-radius: 2vw;
}
.sportBtnMove{
  top:0;
  right:0;
}
.plusBar_menuButtons {
  position: absolute;
  height: 50vw;
  width: 90vw;
  right: 0;
  color: #ff9d2d;
  font-size: 7vw;
  overflow: hidden;
}
.plusBar_createFoodButton {
  position: absolute;
  right: 0;
  width: 15vw;
  height: 15vw;
  background: url('./src/img/addfood.png') no-repeat center center;
  background-size: cover;
  overflow: hidden;
}
.plusBar_createMenuButton {
  position: absolute;
  right: 0;
  width: 15vw;
  height: 15vw;
  background: url('./src/img/createMenuButton.png') no-repeat center center;
  background-size: cover;
  overflow: hidden;
}
.plusBar_pasteMenuButton {
  position: absolute;
  right: 0;
  width: 15vw;
  height: 15vw;
  background: url('./src/img/pasteMenuButton.png') no-repeat center center;
  background-size: cover;
  overflow: hidden;
}
.plusBar_listName {
  position: relative;
  right: 1vw;
  margin-right: 15vw;
  text-align: right;
  height: 15vw;
  width: 90vw;
  line-height: 15vw;
  margin-bottom: 1vw;

}
.plusBar_list1Btn{
  position: absolute;
  right:0;
}
.plusBar_list2Btn{
  position: absolute;
  right:0;
  top: 30%;
  animation:  mainList2Btn 300ms linear;
}
.plusBar_list3Btn{
  position: absolute;
  top: 60%;
  right:0;
  animation:  mainList3Btn 300ms linear;
}
@keyframes mainList2Btn {
    0%   {top:0px;}
    100% {top:30%;}
}
@keyframes mainList3Btn {
    0%   {top:0;}
    100% {top:60%;}
}
    `],
    template: `
<div class="plusBar" [ngClass]="{plusBarAnime: isOpen}"(click)="toggle()"></div>
<div *ngIf="isOpen" class="closeMe" (click)="toggle()"></div>
<div class="container" *ngIf="isOpen && (iAm === 'food')">

  <div *ngIf="listOptions" class="plusBar_menuButtons">
    <div class="plusBar_list1Btn" (click)="createFoodToggle()">
      <div class="plusBar_createFoodButton"></div>
      <div class="plusBar_listName">
        {{'create.food' | translate}}
      </div>
    </div>
    <div class="plusBar_list2Btn" (click)="createMenuToggle()">
      <div class="plusBar_createMenuButton"></div>
      <div class="plusBar_listName">
        {{'create.menu' | translate}}
      </div>
    </div>
    <div class="plusBar_list3Btn" (click)="pasteMenuToggle()">
      <div class="plusBar_pasteMenuButton"></div>
      <div class="plusBar_listName">
        {{'paste.menu' | translate}}
      </div>
      </div>
  </div>
  <div *ngIf="createFood">
    <form class="food_form" (ngSubmit)="onSubmit(foodForm)" #foodForm="ngForm">

      <label style="left:0; border:none;" class="food_inputFood" for="name">foodName</label>
      <input class="food_inputFood" required [(ngModel)]="model.name" ngControl="name" #name="ngForm">

      <label style="left:0; border:none;" class="food_inputCalories" for="calories">calories</label>
      <input type="number" min="0" class="food_inputCalories" required [(ngModel)]="model.calories" ngControl="calories" #calories="ngForm">

      <label style="left:0; border:none;" class="food_inputProtein" for="protein">protein</label>
      <input type="number" min="0" class="food_inputProtein" required [(ngModel)]="model.protein" ngControl="protein" #protein="ngForm">

      <label style="left:0; border:none;" class="food_inputFat" for="fat">fat</label>
      <input type="number" min="0" class="food_inputFat" required [(ngModel)]="model.fat" ngControl="fat" #fat="ngForm">

      <label style="left:0; border:none;" class="food_inputCarbohydrates" for="carbohydrates">carbohydrates</label>
      <input type="number" min="0" class="food_inputCarbohydrates" required [(ngModel)]="model.carbohydrates" ngControl="carbohydrates" #carbohydrates="ngForm">

      <button type="submit" [ngClass]="{food_inputButton_off: !checkForm(name.value), food_inputButton_on: checkForm(name.value) }" [disabled]="!checkForm(name.value)"></button>

    </form>
    <div class="list foodListMove">
      <div *ngFor="#item of customFood">
        <div class="listItem">{{item.name[language]}} </div>
      </div>
    </div>
  </div>
  <div *ngIf="createMenu" >

  <form class="food_form" (ngSubmit)="onSubmitMenu(foodForm)" #foodForm="ngForm">

    <label for="menuName"></label>
    <input class="" required [placeholder]="('menuName'|translate) + '...'" [(ngModel)]="modelMenu.menuName" ngControl="menuName" #menuName="ngForm" #menuNameMain (input)="searchMenu(menuNameMain.value)">

    <label for="foodName"></label>
    <input class="" required [placeholder]="('search'|translate) + '...'" [(ngModel)]="modelMenu.name" ngControl="name" #name="ngForm" (input)="pickFoodMenuInput(modelMenu.name)">

    <label for="foodWeight"></label>
    <input type="number" [min]="1" [placeholder]="('weight'|translate) + '...'" class="" required [(ngModel)]="modelMenu.weight" ngControl="weight" #weight="ngForm">

    <button #subBtn type="submit" [ngClass]="{food_inputButton_off: subBtn['disabled'], food_inputButton_on: !subBtn['disabled']}"  [disabled]="!foodForm.form.valid || !correctFood"></button>

    <div *ngIf="(name.valid && !correctFood)" class="food_serchContainer">
      <div class="food_searchListItem" *ngFor="#item of foodContainer  | simpleSearch :'name':language : name.value; #i = index;" (click)="pickFoodMenu(item);">
        {{item?.name[language]}}
      </div>
    </div>
  </form>
  <div class="list foodListMove">
    <div *ngFor="#item of foodMenuContainer; #i = index" fmSwipe (fmSwipeLeft)="removeFoodMenu(modelMenu.menuName,i)" (fmSwipeRight)="removeFoodMenu(modelMenu.menuName, i)">
      <div class="listItem">{{item?.name[language]}} </div>
      <input class="food_listWeight" type="number" min="0" required [(ngModel)]="item.weight" (blur)="changeFoodWeight(modelMenu.menuName, i, item.weight)">
    </div>
  </div>
  <div *ngIf="createMenu">
    {{'create.menu' | translate}}
  </div>

  <div *ngIf="pasteMenu">
    {{'paste.menu' | translate}}
  </div>
</div>
</div>

<!-- тут начинается спорт -->

<div class="container" *ngIf="isOpen && (iAm === 'sport')">
  <div *ngIf="listOptions">
    <div (click)="createExerciseToggle()">create exercise</div>
    <br>
    <div (click)="createTrainToggle()">create train</div>
    <br>
    <div (click)="pasteTrainToggle()">paste train</div>
    <br>
  </div>


  <div *ngIf="createExercise">
    <form class="food_form" (ngSubmit)="onSubmitSport(sportForm)" #sportForm="ngForm">

      <label style="left:0; border:none;width:10vw;" class="sport_inputSport" for="name">name</label>
      <input class="sport_inputSport" required [(ngModel)]="modelSport.name" ngControl="name" #name="ngForm">

      <button type="submit" class="sportBtnMove" [ngClass]="{food_inputButton_off: !checkForm(name.value), food_inputButton_on: checkForm(name.value) }" [disabled]="!checkForm(name.value)"></button>

    </form>
    <div class="list">
      <div *ngFor="#item of customSport">
        <div class="listItem">{{item.name.ru}} </div>
      </div>
    </div>
  </div>

  <div *ngIf="createTrain">
    create train
  </div>

  <div *ngIf="pasteTrain">
    paste train
  </div>
  <div *ngIf="isOpen" class="closeMe" (click)="toggle()"></div>
</div>
    `
})

export class PlusComponent implements OnInit {
    @Input() isOpen: boolean = false;
    @Input() iAm: string;
    @Output() isOpenChange = new EventEmitter();
    private language: string = 'en';

    private listOptions: boolean = false;

    private createFood: boolean = false;
    private createMenu: boolean = false;
    private pasteMenu: boolean = false;

    private createExercise: boolean = false;
    private createTrain: boolean = false;
    private pasteTrain: boolean = false;

    private customFood;
    private customSport;
    private model: Object = {};
    private modelSport: Object = {};

    private foodContainer: Food[];

    private pickedFoodMenu: Food = <Food>{};

    private foodMenuContainer: Array<Food> = [];
    private modelMenu: Object = {};
    private correctFood: boolean = false;

    constructor(private _foodServe: FoodService, private _sportServe: SportService, private _translateService: TranslateService, private _userServe: UserService) { }

    ngOnInit() {
        this.language = this._userServe.getLanguage();

        this.customFood = this._foodServe.getUserFood();
        this.refreshModel();
        this.customSport = this._sportServe.getUserSport();
        this.foodContainer = this._foodServe.getAllFood();
    }

    checkForm(value) {
        if (value) {
                return true
        }
        return false;
    }
    //4menu
    searchMenu(name: string) {
        if (name) {
            this.foodMenuContainer = [];
            if (this._foodServe.getUserMenu(name)) {
                this.foodMenuContainer = this._foodServe.getUserMenu(name)['food'];
                console.log(this.foodMenuContainer);
            }
        }
    }
    pickFoodMenuInput(name) {
        console.log(name);
        for (let obj of this.foodContainer) {
            if (obj['name'][this.language] === name) {
                return this.pickFoodMenu(obj);
            } else {
                this.correctFood = false;
                console.log(`unCorrectFood`);
            }
        }
    }

    pickFoodMenu(food: Food) {
        this.pickedFoodMenu = Object.assign({}, food);
        setTimeout(() => this.modelMenu['name'] = food.name[this.language], 0)
        this.correctFood = true;
    }

    onSubmitMenu(food) {

        this.pickedFoodMenu['weight'] = food.value.weight;
        this.pickedFoodMenu['picked'] = false;
        this.foodMenuContainer.unshift(this.pickedFoodMenu)
        this._foodServe.setUserMenu(food.value.menuName, this.foodMenuContainer);

        this.pickedFoodMenu = <Food>{};

        for (let item in this.modelMenu) {
            if (!(item === 'menuName')) {
                console.log(item);
                this.modelMenu[item] = undefined;
            }
        }
        this.searchMenu(this.modelMenu['menuName'])
        this.correctFood = false;

    }
    changeFoodWeight(menuName, item, weight){
      this._foodServe.changeFoodInMenu(menuName, item,weight);
    }
    removeFoodMenu(menuName, item) {
        this._foodServe.removeFoodFromMenu(menuName, item);
    }
    //4 food
    onSubmit(food) {
        if (food.value.name.trim()) {
            let name = food.value.name.trim();
            food.value['name'] = {};
            for (let key in this._translateService.getSupportLanguages()) {
                food.value['name'][key] = name;
            }
            food.value['custom'] = true;
            this.setFood(food.value);
            this.refreshModel();
        }
    }

    refreshModel() {
        this.model['name'] = '';
        this.model['calories'] = 0;
        this.model['protein'] = 0;
        this.model['fat'] = 0;
        this.model['carbohydrates'] = 0;
    }

    setFood(food: Food) {
        this._foodServe.setUserFood(food);
        this.customFood = this._foodServe.getUserFood();
    }

    //4 sport
    onSubmitSport(sport) {
        if (sport.value.name.trim()) {
            let name = sport.value.name.trim();
            sport.value['name'] = {};
            for (let key in this._translateService.getSupportLanguages()) {
                sport.value['name'][key] = name;
            }
            sport.value['custom'] = true;


            this.setSport(sport.value);
            this.modelSport['name'] = '';

        }
    }
    setSport(sport: Sport) {
        this._sportServe.setUserSport(sport);
        this.customSport = this._sportServe.getUserSport();
    }
    toggle() {
        this.isOpen = !this.isOpen;
        this.listOptions = true;

        this.createFood = false;
        this.createMenu = false;
        this.pasteMenu = false;

        this.createExercise = false;
        this.createTrain = false;
        this.pasteTrain = false;

        this.isOpenChange.emit(this.isOpen);
    }

    createFoodToggle() {
        this.createFood = !this.createFood
        this.listOptions = !this.listOptions


    }
    createMenuToggle() {
        this.createMenu = !this.createMenu
        this.listOptions = !this.listOptions

    }
    pasteMenuToggle() {
        this.pasteMenu = !this.pasteMenu
        this.listOptions = !this.listOptions

    }

    createExerciseToggle() {
        this.createExercise = !this.createExercise
        this.listOptions = !this.listOptions


    }
    createTrainToggle() {
        this.createTrain = !this.createTrain
        this.listOptions = !this.listOptions

    }
    pasteTrainToggle() {
        this.pasteTrain = !this.pasteTrain
        this.listOptions = !this.listOptions

    }

}
