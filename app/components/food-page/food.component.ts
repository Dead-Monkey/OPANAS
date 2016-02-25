import {Component} from 'angular2/core';
import {TranslatePipe} from '../../shared/services/translate/translate.service';
import {ProgressBar} from '../../shared/components/progress-bar/progress-bar.component';

@Component({
    selector: 'op-food',
    directives: [ProgressBar],
    providers: [],
    pipes:[TranslatePipe],
    styles: [],
    template: `
    <fm-progress-bar [mainLine]="120" [secondLine]="200"></fm-progress-bar>
    <fm-progress-bar [mainLine]="30" [secondLine]="40"></fm-progress-bar>
    <fm-progress-bar [mainLine]="70" [secondLine]="90"></fm-progress-bar>
    `
})
export class FoodComponent {
 }
