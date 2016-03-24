import {Component, OnInit} from 'angular2/core';
import {TranslatePipe} from '../../shared/services/translate/translate.service';


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
    overflow-y: scroll;

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
    margin-bottom: 4vw;
    margin-right: 2vw;
  }
  .calculator_sexMale_on {
    background: url('./src/img/maleOn.png') no-repeat center center;
    background-size: cover;
  }
  .calculator_sexMale_off {
    background: url('./src/img/maleOff.png') no-repeat center center;
    background-size: cover;
  }
  .calculator_sexFemale_on {
    background: url('./src/img/femaleOn.png') no-repeat center center;
    background-size: cover;
  }
  .calculator_sexFemale_off {
    background: url('./src/img/femaleOff.png') no-repeat center center;
    background-size: cover;
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
    border: 5px solid #0C1017;
    border-radius: 2vw;
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
  height: 8vw;
  background: #0C1017;
  box-sizing: border-box;
  border: 5px solid #0C1017;
  border-radius: 2vw;
}
.activityToggle {
  position: relative;
  float: left;
  height: 5vw;
  width: 12.5vw;
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
  height: 5vw;
  width: 19.7vw;
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
  position: relative;
  height: 13vw;
  line-height: 10vw;
  width: 40vw;
  margin-left: 22.5vw;
  margin-top: 7vw;
  background-color: rgba(49, 51, 61, 0.3);
  box-sizing: border-box;
  border: 6px solid #0C1017;
  border-radius: 2vw;
  font-size: 6vw;
  font-weight: bold;
  color: #ff9d2d;
  margin-bottom: 4vw;
  text-align: center;

}

    `],
    template: `
<div class="calculator">
  <div class="calculator_buttons">

    <div class="calculator_nameInput calculator_sex ">{{'sex'|translate}}:</div>
    <div class="calculator_sexIcon calculator_sexMale_on"></div>
    <div class="calculator_sexIcon calculator_sexFemale_off"></div>

    <div class="calculator_nameInput">{{'age'|translate}}:</div>
    <input class="calculator_input" type="number" min="0" placeholder="{{'years'|translate}}">


    <div class="calculator_nameInput">{{'height'|translate}}:</div>
    <input class="calculator_input" type="number" min="0" placeholder="{{'cm'|translate}}">

    <div class="calculator_nameInput">{{'mass'|translate}}:</div>
    <input class="calculator_input" type="number" min="0" placeholder="{{'kg'|translate}}">

    </div>

    <div class="calculator_headerBig">
        {{'activity.level'|translate}}:
    </div>
    <div class="calculator_headerSmall">
        ебашу аж бигом
    </div>

    <div class="toggleBar">
      <div class="activityToggle activityToggle_off"></div>
      <div class="activityToggle activityToggle_off"></div>
      <div class="activityToggle activityToggle_off"></div>
      <div class="activityToggle activityToggle_off"></div>
      <div class="activityToggle activityToggle_on"></div>
      <div class="activityToggle activityToggle_off"></div>
    </div>


    <div class="calculator_headerBig">
        {{'point'|translate}}:
    </div>
    <div class="calculator_headerSmall">
        шоб я толстый был ваще
    </div>
    <div class="toggleBar">
      <div class="pointToggle pointToggle_off"></div>
      <div class="pointToggle pointToggle_off"></div>
      <div class="pointToggle pointToggle_off"></div>
      <div class="pointToggle pointToggle_on"></div>
    </div>

  <div class="calculator_result">1488 {{'ccal'|translate}}</div>

  </div>


`})
export class UserCalculatorComponent implements OnInit {
    constructor() { }
    ngOnInit() {
    }
}
