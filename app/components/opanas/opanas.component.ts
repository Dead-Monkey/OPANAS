import {Component, OnInit, provide} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, Router} from 'angular2/router';
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
    .header {
      height: 15vw;
      width: 100vw;
    }
    .container {
      background: url(./src/img/tempBackground.png) no-repeat center center;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
    }
    .calendar {
      position: absolute;
      width: 24vw;
      height: 6vw;
      left: 38vw;
      margin-top: 2.5vw;
      color: #ff9d2d;
      font-size: 19px;
      z-index: 10;
      // border-top: 2px solid #ff9d2d;
    // border-bottom: 2px solid #ff9d2d;
      text-align: center;
    }
    .line{
      position: absolute;
      width:40vw;
      height: 3px;
      left:30vw;
      background: -webkit-linear-gradient(left,rgba(255,0,0,0),rgba(255, 157, 45, 1),rgba(255,0,0,0));
     background: linear-gradient(to right, rgba(255,0,0,0), rgba(255, 157, 45, 1),rgba(255,0,0,0));
       z-index: 10;
    }
    .line_up {
      position: absolute;
      top:2vw;
    }
    .line_down {
      position: absolute;
      top:8vw;
    }
  `],
    template: `
<div class="container">

  <div class="header">
<div class="line line_up"></div>
  <div *ngIf="_userServe.getLanguage()==='en'" class="calendar" (touchend)="goCalendar()">{{date.getMonth()+1}}/{{date.getDate()}}/{{date.getFullYear()}}</div>
  <div *ngIf="_userServe.getLanguage()==='ru'" class="calendar" (touchend)="goCalendar()">{{date.getDate()}}/{{date.getMonth()+1}}/{{date.getFullYear()}}</div>
<div class="line line_down"></div>
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
    { path: '/user/...', name: 'User', component: UserComponent },
    { path: '/*path', redirectTo: ['Start'] }
])
export class OpanasComponent implements OnInit {
    private sideBarIsOpen: boolean = false;
    private date;

    constructor(private _translator: TranslateService, private _calendarService: CalendarService, private _refreshDateService: RefreshDateService, private _userServe: UserService, private _AdMobServe: AdMobService, private _router: Router) {
    }
    //config app
    ngOnInit() {
        //cordova plugins setup
        let onDeviceReady = () => {
            //keepAwake screen
            window.plugins.insomnia.keepAwake()
            //backgound mode
            cordova.plugins.backgroundMode.enable();
            cordova.plugins.backgroundMode.setDefaults({ text:'waiting for you :-)'});
            //AdMob
            this._AdMobServe.createInterstitialFirst();
            this._AdMobServe.prepareInterstitialFirst();
            setTimeout(() => this._AdMobServe.showInterstitialFirst(), 20000)
        }
        let onBackKeyDown = () => {
            this._router.navigate(['Start'])
        }
        document.addEventListener("deviceready", onDeviceReady, false);
        document.addEventListener("backbutton", onBackKeyDown, true);
        //translator config
        this._translator.setSupportLanguages(languages);
        this._translator.setKeys(keysVendor);
        //basic language of application
        if (this._userServe.getFirstEnter()) {
            if (navigator.language.startsWith('ru')) {
                this._userServe.setLanguage('ru')
            }
        }
        this._translator.setCurrentLanguage(this._userServe.getLanguage());
        //default language will be use if current language dont has key. it's an optional.
        this._translator.setDefaultLanguage('en');

        //check first enter
        this._userServe.setFirstEnter();

        this.date = this._calendarService.getCurrentDate()
    }
    ngAfterContentChecked() {
        this.date = this._calendarService.getCurrentDate()
    }
    goCalendar() {
        this._router.navigate(['Calendar'])
    }
}

let languages: Object = {
    'en': 'english',
    'ru': 'russian'
};

let keysVendor: Object = {

    'en': {
        'food': 'Food',
        'sport': 'Sport',
        'rest': 'Rest',
        'calendar': 'Calendar',
        'settings': 'Settings',
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
        'done': 'Done',
        'language': 'Language',
        'create.food': 'Create food',
        'create.menu': 'Create menu',
        'choose.menu': 'Choose menu',
        'choose.training': 'Choose training',
        'menuName': 'menu name',
        'trainingName': 'training name',
        'set': 'set',
        '+set': '+set',
        'kg': 'kg',
        'cm': 'cm',
        'resp': 'resp',
        'daily.rate': 'Daily rate',
        'determine.daily.rate': 'Determine my daily rate',
        'added.meals': 'Added meals',
        'meals.name': 'Meals name',
        'create.exercise': 'Add exercise',
        'added.exercise': 'Added exercise',
        'create.training.plan': 'Create training plan',
        'reset': 'RESET',
        'stop': 'STOP',
        'resume': 'RESUME',
        'start': 'START',
        'sex': 'Sex',
        'age': 'Age',
        'height': 'Height',
        'mass': 'Weight',
        'years': 'years',
        'activity.level': 'Activity level',
        'point': 'Point',
        'ccal': 'ccal',
        'name': 'Name',
        'menu': 'menu',
        'minimum':'minimum or abscence',
        '3times':'3 times a week',
        '5times':'5 times a week',
        '5times.intensity':'5 times a week high intensity',
        'every.day':'every day',
        'every.day.intensity':'every day intensity or 2 times a day',
        'lose.weight.intensity':'lose weight intensity',
        'lose.weight':'lose weight',
        'keep.weight':'keep weight',
        'gain.weight':'gain weight',
        'January':'January',
        'February':'February',
        'March':'March',
        'April':'April',
        'May':'May',
        'June':'June',
        'July':'July',
        'August':'August',
        'September':'September',
        'October':'October',
        'November':'November',
        'December':'December',
        'Sun':'Sun',
        'Mon':'Mon',
        'Tue':'Tue',
        'Wed':'Wed',
        'Thu':'Thu',
        'Fri':'Fri',
        'Sat':'Sat',
        'today':'Today'
    },

    'ru': {
        'food': 'Питание',
        'sport': 'Тренировки',
        'rest': 'Отдых',
        'calendar': 'Календарь',
        'settings': 'Настройки',
        'progress': 'Прогресс',
        'search': 'поиск',
        'weight': 'г',
        'sport.weight': 'какой вес',
        'sport.numbers': 'сколько раз',
        'sport.time': 'время',
        'calories': 'Калории',
        'protein': 'Белки',
        'carbohydrates': 'Углеводы',
        'fat': 'Жиры',
        'language': 'Язык',
        'done': 'Готово',
        'create.food': 'Добавить блюдо',
        'create.menu': 'Создать новое меню',
        'choose.menu': 'Выбрать меню',
        'choose.training': 'Выбрать тренировку',
        'menuName': 'название меню',
        'trainingName': 'название тренировки',
        'set': 'сет',
        '+set': '+сет',
        'kg': 'кг',
        'cm': 'см',
        'resp': 'повт',
        'daily.rate': 'Cуточная норма',
        'determine.daily.rate': 'Определить мою суточную норму',
        'added.meals': 'Добавленные блюда',
        'meals.name': 'Название',
        'create.exercise': 'Добавить упражнение',
        'added.exercise': 'Добавленные упражнения',
        'create.training.plan': 'Создать программу',
        'reset': 'СБРОС',
        'stop': 'СТОП',
        'resume': 'ПУСК',
        'start': 'ПУСК',
        'sex': 'Пол',
        'age': 'Возраст',
        'height': 'Рост',
        'mass': 'Вес',
        'years': 'лет',
        'activity.level': 'Уровень активности',
        'point': 'Цель',
        'ccal': 'ккал',
        'name': 'Название',
        'menu': 'меню'
        'minimum':'минимум или отсутствие',
        '3times':'3 раза в неделю',
        '5times':'5 раз в неделю',
        '5times.intensity':'интенсивно 5 раз в неделю',
        'every.day':'каждый день',
        'every.day.intensity':'интенсивно каждый день или 2 раза в день',
        'lose.weight.intensity':'интенсивно худеть',
        'lose.weight':'худеть',
        'keep.weight':'сохранять текущий вес',
        'gain.weight':'набирать',
        'January':'Январь',
        'February':'Февраль',
        'March':'Март',
        'April':'Апрель',
        'May':'Май',
        'June':'Июнь',
        'July':'Июль',
        'August':'Август',
        'September':'Сентябрь',
        'October':'Октябрь',
        'November':'Ноябрь',
        'December':'Декабрь',
        'Sun':'Вс',
        'Mon':'Пн',
        'Tue':'Вт',
        'Wed':'Ср',
        'Thu':'Чт',
        'Fri':'Пт',
        'Sat':'Сб',
        'today':'Сегодня'
    }
}
