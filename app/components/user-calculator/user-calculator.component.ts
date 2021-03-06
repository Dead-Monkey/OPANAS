import {Component, OnInit} from 'angular2/core';
import {TranslatePipe} from '../../shared/services/translate/translate.service';
import {UserService} from '../../services/user/user.service';

@Component({
    selector: 'op-user-calculator',
    directives: [],
    providers: [],
    pipes: [TranslatePipe],
    styles: [`

  .calculator {
    position: absolute;
    top: 12vw;
    left: 0vw;
    width: 90vw;
    height: 150vw;
    margin: 5vw;
    overflow-x: hidden;
    overflow-y: hidden;

  }
  .calculator_buttons {
    position: relative;
    width: 90vw;
    height: 65vw;
    line-height: 10vw;
  }
  .calculator_sexIcon {
    position: relative;
    height: 14vw;
    width: 14vw;
    float: left;
    background: url('./src/img/maleOn.png') no-repeat center center;
    background-size: cover;
    box-sizing: border-box;
    border-radius: 50%;
    margin-bottom: 4vw;
    margin-right: 2vw;

  }
  .calculator_sexMale_on {
    background: url('./src/img/maleOn.png') no-repeat center center;
    background-size: cover;
    box-sizing: border-box;
    border: 2px solid #ff9d2d;
  }
  .calculator_sexMale_off {
    background: url('./src/img/maleOff.png') no-repeat center center;
    background-size: cover;
    border: 2px solid #3c3f49;
  }
  .calculator_sexFemale_on {
    background: url('./src/img/femaleOn.png') no-repeat center center;
    background-size: cover;
    border: 2px solid #ff9d2d;
  }
  .calculator_sexFemale_off {
    background: url('./src/img/femaleOff.png') no-repeat center center;
    background-size: cover;
    border: 2px solid #3c3f49;
  }
  .calculator_nameInput {
    position: relative;
    width: 46vw;
    float: left;
    left: 11vw;
    margin-bottom: 2vw;
    color: #ff9d2d;
    font-size: 7vw;
  }
  .calculator_input {
    position: relative;
    float: left;
    height: 11vw;
    width: 30vw;
    background-color: rgba(49, 51, 61, 0.3);
    box-sizing: border-box;
    border: 2px solid #0C1017;
    border-radius: 7px;
    font-size: 6vw;
    color: #D0D9D9;
    margin-bottom: 4vw;
    text-align: center;
  }
  .calculator_sex {
    line-height: 14vw;
  }
  .calculator_headerBig {
    font-size: 6vw;
    width: 90vw;
    text-align: center;
    margin-top: 3vw;
    font-weight: bolder;
    color: #ff9d2d;
  }
  .calculator_headerSmall {
    font-size: 6vw;
    width: 90vw;
    text-align: center;
    margin-top: 3vw;
    margin-bottom: 1vw;
    color: #ff9d2d;
  }
.toggleBar {
  margin-top: 2vw;
  width: 90vw;
  height: 6.2vw;
  background: #0C1017;
  box-sizing: border-box;
  border: 3px solid #0C1017;
  border-radius: 7px;
}
.activityToggle {
  position: relative;
  float: left;
  height: 4.5vw;
  width: 12.7vw;
  margin-right: 1vw;
  margin-left: 1vw;
  border-radius: 1vw;
}
.activityToggle_off {
  background: #3f414a;
}
.activityToggle_on {
  background: #ff9d2d;
}
.pointToggle {
  position: relative;
  float: left;
  height: 4.5vw;
  width: 20vw;
  margin-right: 1vw;
  margin-left: 1vw;
  border-radius: 1vw;
}
.pointToggle_off {
  background: #3f414a;
}
.pointToggle_on {
  background: #ff9d2d;
}
.calculator_result {
float: left;
  height: 13vw;
  line-height: 11vw;
  width: 40vw;
  margin-left: 15vw;
  margin-top: 7vw;
  background-color: rgba(49, 51, 61, 0.3);
  box-sizing: border-box;
  border: 3px solid #0C1017;
  border-radius: 7px;
  font-size: 6vw;
  font-weight: bold;
  color: #ff9d2d;
  margin-bottom: 4vw;
  text-align: center;
}
.calculator_resultApply {
float: left;
  height: 13vw;
  line-height: 11vw;
  width: 12vw;
  margin-top: 7vw;
  margin-left: 2vw;
  background-size: cover;
  box-sizing: border-box;
  color: #ff9d2d;
  border: 3px solid #0C1017;
  border-radius: 7px;
  text-align: center;
  font-weight: bold;
}
.opapa {
  position: relative;
  width: 80vw;
}
    `],
    template: `
<div class="calculator">
  <div class="calculator_buttons">

    <div class="calculator_nameInput calculator_sex ">{{'sex'|translate}}:</div>
    <div class="calculator_sexIcon" [ngClass]="{calculator_sexMale_on: model.sex === 'male', calculator_sexMale_off: model.sex === 'female'}" (click)="changeSex()"></div>
    <div class="calculator_sexIcon"  [ngClass]="{calculator_sexFemale_on: model.sex === 'female', calculator_sexFemale_off: model.sex === 'male'}" (click)="changeSex()"></div>

    <div class="calculator_nameInput">{{'age'|translate}}:</div>
    <input class="calculator_input" type="number" min="0" placeholder="{{'years'|translate}}" [(ngModel)]="model.age">


    <div class="calculator_nameInput">{{'height'|translate}}:</div>
    <input class="calculator_input" type="number" min="0" placeholder="{{'cm'|translate}}" [(ngModel)]="model.height">

    <div class="calculator_nameInput">{{'mass'|translate}}:</div>
    <input class="calculator_input" type="number" min="0" placeholder="{{'kg'|translate}}" [(ngModel)]="model.weight">

    </div>

    <div class="calculator_headerBig">
        {{'activity.level'|translate}}:
    </div>
    <div class="calculator_headerSmall" [ngSwitch]="model.activity.lvl">
    <div *ngSwitchWhen="1">  {{'minimum'|translate}}</div>
  <div *ngSwitchWhen="2">{{'3times'|translate}}</div>
  <div *ngSwitchWhen="3">{{'5times'|translate}}</div>
  <div *ngSwitchWhen="4">{{'5times.intensity'|translate}}</div>
  <div *ngSwitchWhen="5">{{'every.day'|translate}}</div>
  <div *ngSwitchWhen="6">{{'every.day.intensity'|translate}}</div>
    </div>

    <div class="toggleBar">
      <div class="activityToggle" [ngClass]="{ activityToggle_off:!(model.activity.lvl == '1'), activityToggle_on:model.activity.lvl == '1'}" (click)="changeActivity(1)"></div>
      <div class="activityToggle" [ngClass]="{ activityToggle_off:!(model.activity.lvl == '2'), activityToggle_on:model.activity.lvl == '2'}" (click)="changeActivity(2)"></div>
      <div class="activityToggle" [ngClass]="{ activityToggle_off:!(model.activity.lvl == '3'), activityToggle_on:model.activity.lvl == '3'}" (click)="changeActivity(3)"></div>
      <div class="activityToggle" [ngClass]="{ activityToggle_off:!(model.activity.lvl == '4'), activityToggle_on:model.activity.lvl == '4'}" (click)="changeActivity(4)"></div>
      <div class="activityToggle" [ngClass]="{ activityToggle_off:!(model.activity.lvl == '5'), activityToggle_on:model.activity.lvl == '5'}" (click)="changeActivity(5)"></div>
      <div class="activityToggle" [ngClass]="{ activityToggle_off:!(model.activity.lvl == '6'), activityToggle_on:model.activity.lvl == '6'}" (click)="changeActivity(6)"></div>
    </div>


    <div class="calculator_headerBig">
        {{'point'|translate}}:
    </div>
    <div class="calculator_headerSmall" [ngSwitch]="model.goal.lvl">
    <div *ngSwitchWhen="8">{{'lose.weight.intensity'|translate}}</div>
  <div *ngSwitchWhen="9">{{'lose.weight'|translate}}</div>
  <div *ngSwitchWhen="10">{{'keep.weight'|translate}}</div>
  <div *ngSwitchWhen="11">{{'gain.weight'|translate}}</div>
    </div>
    <div class="toggleBar">
      <div class="pointToggle"  [ngClass]="{ pointToggle_off:!(model.goal.lvl == '8'), pointToggle_on:model.goal.lvl == '8'}" (click)="changeGoal(8)"></div>
      <div class="pointToggle" [ngClass]="{ pointToggle_off:!(model.goal.lvl == '9'), pointToggle_on:model.goal.lvl == '9'}"  (click)="changeGoal(9)"></div>
      <div class="pointToggle" [ngClass]="{ pointToggle_off:!(model.goal.lvl == '10'), pointToggle_on:model.goal.lvl == '10'}"  (click)="changeGoal(10)"></div>
      <div class="pointToggle" [ngClass]="{ pointToggle_off:!(model.goal.lvl == '11'), pointToggle_on:model.goal.lvl == '11'}"  (click)="changeGoal(11)"></div>
    </div>

<div class="opapa">
  <div (click)="calculate()"  class="calculator_result">{{model.foodSets.calories.full}} {{'ccal'|translate}}</div>
    <div (click)="calculate()" class="calculator_resultApply">OK</div>
  </div>

  </div>


`})
export class UserCalculatorComponent implements OnInit {

    private model = {
        'sex': 'male',
        'age': '',
        'weight': '',
        'height': '',
        'activity': {
            'lvl': '',
            'multi': ''
        },
        'goal': {
            'lvl': '',
            'multi': ''
        }
    }
    constructor(private _userServe: UserService) { }
    ngOnInit() {
        this.model = <any>this._userServe.getUserSets();
    }
    changeSex() {
        if (this.model.sex === 'male') {
            this._userServe.setUserSex('female');
        } else {
            this._userServe.setUserSex('male');
        }
    }
    changeActivity(lvl) {
        this._userServe.setUserActivity(lvl)

    }
    changeGoal(lvl) {
        this._userServe.setUserGoal(lvl)
    }
    calculate() {
        this._userServe.calculateUserDailyRate(this.model.sex, <any>this.model.age, <any>this.model.weight, <any>this.model.height, <any>this.model.activity.lvl, <any>this.model.goal.lvl)
    }
}
