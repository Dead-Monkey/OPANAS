import {Component, Input, Output, EventEmitter}from 'angular2/core';
import {ROUTER_DIRECTIVES, Router}from 'angular2/router';
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
      justify-content: center;
      align-items: center;
      height: 100vh;
      width: 250px;
      top: 0;
      z-index: 999;
      background-color: #3f414a;
      overflow-x: hidden;
      overflow-y: scroll;
      left:-250px;
      user-select: none;
     -webkit-user-select: none;

  }
  .sideBarAnime{
    transition-duration: 500ms;
    -webkit-transition-duration: 500ms;
    transform: translate3d(250px,0,0);
    -webkit-transform: translate3d(250px,0,0);
  }
  .sideBarAnimeBack{
    transition-duration: 500ms;
    -webkit-transition-duration: 500ms;
    transform: translate3d(-250px,0,0);
    -webkit-transform: translate3d(-250px,0,0);
  }
  .sideBar_toggle {
    position: absolute;
    top:1vw;
    left:5vw;
    background: url('./src/img/newMenu.png') no-repeat center center;
    background-size: cover;
    box-sizing: border-box;
    border: 2px solid #ff9d2d;
    border-radius: 50%;
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
    z-index: 997;

  }

  p {
    position: absolute;
    margin-top: 23vw;
    left: 9%;
    right: 9%;
    color: #ff9d2d;
    font-size: 6vw;
    overflow: hidden;
  }

  .sidebar_button {
    background-size: cover;
    box-sizing: border-box;
    width: 22vw;
    height: 22vw;
    text-align: center;
    text-decoration: none;
    margin-top: 7vw;
    margin-bottom: 11vw;
    box-sizing: border-box;
    border: 2px solid #ff9d2d;
    border-radius: 50%;
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
.sideBar_close{
  position:absolute;
  left:0;
  top:0;
  width:100vw;
  height:100vh;
  z-index:998;
}
  `],
    template: `
<div *ngIf="!isOpen" class="sideBar_toggle" (click)="toggle()"></div>

<div class="sideBarContainer" [ngClass]="{sideBarAnime:pushClass, sideBarAnimeBack:pullClass}" [style.transform]="pushClass?'':'translate3d('+lastTouch+'px,0,0)'" [style.-webkit-transform]="pushClass?'':'translate3d('+lastTouch+'px,0,0)'" (touchmove)="swipe($event)" (touchend)="swipe($event)">
  <div class="sidebar_foodButton sidebar_button" (touchend)="toggle('Food')">
    <p>{{'food' | translate}}</p>
  </div>
  <div class="sidebar_sportButton sidebar_button" (touchend)="toggle('Sport')">
    <p>{{'sport' | translate}}</p>
  </div>
  <!-- <div class="sidebar_restButton sidebar_button" (touchend)="toggle('Rest')">
    <p>{{'rest' | translate}}</p>
  </div> -->
  <div class="sidebar_calendarButton sidebar_button" (touchend)="toggle('Calendar')">
    <p>{{'calendar' | translate}}</p>
  </div>
  <div class="sidebar_userButton sidebar_button" (touchend)="toggle('User')">
    <p>{{'settings' | translate}}</p>
  </div>
</div>
<div class="sideBarSwipePlace" #swipePlace [style.opacity]="shadowOpacity" [ngClass]="{sideBarSwipePlaceBig: isOpen}" (touchmove)="swipe($event)" (touchend)="swipe($event)"></div>

<div *ngIf="isOpen" class="sideBar_close" (click)="toggle()"></div>
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

    constructor(private _router: Router) {
    }

    toggle(route, toggle = true) {
        if (route) {
            this._router.navigate([route])
        }
        let evt = { 'type': 'touchend' }
        if (this.isOpen) {
            this.lastTouch = 0
        } else {
            this.lastTouch = this.pusherTarget
        }
        this.swipe({ 'type': 'touchend' }, toggle)
    }

    swipe(evt, toggle = false) {
        if (!toggle) {
            evt.preventDefault();
        }
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
