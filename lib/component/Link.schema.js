(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', './Link.constants'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('./Link.constants'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.Link);
        global.LinkSchema = mod.exports;
    }
})(this, function (exports, _Link) {
    'use strict';

    exports.__esModule = true;
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
            case 'link':
                return DEFAULT_SCHEMA;
            case 'anchor':
                return {
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
                        },
                        anchorId: {
                            title: '锚点',
                            type: 'string'
                        }

                    },
                    required: ['top', 'anchorId']
                };
            default:
                return DEFAULT_SCHEMA;
        }
    };

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
            href: {
                title: '链接',
                type: 'string',
                format: 'uri'
            },
            top: {
                'title': 'top',
                'type': 'string',
                'format': 'numeric',
                'formatMinimum': '0',
                'default': '0'
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
            }
        },
        required: ['href', 'top', 'left', 'width', 'height']
    };
    ;
});
//# sourceMappingURL=Link.schema.js.map
