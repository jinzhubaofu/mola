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
        global.unit = mod.exports;
    }
})(this, function (exports, _constants, babelHelpers) {
    'use strict';

    exports.__esModule = true;
    exports.px2rem = px2rem;
    exports.getRootFontSize = getRootFontSize;
    /**
     * @file convert px to rem
     * @author leon <ludafa@outlook.com>
     */

    function px2rem(px) {
        return parseFloat(px, 10) / _constants.BASE_FONT_SIZE + 'rem';
    }

    function getRootFontSize() {
        var clientWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body.clientWidth;

        return clientWidth / _constants.WINDOW_WIDTH * _constants.BASE_FONT_SIZE;
    }
});
//# sourceMappingURL=unit.js.map
