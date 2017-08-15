(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', './Link.constants', 'react-addons-update', '../babelHelpers'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('./Link.constants'), require('react-addons-update'), require('../babelHelpers'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.Link, global.reactAddonsUpdate, global.babelHelpers);
        global.LinkSchema = mod.exports;
    }
})(this, function (exports, _Link, _reactAddonsUpdate, babelHelpers) {
    'use strict';

    exports.__esModule = true;
    exports.editorProps = exports.level = exports.type = undefined;
    Object.defineProperty(exports, 'type', {
        enumerable: true,
        get: function () {
            return _Link.type;
        }
    });
    Object.defineProperty(exports, 'level', {
        enumerable: true,
        get: function () {
            return _Link.level;
        }
    });

    exports.default = function (props) {
        switch (props.action) {
            case 'anchor':
                return (0, _reactAddonsUpdate2['default'])(DEFAULT_SCHEMA, {
                    required: {
                        $push: ['anchorId']
                    },
                    properties: {
                        $merge: {
                            anchorId: {
                                title: '锚点',
                                type: 'string'
                            }
                        }
                    }
                });
            case 'link':
            default:
                return LINK_SCHEMA;
        }
    };

    var _reactAddonsUpdate2 = babelHelpers.interopRequireDefault(_reactAddonsUpdate);

    /**
     * @file 链接 Schema
     * @author leon <ludafa@outlook.com>
     */
    var editorProps = exports.editorProps = {
        movable: true,
        resizable: 'both',
        droppable: false,
        selectable: true
    };

    var DEFAULT_SCHEMA = {
        type: 'object',
        properties: {
            action: {
                'type': 'string',
                'title': '调起动作',
                'enum': ['link', 'anchor'],
                'enumNames': ['链接', '锚点'],
                'default': 'link'
            },
            top: {
                'title': 'top',
                'type': 'string',
                'format': 'numeric',
                'formatMinimum': '0',
                'default': '0'
            }
        },
        required: ['top']
    };

    var LINK_SCHEMA = (0, _reactAddonsUpdate2['default'])(DEFAULT_SCHEMA, {
        required: {
            $push: ['href', 'left', 'width', 'height']
        },
        properties: {
            $merge: {
                href: {
                    title: '链接',
                    type: 'string',
                    format: 'uri'
                },
                left: {
                    'title': 'left',
                    'type': 'string',
                    'format': 'numeric',
                    'formatMinimum': '0',
                    'default': '0'
                },
                width: {
                    'title': '宽度',
                    'type': 'string',
                    'format': 'numeric',
                    'formatMinimum': '0',
                    'default': '200'
                },
                height: {
                    'title': '高度',
                    'type': 'string',
                    'format': 'numeric',
                    'formatMinimum': '0',
                    'default': '30'
                },
                target: {
                    'title': '打开页面目标',
                    'type': 'string',
                    'enum': ['_blank', '_self'],
                    'enumNames': ['新开页面', '当前页面'],
                    'default': '_self'
                },
                tapHighlight: {
                    'type': 'boolean',
                    'title': '是否有点击态',
                    'default': true
                }
            }
        }
    });
});
//# sourceMappingURL=Link.schema.js.map
