import {Component, OnInit} from 'angular2/core';
import {CalendarService, Day} from '../../services/calenadar/calendar.service';
import {UserService} from '../../services/user/user.service';
import {TranslateService, TranslatePipe} from '../../shared/services/translate/translate.service';

@Component({
    selector: 'op-user',
    directives: [],
    providers: [],
    pipes: [TranslatePipe],
    styles: [`

      `],
    template: `
<div >
{{'calories'|translate}}
<input #calories class="" type="number" min="0" [(ngModel)]="foodSets?.calories['full']" (input)="bla(calories.value)">
<br>
{{'protein'|translate}}
{{foodSets?.protein['full']}}
<br>
{{'fat'|translate}}
{{foodSets?.fat['full']}}
<br>
{{'carbohydrates'|translate}}
{{foodSets?.carbohydrates['full']}}
<br>
{{'carbohydrates'|translate}}
{{foodSets?.carbohydrates['full']}}
</div>
    `

})
export class UserComponent implements OnInit {
  bla(a){
    console.log(a);
  }
  private foodSets:Object;
    constructor(private _userServe:UserService,private _translator: TranslateService) { }
    ngOnInit() {
      this.foodSets = this._userServe.getUserFoodSets();
    }
}
