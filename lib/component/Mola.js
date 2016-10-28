(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', '../util/factory', '../babelHelpers'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('../util/factory'), require('../babelHelpers'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.factory, global.babelHelpers);
        global.Mola = mod.exports;
    }
})(this, function (exports, _react, _factory, babelHelpers) {
    'use strict';

    exports.__esModule = true;

    var _react2 = babelHelpers.interopRequireDefault(_react);

    var Mola = function (_Component) {
        babelHelpers.inherits(Mola, _Component);

        function Mola() {
            babelHelpers.classCallCheck(this, Mola);
            return babelHelpers.possibleConstructorReturn(this, _Component.apply(this, arguments));
        }

        Mola.prototype.resolveTreeNode = function resolveTreeNode(type) {
            return (0, _factory.getComponent)(type);
        };

        Mola.prototype.renderTreeNode = function renderTreeNode(type, props, children, key) {
            var level = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;


            return _react2['default'].createElement(type, babelHelpers['extends']({}, props, {
                key: level + '-' + key,
                children: children
            }));
        };

        Mola.prototype.traverse = function traverse(root, index, level, filter) {
            var _this2 = this;

            var type = root.type,
                children = root.children,
                props = babelHelpers.objectWithoutProperties(root, ['type', 'children']);


            if (filter && !filter(root, index, level)) {
                return null;
            }

            children = children && children.length ? children.map(function (child, index) {
                return _this2.traverse(child, index, level + 1, filter);
            }) : null;

            return this.renderTreeNode(this.resolveTreeNode(type), props, children, index, level, filter);
        };

        Mola.prototype.render = function render() {
            return this.traverse(this.props.components, 0, 0);
        };

        return Mola;
    }(_react.Component);

    exports['default'] = Mola;


    Mola.propTypes = {
        components: _react.PropTypes.shape({
            id: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]).isRequired,
            children: _react.PropTypes.arrayOf(_react.PropTypes.object)
        })
    };
});
//# sourceMappingURL=Mola.js.map
