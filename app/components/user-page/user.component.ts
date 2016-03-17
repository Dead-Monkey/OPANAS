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
    <div style="margin-left:10vw">
<div>
{{'calories'|translate}}
<input #calories class="" type="number" min="0" [(ngModel)]="sets?.foodSets?.calories['full']" (blur)="changeSets()">
<br>
<br>
{{'protein'|translate}}
<input #protein class="" type="number" min="0" [(ngModel)]="sets?.foodSets?.protein['full']" (blur)="changeSets()">

<br>
<br>
{{'fat'|translate}}
<input #fat class="" type="number" min="0" [(ngModel)]="sets?.foodSets?.fat['full']" (blur)="changeSets()">

<br>
<br>
{{'carbohydrates'|translate}}
<input #carbohydrates class="" type="number" min="0" [(ngModel)]="sets?.foodSets?.carbohydrates['full']" (blur)="changeSets()">

<br>
<br>
{{'language'|translate}}
<div (click)="changeLang('en')">english</div>
<div (click)="changeLang('ru')">russian</div>
</div>
</div>
    `

})
export class UserComponent implements OnInit {
    private sets: Object;
    constructor(private _userServe: UserService, private _translator: TranslateService) { }
    ngOnInit() {
        this.sets = this._userServe.getUserSets();
    }

    changeLang(lang) {
        this._userServe.setLanguage(lang)
        this._translator.setCurrentLanguage(this._userServe.getLanguage())
    }
    changeSets() {
        this._userServe.refreshUser();
    }
}
