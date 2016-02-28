import {Component, OnInit} from 'angular2/core';
import {TranslatePipe} from '../../shared/services/translate/translate.service';
import {ProgressBar} from '../../shared/components/progress-bar/progress-bar.component';
import {FoodService, Food} from '../../services/food/food.service';
import {SimpleSearch} from '../../shared/pipes/simple-search/simple-search.pipe';
import {CalendarService, Day} from '../../services/calenadar/calendar.service';

@Component({
    selector: 'op-food',
    directives: [ProgressBar],
    providers: [],
    pipes: [TranslatePipe, SimpleSearch],
    styles: [`
  .food_form {
    position: relative;
    margin: 10px;
  }
  .food_inputFood {
    height: 20px;
    width: 60wv;
  }
  .food_inputWeight {
    height: 20px;
    width: 20vw;
  }
  .food_inputButton {}
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
    width: 100vw;
    height: 200px;
    background-color: silver;
    overflow-y: scroll;
  }
  .food_listItem {
    width: 100vw;
    height: 30px;
  }
  .ng-valid[required] {
    border-left: 10px solid green;
  }
  .ng-invalid {
    border-left: 10px solid red;
  }
    `],
    template: `
<fm-progress-bar [mainLine]="totalFood.calories.full" [secondLine]="totalFood.calories.maybe"></fm-progress-bar>
<fm-progress-bar [mainLine]="totalFood.protein.full" [secondLine]="totalFood.protein.maybe"></fm-progress-bar>
<fm-progress-bar [mainLine]="totalFood.carbohydrates.full" [secondLine]="totalFood.carbohydrates.maybe"></fm-progress-bar>
<fm-progress-bar [mainLine]="totalFood.fat.full" [secondLine]="totalFood.fat.maybe"></fm-progress-bar>

<form class="food_form" (ngSubmit)="onSubmit(foodForm)" #foodForm="ngForm">

  <label for="foodName"></label>
  <input class="food_inputFood" required [(ngModel)]="model.name" ngControl="name" #name="ngForm" (keyup)="pickFoodInput(model.name)">

  <label for="foodWeight"></label>
  <input type="number" min="1" class="food_inputWeight" required [(ngModel)]="model.weight" ngControl="weight" #weight="ngForm">

  <button type="submit" class="food_inputButton" [disabled]="!foodForm.form.valid || !correctFood">GO</button>

  <div *ngIf="name.valid" class="food_serchContainer">
    <div class="food_listItem" *ngFor="#item of foodContainer  | simpleSearch :'name' : name.value; #i = index;" (click)="pickFood(item);">{{i}} name: {{item?.name}} weight: {{item?.weight}}</div>
  </div>
</form>
<div class="food_list">
  <div class="food_listItem" *ngFor="#item of pickedFoodContainer; #i = index">
    {{i}} {{item?.name}}
    <input class="food_inputWeight" type="number" min="1" [(ngModel)]="item.weight">
    {{item?.calories}}
    <input type="checkbox" [(ngModel)]="item.picked" (click)="checkBoxToggle(item)">
    <button (click)="minusFodd(i, item)">minus</button>
  </div>
</div>
<div (click)="yaClick()">ya button</div>
    `
})

export class FoodComponent implements OnInit {

    private model: Object = {};
    private foodContainer: Food[];
    private calendar: Array<Day>;

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

    constructor(private _foodServe: FoodService, private _calendarService: CalendarService) {


    }

    yaClick() {
        this._calendarService.addDay();
        console.log(this.calendar);
        console.log(this.pickedFoodContainer);
    }

    ngOnInit() {
        this.foodContainer = this._foodServe.getAllFood();
        this.calendar = this._calendarService.getCalendar();
        console.log(this.calendar);
        this.pickedFoodContainer = this._calendarService.getDailyFood(new Date());
        console.log(this.pickedFoodContainer, "111", "!!!!!!!!!!!!!!!!!!!!");
    }



    onSubmit(food) {

        this.pickedFood['weight'] = food.value.weight;
        this.pickedFood['picked'] = true;

        this.pickedFoodContainer.push(this.pickedFood);

        this.calculateFood(this.pickedFood);

        this.pickedFood = <Food>{};
        this.model = {};
        this.correctFood = false;

    }

    minusFodd(index: number, food: Food) {
        this.pickedFoodContainer.splice(index, 1);
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
