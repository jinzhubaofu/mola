/**
 * @file Container
 * @author leon <ludafa@outlook.com>
 */

import React, {Component, PropTypes} from 'react';
import {registerComponent} from '../util/factory';
import {px2rem} from '../util/unit';
import {MOLA_COMPONENT_LEVEL_CONTAINER} from '../constants';

export const type = 'Container';
export const level = MOLA_COMPONENT_LEVEL_CONTAINER;

export class Container extends Component {

    render() {

        const {
            height,
            backgroundImage,
            backgroundColor,
            children
        } = this.props;

        const image = backgroundImage
            ? <img className="mola-container-background" src={backgroundImage} />
            : null;

        return (
            <div
                className="mola-container"
                style={{
                    height: px2rem(height),
                    backgroundColor
                }}>
                {image}
                {children}
            </div>
        );

    }

}

Container.propTypes = {
    height: PropTypes.number,
    backgroundImage: PropTypes.string
};

Container.defaultProps = {
    height: 400
};

export default registerComponent(type, level)(Container);
