import {Component, OnInit, provide} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {FoodComponent} from '../food-page/food.component';
import {SportComponent} from '../sport-page/sport.component';
import {RestComponent} from '../rest-page/rest.component';
import {StartComponent} from '../start-page/start.component';
import {SideBar} from '../../shared/components/side-bar/side-bar.component';
import {TranslateService, TranslatePipe} from '../../shared/services/translate/translate.service';
import {FoodService} from '../../services/food/food.service';
import {CalendarService, Day} from '../../services/calenadar/calendar.service';
import {RefreshDateService} from '../../services/refresh-date/refresh-date.service';
import {StorageService} from '../../shared/services/storage/storage.service';

@Component({
    selector: 'opanas-app',
    directives: [ROUTER_DIRECTIVES, SideBar],
    providers: [ROUTER_PROVIDERS, provide(LocationStrategy,
        { useClass: HashLocationStrategy }), TranslateService, FoodService, CalendarService, RefreshDateService, StorageService],
    pipes: [TranslatePipe],
    styles: [`
    .header{
    height: 50px;
    width: 100vw;
    }
		.container {
      background: url(./src/img/tempBackground.png) no-repeat center center;
      width: 100%;
      height: 100%;
    }

  .temporary {
    position: absolute;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background-color: green;
    right: 0;
    top: 0;
    height: 50px;
    width: 100px;
    opacity: 0.3;
  }
  `],
    template: `
<div class="container">

  <div class="header">
    <div class="temporary">
      <div (click)="goEn()">english</div>
      <div (click)="goRu()">russian</div>
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
    { path: '/*path', redirectTo: ['Start'] }
])
export class OpanasComponent implements OnInit {

    private sideBarIsOpen: boolean = false;

    constructor(private _translator: TranslateService, private _calendarService: CalendarService, private _refreshDateService: RefreshDateService) { }

    //config app
    ngOnInit() {
        //translator config
        this._translator.setSupportLanguages(languages);
        this._translator.setKeys(keysVendor);
        //basic language of application
        this._translator.setCurrentLanguage('ru');
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
        'sport-page.title': 'sport pagie',
        'calories': 'calories',
        'protein': 'protein',
        'carbohydrates': 'carbohydrates',
        'fat': 'fat'
    },

    'ru': {
        'sport-page.title': 'спорт страничга',
        'calories': 'калории',
        'protein': 'белки',
        'carbohydrates': 'углеводы',
        'fat': 'жиры'
    }
}
