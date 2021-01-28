import React from 'react';
import { aspect } from 'types';
declare type Props = {
    /**
     * Takes the aspect ratio as a string, number or responsive object.
     *
     * @note String must correspond to a aspect ratio in the defaultTheme eg. portrait.
     *
     * @example ```jsx
     * <AspectContainer aspect={{xs: 'portrait', md: 2.4}} />
     * <AspectContainer aspect="portrait" />
     * ```
     */
    aspect: aspect;
    /**
     * This ensures that content won't be cut off if it's larger than the container.
     */
    preventOverflow?: boolean;
    className?: string;
    /**
     * Set a desired max height.
     */
    maxHeight?: number;
};
declare const AspectContainer: React.FC<Props>;
export default AspectContainer;
