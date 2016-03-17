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
<br>
{{'protein'|translate}}
<input #protein class="" type="number" min="0" [(ngModel)]="foodSets?.protein['full']" (input)="bla(protein.value)">

<br>
<br>
{{'fat'|translate}}
<input #fat class="" type="number" min="0" [(ngModel)]="foodSets?.fat['full']" (input)="bla(fat.value)">

<br>
<br>
{{'carbohydrates'|translate}}
<input #carbohydrates class="" type="number" min="0" [(ngModel)]="foodSets?.carbohydrates['full']" (input)="bla(carbohydrates.value)">

<br>
<br>
{{'language'|translate}}
<div (click)="goEn()">english</div>
<div (click)="goRu()">russian</div>
</div>
    `

})
export class UserComponent implements OnInit {
      bla( a) {
            console.log(a);
      }
      private foodSets: Object;
    constructor(private _userServe:  UserService, private _translator: TranslateService) { }
    ngOnInit() {
          this.foodSets = this._userServe.getUserFoodSets();
    }

    goEn() {
        this._translator.setCurrentLanguage('en');
    }
    goRu() {
        this._translator.setCurrentLanguage('ru');
    }
}
