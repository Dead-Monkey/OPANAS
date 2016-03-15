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
    background-color: gray;
  }
  .sideBar_toggle {
    position: absolute;
    top:0;
    left:5vw;
    background: url('./src/img/menu-icon.png') no-repeat center center;
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
    // background-color: silver;
    // opacity:0.5;
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
  `], template: `
<div class="sideBar_toggle" (click)="toggle()"></div>

<div class="sideBarContainer" *ngIf="isOpen" fmSwipe (fmSwipeLeft)="toggle()" (fmSwipeRight)="toggle()">
  <a [routerLink]="['Food']" (click)="toggle()">
     {{"opanas.router.food"}}
  </a>
  <a [routerLink]="['Sport']" (click)="toggle()">
     {{"opanas.router.sport"}}
  </a>
  <a [routerLink]="['Rest']" (click)="toggle()">
     {{"opanas.router.rest"}}
  </a>
   <a [routerLink]="['Calendar']" (click)="toggle()">
       {{"calendar"}}
    </a>
  <div class="sideBarShadow" (click)="toggle()"></div>
</div>

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
