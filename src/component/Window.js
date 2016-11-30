/**
 * @file Window
 * @author leon <ludafa@outlook.com>
 */

import React, {Component} from 'react';
import {registerComponent} from '../util/factory';
import cx from 'classnames';
import {type, level} from './Window.constants';

export class Window extends Component {

    render() {

        const {
            className = null,
            style = null,
            children
        } = this.props;

        return (
            <div className={cx('mola-window', className)} style={style}>
                {children}
            </div>
        );

    }

}

export default registerComponent(type, level)(Window);
