(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.constants = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  exports.__esModule = true;
  /**
   * @file mola 常量
   * @author leon <ludafa@outlook.com>
   */

  var PREFIX = 'mola';

  var MOLA_COMPONENT_LEVEL_WINDOW = exports.MOLA_COMPONENT_LEVEL_WINDOW = PREFIX + '/WINDOW';
  var MOLA_COMPONENT_LEVEL_CONTAINER = exports.MOLA_COMPONENT_LEVEL_CONTAINER = PREFIX + '/CONTAINER';
  var MOLA_COMPONENT_LEVEL_ATOM = exports.MOLA_COMPONENT_LEVEL_ATOM = PREFIX + '/COMPONENT';
  var MOLA_COMPONENT_LEVEL_FIXED = exports.MOLA_COMPONENT_LEVEL_FIXED = PREFIX + '/FIXED';

  var WINDOW_WIDTH = exports.WINDOW_WIDTH = 375;
  var BASE_FONT_SIZE = exports.BASE_FONT_SIZE = 16;
});
//# sourceMappingURL=constants.js.map
