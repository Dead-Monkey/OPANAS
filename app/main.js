System.register(['angular2/platform/browser', './components/opanas/opanas.component'], function(exports_1) {
    var browser_1, opanas_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (opanas_component_1_1) {
                opanas_component_1 = opanas_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(opanas_component_1.OpanasComponent);
        }
    }
});
//# sourceMappingURL=main.js.map