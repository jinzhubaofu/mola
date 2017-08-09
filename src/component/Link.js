/**
 * @file Link
 * @author leon <ludafa@outlook.com>
 */

import React, {Component, PropTypes} from 'react';
import {registerComponent} from '../util/factory';
import {px2rem} from '../util/unit';
import {type, level} from './Link.constants';

export class Link extends Component {

    render() {
        const action = this.props.action;

        if (action === 'link') {
            const {
                top,
                left,
                width,
                height,
                target,
                href
            } = this.props;

            return (
                <a
                    className="mola-link"
                    data-click={'{"act":"a_link"}'}
                    style={{
                        top: px2rem(top),
                        left: px2rem(left),
                        width: px2rem(width),
                        height: px2rem(height)
                    }}
                    target={target}
                    href={href}/>
            );
        }
        else if (action === 'anchor') {
            const {
                top,
                anchorId
            } = this.props;
            return (
                <a
                    className="mola-link"
                    data-click={'{"act":"a_anchor"}'}
                    style={{
                        top: px2rem(top),
                        width: '100%',
                        height: 0
                    }}
                    name={anchorId}
                    id={anchorId}/>
            );
        }


    }

}

Link.propTypes = {
    action: PropTypes.oneOf([
        'link',
        'anchor'
    ]).isRequired
};

Link.defaultProps = {
    action: 'link'
};

export default registerComponent(type, level)(Link);
