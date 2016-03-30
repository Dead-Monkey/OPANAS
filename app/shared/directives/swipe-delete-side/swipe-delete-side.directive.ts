import {Directive, ElementRef, Input, Output, EventEmitter} from 'angular2/core';
@Directive({
    selector: '[fmSwipeDeleteSide]',
    host: {
        '(touchmove)': 'move($event)',
        '(touchend)': 'move($event)'
    }
})
export class SwipeDeleteSideDirective {

    @Output() fmSwipeDeleteSide = new EventEmitter();

    private shadowOpacityTarget: number = 0.3;
    private lastTouch = { x: 0, y: 0 };
    private pusher: number = 0;
    private pusherTarget: number = 100

    constructor(private _el: ElementRef) {
        this._el.nativeElement.style.opacity = 1;
    }

    move(evt) {
        if (evt.type === 'touchmove') {
            if (evt.touches[0].clientX - 2> this.lastTouch.x) {
                evt.preventDefault();
                this._el.nativeElement.style.transform = 'translate3d(' + this.pusher + 'px,0,0)'
                this._el.nativeElement.style['-webkit-transform'] = 'translate3d(' + this.pusher + 'px,0,0)'
                if(this._el.nativeElement.style.opacity > this.shadowOpacityTarget){
                  this._el.nativeElement.style.opacity = this._el.nativeElement.style.opacity - 0.01
                }
                this.pusher = this.pusher + 4
            } else if (evt.touches[0].clientX + 2 < this.lastTouch.x) {
                evt.preventDefault();
                this._el.nativeElement.style.transform = 'translate3d(' + this.pusher + 'px,0,0)'
                this._el.nativeElement.style['-webkit-transform'] = 'translate3d(' + this.pusher + 'px,0,0)'
                if(this._el.nativeElement.style.opacity > this.shadowOpacityTarget){
                  this._el.nativeElement.style.opacity = this._el.nativeElement.style.opacity - 0.01
                }
                this.pusher = this.pusher - 4
            }
            this.lastTouch.x = evt.touches[0].clientX
        }
        if (evt.type === 'touchend') {
            if (this.pusher > this.pusherTarget || this.pusher < -this.pusherTarget) {
                this.fmSwipeDeleteSide.emit('close')
                console.log(`end`);
            } else {
                this.pusher = 0;
                this._el.nativeElement.style.transform = 'translate3d(' + this.pusher + 'px,0,0)'
                this._el.nativeElement.style['-webkit-transform'] = 'translate3d(' + this.pusher + 'px,0,0)'
                this._el.nativeElement.style.opacity = 1;
            }
            this.lastTouch.x = 0
        }
    }
}
