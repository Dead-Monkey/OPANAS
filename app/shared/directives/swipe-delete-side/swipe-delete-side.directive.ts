import {Directive, ElementRef, Input, Output, EventEmitter} from 'angular2/core';
@Directive({
    selector: '[fmSwipeDeleteSide]',
    host: {
        '(touchstart)': 'move($event)',
        '(touchmove)': 'move($event)',
        '(touchend)': 'end($event)',
          '(click)':'move($event)'
    }
})
export class SwipeDeleteSideDirective {

    @Output() fmSwipeDeleteSide = new EventEmitter();

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
      this.fmSwipeDeleteSide.emit('opa')
      this._el.nativeElement.style.left = '30vw'
        console.log(this._el.nativeElement);
    }
    end(evt) {
    }
}
