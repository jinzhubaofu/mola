(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', './BaiduAppDownloadLayer'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('./BaiduAppDownloadLayer'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.BaiduAppDownloadLayer);
        global.BaiduAppDownloadLayerSchema = mod.exports;
    }
})(this, function (exports, _BaiduAppDownloadLayer) {
    'use strict';

    exports.__esModule = true;
    Object.defineProperty(exports, 'type', {
        enumerable: true,
        get: function () {
            return _BaiduAppDownloadLayer.type;
        }
    });
    Object.defineProperty(exports, 'level', {
        enumerable: true,
        get: function () {
            return _BaiduAppDownloadLayer.level;
        }
    });
    var editorProps = exports.editorProps = {
        movable: false,
        resizable: 'none',
        droppable: false,
        selectable: true,
        style: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '2.9249rem'
        }
    };

    exports['default'] = {
        type: 'object',
        properties: {
            title: {
                'title': '标题',
                'type': 'string',
                'minLength': 1,
                'maxLength': 20,
                'default': '用手机百度App拍题'
            },
            subTitle: {
                'title': '副标题',
                'type': 'string',
                'minLength': 1,
                'maxLength': 20,
                'default': '拍题积分兑换海量好礼'
            }
        },
        required: ['title', 'subTitle']
    };
});
//# sourceMappingURL=BaiduAppDownloadLayer.schema.js.map
