import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {FoodComponent} from '../food-page/food.component';
import {SportComponent} from '../sport-page/sport.component';
import {RestComponent} from '../rest-page/rest.component';
import {StartComponent} from '../start-page/start.component';
import {SideBar} from '../../shared/components/side-bar/side-bar.component';

import {TranslateService, TranslatePipe} from '../../shared/services/translate/translate.service';

@Component({
    selector: 'opanas-app',
    directives: [ROUTER_DIRECTIVES, SideBar],
    providers: [ROUTER_PROVIDERS, TranslateService],
    pipes: [TranslatePipe],
    styles: [`
      .sideBar {
    color: red;
  }
      `],
    template: `
<fm-side-bar [isOpen]="sideBarIsOpen"></fm-side-bar>
<div (click)="goEn()">english</div>
<div (click)="goRu()">russian</div>
<div (click)="sideBarToggle()">sideBar</div>
<router-outlet></router-outlet>
<nav>
  <a [routerLink]="['Food']">{{"opanas.router.food" | translate}}</a>
  <a [routerLink]="['Sport']">{{"opanas.router.sport" | translate}}</a>
  <a [routerLink]="['Rest']">{{"opanas.router.rest" | translate}}</a>
</nav>
    `
})

@RouteConfig([
    { path: '/', name: 'Start', component: StartComponent, useAsDefault: true },
    { path: '/food', name: 'Food', component: FoodComponent },
    { path: '/sport', name: 'Sport', component: SportComponent },
    { path: '/rest', name: 'Rest', component: RestComponent },
    { path: '/*path', redirectTo: ['Start'] }
])
export class OpanasComponent implements OnInit {

    private sideBarIsOpen: boolean = false;

    constructor(private _translator: TranslateService) { }

    sideBarToggle() {
        this.sideBarIsOpen = !this.sideBarIsOpen;
    }

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
        'opanas.router.food': 'food',
        'opanas.router.sport': 'sport',
        'opanas.router.rest': 'rest'
    },

    'ru': {
        'opanas.router.food': 'еда',
        'opanas.router.sport': 'спорт',
        'opanas.router.rest': 'отдых'
    }
}
