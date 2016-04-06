import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router}from 'angular2/router';

@Component({
    selector: 'op-start',
    directives: [ROUTER_DIRECTIVES],
    providers: [],
    pipes: [],
    styles: [`
  .startPage_navigator {
    position: absolute;
  width: 30vw;
  display: flex;
  top: 0;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  left: 35vw;
  overflow: hidden;
  }
  .startPage_Buttons {
    position: relative;
  width: 27vw;
  height: 27vw;
  margin: auto;
  margin-top: 5vw;
  margin-bottom: 5vw;
  }
  .startPage_food {
    background: url('./src/img/food.png') no-repeat center center;
    background-size: cover;
  }
  .startPage_sport {
    background: url('./src/img/sport.png') no-repeat center center;
    background-size: cover;
  }
  .startPage_rest {
    background: url('./src/img/rest.png') no-repeat center center;
    background-size: cover;
  }
  .startPage_user {
    background: url('./src/img/user.png') no-repeat center center;
    background-size: cover;
  }
      `],
    template: `
    <nav class="startPage_navigator">
      <div (touchend)="toggle('Food')">
        <div class="startPage_food startPage_Buttons"></div>
      </div>
      <div (touchend)="toggle('Sport')">
        <div class="startPage_Buttons startPage_sport"></div>
      </div>
      <!-- <div (touchend)="toggle('Rest')">
        <div class="startPage_Buttons startPage_rest"></div>
      </div> -->
      <div (touchend)="toggle('User')">
        <div class="startPage_Buttons startPage_user"></div>
      </div>
    </nav>
    `
})
export class StartComponent {
    constructor(private _router: Router) {
    }
    toggle(route){
      this._router.navigate([route])
    }
}
