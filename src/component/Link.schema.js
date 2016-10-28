/**
 * @file 链接 Schema
 * @author leon <ludafa@outlook.com>
 */

export {type, level} from './Link';

export const editorProps = {
    movable: true,
    resizable: 'both',
    droppable: false,
    selectable: true
};

export default {
    type: 'object',
    properties: {
        href: {
            title: '链接',
            type: 'string',
            format: 'uri'
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
        },
        backgroundImage: {
            title: '背景图片',
            type: 'string',
            format: 'uri',
            media: {
                type: 'image/*'
            }
        }
    },
    required: ['href', 'top', 'left', 'width', 'height']
};
