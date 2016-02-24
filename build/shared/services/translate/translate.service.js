System.register(['./src/services/translate.service', './src/pipes/translate.pipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[
            function (translate_service_1_1) {
                exports_1({
                    "TranslateService": translate_service_1_1["TranslateService"]
                });
            },
            function (translate_pipe_1_1) {
                exports_1({
                    "TranslatePipe": translate_pipe_1_1["TranslatePipe"]
                });
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=translate.service.js.map