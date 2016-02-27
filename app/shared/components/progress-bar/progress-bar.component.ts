import {Component, Input} from 'angular2/core';

@Component({
    selector: 'fm-progress-bar',
    directives: [],
    providers: [],
    pipes: [],
    styles: [`
.progress_container {
width: 90vw;
height: 7vw;
position: relative;
margin-top: 10px;
left:5vw;
background-color: rgba(49, 51, 61, 0.7);
box-sizing: border-box;
border: 5px solid #0C1017;
border-radius: 10px;

}
.progress_mainLine {
  position:absolute;
  top:0;
  left:0;
  background-color: #E48426;
  height: 100%;
  border-radius: 5px;
  text-align: center;
  color: #181A21;
  font-size: 4vw;
}
.progress_secondLine {
  position: absolute;
  top:0;
  left:0;
  background-color: #181A21;
  height: 100%;
  border-radius: 5px;
  text-align: right;
  /*padding-right: 5px;*/
  color: #E48426;
  font-size: 4vw;
}

 `],
    template: `
<div class="progress_container">
  <div class="progress_secondLine" [style.width.%]="getSecondLine()">
    +8
  </div>
  <div class="progress_mainLine" [style.width.%]="getMainLine()">
    1488
  </div>

</div>
    `

})
export class ProgressBar {
    @Input() private mainLine: number;
    @Input() private secondLine: number;

    getMainLine() {
        this.mainLine = (this.mainLine > 100) ? 100 : this.mainLine;
        return this.mainLine;
    }
    getSecondLine() {
        this.secondLine = (this.secondLine > 100) ? 100 : this.secondLine;
        return this.secondLine;
    }
}
