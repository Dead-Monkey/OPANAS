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
                    this.fmSwipeRight = new core_1.EventEmitter();
                    this.fmSwipeLeft = new core_1.EventEmitter();
                    this.fmSwipeDown = new core_1.EventEmitter();
                    this.fmSwipeUp = new core_1.EventEmitter();
                }
                SwipeDeleteSideDirective.prototype.start = function (evt) {
                };
                SwipeDeleteSideDirective.prototype.move = function (evt) {
                    this.fmSwipeDeleteSide.emit('opa');
                    this._el.nativeElement.style.left = '30vw';
                    console.log(this._el.nativeElement);
                };
                SwipeDeleteSideDirective.prototype.end = function (evt) {
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], SwipeDeleteSideDirective.prototype, "fmSwipeDeleteSide", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], SwipeDeleteSideDirective.prototype, "fmSwipeRight", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], SwipeDeleteSideDirective.prototype, "fmSwipeLeft", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], SwipeDeleteSideDirective.prototype, "fmSwipeDown", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], SwipeDeleteSideDirective.prototype, "fmSwipeUp", void 0);
                SwipeDeleteSideDirective = __decorate([
                    core_1.Directive({
                        selector: '[fmSwipeDeleteSide]',
                        host: {
                            '(touchstart)': 'move($event)',
                            '(touchmove)': 'move($event)',
                            '(touchend)': 'end($event)',
                            '(click)': 'move($event)'
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