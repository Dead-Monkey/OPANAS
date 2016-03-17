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
                }
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
                        selector: 'fm-side-bar',
                        directives: [router_1.ROUTER_DIRECTIVES, swipe_holder_directive_1.SwipeHoldertDirective],
                        providers: [],
                        pipes: [],
                        styles: ["\n    .sideBarContainer {\n    position: absolute;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: space-around;\n    align-items: center;\n    height: 100vh;\n    width: 70vw;\n    left: 0;\n    top: 0;\n    z-index: 999;\n    background-color: #3f414a;\n  }\n  .sideBar_toggle {\n    position: absolute;\n    top:0;\n    left:5vw;\n    background: url('./src/img/menu-icon.png') no-repeat center center;\n    background-size: cover;\n    box-sizing: border-box;\n    width: 15vw;\n    height: 15vw;\n    z-index: 998;\n  }\n  .sideBarSwipePlace {\n    position: fixed;\n    top:0;\n    left:0;\n    // background-color: silver;\n    // opacity:0.5;\n    height:100vh;\n    width:10vw;\n    z-index: 997;\n  }\n  .sideBarShadow {\n    position: absolute;\n    height: 100vh;\n    width: 30vw;\n    left: 70vw;\n    top: 0;\n    background-color: black;\n    opacity: 0.5;\n    z-index:998;\n  }\n  .sidebar_foodButton {\n  background: url('./src/img/food.png') no-repeat center center;\n  background-size: cover;\n  box-sizing: border-box;\n  width: 27vw;\n  height: 27vw;\n  margin: auto;\n  text-align: center;\n}\n.sidebar_sportButton {\n  background: url('./src/img/sport.png') no-repeat center center;\n  background-size: cover;\n  box-sizing: border-box;\n  width: 27vw;\n  height: 27vw;\n  margin: auto;\n}\n.sidebar_restButton {\n  background: url('./src/img/rest.png') no-repeat center center;\n  background-size: cover;\n  box-sizing: border-box;\n  width: 27vw;\n  height: 27vw;\n  margin: auto;\n}\n.sidebar_calendarButton {\n  background: url('./src/img/Calendar.png') no-repeat center center;\n  background-size: cover;\n  box-sizing: border-box;\n  width: 27vw;\n  height: 27vw;\n  margin: auto;\n}\np {\n  color: #ff9d2d;\n  font-size: 6vw;\n}\n\n  "], template: "\n<div class=\"sideBar_toggle\" (click)=\"toggle()\"></div>\n\n<div class=\"sideBarContainer\" *ngIf=\"isOpen\" fmSwipe (fmSwipeLeft)=\"toggle()\" (fmSwipeRight)=\"toggle()\">\n  <a [routerLink]=\"['Food']\" (click)=\"toggle()\" class=\"sidebar_foodButton\"></a>\n  <p>Food</p>\n  <a [routerLink]=\"['Sport']\" (click)=\"toggle()\" class=\"sidebar_sportButton\"></a>\n  <p>Sport</p>\n  <!-- <a [routerLink]=\"['Rest']\" (click)=\"toggle()\" class=\"sidebar_restButton\"></a>\n  <p>Rest</p> -->\n  <a [routerLink]=\"['Calendar']\" (click)=\"toggle()\" class=\"sidebar_calendarButton\"></a>\n  <p>Calendar</p>\n  <a [routerLink]=\"['User']\" (click)=\"toggle()\">\n         user\n      </a>\n  <div class=\"sideBarShadow\" (click)=\"toggle()\"></div>\n</div>\n\n<div *ngIf=\"!isOpen\" class=\"sideBarSwipePlace\" fmSwipe (fmSwipeLeft)=\"toggle()\" (fmSwipeRight)=\"toggle()\"></div>\n    "
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