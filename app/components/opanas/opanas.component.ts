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
  `],
    template: `
<div class="container">

  <div class="header">
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

    constructor(private _translator: TranslateService, private _calendarService: CalendarService, private _refreshDateService: RefreshDateService, private _userServe: UserService, private _AdMobServe: AdMobService) { }
    bla() {
        location.reload();
    }
    //config app
    ngOnInit() {
        //cordova plugins setup
        let onDeviceReady = () => {
            //keepAwake screen
            window.plugins.insomnia.keepAwake()
            //AdMob
            // this._AdMobServe.createBottomBanerFirst();
            this._AdMobServe.createInterstitialFirst();
            this._AdMobServe.prepareInterstitialFirst();
            setTimeout(() => this._AdMobServe.showInterstitialFirst(), 10000)
        }
        document.addEventListener("deviceready", onDeviceReady, false);

        //refresh-date
        this._refreshDateService.refresher();
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
        'menuName': 'menu name',
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
        'menu':'menu'

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
        'menuName': 'название меню',
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
        'menu':'меню'


    }
}
