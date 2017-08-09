(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', '../constants', '../babelHelpers'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('../constants'), require('../babelHelpers'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.constants, global.babelHelpers);
        global.factory = mod.exports;
    }
})(this, function (exports, _constants, babelHelpers) {
    'use strict';

    exports.__esModule = true;
    exports.getComponentKey = getComponentKey;
    exports.registerComponent = registerComponent;
    exports.getComponent = getComponent;
    /**
     * @file registry
     * @author leon <ludafa@outlook.com>
     */

    var pool = {};

    function getComponentKey(type, version) {
        return version ? '' + type + _constants.SEPARATOR + version : type;
    }

    function registerComponent(type, level, version) {

        return function (Component) {

            Component.type = type;
            Component.level = level;

            pool[getComponentKey(type, version)] = Component;

            return Component;
        };
    }

    function getComponent(type, version) {
        return pool[getComponentKey(type, version)];
    }
});
//# sourceMappingURL=factory.js.map
