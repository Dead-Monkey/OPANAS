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
    z-index: 998;
  }
  .sideBarShadow {
    position: absolute;
    height: 100vh;
    width: 100vw;
    left: 0;
    top: 0;
    background-color: black;
    opacity: 0.5;
    z-index:997;
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
.sidebar_locked{
  left:-70vw;
}
.sideBarSwipePlaceBig{
  width:100vw;
}
  `],
    template: `
<div *ngIf="!isOpen" class="sideBar_toggle" (click)="toggle()"></div>

<div class="sideBarContainer" [style.left.vw]="pusher" [ngClass]="{sideBarContainer:true, sidebar_locked:!isOpen}" *ngIf="isOpen" (fmSwipe)="swipe($event)">
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
<div class="sideBarSwipePlace" [ngClass]="{sideBarSwipePlaceBig:pusherTime}" (fmSwipe)="swipe($event)"></div>

  `
}
)
export class SideBar {
    @Input() isOpen: boolean;
    @Output() isOpenChange = new EventEmitter();
    private pusherStart: number = -70
    private pusher: number = this.pusherStart;
    private middle: number = this.pusherStart / 2;
    private pusherTime: boolean = false;
    private interval1;
    private interval2;

    toggle() {
        if (!this.isOpen) {
            this.pusher = this.middle;
        } else {
            this.pusher = this.middle - 1;
        }
        this.swipe(['swipeEnd'])
        this.isOpenChange.emit(this.isOpen);
    }
    swipe(evt) {
        this.pusherTime = true;
        if (this.interval1 || this.interval2) {
            clearInterval(this.interval1)
            clearInterval(this.interval2)
        }
        if (evt[0] === 'swipeEnd') {
            this.isOpen = true;
            if (this.pusher >= this.middle) {
                  this.interval1 = setInterval(() => {
                      if (this.pusher < 0) {
                          this.pusher++
                      } else {
                          clearInterval(this.interval1);
                      }
                  }, 0)
            } else {
                this.interval2 = setInterval(() => {
                    if (this.pusher > this.pusherStart) {
                        this.pusher--
                    } else {
                        clearInterval(this.interval2);
                        this.isOpen = false;
                    }
                }, 0)
              }
            this.pusherTime = false;
        } else if (evt[0] === 'rightSwipe') {
            this.isOpen = true;
            if (this.pusher < 0) {
                this.pusher++;
            }
        } else if (evt[0] === 'leftSwipe') {
            this.isOpen = true;
            if (this.pusher > -70) {
                this.pusher--;
            }
        }
    }
}
