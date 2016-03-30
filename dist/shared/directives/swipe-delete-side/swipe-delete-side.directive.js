System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var SwipeDeleteSideDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SwipeDeleteSideDirective = (function () {
                function SwipeDeleteSideDirective(_el) {
                    this._el = _el;
                    this.fmSwipeDeleteSide = new core_1.EventEmitter();
                    this.shadowOpacityTarget = 0.3;
                    this.lastTouch = { x: 0, y: 0 };
                    this.pusher = 0;
                    this.pusherTarget = 100;
                    this._el.nativeElement.style.opacity = 1;
                }
                SwipeDeleteSideDirective.prototype.move = function (evt) {
                    if (evt.type === 'touchmove') {
                        if (evt.touches[0].clientX - 2 > this.lastTouch.x) {
                            evt.preventDefault();
                            this._el.nativeElement.style.transform = 'translate3d(' + this.pusher + 'px,0,0)';
                            this._el.nativeElement.style['-webkit-transform'] = 'translate3d(' + this.pusher + 'px,0,0)';
                            if (this._el.nativeElement.style.opacity > this.shadowOpacityTarget) {
                                this._el.nativeElement.style.opacity = this._el.nativeElement.style.opacity - 0.01;
                            }
                            this.pusher = this.pusher + 4;
                        }
                        else if (evt.touches[0].clientX + 2 < this.lastTouch.x) {
                            evt.preventDefault();
                            this._el.nativeElement.style.transform = 'translate3d(' + this.pusher + 'px,0,0)';
                            this._el.nativeElement.style['-webkit-transform'] = 'translate3d(' + this.pusher + 'px,0,0)';
                            if (this._el.nativeElement.style.opacity > this.shadowOpacityTarget) {
                                this._el.nativeElement.style.opacity = this._el.nativeElement.style.opacity - 0.01;
                            }
                            this.pusher = this.pusher - 4;
                        }
                        this.lastTouch.x = evt.touches[0].clientX;
                    }
                    if (evt.type === 'touchend') {
                        if (this.pusher > this.pusherTarget || this.pusher < -this.pusherTarget) {
                            this.fmSwipeDeleteSide.emit('close');
                            console.log("end");
                        }
                        else {
                            this.pusher = 0;
                            this._el.nativeElement.style.transform = 'translate3d(' + this.pusher + 'px,0,0)';
                            this._el.nativeElement.style['-webkit-transform'] = 'translate3d(' + this.pusher + 'px,0,0)';
                            this._el.nativeElement.style.opacity = 1;
                        }
                        this.lastTouch.x = 0;
                    }
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], SwipeDeleteSideDirective.prototype, "fmSwipeDeleteSide", void 0);
                SwipeDeleteSideDirective = __decorate([
                    core_1.Directive({
                        selector: '[fmSwipeDeleteSide]',
                        host: {
                            '(touchmove)': 'move($event)',
                            '(touchend)': 'move($event)'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], SwipeDeleteSideDirective);
                return SwipeDeleteSideDirective;
            }());
            exports_1("SwipeDeleteSideDirective", SwipeDeleteSideDirective);
        }
    }
});
//# sourceMappingURL=swipe-delete-side.directive.js.map