import {Component, Input, Output, EventEmitter}from 'angular2/core';
import {ROUTER_DIRECTIVES}from 'angular2/router';
import {SwipeHoldertDirective} from '../../directives/swipeHolder/swipe-holder.directive';


@Component({
    selector: 'fm-side-bar',
    directives: [ROUTER_DIRECTIVES, SwipeHoldertDirective],
    providers: [],
    pipes: [],
    styles: [`
    .sideBarContainer {
    position: absolute;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
    width: 70vw;
    left: 0;
    top: 0;
    z-index: 999;
    background-color: #3f414a;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .sideBar_toggle {
    position: absolute;
    top:0;
    left:5vw;
    background: url('./src/img/newMenu.png') no-repeat center center;
    background-size: cover;
    box-sizing: border-box;
    width: 15vw;
    height: 15vw;
    z-index: 998;
  }
  .sideBarSwipePlace {
    position: fixed;
    top:0;
    left:0;
    height:100vh;
    width:10vw;
    z-index: 997;
  }
  .sideBarShadow {
    position: absolute;
    height: 100vh;
    width: 30vw;
    left: 70vw;
    top: 0;
    background-color: black;
    opacity: 0.5;
    z-index:998;
  }
  p {
    position: relative;
    top: 17vw;
    color: #ff9d2d;
    font-size: 6vw;
  }

  .sidebar_button {
    background-size: cover;
    box-sizing: border-box;
    width: 22vw;
    height: 22vw;
    text-align: center;
    text-decoration: none;
  }
  .sidebar_foodButton {
    background: url('./src/img/food.png') no-repeat center center;
    background-size: cover;
  }
  .sidebar_sportButton {
    background: url('./src/img/sport.png') no-repeat center center;
    background-size: cover;
  }
  .sidebar_restButton {
    background: url('./src/img/rest.png') no-repeat center center;
    background-size: cover;
  }
  .sidebar_calendarButton {
    background: url('./src/img/calendar.png') no-repeat center center;
    background-size: cover;
  }
  .sidebar_userButton {
    background: url('./src/img/user.png') no-repeat center center;
    background-size: cover;
  }



  `], template: `
<div class="sideBar_toggle" (click)="toggle()"></div>

<div class="sideBarContainer" *ngIf="isOpen" fmSwipe (fmSwipeLeft)="toggle()" (fmSwipeRight)="toggle()">
  <a [routerLink]="['Food']" (click)="toggle()" class="sidebar_foodButton sidebar_button">
    <p>Food</p>
  </a>
  <a [routerLink]="['Sport']" (click)="toggle()" class="sidebar_sportButton sidebar_button">
    <p>Sport</p>
  </a>
  <a [routerLink]="['Rest']" (click)="toggle()" class="sidebar_restButton sidebar_button">
    <p>Rest</p>
  </a>
  <a [routerLink]="['Calendar']" (click)="toggle()" class="sidebar_calendarButton sidebar_button">
    <p>Calendar</p>
  </a>
  <a [routerLink]="['User']" (click)="toggle()" class="sidebar_userButton sidebar_button">
    <p>User</p>
  </a>
  </div>
  <div class="sideBarShadow"  *ngIf="isOpen" (click)="toggle()"></div>
<div *ngIf="!isOpen" class="sideBarSwipePlace" fmSwipe (fmSwipeLeft)="toggle()" (fmSwipeRight)="toggle()"></div>

  `
}
) export class SideBar {
    @Input() isOpen: boolean;
    @Output() isOpenChange = new EventEmitter();

    toggle() {
        this.isOpen = !this.isOpen;
        this.isOpenChange.emit(this.isOpen);
    }
}
