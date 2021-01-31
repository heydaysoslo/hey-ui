import React from 'react';
declare type Props = {
    /**
     * State: Open or closed
     */
    active: boolean;
    className?: string;
    /**
     * Thickness of individual stroke in px
     * @note default 2
     */
    thickness?: number;
    /**
     * Width of icon in px
     */
    width?: number;
    /**
     * Height of icon in px
     */
    height?: number;
    /**
     * Easing in as css string
     */
    easeIn?: string;
    /**
     * Easing out as css string
     */
    easeOut?: string;
};
declare const _default: import("styled-components").StyledComponent<React.FC<Props>, any, {}, never>;
export default _default;
