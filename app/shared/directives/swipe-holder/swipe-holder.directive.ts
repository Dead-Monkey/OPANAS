import {Directive, Input, Output, EventEmitter} from 'angular2/core';
@Directive({
    selector: '[fmSwipe]',
    host: {
        '(touchstart)': 'start($event)',
        '(touchmove)': 'move($event)',
        '(touchend)': 'move($event);end($event)'
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
    private xNew;
    private yNew;
    private last;

    constructor() { }

    start(evt) {
        this.xStart = evt.touches[0].clientX;
        this.yStart = evt.touches[0].clientY;
    }

    move(evt) {
        if (evt.type === 'touchend') {
            return this.fmSwipe.emit(['swipeEnd', this.xNew, this.yNew, evt]);

        }
        if (!this.xStart || !this.yStart) {
            return;
        }
        this.xNew = evt.touches[0].clientX;
        this.yNew = evt.touches[0].clientY;
        let xDiff = this.xStart - this.xNew;
        let yDiff = this.yStart - this.yNew;
        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) {
                this.fmSwipe.emit(['leftSwipe', this.xNew, this.yNew, evt]);
                this.fmSwipeLeft.emit(['leftSwipe', this.xNew, evt]);
            }
            else {
                this.fmSwipe.emit(['rightSwipe', this.xNew, this.yNew, evt]);
                this.fmSwipeRight.emit(['rightSwipe', this.xNew, evt]);
            }
        }
        else {
            if (yDiff > 0) {
                this.fmSwipe.emit(['upSwipe', this.xNew, this.yNew, evt]);
                this.fmSwipeUp.emit(['upSwipe', this.yNew, evt]);
            }
            else {
                this.fmSwipe.emit(['downSwipe', this.xNew, this.yNew, evt]);
                this.fmSwipeDown.emit(['downSwipe', this.yNew, evt]);
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
