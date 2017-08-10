(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', '../util/factory', '../util/unit', './Link.constants', '../babelHelpers'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('../util/factory'), require('../util/unit'), require('./Link.constants'), require('../babelHelpers'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.factory, global.unit, global.Link, global.babelHelpers);
        global.Link = mod.exports;
    }
})(this, function (exports, _react, _factory, _unit, _Link, babelHelpers) {
    'use strict';

    exports.__esModule = true;
    exports.Link = undefined;

    var _react2 = babelHelpers.interopRequireDefault(_react);

    var Link = exports.Link = function (_Component) {
        babelHelpers.inherits(Link, _Component);

        function Link() {
            babelHelpers.classCallCheck(this, Link);
            return babelHelpers.possibleConstructorReturn(this, _Component.apply(this, arguments));
        }

        Link.prototype.componentDidMount = function componentDidMount() {
            var _props = this.props,
                action = _props.action,
                anchorId = _props.anchorId;

            var hash = window.location.hash;
            if (action === 'anchor' && hash === '#' + anchorId) {
                window.location.href = '#' + anchorId;
            }
        };

        Link.prototype.render = function render() {
            var action = this.props.action;

            if (action === 'link') {
                var _props2 = this.props,
                    top = _props2.top,
                    left = _props2.left,
                    width = _props2.width,
                    height = _props2.height,
                    target = _props2.target,
                    href = _props2.href;


                return _react2['default'].createElement('a', {
                    className: 'mola-link',
                    'data-click': '{"act":"a_link"}',
                    style: {
                        top: (0, _unit.px2rem)(top),
                        left: (0, _unit.px2rem)(left),
                        width: (0, _unit.px2rem)(width),
                        height: (0, _unit.px2rem)(height)
                    },
                    target: target,
                    href: href });
            } else if (action === 'anchor') {
                var _props3 = this.props,
                    _top = _props3.top,
                    anchorId = _props3.anchorId;

                return _react2['default'].createElement('a', {
                    className: 'mola-link',
                    'data-click': '{"act":"a_anchor"}',
                    style: {
                        top: (0, _unit.px2rem)(_top),
                        width: '100%',
                        height: 0
                    },
                    id: anchorId });
            }
        };

        return Link;
    }(_react.Component);

    Link.propTypes = {
        action: _react.PropTypes.oneOf(['link', 'anchor']).isRequired
    };

    Link.defaultProps = {
        action: 'link'
    };

    exports['default'] = (0, _factory.registerComponent)(_Link.type, _Link.level)(Link);
});
//# sourceMappingURL=Link.js.map
