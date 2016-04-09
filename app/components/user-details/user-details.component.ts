import {Component, OnInit} from 'angular2/core';
import {CalendarService, Day} from '../../services/calenadar/calendar.service';
import {UserService} from '../../services/user/user.service';
import {TranslateService, TranslatePipe} from '../../shared/services/translate/translate.service';
import {ROUTER_DIRECTIVES} from 'angular2/router';


@Component({
    selector: 'op-user-details',
    directives: [ROUTER_DIRECTIVES],
    providers: [],
    pipes: [TranslatePipe],
    styles: [`

    .container {
      position: relative;;
      margin: 5vw;
      margin-left: 10vw;
      height: 100vw;
      width: 80vw;
    }

    .user_firstHeader {
      font-size: 6vw;
      width: 80vw;
      text-align: center;
      margin-bottom: 5vw;
      font-weight: bolder;
      color: #ff9d2d;
    }
    .user_nameInput {
      position: relative;
      font-size: 6vw;
      width: 52vw;
      float: left;
      left: 8vw;
      margin-bottom: 2vw;
      color: #ff9d2d;
      line-height: 10vw;
    }
    .user_input {
      position: relative;
      float: left;
      height: 11vw;
      width: 20vw;
      background-color: rgba(49, 51, 61, 0.3);
      box-sizing: border-box;
      border: 2px solid #0C1017;
      border-radius: 7px;
      line-height: 10vw;
      font-size: 6vw;
      color: #D0D9D9;
      margin-bottom: 2vw;
      text-align: center;
    }
    .user_secondHeader {
      position: absolute;
      top: 66vw;
      font-size: 5vw;
      min-height: 8vw;
      line-height: 8vw;
      width: 80vw;
      text-align: center;
      font-weight: bolder;
      color: #ff9d2d;
      border: 2px solid #ff9d2d;
      border-radius: 3vw;
    }
    .user_lang {
      position: absolute;
      top: 83vw;
      width: 60vw;
      font-size: 5vw;
      color: #ff9d2d;
      float: left;
    }
    .user_langName {
      position: relative;
      float: left;
      height: 10vw;
      width: 50vw;
      margin: 2vw;
    }
    .user_langEnIcon {
      position: relative;
      height: 10vw;
      width: 10vw;
      float: left;
      background: url('./src/img/en.png') no-repeat center center;
      box-sizing: border-box;
      border: 2px solid #ff9d2d;
      border-radius: 50%;
      background-size: cover;
      left: 4vw;
    }
    .user_langRuIcon {
      position: relative;
      height: 10vw;
      width: 10vw;
      float: left;
      background: url('./src/img/ru.png') no-repeat center center;
      box-sizing: border-box;
      border: 2px solid #ff9d2d;
      border-radius: 50%;
      background-size: cover;
      left: 4vw;
    }
    .user_langText {
      position: relative;
      width: 20vw;
      float: left;
      line-height: 10vw;
      left: 6vw;
    }

    `],
    template: `
  <div class="container">
  <div class="user_firstHeader">
      {{'daily.rate'|translate}}
  </div>
  <div class="user_nameInput">
    {{'calories'|translate}}
  </div>
  <input #calories class="user_input" type="number" min="0" [(ngModel)]="sets?.foodSets?.calories['full']" (blur)="changeSets()">
  <div class="user_nameInput">
    {{'protein'|translate}}
  </div>
  <input #protein class="user_input" type="number" min="0" [(ngModel)]="sets?.foodSets?.protein['full']" (blur)="changeSets()">
  <div class="user_nameInput">
    {{'fat'|translate}}
  </div>
  <input #fat class="user_input" type="number" min="0" [(ngModel)]="sets?.foodSets?.fat['full']" (blur)="changeSets()">
  <div class="user_nameInput">
    {{'carbohydrates'|translate}}
  </div>
  <input #carbohydrates class="user_input" type="number" min="0" [(ngModel)]="sets?.foodSets?.carbohydrates['full']" (blur)="changeSets()">


  <a [routerLink]="['UserCalculator']">
  <div class="user_secondHeader">
      {{'determine.daily.rate'|translate}}
  </div>
</a>

  <div class="user_lang">
    <div class="user_nameInput">
      {{'language'|translate}}
    </div>
    <div (touchend)="changeLang('en')" class="user_langName">
      <div class="user_langEnIcon"></div>
      <div class="user_langText">English</div>
    </div>
    <div (touchend)="changeLang('ru')" class="user_langName">
      <div class="user_langRuIcon"></div>
      <div class="user_langText">Russian</div>
    </div>
  </div>
</div>
    `
})
export class UserDetailsComponent implements OnInit {
    private sets: Object;
    constructor(private _userServe: UserService, private _translator: TranslateService) { }
    ngOnInit() {
        this.sets = this._userServe.getUserSets();
    }

    changeLang(lang) {
        this._userServe.setLanguage(lang)
        this._translator.setCurrentLanguage(this._userServe.getLanguage())
    }
    changeSets() {
        setTimeout(() => {
            this._userServe.refreshUser();
        }, 500)
    }
}
