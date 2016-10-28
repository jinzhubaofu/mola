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

  var EDITOR_HELPER_WINDOW = exports.EDITOR_HELPER_WINDOW = PREFIX + '/WINDOW';
  var EDITOR_HELPER_CONTAINER = exports.EDITOR_HELPER_CONTAINER = PREFIX + '/CONTAINER';
  var EDITOR_HELPER_ATOM = exports.EDITOR_HELPER_ATOM = PREFIX + '/COMPONENT';
  var EDITOR_HELPER_FIXED = exports.EDITOR_HELPER_FIXED = PREFIX + '/FIXED';

  var WINDOW_WIDTH = exports.WINDOW_WIDTH = 375;
  var BASE_FONT_SIZE = exports.BASE_FONT_SIZE = 16;
});
//# sourceMappingURL=constants.js.map
