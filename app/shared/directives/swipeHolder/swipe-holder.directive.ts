import {Directive, ElementRef, Input, Output, EventEmitter} from 'angular2/core';
@Directive({
    selector: '[fmSwipe]',
    host: {
        '(touchstart)': 'start($event)',
        '(touchmove)': 'move($event)',
        '(touchend)': 'end($event)'
    }
})
export class SwipeHoldertDirective {

    @Output() fmSwipe = new EventEmitter();
    @Output() fmSwipeRight = new EventEmitter();
    @Output() fmSwipeLeft = new EventEmitter();
    @Output() fmSwipeDown = new EventEmitter();
    @Output() fmSwipeUp = new EventEmitter();

    private xStart;
    private yStart;

    constructor(el: ElementRef) { }

    start(evt) {
        this.xStart = evt.touches[0].clientX;
        this.yStart = evt.touches[0].clientY;
    }

    move(evt) {
        if (!this.xStart || !this.yStart) {
            return;
        }
        let xNew = evt.touches[0].clientX;
        let yNew = evt.touches[0].clientY;
        let xDiff = this.xStart - xNew;
        let yDiff = this.yStart - yNew;
        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) {
                this.fmSwipe.emit(['leftSwipe', xNew, yNew, evt]);
                this.fmSwipeLeft.emit(['leftSwipe', xNew, evt]);
            }
            else {
                this.fmSwipe.emit(['rightSwipe', xNew, yNew, evt]);
                this.fmSwipeRight.emit(['rightSwipe', xNew, evt]);
            }
        }
        else {
            if (yDiff > 0) {
                this.fmSwipe.emit(['upSwipe', xNew, yNew, evt]);
                this.fmSwipeUp.emit(['upSwipe', yNew, evt]);
            }
            else {
                this.fmSwipe.emit(['downSwipe', xNew, yNew, evt]);
                this.fmSwipeDown.emit(['downSwipe', yNew, evt]);
            }
        }
        this.xStart = evt.touches[0].clientX;
        this.yStart = evt.touches[0].clientY;
    }
    end(evt) {
        this.xStart = null;
        this.yStart = null;
    }
}
