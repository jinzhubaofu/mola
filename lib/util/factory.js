(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.factory = mod.exports;
    }
})(this, function (exports) {
    "use strict";

    exports.__esModule = true;
    exports.registerComponent = registerComponent;
    exports.getComponent = getComponent;
    /**
     * @file registry
     * @author leon <ludafa@outlook.com>
     */

    var pool = {};

    function registerComponent(type) {

        return function (Component) {

            pool[type] = Component;

            return Component;
        };
    }

    function getComponent(type) {
        var Component = pool[type];
        return Component;
    }
});
//# sourceMappingURL=factory.js.map
