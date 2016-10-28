(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './component/Mola', './constants', './util/factory', './util/unit', './util/env', './component/Container', './component/Window', './component/Link', './babelHelpers'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./component/Mola'), require('./constants'), require('./util/factory'), require('./util/unit'), require('./util/env'), require('./component/Container'), require('./component/Window'), require('./component/Link'), require('./babelHelpers'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Mola, global.constants, global.factory, global.unit, global.env, global.Container, global.Window, global.Link, global.babelHelpers);
    global.index = mod.exports;
  }
})(this, function (exports, _Mola, _constants, _factory, _unit, _env, _Container, _Window, _Link, babelHelpers) {
  'use strict';

  exports.__esModule = true;
  exports.Link = exports.Window = exports.Container = exports.default = undefined;
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
  Object.keys(_env).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _env[key];
      }
    });
  });

  var _Container2 = babelHelpers.interopRequireDefault(_Container);

  var _Window2 = babelHelpers.interopRequireDefault(_Window);

  var _Link2 = babelHelpers.interopRequireDefault(_Link);

  exports.Container = _Container2['default'];
  exports.Window = _Window2['default'];
  exports.Link = _Link2['default'];
});
//# sourceMappingURL=index.js.map
