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
    var SwipeHoldertDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SwipeHoldertDirective = (function () {
                function SwipeHoldertDirective(el) {
                    this.fmSwipe = new core_1.EventEmitter();
                    this.fmSwipeRight = new core_1.EventEmitter();
                    this.fmSwipeLeft = new core_1.EventEmitter();
                    this.fmSwipeDown = new core_1.EventEmitter();
                    this.fmSwipeUp = new core_1.EventEmitter();
                }
                SwipeHoldertDirective.prototype.start = function (evt) {
                    this.xStart = evt.touches[0].clientX;
                    this.yStart = evt.touches[0].clientY;
                };
                SwipeHoldertDirective.prototype.move = function (evt) {
                    if (!this.xStart || !this.yStart) {
                        return;
                    }
                    var xNew = evt.touches[0].clientX;
                    var yNew = evt.touches[0].clientY;
                    var xDiff = this.xStart - xNew;
                    var yDiff = this.yStart - yNew;
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
                };
                SwipeHoldertDirective.prototype.end = function (evt) {
                    this.xStart = null;
                    this.yStart = null;
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], SwipeHoldertDirective.prototype, "fmSwipe", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], SwipeHoldertDirective.prototype, "fmSwipeRight", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], SwipeHoldertDirective.prototype, "fmSwipeLeft", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], SwipeHoldertDirective.prototype, "fmSwipeDown", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], SwipeHoldertDirective.prototype, "fmSwipeUp", void 0);
                SwipeHoldertDirective = __decorate([
                    core_1.Directive({
                        selector: '[fmSwipe]',
                        host: {
                            '(touchstart)': 'start($event)',
                            '(touchmove)': 'move($event)',
                            '(touchend)': 'end($event)'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], SwipeHoldertDirective);
                return SwipeHoldertDirective;
            }());
            exports_1("SwipeHoldertDirective", SwipeHoldertDirective);
        }
    }
});
//# sourceMappingURL=swipe-holder.directive.js.map