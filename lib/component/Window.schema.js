(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', './Window', '../constants', '../babelHelpers'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('./Window'), require('../constants'), require('../babelHelpers'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.Window, global.constants, global.babelHelpers);
        global.WindowSchema = mod.exports;
    }
})(this, function (exports, _Window, _constants, babelHelpers) {
    'use strict';

    exports.__esModule = true;
    exports.editorProps = exports.level = exports.type = undefined;
    Object.defineProperty(exports, 'type', {
        enumerable: true,
        get: function () {
            return _Window.type;
        }
    });
    Object.defineProperty(exports, 'level', {
        enumerable: true,
        get: function () {
            return _Window.level;
        }
    });
    /**
     * @file 窗口的配置
     * @author leon <ludafa@outlook.com>
     */

    var editorProps = exports.editorProps = {
        movable: false,
        resizable: 'none',
        droppable: {
            sourceTypes: [_constants.MOLA_COMPONENT_LEVEL_CONTAINER, _constants.MOLA_COMPONENT_LEVEL_FIXED]
        },
        selectable: true,
        style: {
            width: _constants.WINDOW_WIDTH,
            height: 667
        }
    };

    exports['default'] = {
        type: 'object',
        properties: {
            title: {
                type: 'string',
                minLength: 1,
                title: '页面标题'
            },
            seo: {
                component: 'Row',
                type: 'object',
                properties: {
                    seoKeywords: {
                        type: 'string',
                        title: 'seo 关键词'
                    },
                    seoDesc: {
                        type: 'string',
                        title: 'seo 描述'
                    }
                }
            },
            shareImg: {
                type: 'string',
                component: 'Uploader',
                title: '分享图标链接',
                format: 'uri',
                media: {
                    type: 'image/*'
                }
            },
            sharePageUrl: {
                type: 'string',
                title: '分享页面地址',
                description: '可以从活动详情页复制相关分享页面的地址，注意带上fr等参数',
                format: 'uri'
            },
            shareTitle: {
                type: 'string',
                minLength: 1,
                title: '分享标题'
            },
            shareDesc: {
                type: 'string',
                minLength: 1,
                maxLength: 150,
                title: '分享描述'
            },
            hasTongji: {
                'type': 'boolean',
                'component': 'Toggle',
                'title': '是否有百度统计',
                'default': true
            }
        },
        required: ['title', 'hasTongji']
    };
});
//# sourceMappingURL=Window.schema.js.map
