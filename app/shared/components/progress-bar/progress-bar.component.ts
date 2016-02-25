import {Component, Input} from 'angular2/core';

@Component({
    selector: 'fm-progress-bar',
    directives: [],
    providers: [],
    pipes: [],
    styles: [`
.progress_container {
width: 80vw;
height: 20px;
position: relative;
margin-top: 10px;
left:10vw;
background-color: gray;
box-sizing: border-box;
border: 5px solid black;
border-radius: 5px;

}
.progress_mainLine {
  position:absolute;
  top:0;
  left:0;
  background-color: red;
  height: 100%;
}
.progress_secondLine {
  position: absolute;
  top:0;
  left:0;
  background-color: blue;
  height: 100%;
}    `],
    template: `
<div class="progress_container">
  <div class="progress_secondLine" [style.width.%]="getSecondLine()">
  </div>
  <div class="progress_mainLine" [style.width.%]="getMainLine()">
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
