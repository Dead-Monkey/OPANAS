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
import {AdMobService} from '../../services/admob/admob.service';

@Component({
    selector: 'opanas-app',
    directives: [ROUTER_DIRECTIVES, SideBar],
    providers: [ROUTER_PROVIDERS, provide(LocationStrategy,
        { useClass: HashLocationStrategy }), TranslateService, FoodService, SportService, CalendarService, RefreshDateService, StorageService, UserService, AdMobService],
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

    constructor(private _translator: TranslateService, private _calendarService: CalendarService, private _refreshDateService: RefreshDateService, private _userServe:UserService, private _AdMobServe: AdMobService) { }
    bla() {
        location.reload();
    }
    //config app
    ngOnInit() {
        //cordova plugins setup
        let onDeviceReady =()=> {
            //keepAwake screen
            window.plugins.insomnia.keepAwake()

            //AdMob
            this._AdMobServe.createBottomBanerFirst();
            this._AdMobServe.addBottomBanerFirst();
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
        'food':'Food',
        'sport':'Sport',
        'rest':'Rest',
        'calendar':'Calendar',
        'settings':'Settings',
        'progress': 'progress',
        'search': 'search',
        'weight': 'g',
        'sport.weight': 'weight',
        'sport.numbers': 'numbers',
        'sport.time': 'time',
        'calories': 'Calories',
        'protein': 'Protein',
        'carbohydrates': 'Carbohydrates',
        'fat': 'Fat',
        'done':'Done',
        'language':'Language',
        'create.food':'Create food',
        'create.menu':'Create menu',
        'paste.menu':'Paste menu',
        'menuName':'menu name',
        'set':'set',
        '+set':'+set',
        'kg':'kg',
        'resp':'resp',
        'daily.rate':'Daily rate',
        'determine.daily.rate':'Determine my daily rate',
        'added.meals':'Added meals',
        'meals.name':'Meals name',
        'create.exercise':'Add exercise',
        'create.training.plan':'Create training plan',
        'reset':'RESET',
        'stop':'STOP',
        'resume':'RESUME',
        'start':'START'

    },

    'ru': {
        'food':'Питание',
        'sport':'Тренировки',
        'rest':'Отдых',
        'calendar':'Календарь',
        'settings':'Настройки',
        'progress': 'Прогресс',
        'search':'поиск',
        'weight':'г',
        'sport.weight': 'какой вес',
        'sport.numbers': 'сколько раз',
        'sport.time': 'время',
        'calories': 'Калории',
        'protein': 'Белки',
        'carbohydrates': 'Углеводы',
        'fat': 'Жиры',
        'language':'Язык',
        'done':'Готово',
        'create.food':'Добавить блюдо',
        'create.menu':'Создать новое меню',
        'paste.menu':'Выбрать готовое меню',
        'menuName':'название меню',
        'set' : 'сет',
        '+set': '+сет',
        'kg':'кг',
        'resp':'повт',
        'daily.rate':'Cуточная норма',
        'determine.daily.rate':'Определить мою суточную норму',
        'added.meals':'Добавленные блюда',
        'meals.name':'Название',
        'create.exercise':'Добавить упражнение',
        'create.training.plan':'Создать программу',
        'reset':'СБРОС',
        'stop':'СТОП',
        'resume':'ПУСК',
        'start':'ПУСК'

    }
}
