/**
 * @file 链接 Schema
 * @author leon <ludafa@outlook.com>
 */
import update from 'react-addons-update';
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

const LINK_SCHEMA = update(
    DEFAULT_SCHEMA,
    {
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
                }
            }
        }
    }
);
export default function (props) {
    switch (props.action) {
        case 'link':
            return LINK_SCHEMA;
        case 'anchor':
            return update(
                DEFAULT_SCHEMA,
                {
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
                }
            );
        default:
            return LINK_SCHEMA;
    }
}
