/**
 * @file Window
 * @author leon <ludafa@outlook.com>
 */

import React from 'react';
import {registerComponent} from '../util/factory';
import {MOLA_COMPONENT_LEVEL_WINDOW} from '../constants';
import cx from 'classnames';

export const type = 'Window';

export const level = MOLA_COMPONENT_LEVEL_WINDOW;

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

export default registerComponent(type, level)(Window);
