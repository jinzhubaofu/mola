/**
 * @file mola
 * @author leon <ludafa@outlook.com>
 */

import React, {Component, PropTypes} from 'react';
import {getComponent} from '../util/factory';

export default class Mola extends Component {

    resolveTreeNode(type) {
        return getComponent(type);
    }

    renderTreeNode(type, props, children, key, level = 0) {

        return React.createElement(
            type,
            {
                ...props,
                key: `${level}-${key}`,
                children
            }
        );

    }

    traverse(root, index, level, filter) {

        let {
            type,
            children,
            ...props
        } = root;

        if (filter && !filter(root, index, level)) {
            return null;
        }

        children = children && children.length
            ? children
                .map(
                    (child, index) => this.traverse(
                        child,
                        index,
                        level + 1,
                        filter
                    )
                )
            : null;

        return this.renderTreeNode(
            this.resolveTreeNode(type),
            props,
            children,
            index,
            level,
            filter
        );

    }

    render() {
        return this.traverse(this.props.components, 0, 0);
    }

}

Mola.propTypes = {
    components: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        children: PropTypes.arrayOf(PropTypes.object)
    })
};
