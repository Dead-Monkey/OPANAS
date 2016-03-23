import {Directive, ElementRef, Input, Output, EventEmitter} from 'angular2/core';
@Directive({
    selector: '[fmSwipeDeleteSide]',
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
    private xNew;
    private yNew;
    private last;

    constructor(private _el: ElementRef) { }

    start(evt) {
    }

    move(evt) {
        console.log(this._el);
    }
    end(evt) {
    }
}
