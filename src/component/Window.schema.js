/**
 * @file 窗口的配置
 * @author leon <ludafa@outlook.com>
 */

import {
    MOLA_COMPONENT_LEVEL_CONTAINER,
    MOLA_COMPONENT_LEVEL_FIXED,
    WINDOW_WIDTH
} from '../constants';

export {type, level} from './Window';

export const editorProps = {
    movable: false,
    resizable: 'none',
    droppable: {
        sourceTypes: [
            MOLA_COMPONENT_LEVEL_CONTAINER,
            MOLA_COMPONENT_LEVEL_FIXED
        ]
    },
    selectable: true,
    style: {
        width: WINDOW_WIDTH,
        height: 667
    }
};

export default {
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
    required: ['tongji']
};
