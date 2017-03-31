/**
 * @file registry
 * @author leon <ludafa@outlook.com>
 */

import {SEPARATOR} from '../constants';

const pool = {};

export function getComponentKey(type, version) {
    return version ? `${type}${SEPARATOR}${version}` : type;
}

export function registerComponent(type, level, version) {

    return function (Component) {

        Component.type = type;
        Component.level = level;

        pool[getComponentKey(type, version)] = Component;

        return Component;

    };

}

export function getComponent(type, version) {
    return pool[getComponentKey(type, version)];
}
