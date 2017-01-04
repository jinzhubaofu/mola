(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', '../util/factory', '../util/unit', './Container.constants', '../babelHelpers'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('../util/factory'), require('../util/unit'), require('./Container.constants'), require('../babelHelpers'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.factory, global.unit, global.Container, global.babelHelpers);
        global.Container = mod.exports;
    }
})(this, function (exports, _react, _factory, _unit, _Container, babelHelpers) {
    'use strict';

    exports.__esModule = true;
    exports.Container = undefined;

    var _react2 = babelHelpers.interopRequireDefault(_react);

    var Container = exports.Container = function (_Component) {
        babelHelpers.inherits(Container, _Component);

        function Container() {
            babelHelpers.classCallCheck(this, Container);
            return babelHelpers.possibleConstructorReturn(this, _Component.apply(this, arguments));
        }

        Container.prototype.render = function render() {
            var _props = this.props,
                height = _props.height,
                backgroundImage = _props.backgroundImage,
                backgroundColor = _props.backgroundColor,
                children = _props.children;


            var image = backgroundImage ? _react2['default'].createElement('img', { className: 'mola-container-background', src: backgroundImage }) : null;

            return _react2['default'].createElement(
                'div',
                {
                    className: 'mola-container',
                    style: {
                        height: (0, _unit.px2rem)(height),
                        backgroundColor: backgroundColor
                    } },
                image,
                children
            );
        };

        return Container;
    }(_react.Component);

    Container.propTypes = {
        height: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
        backgroundImage: _react.PropTypes.string
    };

    Container.defaultProps = {
        height: '400'
    };

    exports['default'] = (0, _factory.registerComponent)(_Container.type, _Container.level)(Container);
});
//# sourceMappingURL=Container.js.map
