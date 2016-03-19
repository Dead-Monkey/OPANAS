import {Component, OnInit, Input, Output, EventEmitter} from 'angular2/core';
import {FoodService, Food} from '../../services/food/food.service';
import {SportService, Sport} from '../../services/sport/sport.service';
import {SimpleSearch} from '../../shared/pipes/simple-search/simple-search.pipe';
import {TranslateService, TranslatePipe} from '../../shared/services/translate/translate.service';

@Component({
    selector: 'op-plus',
    directives: [],
    providers: [],
    pipes: [TranslatePipe, SimpleSearch],
    styles: [`

.container {
  position: fixed;
  left: 5vw;
  top: 15vw;
  overflow: hidden;
  background-color: #3f414a;
  width:90vw;
  height: 87vh;
  z-index: 10;

}
.plusBar {
  position: absolute;
  right: 3vw;
  top: 0;
  width: 15vw;
  height: 15vw;
  background: url('./src/img/addfood_simple.png') no-repeat center center;
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

.plusBar_menuButtons {
  color: #ff9d2d;
  font-size: 5vw;
  text-align: center;
  overflow: hidden;
}
.closeMe {
  position: fixed;
  left: 0;
  top: 0;
  background-color: black;
  opacity: 0.5;
  width: 100vw;
  height: 100vh;
  z-index: 9;

}

.list {
  /*margin-left: 5vw;*/
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
  border: 1.5vw solid #0C1017;
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
  color: #0d0e15;
  border: 1.5vw solid #0C1017;
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
  color: #0d0e15;
  border: 1.5vw solid #0C1017;
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
  color: #0d0e15;
  border: 1.5vw solid #0C1017;
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
  color: #0d0e15;
  border: 1.5vw solid #0C1017;
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
  color: #0d0e15;
  border: 1.5vw solid #0C1017;
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
  color: #0d0e15;
  border: 1.5vw solid #0C1017;
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
  border: 1.5vw solid #0C1017;
  border-radius: 2vw;
}
.sportBtnMove{
  top:0;
  right:0;
}
    `],
    template: `
<div class="plusBar" [ngClass]="{plusBarAnime: isOpen}"(click)="toggle()"></div>
<div class="container" *ngIf="isOpen && (iAm === 'food')">

  <div *ngIf="listOptions">
    <div (click)="createFoodToggle()" class="plusBar_menuButtons" >{{'create.food' | translate}}</div>
    <br>
    <div (click)="createMenuToggle()" class="plusBar_menuButtons">{{'create.menu' | translate}}</div>
    <br>
    <div (click)="pasteMenuToggle()" class="plusBar_menuButtons">{{'paste.menu' | translate}}</div>
    <br>
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
        <div class="listItem">{{item.name.ru}} </div>
      </div>
    </div>
  </div>
  <div *ngIf="createMenu">
    {{'create.menu' | translate}}
  </div>

  <div *ngIf="pasteMenu">
    paste meun
  </div>
</div>
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
</div>
<div *ngIf="isOpen" class="closeMe" (click)="toggle()"></div>
    `
})

export class PlusComponent implements OnInit {

    @Input() isOpen: boolean = false;
    @Input() iAm: string;
    @Output() isOpenChange = new EventEmitter();

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

    constructor(private _foodServe: FoodService, private _sportServe: SportService, private _translateService: TranslateService) { }

    ngOnInit() {
        this.customFood = this._foodServe.getUserFood();
        this.refreshModel();
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


    checkForm(value) {
        if (value) {
            if (value.trim()) {
                return true
            }
        }
        return false;
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

}
