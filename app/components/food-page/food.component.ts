import {Component, OnInit} from 'angular2/core';
import {TranslatePipe} from '../../shared/services/translate/translate.service';
import {ProgressBar} from '../../shared/components/progress-bar/progress-bar.component';
import {PlusComponent} from '../plus-bar/plus-bar.component';
import {FoodService, Food} from '../../services/food/food.service';
import {SimpleSearch} from '../../shared/pipes/simple-search/simple-search.pipe';
import {CalendarService, Day} from '../../services/calenadar/calendar.service';
import {UserService} from '../../services/user/user.service';
import {SwipeDeleteSideDirective} from '../../shared/directives/swipe-delete-side/swipe-delete-side.directive';

@Component({
    selector: 'op-food',
    directives: [ProgressBar, PlusComponent, SwipeDeleteSideDirective],
    providers: [],
    pipes: [TranslatePipe, SimpleSearch],
    styles: [`

  .food_form {
    position: relative;
    margin: 5vw;
    height: 10vw;
  }
  input {
    padding-left: 1vw;
  }
  .food_inputFood {
    position: absolute;
    height: 12vw;
    width: 60vw;
    background-color: rgba(49, 51, 61, 0.3);
    box-sizing: border-box;
    border: 2px solid #0C1017;
    border-radius: 7px;
    font-size: 6vw;
    color: #D0D9D9;
  }
  .food_inputWeight {
    position: absolute;
    height: 12vw;
    width: 16vw;
    left: 61vw;
    background-color: rgba(49, 51, 61, 0.3);
    box-sizing: border-box;
    border: 2px solid #0C1017;
    border-radius: 7px;
    font-size: 6vw;
    color: #D0D9D9;
  }
  .food_inputButton_off {
    position: absolute;
    right: 0;
    height: 12vw;
    width: 12vw;
    background: url('./src/img/Ok_off.png') no-repeat center center;
    background-size: cover;
    box-sizing: border-box;
    border: 2px solid #ff9d2d;
    border-radius: 50%;
    color: #0d0e15;
    border: 2px solid #0C1017;
    border-radius: 7px;
  }
  .food_inputButton_on {
    position: absolute;
    right: 0;
    height: 12vw;
    width: 12vw;
    border: 2px solid #ff9d2d;
    border-radius: 50%;
    background: url('./src/img/Ok_on.png') no-repeat center center;
    background-size: cover;
    box-sizing: border-box;
    color: #0d0e15;
    border: 2px solid #0C1017;
    border-radius: 7px;
  }
  .food_serchContainer {
    position: absolute;
    background-color: #0C1017;
    border-bottom: 2px solid #0C1017;
    box-sizing: border-box;
    width: 60vw;
    max-height: 30vh;
    padding-left: 1vw;
    padding-top: 1vw;
    left: 0;
    top: 11vw;
    overflow-y: scroll;
    border-radius: 7px;
    z-index: 3;
  }
  .food_searchListItem {
    float:left;
    margin-bottom: 1vw;
    min-height: 12vw;
    width: 58vw;
    line-height: 12vw;
    box-sizing: border-box;
    background-color: #3f414a;
    color: #ff9d2d;
    font-size: 6vw;
    text-align: center;
    border-radius: 7px;
  }
  .food_list {
    position: absolute;;
    top:71vw;
    padding-left: 5vw;
    width: 95vw;
    bottom:1px;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .food_listItem {
    float:left;
    margin-right: 1vw;
    margin-top: 2vw;
    min-height: 12vw;
    width: 60vw;
    box-sizing: border-box;
    background-color: #3f414a;
    color: #ff9d2d;
    font-size: 6vw;
    text-align: center;
    border-radius: 7px;
    line-height: 12vw;

  }
  .food_listWeight {
    float:left;
    margin-top: 2vw;
    margin-right: 2vw;
    height: 12vw;
    width: 14vw;
    line-height: 12vw;
    background-color: #3f414a;
    box-sizing: border-box;
    color: #ff9d2d;
    font-size: 6vw;
    text-align: center;
    border-radius: 7px;
    border: none;
    text-align: center;
  }

  .food_listButton_on {
    float:left;
    margin-top: 2vw;
    height: 12vw;
    width: 12vw;
    background: url('./src/img/check-on.png') no-repeat center center;
    background-color: #3f414a;
    background-size: cover;
    box-sizing: border-box;
    color: #0d0e15;
    border-radius: 7px;
  }
  .food_listButton_off {
    float:left;
    margin-top: 2vw;
    height: 12vw;
    width: 12vw;
    background: url('./src/img/check-off.png') no-repeat center center;
    background-color: #3f414a;
    background-size: cover;
    box-sizing: border-box;
    color: #0d0e15;
    border-radius: 7px;
  }
  .food_listItemContainer{
    position:relative;
    min-height: 14vw;
    width:90vw;
    overflow: hidden;
  }
    `],
    template: `
<op-plus [iAm]="'food'" [(isOpen)]="plusIsOpen"></op-plus>
<fm-progress-bar [goSettings]="true" [name]="'calories'|translate" [mainLine]="totalFood.calories.full / userSets.calories.full * 100" [secondLine]="totalFood.calories.maybe / userSets.calories.full * 100" [minNumber]="totalFood.calories.full" [maxNumber]="userSets.calories.full"></fm-progress-bar>
<fm-progress-bar [goSettings]="true" [name]="'protein'|translate" [mainLine]="totalFood.protein.full / userSets.protein.full * 100" [secondLine]="totalFood.protein.maybe / userSets.protein.full * 100" [minNumber]="totalFood.protein.full" [maxNumber]="userSets.protein.full"></fm-progress-bar>
<fm-progress-bar [goSettings]="true" [name]="'fat'|translate" [mainLine]="totalFood.fat.full / userSets.fat.full * 100" [secondLine]="totalFood.fat.maybe / userSets.fat.full * 100" [minNumber]="totalFood.fat.full" [maxNumber]="userSets.fat.full"></fm-progress-bar>
<fm-progress-bar [goSettings]="true" [name]="'carbohydrates'|translate" [mainLine]="totalFood.carbohydrates.full / userSets.carbohydrates.full * 100" [secondLine]="totalFood.carbohydrates.maybe / userSets.carbohydrates.full * 100" [minNumber]="totalFood.carbohydrates.full" [maxNumber]="userSets.carbohydrates.full"></fm-progress-bar>

<form class="food_form" (ngSubmit)="onSubmit(foodForm)" #foodForm="ngForm">

  <label for="foodName"></label>
  <input class="food_inputFood" required [placeholder]="('search'|translate)" [(ngModel)]="model.name" ngControl="name" #name="ngForm" (input)="pickFoodInput(model.name)">

  <label for="foodWeight"></label>
  <input type="number" [min]="1" [placeholder]="'0 ' +('weight'|translate) " class="food_inputWeight" required [(ngModel)]="model.weight" ngControl="weight" #weight="ngForm">

  <button #subBtn type="submit" [ngClass]="{food_inputButton_off: subBtn['disabled'], food_inputButton_on: !subBtn['disabled']}"  [disabled]="!foodForm.form.valid || !correctFood"></button>

  <div *ngIf="(name.valid && !correctFood)" class="food_serchContainer">
    <div class="food_searchListItem"*ngFor="#item of foodContainer  | simpleSearch :'name':language : name.value; #i = index;" (click)="pickFood(item);">
      {{item?.name[language]}}
    </div>
  </div>
</form>

<div class="food_list">
<div class="food_listItemContainer" *ngFor="#item of pickedFoodContainer; #i = index" (fmSwipeDeleteSide)="removeFood(i, item)" >

    <div class="food_listItem" >
      {{item?.name[language]}}
    </div>
    <input class="food_listWeight" type="number" min="0" required [(ngModel)]="item.weight" (blur)="changeFoodWeight(i, item)">

    <div [ngClass]="{food_listButton_off: !item.picked, food_listButton_on: item.picked}" (touchend)="checkBoxToggle(i, item)"></div>
  </div>

</div>
    `
})

export class FoodComponent implements OnInit {
    private model: Object = {};
    private foodContainer: Food[];
    private calendar: Array<Day>;
    private currentDate: Date;
    private language: string = 'en';
    private userSets;

    private pickedFood: Food = <Food>{};
    private pickedFoodContainer: Food[] = [];
    private correctFood: boolean = false;
    private plusIsOpen: boolean = false;

    private totalFood = {
        "calories": {
            "full": 0,
            "maybe": 0
        },
        "protein": {
            "full": 0,
            "maybe": 0
        },
        "fat": {
            "full": 0,
            "maybe": 0
        },
        "carbohydrates": {
            "full": 0,
            "maybe": 0
        }
    }

    constructor(private _foodServe: FoodService, private _calendarService: CalendarService, private _userServe: UserService) { }

    ngOnInit() {
        this.currentDate = this._calendarService.getCurrentDate();
        this.language = this._userServe.getLanguage();
        this.userSets = this._userServe.getUserSets()['foodSets'];
        this.foodContainer = this._foodServe.getAllFood();
        this.pickedFoodContainer = this._calendarService.getDailyFood(this.currentDate);

        //4 calculate progress-bar
        for (let food of this.pickedFoodContainer) {
            this.calculateFood(food);
        }
    }

    onSubmit(food) {

        this.pickedFood['weight'] = food.value.weight;
        this.pickedFood['picked'] = true;
        this._calendarService.setDailyFood(this.pickedFood, this.currentDate);
        this.calculateFood(this.pickedFood);

        this.pickedFood = <Food>{};
        setTimeout(()=>{
          this.model = {};
        },0)
        this.correctFood = false;

    }

    pickFoodInput(name) {
        for (let obj of this.foodContainer) {
            if (obj['name'][this.language] === name) {
                return this.pickFood(obj);
            } else {
                this.correctFood = false;
            }
        }
    }

    pickFood(food: Food) {
        this.pickedFood = Object.assign({}, food);
        setTimeout(() => this.model['name'] = food.name[this.language], 0)
        this.correctFood = true;
    }

    checkBoxToggle(index: number, food: Food) {
        if (food['picked']) {
            this.calculateFullMinus(food);
        } else {
            this.calculateFull(food);
        }
        food['picked'] = !food['picked'];
        this._calendarService.changeDailyFood(index, this.currentDate, food);
    }

    removeFood(index: number, food: Food) {
        this._calendarService.removeDailyFood(index, this.currentDate);
        this.calculateFoodRefresh();
        for (let food of this.pickedFoodContainer) {
            this.calculateFood(food);
        }
    }
    changeFoodWeight(index: number, food: Food) {
        setTimeout(() => {
            if (isNaN(food['weight'])) {
                food['weight'] = 0
            }
            this._calendarService.changeDailyFood(index, this.currentDate, food);
            this.calculateFoodRefresh();

            for (let variable of this.pickedFoodContainer) {
                this.calculateFood(variable);
            }
        }, 500)

    }


    calculateFood(food: Food) {
        if (food['picked']) {
            this.calculateFull(food);
            this.calculateMayBe(food);
        } else {
            this.calculateMayBe(food);
        }
    }

    calculateFoodMinus(food: Food) {
        this.calculateFullMinus(food);
        this.calculateMayBeMinus(food);
    }

    calculateFoodRefresh() {
        for (let prop in this.totalFood) {
            for (let key in this.totalFood[prop]) {
                this.totalFood[prop][key] = 0;
                this.totalFood[prop][key] = 0;
            }
        }
    }

    calculateFull(food) {
        for (let prop in this.totalFood) {
            this.totalFood[prop]['full'] = this.totalFood[prop]['full'] + Math.round((food[prop] * food['weight'] / 100));
        }
    }

    calculateMayBe(food) {
        for (let prop in this.totalFood) {
            this.totalFood[prop]['maybe'] = this.totalFood[prop]['maybe'] + Math.round((food[prop] * food['weight'] / 100));
        }
    }

    calculateFullMinus(food) {
        for (let prop in this.totalFood) {
            this.totalFood[prop]['full'] = this.totalFood[prop]['full'] - Math.round((food[prop] * food['weight'] / 100));
        }
    }

    calculateMayBeMinus(food) {
        for (let prop in this.totalFood) {
            this.totalFood[prop]['maybe'] = this.totalFood[prop]['maybe'] - Math.round((food[prop] * food['weight'] / 100));
        }
    }

}
