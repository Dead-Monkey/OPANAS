import {Component, OnInit} from 'angular2/core';
import {TranslatePipe} from '../../shared/services/translate/translate.service';
import {ProgressBar} from '../../shared/components/progress-bar/progress-bar.component';
import {FoodService, Food} from '../../services/food/food.service';
import {SimpleSearch} from '../../shared/pipes/simple-search/simple-search.pipe';
import {CalendarService, Day} from '../../services/calenadar/calendar.service';

@Component({
    selector: 'op-add-food',
    directives: [ProgressBar],
    providers: [],
    pipes: [TranslatePipe, SimpleSearch],
    styles: [`
.container {
  position: fixed;
  left: 5vw;
  top: 15vw;
  background-color: silver;
  width:90vw;
  height: 90vh;
  z-index:10;
}
.tmp{
  background-color: green;
  width: 100%;
}
    `],
    template: `
<div class="container">
  <div>{{item?.name}}</div>
  <div class="tmp" (click)="setFood()">set</div>
  <div class="tmp" (click)="removeFood()">remove</div>
</div>
    `
})

export class AddFoodComponent implements OnInit {

    private model: Object = {};
    private foodContainer: Food[];
    private calendar: Array<Day>;
    private currentDate: Date = new Date();

    private pickedFood: Food = <Food>{};
    private pickedFoodContainer: Food[] = [];
    private correctFood: boolean = false;



    private item = this._foodServe.getUserFood();

    constructor(private _foodServe: FoodService, private _calendarService: CalendarService) { }

    ngOnInit() {
    }

    setFood() {
        this._foodServe.setUserFood({
            "id": 1,
            "name": {
                "en": "pizza",
                "ru": "пицца"
            },
            "custom": false,
            "calories": 999,
            "protein": 10,
            "carbohydrates": 10,
            "fat": 10
        })
        // console.log(this._foodServe.getUserFood());
        this.item = this._foodServe.getUserFood();
    }
    removeFood() {
        this._foodServe.removeUserFood({
            "id": 99,
            "name": "pizza",
            "custom": true,
            "calories": 2,
            "protein": 1,
            "carbohydrates": 10,
            "fat": 3
        });
        this.item = this._foodServe.getUserFood();
    }


}
