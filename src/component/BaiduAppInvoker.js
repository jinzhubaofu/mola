/**
 * @file 唤起手百按钮
 * @author leon <ludafa@outlook.com>
 */

import React, {Component, PropTypes} from 'react';
import {registerComponent} from '../util/factory';
import {px2rem} from '../util/unit';
import {EDITOR_HELPER_ATOM} from '../constants';

import 'mms-js-sdk/lib/aio';
import voiceSearch from 'mms-js-sdk/invoker/invokeVoiceAll';
import login from 'mms-js-sdk/invoker/login';
import share from 'mms-js-sdk/invoker/share';
import openUrl from 'mms-js-sdk/invoker/openUrl';
import graph from 'graph-sdk';

import guid from '../common/guid';

export const type = 'BaiduAppInvoker';
export const level = EDITOR_HELPER_ATOM;

const ACTION_MAP = {
    voice: voiceSearch,
    login,
    share() {
        share.create().show();
    },
    url(props) {
        openUrl(props.url);
    }
};

export class BaiduAppInvoker extends Component {

    constructor(...args) {
        super(...args);
        this.id = `app-invoker-${guid()}`;
    }

    componentDidMount() {

        if (this.props.action === 'graph') {
            this.initGraph(this.id, this.props);
        }

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.action === 'graph' && this.props.action !== 'graph') {
            this.initGraph(this.id, nextProps);
        }
    }

    initGraph(id, props) {

        const {
            needReturn,
            category,
            stat
        } = props;

        graph.ready(() => graph.initGraph({
            id,
            type: category,
            needReturn,
            stat
        }));

    }

    render() {

        const props = this.props;

        const {
            top,
            left,
            width,
            height,
            action
        } = props;

        return (
            <div
                id={this.id}
                data-click={'{"mod":"invoker","act":"a_invoke"}'}
                className="mola-baidu-app-invoker"
                style={{
                    top: px2rem(top),
                    left: px2rem(left),
                    width: px2rem(width),
                    height: px2rem(height)
                }}
                onClick={() => {

                    if (ACTION_MAP[action]) {
                        ACTION_MAP[action](props);
                    }

                }} />
        );
    }

}

BaiduAppInvoker.type = type;

BaiduAppInvoker.propTypes = {
    action: PropTypes.oneOf([
        'graph',
        'voice',
        'login',
        'share',
        'url'
    ]).isRequired
};

export default registerComponent(type)(BaiduAppInvoker);
