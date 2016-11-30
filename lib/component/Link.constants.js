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
    global.LinkConstants = mod.exports;
  }
})(this, function (exports, _constants, babelHelpers) {
  'use strict';

  exports.__esModule = true;
  exports.level = exports.type = undefined;
  /**
   * @file Link Constants
   * @author leon <ludafa@outlook.com>
   */

  var type = exports.type = 'Link';
  var level = exports.level = _constants.MOLA_COMPONENT_LEVEL_ATOM;
});
//# sourceMappingURL=Link.constants.js.map
