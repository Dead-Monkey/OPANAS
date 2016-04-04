import {Component, OnInit, Input, Output, EventEmitter} from 'angular2/core';
import {FoodService, Food, Menu} from '../../services/food/food.service';
import {SportService, Sport} from '../../services/sport/sport.service';
import {SimpleSearch} from '../../shared/pipes/simple-search/simple-search.pipe';
import {TranslateService, TranslatePipe} from '../../shared/services/translate/translate.service';
import {UserService} from '../../services/user/user.service';
import {SwipeHoldertDirective} from '../../shared/directives/swipe-holder/swipe-holder.directive';
import {SwipeDeleteSideDirective} from '../../shared/directives/swipe-delete-side/swipe-delete-side.directive';
import {CalendarService, Day} from '../../services/calenadar/calendar.service';

@Component({
    selector: 'op-plus',
    directives: [SwipeHoldertDirective, SwipeDeleteSideDirective],
    providers: [],
    pipes: [TranslatePipe, SimpleSearch],
    styles: [`

.container {
  position: fixed;
  top: 16vw;
  overflow: hidden;
  width:100vw;
  height: 50vw;
  z-index: 10;
}
.closeMe {
  position: fixed;
  left: 0;
  top: 0;
  background-color: #3f414a;
  opacity: 0.95;
  width: 100vw;
  height: 100vh;
  z-index: 9;
}
.plusBar {
  position: absolute;
  right: 5vw;
  top: 1vw;
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
  width: 80vw;
  line-height: 11vw;
  box-sizing: border-box;
  background-color: #3f414a;
  color: #ff9d2d;
  font-size: 6vw;
  text-align: center;
  border-radius: 7px;
  border: 2px solid #ff9d2d;
}
.foodListMove{
  position: absolute;;
  width: 100vw;
  padding-left: 10vw;
  top: 80vw;
  overflow-y: scroll;
  overflow-x: hidden;
}
.listItemName {
  width: 80vw;
  float:left;
  height: 10vw;
  text-align: center;
  font-size: 6vw;
  color: #ff9d2d;
  font-weight: bold;
  margin-bottom: 2vw;
}
.food_form {
  position: relative;
  margin: 5vw;
  height: 10vw;
}
.food_inputFoodName {
  font-size: 6.5vw;
  width: 40vw;
  height: 10vw;
  float: left;
  margin-left: 5vw;
  margin-bottom: 2vw;
  color: #ff9d2d;
  line-height: 10vw;
  font-weight: bold;
}
.food_inputFood {
  position: relative;
  float: left;
  height: 10vw;
  width: 40vw;
  background-color: rgba(49, 51, 61, 0.3);
  box-sizing: border-box;
  border: 2px solid #0C1017;
  border-radius: 7px;
  font-size: 7vw;
  color: #ff9d2d;
  margin-bottom: 2vw;
}
.food_inputFoodNameNutritions {
  position: relative;
  font-size: 6vw;
  width: 40vw;
  height: 9vw;
  float: left;
  margin-left: 5vw;
  margin-bottom: 2vw;
  color: #ff9d2d;
  line-height: 8vw;
}
.food_inputFoodNutritions {
  position: relative;
  float: left;
  height: 9vw;
  width: 20vw;
  background-color: rgba(49, 51, 61, 0.3);
  box-sizing: border-box;
  border: 2px solid #0C1017;
  border-radius: 7px;
  font-size: 6vw;
  color: #ff9d2d;
  margin-bottom: 2vw;
  line-height: 8vw;
}
.food_inputButtonName {
  margin-top: 2vw;
  font-size: 6.5vw;
}
.food_inputButton_off {
  position: relative;
  float: left;
  height: 12vw;
  width: 12vw;
  background: url('./src/img/check-off.png') no-repeat center center;
  background-size: cover;
  box-sizing: border-box;
  border: 2px solid #0C1017;
  border-radius: 7px;
}
.food_inputButton_on {
  position: relative;
  float: left;
  height: 12vw;
  width: 12vw;
  background: url('./src/img/check-on.png') no-repeat center center;
  background-size: cover;
  box-sizing: border-box;
  border: 2px solid #0C1017;
  border-radius: 7px;
}
.sport_inputButton_off {
  position: relative;
  float: right;
  height: 12vw;
  width: 12vw;
  background: url('./src/img/check-off.png') no-repeat center center;
  background-size: cover;
  box-sizing: border-box;
  border: 2px solid #0C1017;
  border-radius: 7px;
}

.sport_inputButton_on {
  position: relative;
  float: right;
  height: 12vw;
  width: 12vw;
  background: url('./src/img/check-on.png') no-repeat center center;
  background-size: cover;
  box-sizing: border-box;
  border: 2px solid #0C1017;
  border-radius: 7px;
}
.sport_inputSportName {
  font-size: 6.5vw;
  width: 40vw;
  height: 12vw;
  float: left;
  margin-left: 5vw;
  margin-bottom: 2vw;
  color: #ff9d2d;
  line-height: 10vw;
  font-weight: bold;
}
.sport_inputSport{
  position: relative;
  float: left;
  height: 12vw;
  width: 40vw;
  background-color: rgba(49, 51, 61, 0.3);
  box-sizing: border-box;
  border: 2px solid #0C1017;
  border-radius: 7px;
  font-size: 7vw;
  color: #ff9d2d;
  margin-bottom: 2vw;
}
.sportListMove {
  position: absolute;;
  width: 100vw;
  top: 40vw;
  padding-left: 10vw;
  overflow-y: scroll;
  overflow-x: hidden;
}

.createExercise{
  width: 100%;
  height: 100%
}
.sportBtnMove{
  top:0;
  right:33vw;
}
.plusBar_menuButtons {
  position: absolute;
  height: 50vw;
  width: 90vw;
  right: 5vw;
  color: #ff9d2d;
  font-size: 5.5vw;
  overflow: hidden;
}
.plusBar_listItem {
  width: 15vw;
  height: 15vw;
  position: absolute;
  right: 0;
  overflow: hidden;
}
.plusBar_createFoodButton {
  background: url('./src/img/addfood.png') no-repeat center center;
  background-size: cover;
}
.plusBar_createMenuButton {
  background: url('./src/img/createMenuButton.png') no-repeat center center;
  background-size: cover;
}
.plusBar_pasteMenuButton {
  background: url('./src/img/pasteMenuButton.png') no-repeat center center;
  background-size: cover;
}
.plusBar_createExercise {
  background: url('./src/img/exercise.png') no-repeat center center;
  background-size: cover;
}
.plusBar_createTraining{
  background: url('./src/img/trainingPlan.png') no-repeat center center;
  background-size: cover;
}
.plusBar_listName {
  position: absolute;
  right: 16vw;
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
.containerFull {
  height: 165vw;
  width: 100vw;
}
.listItemContainer{
  position:relative;
  min-height: 16vw;
  width:90vw;
  overflow:hidden;
}

/*Тут начинаются классы для кнопки Create Menu*/

.create_inputFood {
  position: absolute;
  height: 10vw;
  width: 52vw;
  background-color: rgba(49, 51, 61, 0.3);
  box-sizing: border-box;
  border: 2px solid #0C1017;
  border-radius: 7px;
  font-size: 6vw;
  color: #D0D9D9;
  top: 12vw;
  left: 5vw;
}
.create_inputWeight {
  position: absolute;
  height: 10vw;
  width: 16vw;
  left: 58vw;
  top: 12vw;
  background-color: rgba(49, 51, 61, 0.3);
  box-sizing: border-box;
  border: 2px solid #0C1017;
  border-radius: 7px;
  font-size: 6vw;
  color: #D0D9D9;
}
.create_inputButton_off {
  position: absolute;
  right: 5vw;
  height: 10vw;
  width: 10vw;
  background: url('./src/img/check-off.png') no-repeat center center;
  background-size: cover;
  box-sizing: border-box;
  color: #0d0e15;
  border: 2px solid #0C1017;
  border-radius: 7px;
  top: 12vw;
}
.create_inputButton_on {
  position: absolute;
  right: 5vw;
  height: 10vw;
  width: 10vw;
  background: url('./src/img/check-on.png') no-repeat center center;
  background-size: cover;
  box-sizing: border-box;
  color: #0d0e15;
  border: 2px solid #0C1017;
  border-radius: 7px;
  top: 12vw;
}
.create_serchContainer {
  position: absolute;
  background-color: #0C1017;
  border-bottom: 2px solid #0C1017;
  box-sizing: border-box;
  width: 52vw;
  max-height: 30vh;
  padding-left: 1vw;
  padding-top: 1vw;
  left: 5vw;
  top: 22vw;
  overflow-y: scroll;
  border-radius: 7px;
  z-index: 3;
}
.create_searchListItem {
  float: left;
  margin-bottom: 1vw;
  min-height: 12vw;
  width: 50vw;
  line-height: 12vw;
  box-sizing: border-box;
  background-color: #3f414a;
  color: #ff9d2d;
  font-size: 6vw;
  text-align: center;
  border-radius: 7px;
}
.create_list {
  position: relative;
  margin-top: 3vw;
  padding-left: 5vw;
  width: 95vw;
  bottom: 1px;
  overflow-y: scroll;
  overflow-x: hidden;
}
.create_listItem {
  float: left;
  margin-right: 1vw;
  margin-top: 2vw;
  min-height: 10vw;
  width: 65vw;
  box-sizing: border-box;
  background-color: #3f414a;
  color: #ff9d2d;
  font-size: 6vw;
  text-align: center;
  border-radius: 7px;
  line-height: 10vw;
  border: 2px solid #ff9d2d;
}
.create_listWeight {
  float: left;
  margin-top: 2vw;
  margin-right: 2vw;
  height: 11vw;
  width: 15vw;
  line-height: 10vw;
  background-color: #3f414a;
  box-sizing: border-box;
  color: #ff9d2d;
  font-size: 6vw;
  border-radius: 7px;
  text-align: center;
  border: 2px solid #ff9d2d;
}
.create_form {
  position: relative;
  margin: 5vw;
  height: 20vw;
}
.createListMove {
  position: absolute;
  width: 100vw;
  padding-left: 10vw;
  top: 40vw;
  overflow-y: scroll;
  overflow-x: hidden;
}
.create_listItemName {
  width: 80vw;
  float:left;
  height: 10vw;
  text-align: center;
  font-size: 6vw;
  color: #ff9d2d;
  font-weight: bold;
  margin-left: 10vw;
}
.pasteListMove {
  position: relative;
  width: 100vw;
  padding-left: 10vw;
  overflow-y: scroll;
  overflow-x: hidden;
}
.createTrain_inputSport {
  position: relative;
float: left;
height: 10vw;
width: 68vw;
background-color: rgba(49, 51, 61, 0.3);
box-sizing: border-box;
border: 2px solid #0C1017;
border-radius: 7px;
font-size: 7vw;
color: #ff9d2d;
margin-left: 5vw;
margin-bottom: 2vw;
}

    `],
    template: `

<!-- Плюсбар в Food -->
<div class="plusBar" [ngClass]="{plusBarAnime: isOpen}" (click)="toggle()"></div>
<div *ngIf="isOpen" class="closeMe" (click)="toggle()"></div>

<div class="container" *ngIf="isOpen && (iAm === 'food')" [ngClass]="{containerFull: createFood || createMenu || pasteMenu}">
  <div *ngIf="listOptions" class="plusBar_menuButtons">

    <div class="plusBar_list1Btn" (click)="createFoodToggle()">
      <div class="plusBar_listItem plusBar_createFoodButton"></div>
      <div class="plusBar_listName">
        {{'create.food' | translate}}
      </div>
    </div>

    <div class="plusBar_list2Btn" (click)="createMenuToggle()">
      <div class="plusBar_listItem plusBar_createMenuButton"></div>
      <div class="plusBar_listName">
        {{'create.menu' | translate}}
      </div>
    </div>

    <div class="plusBar_list3Btn" (click)="pasteMenuToggle()">
      <div class=" plusBar_listItem plusBar_pasteMenuButton"></div>
      <div class="plusBar_listName">
        {{'choose.menu' | translate}}
      </div>
    </div>
  </div>

  <!-- Добавить блюдо -->
  <div *ngIf="createFood">
    <form class="food_form">
      <div class="food_inputFoodName">{{'meals.name' | translate}}</div>
      <input class="food_inputFood" required [(ngModel)]="model.name" #name>

      <div class="food_inputFoodNameNutritions">{{'calories' | translate}}</div>
      <input class="food_inputFoodNutritions" type="number" min="0" required [(ngModel)]="model.calories">

      <div class="food_inputFoodNameNutritions">{{'protein' | translate}}</div>
      <input class="food_inputFoodNutritions" type="number" min="0" required [(ngModel)]="model.protein">

      <div class="food_inputFoodNameNutritions">{{'fat' | translate}}</div>
      <input class="food_inputFoodNutritions" type="number" min="0" required [(ngModel)]="model.fat">

      <div class="food_inputFoodNameNutritions">{{'carbohydrates' | translate}}</div>
      <input class="food_inputFoodNutritions" type="number" min="0" required [(ngModel)]="model.carbohydrates">

      <div class="food_inputFoodNameNutritions food_inputButtonName ">{{'done' | translate}}</div>
      <button type="submit" [ngClass]="{food_inputButton_off: !checkForm(name.value), food_inputButton_on: checkForm(name.value) }" [disabled]="!checkForm(name.value)" (click)="onSubmit(name)"></button>
    </form>
    <div class="list foodListMove">
      <div class="listItemName">{{'added.meals' | translate}}</div>
      <div *ngFor="#item of customFood" class="listItemContainer" (fmSwipeDeleteSide)="removeFood(item)">
        <div class="listItem">{{item.name[language]}} </div>
      </div>
    </div>
  </div>

  <!-- Добавить новое меню -->
  <div *ngIf="createMenu">

    <form class="create_form" (ngSubmit)="onSubmitMenu()">

      <div class="food_inputFoodName">{{'meals.name' | translate}}</div>
      <input class="food_inputFood" required [placeholder]="('menuName'|translate) + '...'" [(ngModel)]="modelMenu.menuName" #menuName (input)="searchMenu(menuName.value)">
      <label for="foodName"></label>
      <input class="create_inputFood" required [placeholder]="('search'|translate) + '...'" [(ngModel)]="modelMenu.name" #name (input)="pickFoodMenuInput(name.value)">

      <label for="foodWeight"></label>
      <input class="create_inputWeight" type="number" [min]="1" [placeholder]="('weight'|translate) + '...'" required [(ngModel)]="modelMenu.weight" #weight>

      <button #subBtn type="submit" [ngClass]="{create_inputButton_off: subBtn['disabled'], create_inputButton_on: !subBtn['disabled']}" [disabled]="!correctFood || !weight.value || !menuName.value"></button>
      <div *ngIf="name.value && !correctFood" class="create_serchContainer">
        <div class="create_searchListItem" *ngFor="#item of foodContainer  | simpleSearch :'name':language : name.value; #i = index;" (click)="pickFoodMenu(item);">
          {{item?.name[language]}}
        </div>
      </div>
    </form>
    <div class="list createListMove">
      <div *ngFor="#item of foodMenuContainer; #i = index" (fmSwipeDeleteSide)="removeFoodMenu(modelMenu.menuName,i)">
        <div class="create_listItem">{{item?.name[language]}} </div>
        <input class="create_listWeight" type="number" min="0" required [(ngModel)]="item.weight" (blur)="changeFoodWeight(modelMenu.menuName, i, item.weight)">
      </div>
    </div>
    <div *ngIf="createMenu" class="create_listItemName">
      {{modelMenu.menuName}}
    </div>
  </div>

  <!-- Список созданных меню -->
  <div *ngIf="pasteMenu">

    <div class="pasteListMove">
      <div class="listItemName">{{'choose.menu' | translate}}</div>
    </div>
    <div *ngFor="#item of allMenus" (fmSwipeDeleteSide)="removeMenu(item['name'])">
      <div class="create_listItemName">
        {{item['name']}} <span (click)="viewMenuDetail(item)">VIEW</span> <span (click)="pasteMenuToDay(item)">GO</span>
      </div>
    </div>
  </div>


</div>

<!-- ******************** -->
<!-- тут начинается спорт -->
<!-- ******************** -->


<!-- Плюсбар в Food -->
<div class="container" *ngIf="isOpen && (iAm === 'sport')" [ngClass]="{containerFull: createExercise || createTrain}">
  <div *ngIf="listOptions" class="plusBar_menuButtons">

    <div class="plusBar_list1Btn" (click)="createExerciseToggle()">
      <div class="plusBar_listItem plusBar_createExercise "></div>
      <div class="plusBar_listName">
        {{'create.exercise' | translate}}
      </div>
    </div>

    <div class="plusBar_list2Btn" (click)="createTrainToggle()">
      <div class="plusBar_listItem plusBar_createTraining"></div>
      <div class="plusBar_listName ">
        {{'create.training.plan' | translate}}
      </div>
    </div>

    <div class="plusBar_list3Btn" (click)="pasteTrainToggle()">
      <div class="plusBar_listItem plusBar_pasteMenuButton"></div>
      <div class="plusBar_listName">
        paste train
      </div>
    </div>
  </div>

  <!-- Создать упражнение -->
  <div *ngIf="createExercise">

    <form class="food_form">
      <label class="sport_inputSportName" for="name">{{'name' | translate}}:</label>
      <input class="sport_inputSport" required [(ngModel)]="modelSport.name" #name>
      <div class="food_inputFoodNameNutritions food_inputButtonName ">{{'done' | translate}}</div>
      <button type="submit" class="sportBtnMove" [ngClass]="{sport_inputButton_off: !checkForm(name.value), sport_inputButton_on: checkForm(name.value) }" [disabled]="!checkForm(name.value)" (touchend)="onSubmitSport(name)"></button>
    </form>

    <div class="sportListMove">
      <div class="listItemName">{{'added.exercise' | translate}}</div>
      <div *ngFor="#item of customSport" class="listItemContainer" (fmSwipeDeleteSide)="removeSport(item)">
        <div class="listItem">{{item.name.ru}} </div>
      </div>
    </div>
  </div>

  <!-- создать тренировку -->
  <div *ngIf="createTrain">

    <form class="create_form" (ngSubmit)="onSubmitTrain()">

      <div class="food_inputFoodName">Traine name</div>
      <input class="food_inputFood" required [placeholder]="('menuName'|translate) + '...'" [(ngModel)]="modelTrain.trainName" #trainName (input)="searchTrain(trainName.value)">


      <label for="sportName"></label>
      <input class="createTrain_inputSport" required [placeholder]="('search'|translate) + '...'" [(ngModel)]="modelTrain.name" #name (input)="pickSportTrainInput(name.value)">

      <button #subBtn type="submit" [ngClass]="{create_inputButton_off: subBtn['disabled'], create_inputButton_on: !subBtn['disabled']}" [disabled]="!correctSport || !trainName.value"></button>
      <div *ngIf="name.value && !correctSport" class="create_serchContainer">
        <div class="create_searchListItem" *ngFor="#item of sportContainer  | simpleSearch :'name':language : name.value; #i = index;" (click)="pickSportTrain(item)">
          {{item?.name[language]}}
        </div>
      </div>
    </form>


    <div class="list createListMove">
      <div *ngFor="#item of sportTrainContainer; #i = index" (fmSwipeDeleteSide)="removeSportTrain(modelTrain.trainName,i)">
        <div class="create_listItem">{{item?.name[language]}} </div>
      </div>
    </div>

  </div>


  <!-- выбрать тренировку-->
  <div *ngIf="pasteTrain">
    <div class="pasteListMove">
      <div class="listItemName">{{'choose.menu' | translate}}</div>
    </div>
    <div *ngFor="#item of allTrains" (fmSwipeDeleteSide)="removeTrain(item['name'])">
      <div class="create_listItemName">
        {{item['name']}} <span (click)="viewTrainDetail(item)">VIEW</span> <span (click)="pasteTrainToDay(item)">GO</span>
      </div>
    </div>
  </div>
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
    private sportContainer: Sport[]

    private pickedFoodMenu: Food = <Food>{};
    private pickedSportTrain: Sport = <Sport>{};

    private allMenus = []
    private allTrains = []
    private foodMenuContainer: Array<Food> = [];
    private sportTrainContainer: Array<Sport> = []
    private modelMenu: Object = {};
    private modelTrain: Object = {};
    private correctFood: boolean = false;
    private correctSport: boolean = false;

    constructor(private _foodServe: FoodService, private _sportServe: SportService, private _translateService: TranslateService, private _userServe: UserService, private _calendarServe: CalendarService) { }

    ngOnInit() {
        this.language = this._userServe.getLanguage();

        this.customFood = this._foodServe.getUserFood();
        this.refreshModel();
        this.foodContainer = this._foodServe.getAllFood();
        this.allMenus = this._foodServe.getUserMenuAll();
        this.allTrains = this._sportServe.getUserTrainAll();
        console.log(this.allTrains);
        this.sportContainer = this._sportServe.getAllSport();
        this.customSport = this._sportServe.getUserSport();
    }

    checkForm(value) {
        if (value) {
            return true
        }
        return false;
    }
    //train
    searchTrain(name: string) {
        if (name) {
            this.sportTrainContainer = [];
            if (this._sportServe.getUserTrain(name)) {
                this.sportTrainContainer = this._sportServe.getUserTrain(name)['sport'];
            }
        }
    }
    pickSportTrainInput(name) {
        for (let obj of this.sportContainer) {
            if (obj['name'][this.language] === name) {
                return this.pickSportTrain(obj);
            } else {
                this.correctSport = false;
            }
        }
    }
    pickSportTrain(sport) {
        this.pickedSportTrain = Object.assign({}, sport);
        setTimeout(() => this.modelTrain['name'] = sport.name[this.language], 0)
        this.correctSport = true;

    }
    onSubmitTrain() {
        this.pickedSportTrain['picked'] = false;
        this.sportTrainContainer.unshift(this.pickedSportTrain)
        this._sportServe.setUserTrain(this.modelTrain['trainName'], this.sportTrainContainer);

        this.pickedSportTrain = <Sport>{};

        for (let item in this.modelTrain) {
            if (!(item === 'trainName')) {
                this.modelTrain[item] = undefined;
            }
        }
        this.searchTrain(this.modelTrain['trainName'])
        this.correctSport = false;

    }
    removeSportTrain(trainName, item) {
        this._sportServe.removeSportFromTrain(trainName, item);

    }
    removeTrain(name) {
        this._sportServe.removeTrain(name)
    }

    pasteTrainToDay(item) {
        for (let variable of item['sport']) {
            this._calendarServe.setDailySport(variable);
        }
    }
    viewTrainDetail(item) {
        this.pasteTrainToggle();
        this.createTrainToggle()
        this.searchTrain(item['name'])
        this.modelTrain['trainName'] = item['name']

    }
    //4menu
    searchMenu(name: string) {
        if (name) {
            this.foodMenuContainer = [];
            if (this._foodServe.getUserMenu(name)) {
                this.foodMenuContainer = this._foodServe.getUserMenu(name)['food'];
            }
        }
    }
    pickFoodMenuInput(name) {
        for (let obj of this.foodContainer) {
            if (obj['name'][this.language] === name) {
                return this.pickFoodMenu(obj);
            } else {
                this.correctFood = false;
            }
        }
    }

    pickFoodMenu(food: Food) {
        this.pickedFoodMenu = Object.assign({}, food);
        setTimeout(() => this.modelMenu['name'] = food.name[this.language], 0)
        this.correctFood = true;
    }

    onSubmitMenu() {
        this.pickedFoodMenu['weight'] = this.modelMenu['weight'];
        this.pickedFoodMenu['picked'] = false;
        this.foodMenuContainer.unshift(this.pickedFoodMenu)
        this._foodServe.setUserMenu(this.modelMenu['menuName'], this.foodMenuContainer);

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
    changeFoodWeight(menuName, item, weight) {
        this._foodServe.changeFoodInMenu(menuName, item, weight);
    }
    removeMenu(name) {
        this._foodServe.removeMenu(name)
    }
    removeFoodMenu(menuName, item) {
        this._foodServe.removeFoodFromMenu(menuName, item);
    }
    pasteMenuToDay(item) {
        for (let variable of item['food']) {
            this._calendarServe.setDailyFood(variable);
        }
    }
    viewMenuDetail(item) {
        this.pasteMenuToggle();
        this.createMenuToggle()
        this.searchMenu(item['name'])
        this.modelMenu['menuName'] = item['name']

    }
    //4 food
    onSubmit(food) {
        if (food.value.trim()) {
            let name = food.value.trim();
            food = { 'value': {} }
            food.value['name'] = {};
            for (let key in this._translateService.getSupportLanguages()) {
                food.value['name'][key] = name;
            }
            food.value['custom'] = true;
            food.value['calories'] = this.model['calories'];
            food.value['protein'] = this.model['protein'];
            food.value['fat'] = this.model['fat'];
            food.value['carbohydrates'] = this.model['carbohydrates'];
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

    removeFood(food) {
        this._foodServe.removeUserFood(food)
    }

    //4 sport
    onSubmitSport(sport) {
        if (sport.value.trim()) {
            let name = sport.value.trim();
            sport = { 'value': {} }
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
    removeSport(sport) {
        this._sportServe.removeUserSport(sport)
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
