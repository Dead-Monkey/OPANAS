import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {FoodComponent} from '../foodPage/food.component';
import {SportComponent} from '../sportPage/sport.component';
import {RestComponent} from '../restPage/rest.component';
import {StartComponent} from '../startPage/start.component';

@Component({
    selector: 'opanas-app',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS],
    pipes: [],
    styles: ['.primary{color:red}'],
    template: `
      <router-outlet></router-outlet>
  <nav>
     <a [routerLink]="['Food']">FOOD</a>
     <a [routerLink]="['Sport']">SPORT</a>
     <a [routerLink]="['Rest']">REST</a>
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

export class OpanasComponent { }
