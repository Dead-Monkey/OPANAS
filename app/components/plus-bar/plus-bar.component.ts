import {Component, OnInit, Input, Output, EventEmitter} from 'angular2/core';
import {FoodService, Food} from '../../services/food/food.service';
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
  background-color: silver;
  width:90vw;
  height: 87vh;
  z-index: 10;
}
.plusBar{
  position: absolute;
  right: 0;
  top: 0;
  width: 20vw;
  height: 15vw;
  background-color: blue;
  overflow: hidden;
}
.closeMe{
  position: fixed;
  left: 0;
  top: 0;
  background-color: black;
  opacity: 0.5;
  width: 100vw;
  height: 100vh;
  z-index: 9;

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
.tmp{
  width: 80vw;
  position: relative;
  top:50%;
}
.tmp2{
  height: 12vw;
  width: 80vw;
  line-height: 12vw;
  box-sizing: border-box;
  font-size: 6vw;
  text-align: center;
  line-height: 12vw;
}
    `],
    template: `
<div class="plusBar" (click)="toggle()">PLUS</div>
<div class="container" *ngIf="isOpen">
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
  <div class="tmp" *ngFor="#item of customFood">
    <div class="tmp2">name: {{item.name.ru}} calories: {{item.calories}}</div>
  </div>
</div>
<div *ngIf="isOpen" class="closeMe" (click)="toggle()"></div>
    `
})

export class PlusComponent implements OnInit {

    @Input() isOpen: boolean = true;
    @Output() isOpenChange = new EventEmitter();

    private customFood;
    private model: Object = {};

    constructor(private _foodServe: FoodService, private _translateService: TranslateService) { }

    ngOnInit() {
        this.customFood = this._foodServe.getUserFood();
        this.refreshModel();
    }

    toggle() {
        this.isOpen = !this.isOpen;
        this.isOpenChange.emit(this.isOpen);
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

    getFood() {
        console.log(this._foodServe.getUserFood());
    }
    setFood(food: Food) {
        this._foodServe.setUserFood(food);
        this.customFood = this._foodServe.getUserFood();
    }
    removeFood() {
        this.customFood = this._foodServe.getUserFood();
        console.log(this.customFood);
    }


}
