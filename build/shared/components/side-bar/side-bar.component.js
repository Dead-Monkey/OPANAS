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
    var SideBar;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SideBar = (function () {
                function SideBar() {
                    this.isOpenChange = new core_1.EventEmitter();
                }
                SideBar.prototype.toggle = function () {
                    this.isOpen = false;
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
                        directives: [],
                        providers: [],
                        pipes: [],
                        styles: ["\n.sideBarContainer {\n  position: absolute;\n  height: 100vh;\n  width: 70vw;\n  left: 0;\n  top: 0;\n  z-index: 999;\n  background-color: gray;\n}\n.sideBarShadow {\n  position: absolute;\n  height: 100vh;\n  width: 30vw;\n  left: 70vw;\n  top: 0;\n  background-color: black;\n  opacity: 0.2;\n}\n      "],
                        template: "\n<div class=\"sideBarContainer\" *ngIf=\"isOpen\">bar</div>\n<div class=\"sideBarShadow\" *ngIf=\"isOpen\" (click)=\"toggle()\"></div>\n    "
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