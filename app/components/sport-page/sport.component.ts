import {Component, OnInit} from 'angular2/core';
import {TranslatePipe} from '../../shared/services/translate/translate.service';
import {ProgressBar} from '../../shared/components/progress-bar/progress-bar.component';
import {PlusComponent} from '../plus-bar/plus-bar.component';
import {SimpleSearch} from '../../shared/pipes/simple-search/simple-search.pipe';
import {CalendarService, Day} from '../../services/calenadar/calendar.service';
import {UserService} from '../../services/user/user.service';
import {SwipeHoldertDirective} from '../../shared/directives/swipeHolder/swipe-holder.directive';
import {SportService, Sport} from '../../services/sport/sport.service';

@Component({
    selector: 'op-sport',
    directives: [ProgressBar, PlusComponent, SwipeHoldertDirective],
    providers: [],
    pipes: [TranslatePipe, SimpleSearch],
    styles: [`
      .sport_form {
        position: relative;
        margin: 5vw;
        height: 10vw;
      }
      .sport_inputSport {
        position: absolute;
        height: 10vw;
        width: 70vw;
        background-color: rgba(49, 51, 61, 0.3);
        box-sizing: border-box;
        border: 1.5vw solid #0C1017;
        border-radius: 2vw;
      }
      .sport_inputWeight {
        position: absolute;
        height: 10vw;
        width: 30vw;
        top: 11vw;
        left: 0;
        background-color: rgba(49, 51, 61, 0.3);
        box-sizing: border-box;
        color: #0d0e15;
        border: 1.5vw solid #0C1017;
        border-radius: 2vw;
      }
      .sport_inputCount {
        position: absolute;
        height: 10vw;
        width: 30vw;
        top: 11vw;
        left: 31vw;
        background-color: rgba(49, 51, 61, 0.3);
        box-sizing: border-box;
        color: #0d0e15;
        border: 1.5vw solid #0C1017;
        border-radius: 2vw;
      }
      .sport_inputTime {
        position: absolute;
        height: 10vw;
        width: 30vw;
        top: 11vw;
        left: 62vw;
        background-color: rgba(49, 51, 61, 0.3);
        box-sizing: border-box;
        color: #0d0e15;
        border: 1.5vw solid #0C1017;
        border-radius: 2vw;
      }
      .sport_inputButton_off {
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
      .sport_inputButton_on {
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

      .sport_serchContainer {
        position: absolute;
        background-color: #aaa;
        width: 60vw;
        left: 0;
        right: 10px;
        height: 200px;
        top: 27px;
        overflow-y: scroll;
      }

      .sport_list {
        position:relative;
        top:5vh;
        margin: 5vw;
        width: 90vw;
        height: 55vh;
        overflow-y: scroll;
        overflow-x: hidden;
      }
      .sport_listItem {
        float:left;
        margin-bottom: 2vh;
        margin-right: 5vw;
        height: 12vw;
        width: 70vw;
        box-sizing: border-box;
        background-color: #3f414a;
        color: #ff9d2d;
        font-size: 6vw;
        text-align: center;
        border-radius: 2vw;
        line-height: 12vw;

      }
      .sport_listWeight {
        float:left;
        height: 12vw;
        width: 25vw;
        line-height: 12vw;
        background-color: #3f414a;
        box-sizing: border-box;
        color: #ff9d2d;
        font-size: 6vw;
        text-align: center;
        border-radius: 2vw;
        border: none;
      }
      .sport_listNumbers {
        float:left;

        margin-left: 5vw;
        margin-right: 5vw;
        height: 12vw;
        width: 25vw;
        line-height: 12vw;
        background-color: #3f414a;
        box-sizing: border-box;
        color: #ff9d2d;
        font-size: 6vw;
        text-align: center;
        border-radius: 2vw;
        border: none;
      }
      .sport_listTime {
        float:left;
        height: 12vw;
        width: 25vw;
        line-height: 12vw;
        background-color: #3f414a;
        box-sizing: border-box;
        color: #ff9d2d;
        font-size: 6vw;
        text-align: center;
        border-radius: 2vw;
        border: none;
      }

      .sport_listButton_on {
        float:left;
        height: 12vw;
        width: 12vw;
        background: url('./src/img/check-on.png') no-repeat center center;
        background-color: #3f414a;
        background-size: cover;
        box-sizing: border-box;
        color: #0d0e15;
        border-radius: 2vw;
        z-index: 999;
      }
      .sport_listButton_off {
      float: left;
      height: 12vw;
      width: 12vw;
      background: url('./src/img/check-off.png') no-repeat center center;
      background-color: #3f414a;
      background-size: cover;
      box-sizing: border-box;
      color: #0d0e15;
      border-radius: 2vw;
      z-index: 999;
    }
    .repeatLine {
      float: left;
      margin: 1.5vw;

      width: 100%;
      height: 1.5vw;
      background-color: #0C1017;
    }
      `],
    template: `
<op-plus [iAm]="'sport'" [(isOpen)]="plusIsOpen"></op-plus>

<fm-progress-bar [name]="'progress'|translate" [mainLine]="totalSport.procentDone" [secondLine]="" [minNumber]="totalSport.done" [maxNumber]="pickedSportContainer.length"></fm-progress-bar>

<form class="sport_form" (ngSubmit)="onSubmit(sportForm)" #sportForm="ngForm">

  <label for="sportName"></label>
  <input class="sport_inputSport" required [placeholder]="('search'|translate) + '...'" [(ngModel)]="model.name" ngControl="name" #name="ngForm" (blur)="pickSportInput(model.name)" (keyup)="pickSportInput(model.name)">

  <label for="sportWeight"></label>
  <input type="number" [min]="1" [placeholder]="('sport.weight'|translate) + '...'" class="sport_inputWeight" [(ngModel)]="model.weight" ngControl="weight" #weight="ngForm">

  <label for="sportNumber"></label>
  <input type="number" [min]="1" [placeholder]="('sport.numbers'|translate) + '...'" class="sport_inputCount" [(ngModel)]="model.numbers" ngControl="numbers" #numbers="ngForm">

  <label for="sportTime"></label>
  <input type="number" [min]="1" [placeholder]="('sport.time'|translate) + '...'" class="sport_inputTime" [(ngModel)]="model.time" ngControl="time" #time="ngForm">

  <button type="submit" [ngClass]="{sport_inputButton_off: (!sportForm.form.valid || !correctSport ), sport_inputButton_on: (sportForm.form.valid && correctSport )}" [disabled]="!sportForm.form.valid || !correctSport"></button>

  <div *ngIf="name.valid" class="sport_serchContainer">
    <div class="sport_listItem" *ngFor="#item of sportContainer  | simpleSearch :'name':language : name.value; #i = index;" (click)="pickSport(item);">
      {{item?.name[language]}}
    </div>
  </div>
</form>

<div class="sport_list">
  <div *ngFor="#item of pickedSportContainer; #i = index" fmSwipe (fmSwipeLeft)="removeSport(i, item)" (fmSwipeRight)="removeSport(i, item)">

      <div class="sport_listItem">
        {{item?.name[language]}}
      </div>
      <div [ngClass]="{sport_listButton_off: !item.picked, sport_listButton_on: item.picked}" (click)="checkBoxToggle(i, item)"></div>
      <input class="sport_listWeight" type="number" min="0" [(ngModel)]="item.weight" (blur)="changeSport(i, item)">
      <input class="sport_listNumbers" type="number" min="0" [(ngModel)]="item.numbers" (blur)="changeSport(i, item)">
      <input class="sport_listTime" type="number" min="0" [(ngModel)]="item.time" (blur)="changeSport(i, item)">
      <div class="repeatLine"></div>

  </div>
</div>
    `

})
export class SportComponent implements OnInit {


    private model: Object = {};
    private sportContainer: Sport[];
    private calendar: Array<Day>;
    private currentDate: Date = new Date();
    private language: string = 'en';
    private userSets;

    private pickedSport: Sport = <Sport>{};
    private pickedSportContainer: Sport[] = [];
    private correctSport: boolean = false;
    private plusIsOpen: boolean = false;

    private totalSport = {
        'done': 0,
        'procentDone': 0
    };

    constructor(private _sportServe: SportService, private _calendarService: CalendarService, private _userServe: UserService) {
    }
    ngOnInit() {
        this.language = this._userServe.getLanguage();
        this.userSets = this._userServe.getUserSportSets();
        this.sportContainer = this._sportServe.getAllSport();
        this.pickedSportContainer = this._calendarService.getDailySport(this.currentDate);

        for (let variable of this.pickedSportContainer) {
            this.calculateTotalSportInit(variable);
        }
    }

    onSubmit(sport) {
        console.log(`submit`);
        if (sport.value['weight']) {
            this.pickedSport['weight'] = sport.value['weight'];

        }
        if (sport.value['numbers']) {
            this.pickedSport['numbers'] = sport.value['numbers'];

        }
        if (sport.value['time']) {
            this.pickedSport['time'] = sport.value['time'];

        }
        this.pickedSport['picked'] = true;
        this._calendarService.setDailySport(this.pickedSport, this.currentDate);
        this.calculateTotalSport(this.pickedSport);

        this.pickedSport = <Sport>{};
        this.model = {};
        this.correctSport = false;

    }

    pickSportInput(name) {
        for (let obj of this.sportContainer) {
            if (obj['name'][this.language] === name) {
                return this.pickSport(obj);
            } else {
                this.correctSport = false;
                console.log(`unCorrectFood`);
            }
        }
    }

    pickSport(sport: Sport) {
        this.pickedSport = Object.assign({}, sport);
        this.model['name'] = sport.name[this.language];
        this.correctSport = true;
    }

    removeSport(index: number, sport: Sport) {
        this._calendarService.removeDailySport(index, this.currentDate);
        this.calculateSportRefresh();
        for (let variable of this.pickedSportContainer) {
            this.calculateTotalSportInit(variable);
        }
    }

    checkBoxToggle(index: number, sport: Sport) {
        sport['picked'] = !sport['picked'];
        this.calculateTotalSport(sport);

        this._calendarService.changeDailySport(index, this.currentDate, sport);
    }

    calculateTotalSport(sport: Sport) {
        if (sport['picked']) {
            this.totalSport['done']++;
        }else {
            this.totalSport['done']--;
        }
        if(this.pickedSportContainer.length){
          this.totalSport['procentDone'] = this.totalSport['done'] / this.pickedSportContainer.length * 100;
        }
    }
    calculateTotalSportInit(sport: Sport) {
        if (sport['picked']) {
            this.totalSport['done']++;
        }

        if(this.pickedSportContainer.length){
          this.totalSport['procentDone'] = this.totalSport['done'] / this.pickedSportContainer.length * 100;
        }
    }
    calculateSportRefresh() {
        for (let prop in this.totalSport) {
            this.totalSport[prop] = 0;
            this.totalSport[prop] = 0;
        }
    }

    changeSport(index: number, sport: Sport) {
      this._calendarService.changeDailySport(index, this.currentDate, sport);
    }
}
