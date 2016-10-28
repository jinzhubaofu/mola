/**
 * @file guid
 * @author leon <ludafa@outlook.com>
 */

export default function guid() {
    return (+(Math.random() + '').substr(2, 10)).toString(36);
}
