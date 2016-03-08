System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var SideBar;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            SideBar = (function () {
                function SideBar() {
                    this.isOpenChange = new core_1.EventEmitter();
                }
                SideBar.prototype.start = function (evt) {
                    this.xDown = evt.touches[0].clientX;
                    this.yDown = evt.touches[0].clientY;
                    console.log("start", evt, screen.width, window.innerWidth);
                };
                SideBar.prototype.move = function (evt) {
                    console.log(event);
                    if (!this.xDown || !this.yDown) {
                        return;
                    }
                    var xUp = evt.touches[0].clientX;
                    var yUp = evt.touches[0].clientY;
                    var xDiff = this.xDown - xUp;
                    var yDiff = this.yDown - yUp;
                    if (Math.abs(xDiff) > Math.abs(yDiff)) {
                        /*most significant*/
                        if (xDiff > 0) {
                            /* left swip */
                            console.log("left swipe");
                            this.toggle();
                        }
                        else {
                            /* right swipe */
                            console.log("right swipe");
                            this.toggle();
                        }
                    }
                    else {
                        if (yDiff > 0) {
                            /* up swip */
                            console.log("up swipe");
                        }
                        else {
                            /* down swipe */
                            console.log("down swipe");
                        }
                    }
                    this.xDown = evt.touches[0].clientX;
                    this.yDown = evt.touches[0].clientY;
                };
                SideBar.prototype.end = function (evt) {
                    /* reset values */
                    this.xDown = null;
                    this.yDown = null;
                    console.log("end");
                };
                SideBar.prototype.toggle = function () {
                    this.isOpen = !this.isOpen;
                    this.isOpenChange.emit(this.isOpen);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], SideBar.prototype, "isOpen", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], SideBar.prototype, "isOpenChange", void 0);
                SideBar = __decorate([
                    core_1.Component({
                        selector: 'fm-side-bar', directives: [router_1.ROUTER_DIRECTIVES], providers: [], pipes: [], styles: ["\n    .sideBarContainer {\n    position: absolute;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: space-around;\n    align-items: center;\n    height: 100vh;\n    width: 70vw;\n    left: 0;\n    top: 0;\n    z-index: 999;\n    background-color: gray;\n  }\n  .sideBar_toggle {\n    position: absolute;\n    top:0;\n    left:5vw;\n    background: url('./src/img/menu-icon.png') no-repeat center center;\n    background-size: cover;\n    box-sizing: border-box;\n    width: 15vw;\n    height: 15vw;\n  }\n  .sideBarSwipePlace {\n    position: fixed;\n    top:0;\n    left:0;\n    background-color: silver;\n    height:100vh;\n    width:10vw;\n    opacity:0.5;\n    z-index: 999;\n  }\n  .sideBarShadow {\n    position: absolute;\n    height: 100vh;\n    width: 30vw;\n    left: 70vw;\n    top: 0;\n    background-color: black;\n    opacity: 0.5;\n    z-index:998;\n  }\n  "], template: "\n<div class=\"sideBar_toggle\" (click)=\"toggle()\"></div>\n\n<div class=\"sideBarContainer\" *ngIf=\"isOpen\" (touchmove)=\"move($event)\" (touchstart)=\"start($event)\" (touchend)=\"end($event)\">\n  <a [routerLink]=\"['Food']\">\n     {{\"opanas.router.food\"}}\n  </a>\n  <a [routerLink]=\"['Sport']\">\n     {{\"opanas.router.sport\"}}\n  </a> <a [routerLink]=\"['Rest']\">\n     {{\"opanas.router.rest\"}}\n  </a>\n  <div class=\"sideBarShadow\" (click)=\"toggle()\"></div>\n</div>\n\n<div *ngIf=\"!isOpen\" class=\"sideBarSwipePlace\" (touchmove)=\"move($event)\" (touchstart)=\"start($event)\" (touchend)=\"end($event)\"></div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], SideBar);
                return SideBar;
            }());
            exports_1("SideBar", SideBar);
        }
    }
});
//# sourceMappingURL=side-bar.component.js.map