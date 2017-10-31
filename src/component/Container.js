/**
 * @file Container
 * @author leon <ludafa@outlook.com>
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {registerComponent} from '../util/factory';
import {px2rem} from '../util/unit';
import {type, level} from './Container.constants';

export class Container extends Component {

    render() {

        const {
            height,
            backgroundImage,
            backgroundColor,
            overflowHidden,
            children,
            zIndex
        } = this.props;

        const image = backgroundImage
            ? <img className="mola-container-background" src={backgroundImage} />
            : null;

        return (
            <div
                className="mola-container"
                style={{
                    height: px2rem(height),
                    backgroundColor,
                    overflow: overflowHidden ? 'hidden' : 'visible',
                    zIndex: zIndex ? zIndex : void 0
                }}>
                {image}
                {children}
            </div>
        );

    }

}

Container.propTypes = {
    height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    backgroundImage: PropTypes.string,
    zIndex: PropTypes.string
};

Container.defaultProps = {
    height: '400',
    overflowHidden: true,
    zIndex: ''
};

export default registerComponent(type, level)(Container);
