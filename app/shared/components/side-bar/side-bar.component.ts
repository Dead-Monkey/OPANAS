import {Component, Input, Output, EventEmitter}from 'angular2/core';
import {  ROUTER_DIRECTIVES}from 'angular2/router';
@Component({
    selector: 'fm-side-bar', directives: [ROUTER_DIRECTIVES], providers: [], pipes: [], styles: [`
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
  }
  .sideBarSwipePlace {
    position: fixed;
    top:0;
    left:0;
    background-color: silver;
    height:100vh;
    width:10vw;
    z-index: 999;
  }
  .sideBarShadow {
    position: absolute;
    height: 100vh;
    width: 30vw;
    left: 70vw;
    top: 0;
    background-color: black;
    opacity: 0.5;
  }
  `], template: `
<div class="sideBar_toggle" (click)="toggle()"></div>

<div class="sideBarContainer" *ngIf="isOpen" (touchmove)="move($event)" (touchstart)="start($event)" (touchend)="end($event)">
  <a [routerLink]="['Food']">
     {{"opanas.router.food"}}
  </a>
  <a [routerLink]="['Sport']">
     {{"opanas.router.sport"}}
  </a> <a [routerLink]="['Rest']">
     {{"opanas.router.rest"}}
  </a>
  <div class="sideBarShadow" (click)="toggle()"></div>
</div>

<div *ngIf="!isOpen" class="sideBarSwipePlace" (touchmove)="move($event)" (touchstart)="start($event)" (touchend)="end($event)"></div>
    `
}
) export class SideBar {
    @Input() isOpen: boolean;
    @Output() isOpenChange = new EventEmitter();
    private xDown;
    private yDown;

    start(evt) {
        this.xDown = evt.touches[0].clientX;
        this.yDown = evt.touches[0].clientY;
        console.log(`start`, evt, screen.width, window.innerWidth);
    }

    move(evt) {
        console.log(event);
        if (!this.xDown || !this.yDown) {
            return;
        }
        let xUp = evt.touches[0].clientX;
        let yUp = evt.touches[0].clientY;
        let xDiff = this.xDown - xUp;
        let yDiff = this.yDown - yUp;
        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            /*most significant*/
            if (xDiff > 0) {
                /* left swip */
                console.log(`left swipe`);
                this.toggle();

            }
            else {
                /* right swipe */
                console.log(`right swipe`);
                this.toggle();
            }
        }
        else {
            if (yDiff > 0) {
                /* up swip */
                console.log(`up swipe`);
            }
            else {
                /* down swipe */
                console.log(`down swipe`);
            }
        }
        this.xDown = evt.touches[0].clientX;
        this.yDown = evt.touches[0].clientY;
    }
    end(evt) {
        /* reset values */
        this.xDown = null;
        this.yDown = null;
        console.log(`end`);
    }
    toggle() {
        this.isOpen = !this.isOpen;
        this.isOpenChange.emit(this.isOpen);
    }
}
