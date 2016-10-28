(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', '../util/factory', '../util/unit', '../constants', 'mms-js-sdk/invoker/invokeVoiceAll', 'mms-js-sdk/invoker/login', 'mms-js-sdk/invoker/share', 'mms-js-sdk/invoker/openUrl', 'graph-sdk', '../common/guid', '../babelHelpers', 'mms-js-sdk/lib/aio'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('../util/factory'), require('../util/unit'), require('../constants'), require('mms-js-sdk/invoker/invokeVoiceAll'), require('mms-js-sdk/invoker/login'), require('mms-js-sdk/invoker/share'), require('mms-js-sdk/invoker/openUrl'), require('graph-sdk'), require('../common/guid'), require('../babelHelpers'), require('mms-js-sdk/lib/aio'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.factory, global.unit, global.constants, global.invokeVoiceAll, global.login, global.share, global.openUrl, global.graphSdk, global.guid, global.babelHelpers, global.aio);
        global.BaiduAppInvoker = mod.exports;
    }
})(this, function (exports, _react, _factory, _unit, _constants, _invokeVoiceAll, _login, _share2, _openUrl, _graphSdk, _guid, babelHelpers) {
    'use strict';

    exports.__esModule = true;
    exports.BaiduAppInvoker = exports.level = exports.type = undefined;

    var _react2 = babelHelpers.interopRequireDefault(_react);

    var _invokeVoiceAll2 = babelHelpers.interopRequireDefault(_invokeVoiceAll);

    var _login2 = babelHelpers.interopRequireDefault(_login);

    var _share3 = babelHelpers.interopRequireDefault(_share2);

    var _openUrl2 = babelHelpers.interopRequireDefault(_openUrl);

    var _graphSdk2 = babelHelpers.interopRequireDefault(_graphSdk);

    var _guid2 = babelHelpers.interopRequireDefault(_guid);

    /**
     * @file 唤起手百按钮
     * @author leon <ludafa@outlook.com>
     */

    var type = exports.type = 'BaiduAppInvoker';
    var level = exports.level = _constants.EDITOR_HELPER_ATOM;

    var ACTION_MAP = {
        voice: _invokeVoiceAll2['default'],
        login: _login2['default'],
        share: function share() {
            _share3['default'].create().show();
        },
        url: function url(props) {
            (0, _openUrl2['default'])(props.url);
        }
    };

    var BaiduAppInvoker = exports.BaiduAppInvoker = function (_Component) {
        babelHelpers.inherits(BaiduAppInvoker, _Component);

        function BaiduAppInvoker() {
            babelHelpers.classCallCheck(this, BaiduAppInvoker);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            var _this = babelHelpers.possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args)));

            _this.id = 'app-invoker-' + (0, _guid2['default'])();
            return _this;
        }

        BaiduAppInvoker.prototype.componentDidMount = function componentDidMount() {

            if (this.props.action === 'graph') {
                this.initGraph(this.id, this.props);
            }
        };

        BaiduAppInvoker.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
            if (nextProps.action === 'graph' && this.props.action !== 'graph') {
                this.initGraph(this.id, nextProps);
            }
        };

        BaiduAppInvoker.prototype.initGraph = function initGraph(id, props) {
            var needReturn = props.needReturn,
                category = props.category,
                stat = props.stat;


            _graphSdk2['default'].ready(function () {
                return _graphSdk2['default'].initGraph({
                    id: id,
                    type: category,
                    needReturn: needReturn,
                    stat: stat
                });
            });
        };

        BaiduAppInvoker.prototype.render = function render() {

            var props = this.props;

            var top = props.top,
                left = props.left,
                width = props.width,
                height = props.height,
                action = props.action;


            return _react2['default'].createElement('div', {
                id: this.id,
                'data-click': '{"mod":"invoker","act":"a_invoke"}',
                className: 'mola-baidu-app-invoker',
                style: {
                    top: (0, _unit.px2rem)(top),
                    left: (0, _unit.px2rem)(left),
                    width: (0, _unit.px2rem)(width),
                    height: (0, _unit.px2rem)(height)
                },
                onClick: function onClick() {

                    if (ACTION_MAP[action]) {
                        ACTION_MAP[action](props);
                    }
                } });
        };

        return BaiduAppInvoker;
    }(_react.Component);

    BaiduAppInvoker.type = type;

    BaiduAppInvoker.propTypes = {
        action: _react.PropTypes.oneOf(['graph', 'voice', 'login', 'share', 'url']).isRequired
    };

    exports['default'] = (0, _factory.registerComponent)(type)(BaiduAppInvoker);
});
//# sourceMappingURL=BaiduAppInvoker.js.map
