import {Component, OnInit, provide} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {FoodComponent} from '../food-page/food.component';
import {SportComponent} from '../sport-page/sport.component';
import {RestComponent} from '../rest-page/rest.component';
import {CalendarComponent} from '../calendar-page/calendar.component';
import {UserComponent} from '../user-page/user.component';
import {StartComponent} from '../start-page/start.component';
import {SideBar} from '../../shared/components/side-bar/side-bar.component';
import {TranslateService, TranslatePipe} from '../../shared/services/translate/translate.service';
import {FoodService} from '../../services/food/food.service';
import {SportService} from '../../services/sport/sport.service';
import {CalendarService, Day} from '../../services/calenadar/calendar.service';
import {RefreshDateService} from '../../services/refresh-date/refresh-date.service';
import {StorageService} from '../../shared/services/storage/storage.service';
import {UserService} from '../../services/user/user.service';

@Component({
    selector: 'opanas-app',
    directives: [ROUTER_DIRECTIVES, SideBar],
    providers: [ROUTER_PROVIDERS, provide(LocationStrategy,
        { useClass: HashLocationStrategy }), TranslateService, FoodService, SportService, CalendarService, RefreshDateService, StorageService, UserService],
    pipes: [TranslatePipe],
    styles: [`
    .header{
    height: 15vw;
    width: 100vw;
    }
		.container {
      background: url(./src/img/tempBackground.png) no-repeat center center;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
    }

  .temporary {
    position: absolute;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background-color: green;
    right: 40vw;
    top: 40;
    height: 50px;
    width: 100px;
    opacity: 0.3;
  }
  `],
    template: `
<div class="container">

  <div class="header">
    <div class="temporary">

      <div (click)="bla()">reload</div>

    </div>
  </div>

  <fm-side-bar [(isOpen)]="sideBarIsOpen"></fm-side-bar>
  <router-outlet></router-outlet>
</div>

`})

@RouteConfig([
    { path: '/', name: 'Start', component: StartComponent, useAsDefault: true },
    { path: '/food', name: 'Food', component: FoodComponent },
    { path: '/sport', name: 'Sport', component: SportComponent },
    { path: '/rest', name: 'Rest', component: RestComponent },
    { path: '/calendar', name: 'Calendar', component: CalendarComponent },
    { path: '/user', name: 'User', component: UserComponent },
    { path: '/*path', redirectTo: ['Start'] }
])
export class OpanasComponent implements OnInit {

    private sideBarIsOpen: boolean = false;

    constructor(private _translator: TranslateService, private _calendarService: CalendarService, private _refreshDateService: RefreshDateService, private _userServe:UserService) { }
    bla() {
        location.reload();
    }
    //config app
    ngOnInit() {
        //cordova plugins setup
        let onDeviceReady = function() {
            //keepAwake screen
            window.plugins.insomnia.keepAwake()
        }
        document.addEventListener("deviceready", onDeviceReady, false);

        //refresh-date
        this._refreshDateService.refresher();
        //translator config
        this._translator.setSupportLanguages(languages);
        this._translator.setKeys(keysVendor);
        //basic language of application
        this._translator.setCurrentLanguage(this._userServe.getLanguage());
        //default language will be use if current language dont has key. it's an optional.
        this._translator.setDefaultLanguage('en');
    }

    //replace this 2 userPage;
    goEn() {
        this._translator.setCurrentLanguage('en');
    }
    goRu() {
        this._translator.setCurrentLanguage('ru');
    }
}


let languages: Object = {
    'en': 'english',
    'ru': 'russian'
};

let keysVendor: Object = {

    'en': {
        'progress': 'progress',
        'search': 'search',
        'weight': 'weight',
        'sport.weight': 'weight',
        'sport.numbers': 'numbers',
        'sport.time': 'time',
        'calories': 'calories',
        'protein': 'protein',
        'carbohydrates': 'carbohydrates',
        'fat': 'fat',
        'language':'language',
        'create.food':'Create food',
        'create.menu':'Create menu',
        'paste.menu':'Paste menu',
        'menuName':'menu name'


    },

    'ru': {
        'progress': 'прогресс',
        'search': 'поиск',
        'weight': 'вес',
        'sport.weight': 'какой вес',
        'sport.numbers': 'сколько раз',
        'sport.time': 'время',
        'calories': 'калории',
        'protein': 'белки',
        'carbohydrates': 'углеводы',
        'fat': 'жиры',
        'language':'язык',
        'create.food':'Добавить блюдо',
        'create.menu':'Создать новое меню',
        'paste.menu':'Добавить созданное ранее меню',
        'menuName':'название меню'

    }
}
