import {Component} from 'angular2/core';
import {TranslatePipe} from '../../shared/services/translate/translate.service';

@Component({
    selector: 'op-sport',
    directives: [],
    providers: [],
    pipes:[TranslatePipe],
    styles: [],
    template: `
    <h1 class="primary">{{"sport-page.title" | translate}}</h1>
    `

})
export class SportComponent { }
