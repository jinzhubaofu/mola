(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', '../util/factory', 'classnames', './Window.constants', '../babelHelpers'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('../util/factory'), require('classnames'), require('./Window.constants'), require('../babelHelpers'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.factory, global.classnames, global.Window, global.babelHelpers);
        global.Window = mod.exports;
    }
})(this, function (exports, _react, _factory, _classnames, _Window, babelHelpers) {
    'use strict';

    exports.__esModule = true;
    exports.Window = undefined;

    var _react2 = babelHelpers.interopRequireDefault(_react);

    var _classnames2 = babelHelpers.interopRequireDefault(_classnames);

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

    exports['default'] = (0, _factory.registerComponent)(_Window.type, _Window.level)(Window);
});
//# sourceMappingURL=Window.js.map
