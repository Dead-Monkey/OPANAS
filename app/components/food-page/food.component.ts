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
  .ng-valid[required] {
    border: 10px solid green;
  }
  .ng-invalid {
    border: 10px solid red;
  }
    `],
    template: `
<fm-progress-bar [mainLine]="120" [secondLine]="200"></fm-progress-bar>
<fm-progress-bar [mainLine]="30" [secondLine]="40"></fm-progress-bar>
<fm-progress-bar [mainLine]="70" [secondLine]="90"></fm-progress-bar>
<div  *ngIf="true">

<form  class="food_form" (ngSubmit)="onSubmit(foodForm)" #foodForm="ngForm">

  <label for="foodName"></label>
  <input class="food_inputFood" required  [(ngModel)]="model.name" ngControl="foodName"  #foodName="ngForm" #spy>

  <label for="foodWeight"></label>
  <input  class="food_inputWeight" required [(ngModel)]="model.weight" ngControl="foodWeight" #foodWeight="ngForm">

  <button type="submit" class="food_inputButton" [disabled]="!foodForm.form.valid" (click)="formBtn(foodForm)">GO</button>
  <div>foodName:{{foodName.valid}} </div>
  <div> foodWeight:{{foodWeight.valid}}</div>
  <div>spy: {{spy.className}}</div>
</form>

    `
})
export class FoodComponent {
    private model: Object = {};


    onSubmit(a) {
        console.log(`from SUBMIT::`, a.value);
        this.model = {};

    }
    formBtn(a) {
        console.log(`from GO::`, a.value);
        console.log(this.model);
    }

}
