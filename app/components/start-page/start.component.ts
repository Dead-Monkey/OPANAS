import {Component} from 'angular2/core';
import {  ROUTER_DIRECTIVES}from 'angular2/router';


@Component({
    selector: 'op-start',
    directives: [ROUTER_DIRECTIVES],
    providers: [],
    pipes:[],
    styles: [`
      .startPage_navigator {
        display: flex;
        flex-flow: column nowrap;
        position: absolute;
        justify-content: space-around;
        align-items: center;
        width: 30vw;
        height: 100vh;
        bottom: 0;
        left: 35vw;
        overflow: hidden;
        background-color: silver;
      }
      .startPage_foodButton {
      background: url('./src/img/food.png') no-repeat center center;
      background-size: cover;
      box-sizing: border-box;
      width: 27vw;
      height: 27vw;
    }
    .startPage_sportButton {
      background: url('./src/img/sport.png') no-repeat center center;
      background-size: cover;
      box-sizing: border-box;
      width: 27vw;
      height: 27vw;
    }
    .startPage_restButton {
      background: url('./src/img/rest.png') no-repeat center center;
      background-size: cover;
      box-sizing: border-box;
      width: 27vw;
      height: 27vw;
    }
      `],
    template: `
    <nav class="startPage_navigator">
      <a [routerLink]="['Food']">
        <div class="startPage_foodButton"></div>
      </a>
      <a [routerLink]="['Sport']">
        <div class="startPage_sportButton"></div>
      </a>
      <a [routerLink]="['Rest']">
        <div class="startPage_restButton"></div>
      </a>
    </nav>
    `
})
export class StartComponent { }
