/**
 * @file Link
 * @author leon <ludafa@outlook.com>
 */

import React, {Component, PropTypes} from 'react';
import {registerComponent} from '../util/factory';
import {px2rem} from '../util/unit';
import {EDITOR_HELPER_ATOM} from '../constants';

export const type = 'Link';
export const level = EDITOR_HELPER_ATOM;

export class Link extends Component {

    render() {

        const {
            top,
            left,
            width,
            height,
            backgroundImage,
            target,
            href
        } = this.props;

        return (
            <a
                className="mola-link"
                style={{
                    top: px2rem(top),
                    left: px2rem(left),
                    width: px2rem(width),
                    height: px2rem(height),
                    backgroundImage: `url(${backgroundImage})`
                }}
                target={target}
                href={href} />
        );
    }

}


Link.level = level;
Link.type = type;

Link.propTypes = {
    href: PropTypes.string.isRequired,
    target: PropTypes.oneOf(['_blank', '_self']).isRequired,
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
};

Link.defaultProps = {
    href: '#',
    target: '_blank',
    top: 0,
    left: 0,
    width: 200,
    height: 30
};

export default registerComponent(type)(Link);
