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
                function SwipeHoldertDirective(_el) {
                    this._el = _el;
                    this.fmSwipe = new core_1.EventEmitter();
                    this.fmSwipeRight = new core_1.EventEmitter();
                    this.fmSwipeLeft = new core_1.EventEmitter();
                    this.fmSwipeDown = new core_1.EventEmitter();
                    this.fmSwipeUp = new core_1.EventEmitter();
                }
                SwipeHoldertDirective.prototype.start = function (evt) {
                };
                SwipeHoldertDirective.prototype.move = function (evt) {
                    console.log(this._el);
                };
                SwipeHoldertDirective.prototype.end = function (evt) {
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
                        selector: '[fmSwipeDeleteSide]',
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
//# sourceMappingURL=swipe-delete-side.js.map