(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', '../util/factory', '../constants', 'classnames', '../babelHelpers'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('../util/factory'), require('../constants'), require('classnames'), require('../babelHelpers'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.factory, global.constants, global.classnames, global.babelHelpers);
        global.Window = mod.exports;
    }
})(this, function (exports, _react, _factory, _constants, _classnames, babelHelpers) {
    'use strict';

    exports.__esModule = true;
    exports.Window = exports.level = exports.type = undefined;

    var _react2 = babelHelpers.interopRequireDefault(_react);

    var _classnames2 = babelHelpers.interopRequireDefault(_classnames);

    /**
     * @file Window
     * @author leon <ludafa@outlook.com>
     */

    var type = exports.type = 'Window';

    var level = exports.level = _constants.MOLA_COMPONENT_LEVEL_WINDOW;

    var Window = exports.Window = function (_Component) {
        babelHelpers.inherits(Window, _Component);

        function Window() {
            babelHelpers.classCallCheck(this, Window);
            return babelHelpers.possibleConstructorReturn(this, _Component.apply(this, arguments));
        }

        Window.prototype.render = function render() {
            var _props = this.props,
                _props$className = _props.className,
                className = _props$className === undefined ? null : _props$className,
                _props$style = _props.style,
                style = _props$style === undefined ? null : _props$style,
                children = _props.children;


            return _react2['default'].createElement(
                'div',
                { className: (0, _classnames2['default'])('mola-window', className), style: style },
                children
            );
        };

        return Window;
    }(_react.Component);

    exports['default'] = (0, _factory.registerComponent)(type, level)(Window);
});
//# sourceMappingURL=Window.js.map
