/**
 * @file 手百下载浮层
 * @author leon <ludafa@outlook.com>
 */

export {type, level} from './BaiduAppDownloadLayer';

export const editorProps = {
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

export default {
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
