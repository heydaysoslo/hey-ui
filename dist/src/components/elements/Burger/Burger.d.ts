import React from 'react';
export declare type Props = {
    /**
     * State: Open or closed
     */
    active: boolean;
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
declare const Burger: React.FC<Props>;
export default Burger;
