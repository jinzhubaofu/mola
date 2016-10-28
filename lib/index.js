(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', './component/Mola', './constants', './util/factory', './util/unit', './component/Container', './component/Window', './component/Link', './component/BaiduAppInvoker', './component/BaiduAppDownloadLayer', './babelHelpers'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('./component/Mola'), require('./constants'), require('./util/factory'), require('./util/unit'), require('./component/Container'), require('./component/Window'), require('./component/Link'), require('./component/BaiduAppInvoker'), require('./component/BaiduAppDownloadLayer'), require('./babelHelpers'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.Mola, global.constants, global.factory, global.unit, global.Container, global.Window, global.Link, global.BaiduAppInvoker, global.BaiduAppDownloadLayer, global.babelHelpers);
        global.index = mod.exports;
    }
})(this, function (exports, _Mola, _constants, _factory, _unit, _Container, _Window, _Link, _BaiduAppInvoker, _BaiduAppDownloadLayer, babelHelpers) {
    'use strict';

    exports.__esModule = true;
    exports.BaiduAppDownloadLayer = exports.BaiduAppInvoker = exports.Link = exports.Window = exports.Container = exports.default = undefined;
    Object.defineProperty(exports, 'default', {
        enumerable: true,
        get: function () {
            return babelHelpers.interopRequireDefault(_Mola).default;
        }
    });
    Object.keys(_constants).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function () {
                return _constants[key];
            }
        });
    });
    Object.keys(_factory).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function () {
                return _factory[key];
            }
        });
    });
    Object.keys(_unit).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function () {
                return _unit[key];
            }
        });
    });

    var _Container2 = babelHelpers.interopRequireDefault(_Container);

    var _Window2 = babelHelpers.interopRequireDefault(_Window);

    var _Link2 = babelHelpers.interopRequireDefault(_Link);

    var _BaiduAppInvoker2 = babelHelpers.interopRequireDefault(_BaiduAppInvoker);

    var _BaiduAppDownloadLayer2 = babelHelpers.interopRequireDefault(_BaiduAppDownloadLayer);

    exports.Container = _Container2['default'];
    exports.Window = _Window2['default'];
    exports.Link = _Link2['default'];
    exports.BaiduAppInvoker = _BaiduAppInvoker2['default'];
    exports.BaiduAppDownloadLayer = _BaiduAppDownloadLayer2['default'];
});
//# sourceMappingURL=index.js.map
