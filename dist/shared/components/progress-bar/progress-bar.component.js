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
    var ProgressBar;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ProgressBar = (function () {
                function ProgressBar() {
                    this.maxNumber = 0;
                    this.minNumber = 0;
                }
                ProgressBar.prototype.ngOnChanges = function (changes) {
                    if (changes['mainLine']) {
                        if (isNaN(changes['mainLine'].currentValue)) {
                            this.mainLine = 0;
                        }
                        if (changes['mainLine'].currentValue > 100 || this.mainLine > 100) {
                            this.mainLine = 100;
                        }
                    }
                    if (changes['secondLine']) {
                        if (isNaN(changes['secondLine'].currentValue)) {
                            this.secondLine = 0;
                        }
                        if (changes['secondLine'].currentValue > 100 || this.secondLine > 100) {
                            this.secondLine = 100;
                        }
                    }
                    if (changes['maxNumber']) {
                        if (isNaN(changes['maxNumber'].currentValue)) {
                            this.maxNumber = 0;
                        }
                    }
                    if (changes['minNumber']) {
                        if (isNaN(changes['minNumber'].currentValue)) {
                            this.minNumber = 0;
                        }
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ProgressBar.prototype, "name", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], ProgressBar.prototype, "mainLine", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], ProgressBar.prototype, "secondLine", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], ProgressBar.prototype, "maxNumber", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], ProgressBar.prototype, "minNumber", void 0);
                ProgressBar = __decorate([
                    core_1.Component({
                        selector: 'fm-progress-bar',
                        directives: [],
                        providers: [],
                        pipes: [],
                        styles: ["\n.progress_container {\n  width: 90vw;\n  height: 7vw;\n  position: relative;\n  left: 5vw;\n  background-color: rgba(49, 51, 61, 0.7);\n  box-sizing: border-box;\n  border: 5px solid #0C1017;\n  border-radius: 10px;\n  z-index: 1;\n}\n.progress_mainLine {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: #E48426;\n  height: 100%;\n  border-radius: 5px;\n  text-align: center;\n  color: #181A21;\n  font-size: 4vw;\n}\n.progress_secondLine {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: #2a2b2d;\n  height: 100%;\n  border-radius: 5px;\n  text-align: right;\n  color: #E48426;\n  font-size: 4vw;\n}\n.progress_barHeader {\n  text-align: center;\n  color: #E48426;\n  font-size: 5vw;\n}\n.numbers {\n  position: absolute;\n  color: blue;\n  height: 7vw;\n  width: 90vw;\n  overflow: hidden;\n}\n "],
                        template: "\n<div class=\"progress_barHeader\">{{name|uppercase}}</div>\n<div class=\"progress_container\">\n  <div class=\"progress_secondLine\" [style.width.%]=\"secondLine\">\n  </div>\n  <div class=\"progress_mainLine\" [style.width.%]=\"mainLine\">\n    <div class=\"numbers\">{{minNumber}} / {{maxNumber}}</div>\n  </div>\n\n</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProgressBar);
                return ProgressBar;
            }());
            exports_1("ProgressBar", ProgressBar);
        }
    }
});
//# sourceMappingURL=progress-bar.component.js.map