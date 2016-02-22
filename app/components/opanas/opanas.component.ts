import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {FoodComponent} from '../foodPage/food.component';
import {SportComponent} from '../sportPage/sport.component';
import {RestComponent} from '../restPage/rest.component';
import {StartComponent} from '../startPage/start.component';

import {TranslateService, TranslatePipe} from '../../shared/services/translate/translate.service';

@Component({
    selector: 'opanas-app',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, TranslateService],
    pipes: [TranslatePipe],
    styles: [`.primary{color:red;}`],
    template: `
    <div (click)="goEn()">english</div>
    <div (click)="goRu()">russian</div>
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

    constructor(private _translator: TranslateService) {}

    //config app
    ngOnInit() {
        this._translator.setLanguage('ru');
    }

    //replace this 2 userPage;
    goEn() {
        this._translator.setLanguage('en');
    }
    goRu() {
        this._translator.setLanguage('ru');
    }
}
