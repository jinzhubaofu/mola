(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', '../util/factory', '../constants', 'classnames', '../common/env', '../babelHelpers'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('../util/factory'), require('../constants'), require('classnames'), require('../common/env'), require('../babelHelpers'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.factory, global.constants, global.classnames, global.env, global.babelHelpers);
        global.BaiduAppDownloadLayer = mod.exports;
    }
})(this, function (exports, _react, _factory, _constants, _classnames, _env, babelHelpers) {
    'use strict';

    exports.__esModule = true;
    exports.DownloadGuide = exports.level = exports.type = undefined;

    var _react2 = babelHelpers.interopRequireDefault(_react);

    var _classnames2 = babelHelpers.interopRequireDefault(_classnames);

    /**
     * @file 手百下载组件
     * @author leon <ludafa@outlook.com>
     */

    var type = exports.type = 'DownloadGuide';
    var level = exports.level = _constants.EDITOR_HELPER_FIXED;

    /**
     * h5: ios => 打开 appstore (universal link)；安卓：打开xbox.m.baidu.com
     * 微信：ios => 打开 appstore (universal link)；安卓：打开应用宝
     * 微博：在浏览器中打开
     */

    var URL_BOX_ITUNES = 'itms-apps://itunes.apple.com/cn/app/shou-ji-bai-du-xiao-shuo-zui/id382201985?mt=8';

    var URL_YINGYONGBAO = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.baidu.searchbox';

    var URL_BOX_THIRD_PARTY = 'http://xbox.m.baidu.com/mo/home?redirect=mo';

    var URL_WEIBO_IOS = 'http://boscdn.bpc.baidu.com/mms-res/fFhO6IiQ0WjMZUPi9VZIBVZ3BVALBcRSBWCb9VlWZVAb0mAwBmZIhpRenFvkrUgquWgquQXRfFSvrUCRBmhqZIkLZWh.png';

    var URL_WEIBO_ANDROID = 'http://boscdn.bpc.baidu.com/mms-res/fFhO6IXiBVXWBIni9VhahIs3BCsquQRMZUjR9UjYhRZq0kVIBVBC0dRenFvkrUgquWgquQXRfFSvrUCRBmhqZIgMuWs.png';

    var DownloadGuide = exports.DownloadGuide = function (_Component) {
        babelHelpers.inherits(DownloadGuide, _Component);

        function DownloadGuide() {
            babelHelpers.classCallCheck(this, DownloadGuide);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            var _this = babelHelpers.possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args)));

            _this.state = {
                open: !_env.browser.baidu,
                weiboOpen: false
            };
            _this.showWeiboLayer = _this.showWeiboLayer.bind(_this);
            return _this;
        }

        DownloadGuide.prototype.showWeiboLayer = function showWeiboLayer(e) {
            e.preventDefault();
            this.setState({ weiboOpen: true });
        };

        DownloadGuide.prototype.renderWeiboLayer = function renderWeiboLayer() {
            var _this2 = this;

            if (!this.state.weiboOpen) {
                return null;
            }
            var image = _env.os.ios ? URL_WEIBO_IOS : URL_WEIBO_ANDROID;
            return _react2['default'].createElement('div', {
                style: { backgroundImage: 'url(' + image + ')' },
                onClick: function onClick() {
                    return _this2.setState({ weiboOpen: false });
                } });
        };

        DownloadGuide.prototype.render = function render() {
            var _this3 = this;

            if (!this.state.open) {
                return null;
            }

            var _props = this.props,
                _props$className = _props.className,
                className = _props$className === undefined ? null : _props$className,
                _props$style = _props.style,
                style = _props$style === undefined ? null : _props$style,
                title = _props.title,
                subTitle = _props.subTitle;


            var href = '';
            var onClick = null;

            // 微博：弹出浮层『在浏览器中打开』
            if (_env.browser.weibo) {
                onClick = this.showWeiboLayer;
            }
            // 微信：打开应用宝
            else if (_env.browser.weixin) {
                    href = URL_YINGYONGBAO;
                }
                // h5: ios => 打开 appstore (universal link)；安卓：打开xbox.m.baidu.com
                else {
                        href = _env.os.ios ? URL_BOX_ITUNES : URL_BOX_THIRD_PARTY;
                    }

            return _react2['default'].createElement(
                'div',
                {
                    'data-click': '{"mod":"download_layer"}',
                    className: (0, _classnames2['default'])('mola-baidu-app-download-layer', className),
                    style: style },
                _react2['default'].createElement(
                    'i',
                    {
                        'data-click': '{"act": "b_close_download_layer"}',
                        onClick: function onClick() {
                            return _this3.setState({ open: false });
                        } },
                    'x'
                ),
                _react2['default'].createElement('b', null),
                _react2['default'].createElement(
                    'section',
                    null,
                    _react2['default'].createElement(
                        'h4',
                        null,
                        title
                    ),
                    _react2['default'].createElement(
                        'p',
                        null,
                        subTitle
                    )
                ),
                _react2['default'].createElement(
                    'a',
                    {
                        href: href,
                        'data-click': '{"act":"a_download"}',
                        onClick: onClick },
                    '\u4E0B\u8F7D\u4F53\u9A8C'
                ),
                this.renderWeiboLayer()
            );
        };

        return DownloadGuide;
    }(_react.Component);

    DownloadGuide.level = level;
    DownloadGuide.type = type;

    DownloadGuide.propTypes = {
        title: _react.PropTypes.string.isRequired,
        subTitle: _react.PropTypes.string.isRequired
    };

    exports['default'] = (0, _factory.registerComponent)(type)(DownloadGuide);
});
//# sourceMappingURL=BaiduAppDownloadLayer.js.map
