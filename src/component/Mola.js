/**
 * @file mola
 * @author leon <ludafa@outlook.com>
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {getComponent} from '../util/factory';

/* eslint-disable fecs-prefer-class */

/**
 * MolaNode
 *
 * @class
 * @param {Object} props 属性
 */
export function MolaNode(props) {

    let {
        type: Type,
        conf,
        children
    } = props;

    return <Type {...conf}>{children}</Type>;

}

MolaNode.propTypes = {
    type: PropTypes.func.isRequired,
    conf: PropTypes.object
};

export default class Mola extends Component {

    resolveTreeNode(type, version) {
        return getComponent(type, version);
    }

    renderTreeNode(type, conf, children, key, level = 0) {

        let MolaNode = this.props.control;

        return (
            <MolaNode
                conf={conf}
                type={type}
                key={`${level}-${key}`}>
                {children}
            </MolaNode>
        );

    }

    traverse(root, index, level, filter) {

        let {
            type,
            version,
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
            this.resolveTreeNode(type, version),
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
    }),
    control: PropTypes.func.isRequired
};

Mola.defaultProps = {
    control: MolaNode
};
