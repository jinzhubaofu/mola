/**
 * @file registry
 * @author leon <ludafa@outlook.com>
 */

const pool = {};

export function registerComponent(type) {

    return function (Component) {

        pool[type] = Component;

        return Component;

    };

}

export function getComponent(type) {
    const Component = pool[type];
    return Component;
}
