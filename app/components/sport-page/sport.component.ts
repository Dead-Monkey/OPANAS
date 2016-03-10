import {Component, OnInit} from 'angular2/core';
import {TranslatePipe} from '../../shared/services/translate/translate.service';

@Component({
    selector: 'op-sport',
    directives: [],
    providers: [],
    pipes: [TranslatePipe],
    styles: [],
    template: `
    <h1 class="primary">{{"sport-page.title" | translate}}</h1>
    <div>constructor timeout 5sec: {{test1}}</div>
    <hr>
    <div>constructor: {{test2}}</div>
    <hr>
    <div>onInit timeout 10sec: {{test3}}</div>
    <hr>
    <div>onInit: {{test4}}</div>
    <hr>
    <div> time is: {{date}}:{{dateM}}</div>
    <hr>
    <div>{{dateBig}}</div>
    <hr>
    <div>time 2 reload: {{timer}} hours</div>
    `

})
export class SportComponent implements OnInit {
    private test1;
    private test2: number = 1;
    private test3;
    private test4: number = 1;
    private date = new Date().getHours()
    private dateM = new Date().getMinutes()
    private dateBig = new Date();
    private today;
    private tomorrow;
    private timer;
    constructor() {
        setTimeout(() => this.test1 = `timeout constructor 5sec`, 5000)
        setInterval(() => this.test2++, 1000);
        this.timerMaker();
    }
    ngOnInit() {
        setTimeout(() => this.test3 = `timeout constructor 10sec`, 10000)
        setInterval(() => this.test4++, 1000);
    }
    timerMaker() {
        this.today = new Date();
        this.tomorrow = new Date();
        this.tomorrow.setHours(0, 0, 0, 0);
        this.tomorrow.setDate(this.today.getDate() + 1);
        this.timer = (this.tomorrow.getTime() - this.today.getTime())/1000/60/60;

    }
}
