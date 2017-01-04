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
                href={href} />
        );

    }

}

Link.propTypes = {
    href: PropTypes.string.isRequired,
    target: PropTypes.oneOf(['_blank', '_self']).isRequired,
    top: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    left: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired
};

Link.defaultProps = {
    href: '#',
    target: '_blank',
    top: '0',
    left: '0',
    width: '200',
    height: '30'
};

export default registerComponent(type, level)(Link);
