(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', '../util/factory', '../util/unit', '../constants', '../babelHelpers'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('../util/factory'), require('../util/unit'), require('../constants'), require('../babelHelpers'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.factory, global.unit, global.constants, global.babelHelpers);
        global.Link = mod.exports;
    }
})(this, function (exports, _react, _factory, _unit, _constants, babelHelpers) {
    'use strict';

    exports.__esModule = true;
    exports.Link = exports.level = exports.type = undefined;

    var _react2 = babelHelpers.interopRequireDefault(_react);

    /**
     * @file Link
     * @author leon <ludafa@outlook.com>
     */

    var type = exports.type = 'Link';
    var level = exports.level = _constants.MOLA_COMPONENT_LEVEL_ATOM;

    var Link = exports.Link = function (_Component) {
        babelHelpers.inherits(Link, _Component);

        function Link() {
            babelHelpers.classCallCheck(this, Link);
            return babelHelpers.possibleConstructorReturn(this, _Component.apply(this, arguments));
        }

        Link.prototype.render = function render() {
            var _props = this.props,
                top = _props.top,
                left = _props.left,
                width = _props.width,
                height = _props.height,
                backgroundImage = _props.backgroundImage,
                target = _props.target,
                href = _props.href;


            return _react2['default'].createElement('a', {
                className: 'mola-link',
                style: {
                    top: (0, _unit.px2rem)(top),
                    left: (0, _unit.px2rem)(left),
                    width: (0, _unit.px2rem)(width),
                    height: (0, _unit.px2rem)(height),
                    backgroundImage: 'url(' + backgroundImage + ')'
                },
                target: target,
                href: href });
        };

        return Link;
    }(_react.Component);

    Link.propTypes = {
        href: _react.PropTypes.string.isRequired,
        target: _react.PropTypes.oneOf(['_blank', '_self']).isRequired,
        top: _react.PropTypes.number.isRequired,
        left: _react.PropTypes.number.isRequired,
        width: _react.PropTypes.number.isRequired,
        height: _react.PropTypes.number.isRequired
    };

    Link.defaultProps = {
        href: '#',
        target: '_blank',
        top: 0,
        left: 0,
        width: 200,
        height: 30
    };

    exports['default'] = (0, _factory.registerComponent)(type, level)(Link);
});
//# sourceMappingURL=Link.js.map
