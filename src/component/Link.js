/**
 * @file Link
 * @author leon <ludafa@outlook.com>
 */

import React, {Component, PropTypes} from 'react';
import {registerComponent} from '../util/factory';
import {px2rem} from '../util/unit';
import {type, level} from './Link.constants';

export class Link extends Component {
    componentDidMount() {
        const {
            action,
            anchorId
        } = this.props;
        const hash = window.location.hash;
        if (action === 'anchor' && hash === '#' + anchorId) {
            window.location.href = '#' + anchorId;
        }
    }


    render() {

        const action = this.props.action;

        if (action === 'link') {

            const {
                top,
                left,
                width,
                height,
                target,
                href,
                tapHighlight
            } = this.props;

            return (
                <a
                    className="mola-link"
                    data-click={'{"act":"a_link"}'}
                    style={{
                        top: px2rem(top),
                        left: px2rem(left),
                        width: px2rem(width),
                        height: px2rem(height),
                        WebkitTapHighlightColor: tapHighlight ? void 0 : 'transparent'
                    }}
                    target={target}
                    href={href} />
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
                    id={anchorId}/>
            );
        }


    }

}

Link.propTypes = {
    href: PropTypes.string,
    target: PropTypes.oneOf(['_blank', '_self']),
    top: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    left: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    anchorId: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    action: PropTypes.oneOf([
        'link',
        'anchor'
    ]).isRequired
};

Link.defaultProps = {
    action: 'link',
    tapHighlight: true
};

export default registerComponent(type, level)(Link);
