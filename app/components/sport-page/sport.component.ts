import {Component, OnInit} from 'angular2/core';
import {TranslatePipe} from '../../shared/services/translate/translate.service';
import {ProgressBar} from '../../shared/components/progress-bar/progress-bar.component';
import {PlusComponent} from '../plus-bar/plus-bar.component';
import {SimpleSearch} from '../../shared/pipes/simple-search/simple-search.pipe';
import {CalendarService, Day} from '../../services/calenadar/calendar.service';
import {UserService} from '../../services/user/user.service';
import {SwipeHoldertDirective} from '../../shared/directives/swipe-holder/swipe-holder.directive';
import {SportService, Sport} from '../../services/sport/sport.service';

@Component({
    selector: 'op-sport',
    directives: [ProgressBar, PlusComponent, SwipeHoldertDirective],
    providers: [],
    pipes: [TranslatePipe, SimpleSearch],
    styles: [`
      .sport_form {
        position: absolute;;
        left: 5vw;
        top: 46vw;
        height: 5vw;
        width: 90vw;
      }
      .sport_inputSport {
        position: absolute;
        height: 12vw;
        width: 72vw;
        color: #D0D9D9;
        font-size: 6vw;
        background-color: rgba(49, 51, 61, 0.3);
        box-sizing: border-box;
        border: 5px solid #0C1017;
        border-radius: 2vw;
      }
    .sport_inputButton_off {
        position: absolute;
        right: 0;
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
        width: 68vw;
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
        width: 68vw;
        line-height: 15vw;
        box-sizing: border-box;
        background-color: #3f414a;
        color: #ff9d2d;
        font-size: 6vw;
        text-align: center;
        border-radius: 2vw;
      }

      .sport_list {
        position: absolute;;
        top:60vw;
        margin-left: 5vw;
        width: 90vw;
        height: 67vh;
        overflow-y: scroll;
        overflow-x: hidden;
      }
      .sport_listItem {
        float:left;
        margin-right: 3vw;
        margin-top: 2vw;
        min-height: 15vw;
        width: 72vw;
        box-sizing: border-box;
        background-color: #3f414a;
        color: #de5200;
        font-size: 6vw;
        text-align: center;
        border-radius: 2vw;
        line-height: 15vw;
      }
      .sport_listSet {
        float:left;
        margin-right: 2vw;
        margin-top: 1vh;
        min-height: 15vw;
        width: 27vw;
        line-height: 15vw;
        background-color: #3f414a;
        box-sizing: border-box;
        color: #ff9d2d;
        font-size: 6vw;
        text-align: center;
        border-radius: 2vw;
        border: none;
      }
      .sport_listWeight {
        float:left;
        height: 15vw;
        width: 21vw;
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

    .sport_dropdownButonAnime{
      transform:rotate(180deg)
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
    position: absolute;;
    margin-left: 5vw;
    top: 30vw;
    width: 90vw;
    height: 12vw;
    text-align: center;
    background-color: #3f414a;
    border: 5px solid #0d0e15;
    box-sizing: border-box;
    border-radius: 3vw;
    line-height: 10vw;

  }
  .sport_timerButtons {
    float: left;
    width: 23vw;
    height: 10vw;
    border-radius: 3vw;
    color: #ff9d2d;
    /*font-weight: bold;*/
  }
  .clockFace {
    float: left;
    width: 39vw;
    height: 10vw;
    font-size: 6vw;
    color: #de5200;
    border-right: 3px solid #0d0e15;
    border-left: 3px solid #0d0e15;
  }
  .clockFace_numbers {
    float: left;
    width: 8vw;
  }
  .clockFace_hours {
    /*margin-left: 8vw;*/
    width: 16vw;
    text-align: right;
  }
      `],
    template: `
<op-plus [iAm]="'sport'" [(isOpen)]="plusIsOpen"></op-plus>

<fm-progress-bar [name]="'progress'|translate" [mainLine]="totalSport.procentDone" [secondLine]="" [minNumber]="totalSport.done" [maxNumber]="pickedSportContainer.length"></fm-progress-bar>

<div class="sport_timer">
  <div class="sport_timerButtons" (click)="stopwatchReset()">{{'reset'| translate}}</div>
  <div class="clockFace">
      <div class="clockFace_numbers clockFace_hours">{{(stopwatch['hours'] < 10)?'0'+ stopwatch['hours']:''+ stopwatch['hours']}}:</div>
      <div class="clockFace_numbers">{{(stopwatch['minutes'] < 10)?'0'+ stopwatch['minutes']:''+ stopwatch['minutes']}}:</div>
      <div class="clockFace_numbers">{{(stopwatch['seconds'] < 10)?'0'+ stopwatch['seconds']:''+ stopwatch['seconds'] }}</div>
  </div>
  <div *ngIf="(!stopwatchBussy && !(stopwatch['seconds'] || stopwatch['minutes'] || stopwatch['hours']))" class="sport_timerButtons" (click)="stopwatchToggle()">{{'start'| translate}}</div>
  <div *ngIf="stopwatchBussy" class="sport_timerButtons" (click)="stopwatchToggle()">{{'stop'| translate}}</div>
  <div *ngIf="(!stopwatchBussy && (stopwatch['seconds'] || stopwatch['minutes'] || stopwatch['hours']))" class="sport_timerButtons" (click)="stopwatchToggle()">{{'resume'| translate}}</div>
</div>

<form class="sport_form" (ngSubmit)="onSubmit(sportForm)" #sportForm="ngForm">

  <label for="sportName"></label>
  <input class="sport_inputSport" required [placeholder]="('search'|translate) + '...'" [(ngModel)]="model.name" ngControl="name" #name="ngForm" (input)="pickSportInput(model.name)">

  <button #subBtn type="submit" [ngClass]="{sport_inputButton_off: subBtn['disabled'], sport_inputButton_on: !subBtn['disabled']}" [disabled]="!sportForm.form.valid || !correctSport"></button>

  <div *ngIf="(name.valid && !correctSport)" class="sport_serchContainer">
    <div class="sport_searchListItem" *ngFor="#item of sportContainer  | simpleSearch :'name':language : name.value; #i = index;" (click)="pickSport(item);">

      {{item?.name[language]}}
    </div>
  </div>
</form>

<div class="sport_list">
  <div *ngFor="#item of pickedSportContainer; #i = index">

    <div class="sport_listItem" fmSwipe (fmSwipeLeft)="removeSport(i, item)" (fmSwipeRight)="removeSport(i, item)" (click)="openSets(item,i)">
      {{item?.name[language]}}
      <div class="sport_dropdownButton" [ngClass]="{sport_dropdownButonAnime:!item['setsToggle']}"></div>
    </div>
    <div [ngClass]="{sport_listButton_off: !item.picked, sport_listButton_on_exrc: item.picked}" (click)="checkBoxToggle(i, item)"></div>

    <div *ngIf="item['setsToggle']">
      <div *ngFor="#it of item.sets; #setIndex = index" fmSwipe (fmSwipeLeft)="removeSet(i, item, setIndex)" (fmSwipeRight)="removeSet(i, item, setIndex)">
        <div class="sport_listSet" >{{'set'| translate}} {{setIndex+1}}</div>
        <input class="sport_listWeight" type="number" min="0" [(ngModel)]="item['sets'][setIndex].weight" (blur)="changeSport(i, item)" placeholder="{{'kg'| translate}}">
        <input class="sport_listNumbers" type="number" min="0" [(ngModel)]="item['sets'][setIndex].numbers" (blur)="changeSport(i, item)" placeholder="{{'resp'| translate}}">
        <div [ngClass]="{sport_listButton_off: !it.picked, sport_listButton_on: it.picked}" (click)="pickSet(item, i, setIndex)"></div>
      </div>
      <div class="sport_listSet" (click)="addSet(item, i)">{{'+set'| translate}}</div>
    </div>
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

    private stopwatch: Object = {
      'hours':0,
      'minutes':0,
      'seconds': 0
        };
    private stopwatchVendor;
    private stopwatchBussy = false;

    constructor(private _sportServe: SportService, private _calendarService: CalendarService, private _userServe: UserService) { }
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
        this.pickedSport['picked'] = false;
        this.pickedSport['setsToggle'] = true;
        this.pickedSport['sets'] = [{ 'picked': false }];
        this._calendarService.setDailySport(this.pickedSport, this.currentDate);
        this.calculateSportRefresh();
        for (let variable of this.pickedSportContainer) {
            this.calculateTotalSportInit(variable);
        }

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

    addSet(sport, index) {
        sport['sets'].push({ 'picked': false })
        sport['picked'] = false;
        for (let variable of this.pickedSportContainer) {
            this.calculateTotalSportInit(variable);
        }
        this.calculateSportRefreshAndCalculate()
        this._calendarService.changeDailySport(index, this.currentDate, sport);
    }

    removeSet(index, sport, setIndex) {
        sport['sets'].splice(setIndex, 1)
        if (sport['sets'].every((el) => el['picked'])) {
            sport['picked'] = true
        }
        this.calculateSportRefreshAndCalculate()
        this._calendarService.changeDailySport(index, this.currentDate, sport);
    }

    openSets(sport, index) {
        sport['setsToggle'] = !sport['setsToggle'];
        this._calendarService.changeDailySport(index, this.currentDate, sport);
    }
    pickSet(sport, index, setIndex) {
        sport['sets'][setIndex]['picked'] = !sport['sets'][setIndex]['picked'];

        if (sport['sets'].every((el) => el['picked'])) {
            sport['picked'] = true;
        } else {
            sport['picked'] = false;
        }
        this.calculateSportRefreshAndCalculate()
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
        }
    }

    calculateSportRefreshAndCalculate() {
        this.calculateSportRefresh()
        for (let variable of this.pickedSportContainer) {
            this.calculateTotalSportInit(variable);
        }
    }


    changeSport(index: number, sport: Sport) {
        this._calendarService.changeDailySport(index, this.currentDate, sport);
    }

    //timeromer
    stopwatchToggle() {
        if (!this.stopwatchBussy) {
            this.stopwatchVendor = setInterval(() => {
              this.stopwatch['seconds']++
          if (this.stopwatch['seconds'] === 60) {
              this.stopwatch['minutes']++;
              this.stopwatch['seconds'] = 0;
          }
          if (this.stopwatch['minutes'] === 60) {
              this.stopwatch['hours']++;
              this.stopwatch['minutes'] = 0;
          }
            }
              , 1000);

        } else {
            clearInterval(this.stopwatchVendor);
        }
        this.stopwatchBussyToggle();

    }

    stopwatchReset() {
        for (let key in this.stopwatch) {
          this.stopwatch[key] = 0;
        }
    }
    stopwatchBussyToggle() {
        this.stopwatchBussy = !this.stopwatchBussy;
    }
}
