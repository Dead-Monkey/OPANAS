import {Component} from 'angular2/core';
import {TranslatePipe} from '../../shared/services/translate/translate.service';
import {ProgressBar} from '../../shared/components/progress-bar/progress-bar.component';

@Component({
    selector: 'op-food',
    directives: [ProgressBar],
    providers: [],
    pipes: [TranslatePipe],
    styles: [`
  .food_form {
  margin: 10px;
  background-color: gray;
}
.food_inputFood {}
.food_inputWeight {
  width: 20vw;
}
.food_inputButton {}
.food_list {
  width: 100vw;
  height: 200px;
  background-color: silver;
  overflow-y: scroll;
}
.food_listItem{
  width: 100vw;
  height:30px;
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
    <input class="food_inputFood" required [(ngModel)]="model.name" ngControl="name" #name="ngForm" #spy>

    <label for="foodWeight"></label>
    <input type="number" min="1" class="food_inputWeight" required [(ngModel)]="model.weight" ngControl="weight" #weight="ngForm">

    <button type="submit" class="food_inputButton" [disabled]="!foodForm.form.valid">GO</button>
    <div>foodName:{{name.valid}} </div>
    <div> foodWeight:{{weight.valid}}</div>
    <div>spy: {{spy.className}}</div>
  </form>
  <div class="food_list">
    <div class="food_listItem" *ngFor="#item of foodContainer; #i = index">{{i}} {{item.name}} {{item.weight}}</div>
  </div>
    `
})

export class FoodComponent {

    private totalFood: Object = {
        "calories": {
            "full": "50",
            "maybe": "70"
        },
        "protein": {
            "full": "30",
            "maybe": "90"
        },
        "carbohydrates": {
            "full": "20",
            "maybe": "30"
        },
        "fat": {
            "full": "80",
            "maybe": "90"
        }
    }

    private model: Object = {};
    private foodContainer: Array<Object> = []

    onSubmit(food) {
        this.foodContainer.splice(0,0,food.value);
        this.model = {};
    }
}
