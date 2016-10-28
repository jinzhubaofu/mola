/**
 * @file convert px to rem
 * @author leon <ludafa@outlook.com>
 */

import {BASE_FONT_SIZE, WINDOW_WIDTH} from '../constants';

export function px2rem(px) {
    return `${parseFloat(px, 10) / BASE_FONT_SIZE}rem`;
}

export function getRootFontSize(clientWidth = document.body.clientWidth) {
    return clientWidth / WINDOW_WIDTH * BASE_FONT_SIZE;
}
