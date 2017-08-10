/**
 * @file 链接 Schema
 * @author leon <ludafa@outlook.com>
 */

export {type, level} from './Link.constants';

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
                'link',
                'anchor'
            ],
            'enumNames': [
                '链接',
                '锚点'
            ],
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

export default function (props) {
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
                        'enum': [
                            'link',
                            'anchor'
                        ],
                        'enumNames': [
                            '链接',
                            '锚点'
                        ],
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
}
