import {Component, Input} from 'angular2/core';

@Component({
    selector: 'fm-side-bar',
    directives: [],
    providers: [],
    pipes: [],
    styles: [`
.sideBarContainer {
  position: absolute;
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
<div class="sideBarContainer" *ngIf="isOpen">bar</div>
<div class="sideBarShadow" *ngIf="isOpen" (click)="toggle()"></div>
    `

})
export class SideBar {
    @Input() isOpen: boolean;

    toggle() {
        this.isOpen = !this.isOpen;
    }

}
