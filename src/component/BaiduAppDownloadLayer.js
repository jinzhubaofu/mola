/**
 * @file 手百下载组件
 * @author leon <ludafa@outlook.com>
 */

import React, {Component, PropTypes} from 'react';
import {registerComponent} from '../util/factory';
import {EDITOR_HELPER_FIXED} from '../constants';
import cx from 'classnames';
import {os, browser} from '../common/env';

export const type = 'DownloadGuide';
export const level = EDITOR_HELPER_FIXED;

/**
 * h5: ios => 打开 appstore (universal link)；安卓：打开xbox.m.baidu.com
 * 微信：ios => 打开 appstore (universal link)；安卓：打开应用宝
 * 微博：在浏览器中打开
 */

const URL_BOX_ITUNES = 'itms-apps://itunes.apple.com/cn/app/shou-ji-bai-du-xiao-shuo-zui/id382201985?mt=8';

const URL_YINGYONGBAO = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.baidu.searchbox';

const URL_BOX_THIRD_PARTY = 'http://xbox.m.baidu.com/mo/home?redirect=mo';

const URL_WEIBO_IOS = 'http://boscdn.bpc.baidu.com/mms-res/fFhO6IiQ0WjMZUPi9VZIBVZ3BVALBcRSBWCb9VlWZVAb0mAwBmZIhpRenFvkrUgquWgquQXRfFSvrUCRBmhqZIkLZWh.png';

const URL_WEIBO_ANDROID = 'http://boscdn.bpc.baidu.com/mms-res/fFhO6IXiBVXWBIni9VhahIs3BCsquQRMZUjR9UjYhRZq0kVIBVBC0dRenFvkrUgquWgquQXRfFSvrUCRBmhqZIgMuWs.png';

export class DownloadGuide extends Component {

    constructor(...args) {
        super(...args);
        this.state = {
            open: !browser.baidu,
            weiboOpen: false
        };
        this.showWeiboLayer = this.showWeiboLayer.bind(this);
    }

    showWeiboLayer(e) {
        e.preventDefault();
        this.setState({weiboOpen: true});
    }

    renderWeiboLayer() {
        if (!this.state.weiboOpen) {
            return null;
        }
        let image = os.ios ? URL_WEIBO_IOS : URL_WEIBO_ANDROID;
        return (
            <div
                style={{backgroundImage: `url(${image})`}}
                onClick={() => this.setState({weiboOpen: false})} />
        );
    }

    render() {

        if (!this.state.open) {
            return null;
        }

        let {
            className = null,
            style = null,
            title,
            subTitle
        } = this.props;

        let href = '';
        let onClick = null;

        // 微博：弹出浮层『在浏览器中打开』
        if (browser.weibo) {
            onClick = this.showWeiboLayer;
        }
        // 微信：打开应用宝
        else if (browser.weixin) {
            href = URL_YINGYONGBAO;
        }
        // h5: ios => 打开 appstore (universal link)；安卓：打开xbox.m.baidu.com
        else {
            href = os.ios ? URL_BOX_ITUNES : URL_BOX_THIRD_PARTY;
        }

        return (
            <div
                data-click={'{"mod":"download_layer"}'}
                className={cx('mola-baidu-app-download-layer', className)}
                style={style}>
                <i
                    data-click={'{"act": "b_close_download_layer"}'}
                    onClick={() => this.setState({open: false})}>x</i>
                <b />
                <section>
                    <h4>{title}</h4>
                    <p>{subTitle}</p>
                </section>
                <a
                    href={href}
                    data-click={'{"act":"a_download"}'}
                    onClick={onClick}>下载体验</a>
                {this.renderWeiboLayer()}
            </div>
        );
    }

}

DownloadGuide.level = level;
DownloadGuide.type = type;

DownloadGuide.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
};

export default registerComponent(type)(DownloadGuide);
