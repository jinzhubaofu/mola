/**
 * @file Window
 * @author leon <ludafa@outlook.com>
 */

import React from 'react';
import {registerComponent} from '../util/factory';
import {EDITOR_HELPER_WINDOW} from '../constants';
import cx from 'classnames';

export const type = 'Window';

export const level = EDITOR_HELPER_WINDOW;

export function Window(props) {

    const {
        className = null,
        style = null,
        children
    } = props;

    return (
        <div className={cx('mola-window', className)} style={style}>
            {children}
        </div>
    );

}

Window.type = type;

Window.level = level;

export default registerComponent(type)(Window);
