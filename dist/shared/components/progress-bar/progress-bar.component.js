System.register(['angular2/core', '../../services/translate/translate.service'], function(exports_1, context_1) {
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
    var core_1, translate_service_1;
    var ProgressBar;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (translate_service_1_1) {
                translate_service_1 = translate_service_1_1;
            }],
        execute: function() {
            ProgressBar = (function () {
                function ProgressBar() {
                }
                ProgressBar.prototype.getMainLine = function () {
                    this.mainLine = (this.mainLine > 100) ? 100 : this.mainLine;
                    return this.mainLine;
                };
                ProgressBar.prototype.getSecondLine = function () {
                    this.secondLine = (this.secondLine > 100) ? 100 : this.secondLine;
                    return this.secondLine;
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
                ProgressBar = __decorate([
                    core_1.Component({
                        selector: 'fm-progress-bar',
                        directives: [],
                        providers: [],
                        pipes: [translate_service_1.TranslatePipe],
                        styles: ["\n.progress_container {\nwidth: 90vw;\nheight: 7vw;\nposition: relative;\nleft: 5vw;\nbackground-color: rgba(49, 51, 61, 0.7);\nbox-sizing: border-box;\nborder: 5px solid #0C1017;\nborder-radius: 10px;\nz-index:1;\n\n}\n.progress_mainLine {\n  position:absolute;\n  top:0;\n  left:0;\n  background-color: #E48426;\n  height: 100%;\n  border-radius: 5px;\n  text-align: center;\n  color: #181A21;\n  font-size: 4vw;\n}\n.progress_secondLine {\n  position: absolute;\n  top:0;\n  left:0;\n  background-color: #181A21;\n  height: 100%;\n  border-radius: 5px;\n  text-align: right;\n  color: #E48426;\n  font-size: 4vw;\n}\n.progress_barHeader {\n    text-align: center;\n    color: #E48426;\n    font-size: 5vw;\n}\n\n "],
                        template: "\n<div class=\"progress_barHeader\">{{name|translate|uppercase}}</div>\n<div class=\"progress_container\">\n  <div class=\"progress_secondLine\" [style.width.%]=\"getSecondLine()\">\n  </div>\n  <div class=\"progress_mainLine\" [style.width.%]=\"getMainLine()\">\n    1488\n  </div>\n\n</div>\n    "
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