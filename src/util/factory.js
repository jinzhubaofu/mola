/**
 * @file registry
 * @author leon <ludafa@outlook.com>
 */

const pool = {};

export function registerComponent(type, level) {

    return function (Component) {

        Component.type = type;
        Component.level = level;

        pool[type] = Component;

        return Component;

    };

}

export function getComponent(type) {
    return pool[type];
}
