/**
 * @file 唤起手百按钮 Schema
 * @author leon <ludafa@outlook.com>
 */

import update from 'react-addons-update';

export {type, level} from './BaiduAppInvoker';

export const editorProps = {
    movable: true,
    resizable: 'both',
    droppable: false,
    selectable: true
};

const DEFAULT_SCHEMA = {
    type: 'object',
    properties: {
        action: {
            'type': 'string',
            'title': '调起动作',
            'enum': [
                // 'home'
                // 'text-to-speech',
                // 'search',
                // 'coupon',
                'graph',
                'voice',
                'login',
                'share',
                'url'
            ],
            'enumNames': [
                // '语音播报',
                // '文本搜索',
                // '卡券包',
                // '打开首页'
                '图片搜索',
                '语音搜索',
                '登录',
                '分享',
                '打开网址'
            ],
            'default': 'voice'
        },
        top: {
            'title': 'top',
            'type': 'number',
            'default': 0
        },
        left: {
            'title': 'left',
            'type': 'number',
            'default': 0
        },
        width: {
            'title': '宽度',
            'type': 'number',
            'default': 200
        },
        height: {
            'title': '高度',
            'type': 'number',
            'default': 30
        }
    },
    required: ['href', 'top', 'left', 'width', 'height']
};

export default function (props) {

    switch (props.action) {
        case 'url':
            return update(DEFAULT_SCHEMA, {
                properties: {
                    $merge: {
                        url: {
                            'title': '网址',
                            'type': 'string',
                            'format': 'uri'
                        }
                    }
                }
            });
        case 'graph':
            return update(DEFAULT_SCHEMA, {
                properties: {
                    $merge: {
                        category: {
                            'title': '垂类',
                            'type': 'string',
                            'enum': [
                                'general',
                                'medicine',
                                'question',
                                'translate',
                                'barcode'
                            ],
                            'enumNames': [
                                '通用',
                                '拍药',
                                '拍题',
                                '翻译',
                                '扫一扫'
                            ],
                            'default': 'general'
                        },
                        needReturn: {
                            'title': '需要返回',
                            'type': 'boolean',
                            'default': true
                        },
                        stat: {
                            'title': '统计参数',
                            'type': 'string',
                            'default': ''
                        }
                    }
                }
            });
        default:
            return DEFAULT_SCHEMA;
    }


}
