System.register(['angular2/core', 'angular2/router', '../../directives/swipeHolder/swipe-holder.directive'], function(exports_1, context_1) {
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
    var core_1, router_1, swipe_holder_directive_1;
    var SideBar;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (swipe_holder_directive_1_1) {
                swipe_holder_directive_1 = swipe_holder_directive_1_1;
            }],
        execute: function() {
            SideBar = (function () {
                function SideBar() {
                    this.isOpenChange = new core_1.EventEmitter();
                    this.pusherStart = -70;
                    this.pusher = this.pusherStart;
                    this.middle = this.pusherStart / 2;
                    this.pusherTime = false;
                }
                SideBar.prototype.toggle = function () {
                    console.log("tg", this.isOpen);
                    if (!this.isOpen) {
                        this.pusher = this.middle;
                    }
                    else {
                        this.pusher = this.middle - 1;
                    }
                    this.swipe(['swipeEnd']);
                    this.isOpenChange.emit(this.isOpen);
                };
                SideBar.prototype.swipe = function (evt) {
                    var _this = this;
                    this.pusherTime = true;
                    if (this.interval1 || this.interval2) {
                        clearInterval(this.interval1);
                        clearInterval(this.interval2);
                    }
                    if (evt[0] === 'swipeEnd') {
                        this.isOpen = true;
                        if (this.pusher >= this.middle) {
                            this.interval1 = setInterval(function () {
                                if (_this.pusher < 0) {
                                    _this.pusher++;
                                }
                                else {
                                    clearInterval(_this.interval1);
                                }
                            }, 0);
                        }
                        else {
                            this.interval2 = setInterval(function () {
                                if (_this.pusher > _this.pusherStart) {
                                    _this.pusher--;
                                }
                                else {
                                    clearInterval(_this.interval2);
                                    _this.isOpen = false;
                                }
                            }, 0);
                        }
                        this.pusherTime = false;
                    }
                    else if (evt[0] === 'rightSwipe') {
                        this.isOpen = true;
                        if (this.pusher < 0) {
                            this.pusher++;
                        }
                    }
                    else if (evt[0] === 'leftSwipe') {
                        this.isOpen = true;
                        if (this.pusher > -70) {
                            this.pusher--;
                        }
                    }
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
                        selector: 'fm-side-bar',
                        directives: [router_1.ROUTER_DIRECTIVES, swipe_holder_directive_1.SwipeHoldertDirective],
                        providers: [],
                        pipes: [],
                        styles: ["\n        .sideBarContainer {\n      position: absolute;\n      display: flex;\n      flex-flow: column nowrap;\n      justify-content: space-around;\n      align-items: center;\n      height: 100vh;\n      width: 70vw;\n      left: 0;\n      top: 0;\n      z-index: 999;\n      background-color: #3f414a;\n      overflow-x: hidden;\n      overflow-y: scroll;\n  }\n  .sideBar_toggle {\n    position: absolute;\n    top:0;\n    left:5vw;\n    background: url('./src/img/newMenu.png') no-repeat center center;\n    background-size: cover;\n    box-sizing: border-box;\n    width: 15vw;\n    height: 15vw;\n    z-index: 998;\n  }\n  .sideBarSwipePlace {\n    position: fixed;\n    top:0;\n    left:0;\n    height:100vh;\n    width:10vw;\n    z-index: 998;\n  }\n  .sideBarShadow {\n    position: absolute;\n    height: 100vh;\n    width: 100vw;\n    left: 0;\n    top: 0;\n    background-color: black;\n    opacity: 0.5;\n    z-index:997;\n  }\n  p {\n    position: relative;\n    top: 17vw;\n    color: #ff9d2d;\n    font-size: 6vw;\n  }\n\n  .sidebar_button {\n    background-size: cover;\n    box-sizing: border-box;\n    width: 22vw;\n    height: 22vw;\n    text-align: center;\n    text-decoration: none;\n  }\n  .sidebar_foodButton {\n    background: url('./src/img/food.png') no-repeat center center;\n    background-size: cover;\n  }\n  .sidebar_sportButton {\n    background: url('./src/img/sport.png') no-repeat center center;\n    background-size: cover;\n  }\n  .sidebar_restButton {\n    background: url('./src/img/rest.png') no-repeat center center;\n    background-size: cover;\n  }\n  .sidebar_calendarButton {\n    background: url('./src/img/calendar.png') no-repeat center center;\n    background-size: cover;\n  }\n  .sidebar_userButton {\n    background: url('./src/img/user.png') no-repeat center center;\n    background-size: cover;\n  }\n.sidebar_locked{\n  left:-70vw;\n}\n.sideBarSwipePlaceBig{\n  width:100vw;\n}\n  "],
                        template: "\n<div *ngIf=\"!isOpen\" class=\"sideBar_toggle\" (click)=\"toggle()\"></div>\n\n<div class=\"sideBarContainer\" [style.left.vw]=\"pusher\" [ngClass]=\"{sideBarContainer:true, sidebar_locked:!isOpen}\" *ngIf=\"isOpen\" (fmSwipe)=\"swipe($event)\">\n  <a [routerLink]=\"['Food']\" (click)=\"toggle()\" class=\"sidebar_foodButton sidebar_button\">\n    <p>Food</p>\n  </a>\n  <a [routerLink]=\"['Sport']\" (click)=\"toggle()\" class=\"sidebar_sportButton sidebar_button\">\n    <p>Sport</p>\n  </a>\n  <a [routerLink]=\"['Rest']\" (click)=\"toggle()\" class=\"sidebar_restButton sidebar_button\">\n    <p>Rest</p>\n  </a>\n  <a [routerLink]=\"['Calendar']\" (click)=\"toggle()\" class=\"sidebar_calendarButton sidebar_button\">\n    <p>Calendar</p>\n  </a>\n  <a [routerLink]=\"['User']\" (click)=\"toggle()\" class=\"sidebar_userButton sidebar_button\">\n    <p>User</p>\n  </a>\n  </div>\n  <div class=\"sideBarShadow\"  *ngIf=\"isOpen\" (click)=\"toggle()\"></div>\n<div class=\"sideBarSwipePlace\" [ngClass]=\"{sideBarSwipePlaceBig:pusherTime}\" (fmSwipe)=\"swipe($event)\"></div>\n\n  "
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