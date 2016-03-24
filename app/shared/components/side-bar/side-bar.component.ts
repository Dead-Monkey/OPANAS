import {Component, Input, Output, EventEmitter}from 'angular2/core';
import {ROUTER_DIRECTIVES}from 'angular2/router';
import {TranslatePipe} from '../../services/translate/translate.service';

@Component({
    selector: 'fm-side-bar',
    directives: [ROUTER_DIRECTIVES],
    providers: [],
    pipes: [TranslatePipe],
    styles: [`
    .sideBarContainer {
      position: absolute;
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: center;
      height: 100vh;
      width: 250px;
      top: 0;
      z-index: 999;
      background-color: #3f414a;
      overflow-x: hidden;
      overflow-y: scroll;
      left:-250px;

  }
  .sideBarAnime{
    transition: transform 1s, opacity 1s;
    opacity:0.9;
    transform: translate3d(250px,0,0)
  }
  .sideBarAnimeBack{
    transition: transform 1s;
    transform: translate3d(-250px,0,0)
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
    z-index: 999;
  }
  .sideBarSwipePlace {
    position: fixed;
    top:0;
    left:0;
    background-color: black;
    height:100vh;
    width:10vw;
    z-index: 998;

  }

  p {
    position: absolute;;
    margin-top: 23vw;
    left: 10vw;
    color: #ff9d2d;
    font-size: 6vw;
    width: 50vw;
    overflow: hidden;
  }

  .sidebar_button {
    background-size: cover;
    box-sizing: border-box;
    width: 22vw;
    height: 22vw;
    text-align: center;
    text-decoration: none;
    margin-top: 5vw;
    margin-bottom: 7vw;

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
.sideBarSwipePlaceBig{
  width:100vw;
}
  `],
    template: `
<div *ngIf="!isOpen" class="sideBar_toggle" (click)="toggle()"></div>

<div class="sideBarContainer" [ngClass]="{sideBarAnime:pushClass, sideBarAnimeBack:pullClass}" [style.transform]="pushClass?'':'translate3d('+lastTouch+'px,0,0)'" (touchmove)="swipe($event)" (touchend)="swipe($event)">
  <a [routerLink]="['Food']" (click)="toggle()" class="sidebar_foodButton sidebar_button">
    <p>{{'food' | translate}}</p>
  </a>
  <a [routerLink]="['Sport']" (click)="toggle()" class="sidebar_sportButton sidebar_button">
    <p>{{'sport' | translate}}</p>
  </a>
  <a [routerLink]="['Rest']" (click)="toggle()" class="sidebar_restButton sidebar_button">
    <p>{{'rest' | translate}}</p>
  </a>
  <a [routerLink]="['Calendar']" (click)="toggle()" class="sidebar_calendarButton sidebar_button">
    <p>{{'calendar' | translate}}</p>
  </a>
  <a [routerLink]="['User']" (click)="toggle()" class="sidebar_userButton sidebar_button">
    <p>{{'settings' | translate}}</p>
  </a>
  </div>
<div class="sideBarSwipePlace" #swipePlace [style.opacity]="shadowOpacity" [ngClass]="{sideBarSwipePlaceBig: isOpen}"  (touchmove)="swipe($event)" (touchend)="swipe($event)" (click)="toggle(swipePlace)"></div>
  `
}
)
export class SideBar {
    @Input() isOpen: boolean;
    @Output() isOpenChange = new EventEmitter();
    private pusherTarget: number = 250
    private middle: number = this.pusherTarget / 2;
    private shadowOpacity: number = 0;
    private shadowOpacityTarget: number = 0.5;
    private lastTouch: number = 0;
    private pushClass: boolean = false
    private pullClass: boolean = true;
    constructor() { }
    toggle(arg) {
        if (!(arg && arg.className === 'sideBarSwipePlace')) {
            this.pushClass = !this.pushClass
            this.pullClass = !this.pullClass
            this.isOpen = !this.isOpen
            this.lastTouch = 0;

            if (this.isOpen) {
                this.shadowOpacity = this.shadowOpacityTarget
            } else {
                this.shadowOpacity = 0
            }
        }
    }

    swipe(evt) {
        this.isOpen = true;
        this.pushClass = false
        this.pullClass = false
        if (evt.type === 'touchmove' && evt.touches[0].clientX < this.pusherTarget) {
            if (this.lastTouch < evt.touches[0].clientX && this.shadowOpacity < this.shadowOpacityTarget) {
                this.shadowOpacity = this.shadowOpacity + 0.01
            } else if (this.shadowOpacity > 0) {
                this.shadowOpacity = this.shadowOpacity - 0.01
            }
            this.lastTouch = evt.touches[0].clientX
        }
        if (evt.type === 'touchend') {
            if (this.lastTouch > this.middle) {
              this.pullClass = false
                this.pushClass = true
                this.shadowOpacity = this.shadowOpacityTarget;
                this.isOpen = true;
            }
            if (this.lastTouch < this.middle) {
              this.pushClass = false
                this.pullClass = true
                this.shadowOpacity = 0;
                this.lastTouch = 0;
                this.isOpen = false;
            }
        }
    }
}
