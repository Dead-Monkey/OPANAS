import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';


@Component({
    selector: 'fm-side-bar',
    directives: [ROUTER_DIRECTIVES],
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
.sideBarShadow {
  position: absolute;
  height: 100vh;
  width: 30vw;
  left: 70vw;
  top: 0;
  background-color: black;
  opacity: 0.2;
}
      `],
    template: `
<div class="sideBarContainer" *ngIf="isOpen">

  <a [routerLink]="['Food']">{{"opanas.router.food" }}</a>
  <a [routerLink]="['Sport']">{{"opanas.router.sport" }}</a>
  <a [routerLink]="['Rest']">{{"opanas.router.rest" }}</a>

<div class="sideBarShadow"  (click)="toggle()"></div>

</div>
    `

})

export class SideBar {
    @Input() isOpen: boolean;
    @Output() isOpenChange = new EventEmitter();

    toggle() {
        this.isOpen = false;
        this.isOpenChange.emit(this.isOpen);
    }

}
