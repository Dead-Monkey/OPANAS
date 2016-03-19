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
        height: 5vw;
        width: 90vw;
      }
      .sport_inputSport {
        position: absolute;
        height: 12vw;
        width: 70vw;
        color: #0d0e15;
        font-size: 7vw;
        background-color: rgba(49, 51, 61, 0.3);
        box-sizing: border-box;
        border: 5px solid #0C1017;
        border-radius: 2vw;
      }
    .sport_inputButton_off {
        position: absolute;
        right: 3vw;
        height: 12vw;
        width: 15vw;
        background: url('./src/img/check-off.png') no-repeat center center;
        background-size: cover;
        box-sizing: border-box;
        color: #0d0e15;
        border: 5px solid #0C1017;
        border-radius: 2vw;
      }
      .sport_inputButton_on {
        position: absolute;
        right: 0;
        height: 12vw;
        width: 15vw;
        background: url('./src/img/check-on.png') no-repeat center center;
        background-size: cover;
        box-sizing: border-box;
        color: #0d0e15;
        border: 5px solid #0C1017;
        border-radius: 2vw;
      }

      .sport_serchContainer {
        position: absolute;
        background-color: #0C1017;
        width: 70vw;
        max-height: 30vh;
        padding: 2vw;
        left: 0;
        right: 2vw;
        top: 9vw;
        overflow-y: scroll;
        border-radius: 2vw;
        z-index: 3
      }
      .sport_searchListItem {
        float:left;
        margin-bottom: 1vw;
        height: 15vw;
        width: 70vw;
        line-height: 15vw;
        box-sizing: border-box;
        background-color: #3f414a;
        color: #ff9d2d;
        font-size: 6vw;
        text-align: center;
        border-radius: 2vw;
      }

      .sport_list {
        position:relative;
        top:5vh;
        margin-left: 5vw;
        margin-right: 5vw;
        width: 90vw;
        height: 57vh;
        overflow-y: scroll;
        overflow-x: hidden;
      }
      .sport_listItem {
        float:left;
        margin-right: 3vw;
        margin-top: 2vw;
        height: 15vw;
        width: 70vw;
        box-sizing: border-box;
        background-color: #3f414a;
        color: #de5200;
        font-size: 6vw;
        text-align: center;
        border-radius: 2vw;
        line-height: 15vw;
      }
      .sport_listWeight {
        float:left;
        height: 15vw;
        width: 20vw;
        line-height: 15vw;
        margin-top: 1vh;
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
        margin-left: 2vw;
        margin-right: 3vw;
        height: 15vw;
        width: 20vw;
        margin-top: 1vh;
        line-height: 15vw;
        background-color: #3f414a;
        box-sizing: border-box;
        color: #ff9d2d;
        font-size: 6vw;
        text-align: center;
        border-radius: 2vw;
        border: none;
      }
      .sport_listSet {
        float:left;
        margin-right: 2vw;
        margin-top: 1vh;
        height: 15vw;
        width: 26vw;
        line-height: 15vw;
        background-color: #3f414a;
        box-sizing: border-box;
        color: #ff9d2d;
        font-size: 6vw;
        text-align: center;
        border-radius: 2vw;
        border: none;
      }
      .sport_dropdownButton {
        float: left;
        margin-left: 8vw;
        margin-top: 3vw;
        width: 10vw;
        height: 10vw;
        background: url('./src/img/dropdown.png') no-repeat center center;
        background-size: cover;
        box-sizing: border-box;
      }
      .sport_listButton_on {
      float: left;
      height: 15vw;
      width: 15vw;
      background: url('./src/img/check-on.png') no-repeat center center;
      background-color: #3f414a;
      background-size: cover;
      box-sizing: border-box;
      color: #0d0e15;
      border-radius: 2vw;
      margin-top: 1vh;
    }
    .sport_listButton_on_exrc {
    float: left;
    height: 15vw;
    width: 15vw;
    margin-top: 2vw;
    background: url('./src/img/exrc_check-on.png') no-repeat center center;
    background-color: #3f414a;
    background-size: cover;
    box-sizing: border-box;
    color: #0d0e15;
    border-radius: 2vw;
  }
    .sport_listButton_off {
      float: left;
      height: 15vw;
      width: 15vw;
      margin-top: 2vw;
      background: url('./src/img/check-off.png') no-repeat center center;
      background-color: #3f414a;
      background-size: cover;
      box-sizing: border-box;
      color: #0d0e15;
      border-radius: 2vw;
    }
    .sport_timer {
      position: relative;
      margin-left: 10vw;
      width: 80vw;
      height: 6vh;
      text-align: center;
    }
      `],
    template: `
<op-plus [iAm]="'sport'" [(isOpen)]="plusIsOpen"></op-plus>

<fm-progress-bar [name]="'progress'|translate" [mainLine]="totalSport.procentDone" [secondLine]="" [minNumber]="totalSport.done" [maxNumber]="pickedSportContainer.length"></fm-progress-bar>

<div class="sport_timer">
  <p>Тут будет таймер</p>
</div>

<form class="sport_form" (ngSubmit)="onSubmit(sportForm)" #sportForm="ngForm">

  <label for="sportName"></label>
  <input class="sport_inputSport" required [placeholder]="('search'|translate) + '...'" [(ngModel)]="model.name" ngControl="name" #name="ngForm" (input)="pickSportInput(model.name)">

  <button #subBtn type="submit" [ngClass]="{sport_inputButton_off: subBtn['disabled'], sport_inputButton_on: !subBtn['disabled']}" [disabled]="!sportForm.form.valid || !correctSport"></button>

  <div *ngIf="(name.valid && !correctSport)" class="sport_serchContainer">
    <div class="sport_listItem" *ngFor="#item of sportContainer  | simpleSearch :'name':language : name.value; #i = index;" (click)="pickSport(item);">

  {{item?.name[language]}}
    </div>
  </div>
</form>

<div class="sport_list">
  <div *ngFor="#item of pickedSportContainer; #i = index" fmSwipe (fmSwipeLeft)="removeSport(i, item)" (fmSwipeRight)="removeSport(i, item)">

      <div class="sport_listItem">
        {{item?.name[language]}}
        <div class="sport_dropdownButton"></div>
      </div>
      <div [ngClass]="{sport_listButton_off: !item.picked, sport_listButton_on_exrc: item.picked}" (click)="checkBoxToggle(i, item)"></div>
      <div class="sport_listSet">set 1</div>
      <input class="sport_listWeight" type="number" min="0" [(ngModel)]="item.weight" (blur)="changeSport(i, item)" placeholder="kg">
      <input class="sport_listNumbers" type="number" min="0" [(ngModel)]="item.numbers" (blur)="changeSport(i, item)" placeholder="reps">
      <!-- <input class="sport_listTime" type="number" min="0" [(ngModel)]="item.time" (blur)="changeSport(i, item)"> -->
      <div [ngClass]="{sport_listButton_off: !item.picked, sport_listButton_on: item.picked}" (click)="checkBoxToggle(i, item)"></div>
      <div class="sport_listSet">add set</div>
  </div>
</div>



    `

})
export class SportComponent implements OnInit {

    private model: Object = {};
    private sportContainer: Sport[];
    private calendar: Array<Day>;
    private currentDate: Date;
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
        this.currentDate = this._calendarService.getCurrentDate();
        this.language = this._userServe.getLanguage();
        this.userSets = this._userServe.getUserSets()['sport'];
        this.sportContainer = this._sportServe.getAllSport();
        this.pickedSportContainer = this._calendarService.getDailySport(this.currentDate);

        for (let variable of this.pickedSportContainer) {
            this.calculateTotalSportInit(variable);
        }
    }

    onSubmit(sport) {
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
        setTimeout(() => this.model['name'] = sport.name[this.language], 0)
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
        } else {
            this.totalSport['done']--;
        }
        if (this.pickedSportContainer.length) {
            this.totalSport['procentDone'] = this.totalSport['done'] / this.pickedSportContainer.length * 100;
        }
    }
    calculateTotalSportInit(sport: Sport) {
        if (sport['picked']) {
            this.totalSport['done']++;
        }

        if (this.pickedSportContainer.length) {
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
