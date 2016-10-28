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

    function registerComponent(type, level) {

        return function (Component) {

            Component.type = type;
            Component.level = level;

            pool[type] = Component;

            return Component;
        };
    }

    function getComponent(type) {
        return pool[type];
    }
});
//# sourceMappingURL=factory.js.map
