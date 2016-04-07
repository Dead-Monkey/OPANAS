System.register(['angular2/core', 'angular2/router', '../../services/translate/translate.service'], function(exports_1, context_1) {
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
    var core_1, router_1, translate_service_1;
    var SideBar;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (translate_service_1_1) {
                translate_service_1 = translate_service_1_1;
            }],
        execute: function() {
            SideBar = (function () {
                function SideBar(_router) {
                    this._router = _router;
                    this.isOpenChange = new core_1.EventEmitter();
                    this.pusherTarget = 250;
                    this.middle = this.pusherTarget / 2;
                    this.shadowOpacity = 0;
                    this.shadowOpacityTarget = 0.5;
                    this.lastTouch = 0;
                    this.pushClass = false;
                    this.pullClass = true;
                }
                SideBar.prototype.toggle = function (route, toggle) {
                    if (toggle === void 0) { toggle = true; }
                    if (route) {
                        this._router.navigate([route]);
                    }
                    var evt = { 'type': 'touchend' };
                    if (this.isOpen) {
                        this.lastTouch = 0;
                    }
                    else {
                        this.lastTouch = this.pusherTarget;
                    }
                    this.swipe({ 'type': 'touchend' }, toggle);
                };
                SideBar.prototype.swipe = function (evt, toggle) {
                    if (toggle === void 0) { toggle = false; }
                    if (!toggle) {
                        evt.preventDefault();
                    }
                    this.isOpen = true;
                    this.pushClass = false;
                    this.pullClass = false;
                    if (evt.type === 'touchmove' && evt.touches[0].clientX < this.pusherTarget) {
                        if (this.lastTouch < evt.touches[0].clientX && this.shadowOpacity < this.shadowOpacityTarget) {
                            this.shadowOpacity = this.shadowOpacity + 0.01;
                        }
                        else if (this.shadowOpacity > 0) {
                            this.shadowOpacity = this.shadowOpacity - 0.01;
                        }
                        this.lastTouch = evt.touches[0].clientX;
                    }
                    if (evt.type === 'touchend') {
                        if (this.lastTouch > this.middle) {
                            this.pullClass = false;
                            this.pushClass = true;
                            this.shadowOpacity = this.shadowOpacityTarget;
                            this.isOpen = true;
                        }
                        if (this.lastTouch < this.middle) {
                            this.pushClass = false;
                            this.pullClass = true;
                            this.shadowOpacity = 0;
                            this.lastTouch = 0;
                            this.isOpen = false;
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
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [],
                        pipes: [translate_service_1.TranslatePipe],
                        styles: ["\n    .sideBarContainer {\n      position: absolute;\n      display: flex;\n      flex-flow: column nowrap;\n      justify-content: center;\n      align-items: center;\n      height: 100vh;\n      width: 250px;\n      top: 0;\n      z-index: 999;\n      background-color: #3f414a;\n      overflow-x: hidden;\n      overflow-y: scroll;\n      left:-250px;\n      user-select: none;\n     -webkit-user-select: none;\n\n  }\n  .sideBarAnime{\n    transition-duration: 500ms;\n    -webkit-transition-duration: 500ms;\n    transform: translate3d(250px,0,0);\n    -webkit-transform: translate3d(250px,0,0);\n  }\n  .sideBarAnimeBack{\n    transition-duration: 500ms;\n    -webkit-transition-duration: 500ms;\n    transform: translate3d(-250px,0,0);\n    -webkit-transform: translate3d(-250px,0,0);\n  }\n  .sideBar_toggle {\n    position: absolute;\n    top:1vw;\n    left:5vw;\n    background: url('./src/img/newMenu.png') no-repeat center center;\n    background-size: cover;\n    box-sizing: border-box;\n    width: 15vw;\n    height: 15vw;\n    z-index: 999;\n  }\n  .sideBarSwipePlace {\n    position: fixed;\n    top:0;\n    left:0;\n    background-color: black;\n    height:100vh;\n    width:10vw;\n    z-index: 997;\n\n  }\n\n  p {\n    position: absolute;\n    margin-top: 23vw;\n    left: 9%;\n    right: 9%;\n    color: #ff9d2d;\n    font-size: 6vw;\n    overflow: hidden;\n  }\n\n  .sidebar_button {\n    background-size: cover;\n    box-sizing: border-box;\n    width: 22vw;\n    height: 22vw;\n    text-align: center;\n    text-decoration: none;\n    margin-top: 7vw;\n    margin-bottom: 11vw;\n  }\n  .sidebar_foodButton {\n    background: url('./src/img/food.png') no-repeat center center;\n    background-size: cover;\n  }\n  .sidebar_sportButton {\n    background: url('./src/img/sport.png') no-repeat center center;\n    background-size: cover;\n  }\n  .sidebar_restButton {\n    background: url('./src/img/rest.png') no-repeat center center;\n    background-size: cover;\n  }\n  .sidebar_calendarButton {\n    background: url('./src/img/calendar.png') no-repeat center center;\n    background-size: cover;\n  }\n  .sidebar_userButton {\n    background: url('./src/img/user.png') no-repeat center center;\n    background-size: cover;\n  }\n.sideBarSwipePlaceBig{\n  width:100vw;\n}\n.sideBar_close{\n  position:absolute;\n  left:0;\n  top:0;\n  width:100vw;\n  height:100vh;\n  z-index:998;\n}\n  "],
                        template: "\n<div *ngIf=\"!isOpen\" class=\"sideBar_toggle\" (click)=\"toggle()\"></div>\n\n<div class=\"sideBarContainer\" [ngClass]=\"{sideBarAnime:pushClass, sideBarAnimeBack:pullClass}\" [style.transform]=\"pushClass?'':'translate3d('+lastTouch+'px,0,0)'\" [style.-webkit-transform]=\"pushClass?'':'translate3d('+lastTouch+'px,0,0)'\" (touchmove)=\"swipe($event)\" (touchend)=\"swipe($event)\">\n  <div class=\"sidebar_foodButton sidebar_button\" (touchend)=\"toggle('Food')\">\n    <p>{{'food' | translate}}</p>\n  </div>\n  <div class=\"sidebar_sportButton sidebar_button\" (touchend)=\"toggle('Sport')\">\n    <p>{{'sport' | translate}}</p>\n  </div>\n  <!-- <div class=\"sidebar_restButton sidebar_button\" (touchend)=\"toggle('Rest')\">\n    <p>{{'rest' | translate}}</p>\n  </div> -->\n  <div class=\"sidebar_calendarButton sidebar_button\" (touchend)=\"toggle('Calendar')\">\n    <p>{{'calendar' | translate}}</p>\n  </div>\n  <div class=\"sidebar_userButton sidebar_button\" (touchend)=\"toggle('User')\">\n    <p>{{'settings' | translate}}</p>\n  </div>\n</div>\n<div class=\"sideBarSwipePlace\" #swipePlace [style.opacity]=\"shadowOpacity\" [ngClass]=\"{sideBarSwipePlaceBig: isOpen}\" (touchmove)=\"swipe($event)\" (touchend)=\"swipe($event)\"></div>\n\n<div *ngIf=\"isOpen\" class=\"sideBar_close\" (click)=\"toggle()\"></div>\n  "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], SideBar);
                return SideBar;
            }());
            exports_1("SideBar", SideBar);
        }
    }
});
//# sourceMappingURL=side-bar.component.js.map