/**
 * @file ContainerPropertyEditor
 * @author leon<ludafa@outlook.com>
 */

import {MOLA_COMPONENT_LEVEL_ATOM} from '../constants';

export const editorProps = {
    movable: false,
    resizable: 'vertical',
    droppable: {
        sourceTypes: [MOLA_COMPONENT_LEVEL_ATOM]
    },
    selectable: true
};

export {type, level} from './Container.constants';

export default {
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
    required: [
        'height'
    ]
};
