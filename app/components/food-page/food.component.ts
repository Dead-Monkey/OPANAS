import {Component, OnInit} from 'angular2/core';
import {TranslatePipe} from '../../shared/services/translate/translate.service';
import {ProgressBar} from '../../shared/components/progress-bar/progress-bar.component';
import {FoodService, Food} from '../../services/food/food.service';
import {SimpleSearch} from '../../shared/pipes/simple-search/simple-search.pipe';
import {CalendarService, Day} from '../../services/calenadar/calendar.service';
import {RefreshDateService} from '../../services/refresh-date/refresh-date.service';

@Component({
    selector: 'op-food',
    directives: [ProgressBar],
    providers: [],
    pipes: [TranslatePipe, SimpleSearch],
    styles: [`

  .food_form {
    position: relative;
    margin: 5vw;
    height: 10vw;
  }
  .food_inputFood {
    position: absolute;
    height: 10vw;
    width: 60vw;
    background-color: rgba(49, 51, 61, 0.3);
    box-sizing: border-box;
    border: 1.5vw solid #0C1017;
    border-radius: 2vw;
  }
  .food_inputWeight {
    position: absolute;
    height: 10vw;
    width: 16vw;
    left: 61vw;
    background-color: rgba(49, 51, 61, 0.3);
    box-sizing: border-box;
    color: #0d0e15;
    border: 1.5vw solid #0C1017;
    border-radius: 2vw;
  }
  .food_inputButton_off {
    position: absolute;
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

  .food_serchContainer {
    position: absolute;
    background-color: #aaa;
    width: 60vw;
    left: 0;
    right: 10px;
    height: 200px;
    top: 27px;
    overflow-y: scroll;
  }
  .food_list {
    margin: 5vw;
    width: 90vw;
    height: 60vw;
    overflow-y: scroll;
  }
  .food_listItem {
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
  .food_listWeight {
    float:left;
    margin-left: 2vw;
    margin-right: 2vw;
    height: 12vw;
    width: 15vw;
    line-height: 12vw;
    background-color: #3f414a;
    box-sizing: border-box;
    color: #ff9d2d;
    font-size: 6vw;
    text-align: center;
    border-radius: 2vw;
    border: none;
  }

  .food_listButton_on {
    float:left;
    height: 12vw;
    width: 12vw;
    background: url('./src/img/check-on.png') no-repeat center center;
    background-color: #3f414a;
    background-size: cover;
    box-sizing: border-box;
    color: #0d0e15;
    border-radius: 2vw;
  }
  .food_listButton_off {
    float:left;
    height: 12vw;
    width: 12vw;
    background: url('./src/img/check-off.png') no-repeat center center;
    background-color: #3f414a;
    background-size: cover;
    box-sizing: border-box;
    color: #0d0e15;
    border-radius: 2vw;
  }
    `],
    template: `
<fm-progress-bar [name]="'calories'" [mainLine]="totalFood.calories.full" [secondLine]="totalFood.calories.maybe"></fm-progress-bar>
<fm-progress-bar [name]="'protein'" [mainLine]="totalFood.protein.full" [secondLine]="totalFood.protein.maybe"></fm-progress-bar>
<fm-progress-bar [name]="'fat'" [mainLine]="totalFood.fat.full" [secondLine]="totalFood.carbohydrates.maybe"></fm-progress-bar>
<fm-progress-bar [name]="'carbohydrates'" [mainLine]="totalFood.carbohydrates.full" [secondLine]="totalFood.carbohydrates.maybe"></fm-progress-bar>

<form class="food_form" (ngSubmit)="onSubmit(foodForm)" #foodForm="ngForm">

<label for="foodName"></label>
<input class="food_inputFood" required [(ngModel)]="model.name" ngControl="name" #name="ngForm" (keyup)="pickFoodInput(model.name)">

<label for="foodWeight"></label>
<input type="number" min="1" class="food_inputWeight" required [(ngModel)]="model.weight" ngControl="weight" #weight="ngForm">

<button type="submit" [ngClass]="{food_inputButton_off: (!foodForm.form.valid || !correctFood || !weight.value), food_inputButton_on: (foodForm.form.valid && correctFood && weight.value )}" [disabled]="!foodForm.form.valid || !correctFood"></button>

<div *ngIf="name.valid" class="food_serchContainer">
  <div class="food_listItem" *ngFor="#item of foodContainer  | simpleSearch :'name' : name.value; #i = index;" (click)="pickFood(item);">
      {{item?.name}}
  </div>
</div>
</form>
<div class="food_list">
<div *ngFor="#item of pickedFoodContainer; #i = index">

  <div class="food_listItem">
    {{item?.name}}
  </div>
  <input class="food_listWeight" type="number" min="1" [(ngModel)]="item.weight">

  <button (click)="removeFodd(i, item)">minus</button>
  <div [ngClass]="{food_listButton_off: !item.picked, food_listButton_on: item.picked}"  (click)="checkBoxToggle(item)"></div>

</div>
</div>
    `
})

export class FoodComponent implements OnInit {

    private model: Object = {};
    private foodContainer: Food[];
    private calendar: Array<Day>;
    private currentDate: Date = new Date();

    private pickedFood: Food = <Food>{};
    private pickedFoodContainer: Food[] = [];
    private correctFood: boolean = false;

    private totalFood = {
        "calories": {
            "full": 0,
            "maybe": 0
        },
        "protein": {
            "full": 0,
            "maybe": 0
        },
        "carbohydrates": {
            "full": 0,
            "maybe": 0
        },
        "fat": {
            "full": 0,
            "maybe": 0
        }
    }

    constructor(private _foodServe: FoodService, private _calendarService: CalendarService, private _refreshDateService: RefreshDateService) { }

    ngOnInit() {

        this.foodContainer = this._foodServe.getAllFood();
        this.pickedFoodContainer = this._calendarService.getDailyFood(this.currentDate);

        //4 calculate progress-bar
        for (let food of this.pickedFoodContainer) {
            this.calculateFood(food);
        }

        //refresh view on 00:00
        this._refreshDateService.refresher(() => {
            this.currentDate = new Date();
            this.pickedFoodContainer = this._calendarService.getDailyFood(this.currentDate)
            for (let food of this.pickedFoodContainer) {
                this.calculateFood(food);
            }
        });
    }



    onSubmit(food) {

        this.pickedFood['weight'] = food.value.weight;
        this.pickedFood['picked'] = true;
        this._calendarService.setDailyFood(this.pickedFood, this.currentDate);
        this.calculateFood(this.pickedFood);

        this.pickedFood = <Food>{};
        this.model = {};
        this.correctFood = false;

    }

    removeFodd(index: number, food: Food) {
        this._calendarService.removeDailyFood(index, this.currentDate);
        this.calculateFoodMinus(food);
    }

    pickFoodInput(name) {
        for (let obj of this.foodContainer) {
            if (obj['name'] === name) {
                return this.pickFood(obj);
            } else {
                this.correctFood = false;
                console.log(`unCorrectFood`);
            }
        }
    }

    pickFood(food: Food) {
        this.pickedFood = Object.assign({}, food);
        this.model['name'] = food.name;
        this.correctFood = true;
    }

    checkBoxToggle(food: Food) {
        if (food['picked']) {
            this.calculateFullMinus(food);
        } else {
            this.calculateFull(food);
        }
        food['picked'] = !food['picked'];

    }

    calculateFood(food: Food) {
        this.calculateFull(food);
        this.calculateMayBe(food);
    }

    calculateFoodMinus(food: Food) {
        this.calculateFullMinus(food);
        this.calculateMayBeMinus(food);
    }

    calculateFull(food: Food) {
        this.totalFood.calories.full = this.totalFood.calories.full + food.calories;
        this.totalFood.protein.full = this.totalFood.protein.full + food.protein;
        this.totalFood.carbohydrates.full = this.totalFood.carbohydrates.full + food.carbohydrates;
        this.totalFood.fat.full = this.totalFood.fat.full + food.fat;
    }

    calculateMayBe(food: Food) {
        this.totalFood.calories.maybe = this.totalFood.calories.maybe + food.calories;
        this.totalFood.protein.maybe = this.totalFood.protein.maybe + food.protein;
        this.totalFood.carbohydrates.maybe = this.totalFood.carbohydrates.maybe + food.carbohydrates;
        this.totalFood.fat.maybe = this.totalFood.fat.maybe + food.fat;
    }

    calculateFullMinus(food: Food) {
        this.totalFood.calories.full = this.totalFood.calories.full - food.calories;
        this.totalFood.protein.full = this.totalFood.protein.full - food.protein;
        this.totalFood.carbohydrates.full = this.totalFood.carbohydrates.full - food.carbohydrates;
        this.totalFood.fat.full = this.totalFood.fat.full - food.fat;
    }

    calculateMayBeMinus(food: Food) {
        this.totalFood.calories.maybe = this.totalFood.calories.maybe - food.calories;
        this.totalFood.protein.maybe = this.totalFood.protein.maybe - food.protein;
        this.totalFood.carbohydrates.maybe = this.totalFood.carbohydrates.maybe - food.carbohydrates;
        this.totalFood.fat.maybe = this.totalFood.fat.maybe - food.fat;
    }
}
