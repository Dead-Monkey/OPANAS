import {Component, OnInit} from 'angular2/core';
import {TranslatePipe} from '../../shared/services/translate/translate.service';
import {ProgressBar} from '../../shared/components/progress-bar/progress-bar.component';
import {FoodService, Food} from '../../services/food/food.service';
import {SimpleSearch} from '../../shared/pipes/simple-search/simple-search.pipe';

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
    position: relative;
    margin: 5vw;
    width: 90vw;
    height: 30vw;
    overflow-y: scroll;
  }
  .food_listItem {
    position: absolute;
    height: 12vw;
    width: 60vw;
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
    position: absolute;
    height: 12vw;
    width: 15vw;
    left: 61vw;
    line-height: 12vw;
    background-color: #3f414a;
    box-sizing: border-box;
    color: #ff9d2d;
    font-size: 6vw;
    text-align: center;
    border-radius: 2vw;
  }

  .food_listButton {
    position: absolute;
    right: 0;
    height: 12vw;
    width: 12vw;
    background: url('./src/img/check-on.png') no-repeat center center;
    background-color: #3f414a;
    background-size: cover;
    box-sizing: border-box;
    color: #0d0e15;
    border-radius: 2vw;
  }
  .ng-valid[required] {
    border-left: 5px solid green;
  }
  .ng-invalid {
    border-left: 5px solid #de5200;
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

  <button type="submit" class="food_inputButton_off" [disabled]="!foodForm.form.valid || !correctFood"></button>

  <div *ngIf="name.valid" class="food_serchContainer">
    <div class="food_listItem" *ngFor="#item of foodContainer  | simpleSearch :'name' : name.value; #i = index;" (click)="pickFood(item);">{{i}} name: {{item?.name}} weight: {{item?.weight}}</div>
  </div>
</form>
<div class="food_list">
  <div class="food_listItem" *ngFor="#item of pickedFoodContainer; #i = index">
    {{i}} {{item?.name}}

    <!-- временно закоментил строку с инпутоп, вместо нен cуществует div.food_listWeight -->
    <!-- <input class="food_listWeight" type="number" min="1" [(ngModel)]="item.weight">
    {{item?.calories}} -->

    <!-- временно закоментил строку с чекбоском, вместо нее cуществует div.food_listButton -->
    <!-- <input type="checkbox" [(ngModel)]="item.picked" (click)="checkBoxToggle(item)"> -->

    <button (click)="minusFodd(i, item)">minus</button>
  </div>
  <div class="food_listWeight">666</div>
  <div class="food_listButton"></div>

</div>
    `
})

export class FoodComponent implements OnInit {

    private model: Object = {};
    private foodContainer: Food[];

    private pickedFood: Food = <Food>{};
    private pickedFoodContainer: Food[] = [];
    private correctFood: boolean = false;

    private totalFood = {
        "calories": {
            "full": 50,
            "maybe": 51
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

    constructor(private _foodServe: FoodService) {
      /*вот эту хуйню, Ванюша, убери, после того как сверстаешь. От сих...*/
      this.pickedFoodContainer.push({
          "id": 1,
          "name": "pizza",
          "calories": 10,
          "protein": 10,
          "carbohydrates": 10,
          "fat": 10
      })
      /*... до сих*/
     }

    ngOnInit() {
        this.foodContainer = this._foodServe.getAllFood();
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

    minusFodd(index:number, food:Food) {
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
