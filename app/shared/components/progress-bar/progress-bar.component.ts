import {Component, Input, OnChanges, SimpleChange} from 'angular2/core';
import {Router}from 'angular2/router';


@Component({
    selector: 'fm-progress-bar',
    directives: [],
    providers: [],
    pipes: [],
    styles: [`
.progress_container {
  width: 90vw;
  height: 16px;
  position: relative;
  left: 5vw;
  background-color: rgba(49, 51, 61, 0.7);
  box-sizing: border-box;
  border:3px solid #0C1017;
  border-radius: 10px;
  z-index: 1;
}
.progress_mainLine {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #E48426;
  height: 100%;
  border-radius: 5px;
  text-align: center;
  color: #181A21;
  font-size: 3vw;
}
.progress_secondLine {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #2a2b2d;
  height: 100%;
  border-radius: 5px;
  text-align: right;
  color: #E48426;
  font-size: 4vw;
}
.progress_barHeader {
  text-align: center;
  color: #E48426;
  font-size: 4vw;
}
.numbers {
  position: absolute;
  color: #D0D9D9;
  height: 11px;
  width: 90vw;
  overflow: hidden;
  font-weight: bold;
  line-height: 11px;
}
 `],
    template: `
<div class="progress_barHeader" (touchend)="navigate()">{{name|uppercase}}</div>
<div class="progress_container" [style.border-color]="(minNumber > maxNumber)?'red':''" (touchend)="navigate()">
  <div class="progress_secondLine" [style.width.%]="secondLine">
  </div>
  <div class="progress_mainLine" [style.width.%]="mainLine">
    <div class="numbers">{{minNumber}} / {{maxNumber}}</div>
  </div>

</div>
    `

})
export class ProgressBar implements OnChanges {
    @Input() private name: string;
    @Input() private mainLine: number;
    @Input() private secondLine: number;
    @Input() private maxNumber: number = 0;
    @Input() private minNumber: number = 0;
    @Input() private goSettings: boolean = false;
    constructor(private _router: Router) { }
    ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
        if (changes['mainLine']) {
            if (isNaN(changes['mainLine'].currentValue)) {
                this.mainLine = 0;
            }
            if (changes['mainLine'].currentValue > 100 || this.mainLine > 100) {
                this.mainLine = 100;
            }
        }

        if (changes['secondLine']) {
            if (isNaN(changes['secondLine'].currentValue)) {
                this.secondLine = 0;
            }
            if (changes['secondLine'].currentValue > 100 || this.secondLine > 100) {
                this.secondLine = 100;
            }
        }

        if (changes['maxNumber']) {
            if (isNaN(changes['maxNumber'].currentValue)) {
                this.maxNumber = 0;
            }
        }
        if (changes['minNumber']) {
            if (isNaN(changes['minNumber'].currentValue)) {
                this.minNumber = 0;
            }
        }

    }
    navigate() {
      if(this.goSettings){
        this._router.navigate(['User'])
      }
    }

}
