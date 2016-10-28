(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', './Container', '../constants', '../babelHelpers'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('./Container'), require('../constants'), require('../babelHelpers'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.Container, global.constants, global.babelHelpers);
        global.ContainerSchema = mod.exports;
    }
})(this, function (exports, _Container, _constants, babelHelpers) {
    'use strict';

    exports.__esModule = true;
    exports.level = exports.type = exports.editorProps = undefined;
    Object.defineProperty(exports, 'type', {
        enumerable: true,
        get: function () {
            return _Container.type;
        }
    });
    Object.defineProperty(exports, 'level', {
        enumerable: true,
        get: function () {
            return _Container.level;
        }
    });

    exports.default = function (props) {
        return DEFAULT_SCHEMA;
    };

    /**
     * @file ContainerPropertyEditor
     * @author leon<ludafa@outlook.com>
     */

    var editorProps = exports.editorProps = {
        movable: false,
        resizable: 'vertical',
        droppable: {
            sourceTypes: [_constants.EDITOR_HELPER_ATOM]
        },
        selectable: true
    };

    var DEFAULT_SCHEMA = {
        type: 'object',
        properties: {
            height: {
                'title': '高度',
                'type': 'number',
                'default': 400
            },
            backgroundImage: {
                title: '背景图片',
                type: 'string',
                format: 'uri',
                media: {
                    type: 'image/*'
                }
            },
            backgroundColor: {
                title: '背景颜色',
                type: 'string',
                format: 'color'
            }
        },
        required: ['height']
    };
});
//# sourceMappingURL=Container.schema.js.map
